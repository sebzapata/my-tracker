import { useQuery } from "@tanstack/react-query";
import { format, isSameDay } from "date-fns";
import { useCallback } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Calendar from "react-calendar";
import "./App.css";
import { convertMostRecentTimings } from "./mostRecent";
import { convertTimings } from "./timings";

type Timing = {
  time: Date;
  ranking: string;
};

function App() {
  const { data } = useQuery<Timing[]>({
    queryKey: ["get", "timings"],
    queryFn: async () => {
      const response = await fetch(
        "https://toilet-a075.restdb.io/rest/timings?max=50000",
        {
          headers: {
            "x-apikey": "601f19033f9eb665a1689200",
          },
        }
      );

      const timingsData: { dateTime: string; ranking: string }[] =
        await response.json();

      const formattedData = timingsData.map((x) => ({
        time: new Date(x.dateTime),
        ranking: x.ranking,
      }));

      const sortedData = formattedData.sort((x, y) =>
        x.time > y.time ? 1 : y.time > x.time ? -1 : 0
      );

      return sortedData;
    },
  });

  const createTileContent = useCallback((monthTimings: Timing[]) => {
    // Pre-calculate tooltip JSX for each date in the month
    const tooltipsByDate = new Map<string, JSX.Element>();

    monthTimings.forEach((monthTiming) => {
      const dateKey = format(monthTiming.time, "yyyy-MM-dd");

      if (!tooltipsByDate.has(dateKey)) {
        const timesForDate = monthTimings.filter((t) =>
          isSameDay(monthTiming.time, t.time)
        );

        const tooltipData = timesForDate.map((x) => ({
          time: format(x.time, "HH:mm"),
          ranking: x.ranking,
        }));

        const tooltipElement = (
          <Tooltip
            id={`tooltip-${dateKey}`}
            className="bg-white p-3 border border-black"
          >
            <h3 className="font-bold mb-2 text-black">Time & Consistency</h3>
            <ul>
              {tooltipData.map((x) => (
                <li
                  className="text-black"
                  key={`listItem-${x.time}`}
                >{`${x.time} - ${x.ranking}`}</li>
              ))}
            </ul>
          </Tooltip>
        );

        tooltipsByDate.set(dateKey, tooltipElement);
      }
    });

    return ({ date }: { date: Date }) => {
      const dateKey = format(date, "yyyy-MM-dd");
      const tooltipElement = tooltipsByDate.get(dateKey);

      if (!tooltipElement) return null;

      return (
        <OverlayTrigger
          placement="top"
          overlay={tooltipElement}
          trigger="click"
          rootClose
        >
          <div className="absolute top-0 h-full w-full" />
        </OverlayTrigger>
      );
    };
  }, []);

  if (!data) {
    return null;
  }

  const newTimings = convertTimings();
  const mostRecentTimings = convertMostRecentTimings();

  const combinedTimings = [...newTimings, ...mostRecentTimings];

  // return combinedTimings.map((timing) => {
  //   return <p>{`${JSON.stringify(timing)},`}</p>;
  // });

  // return mostRecentTimings.map((timing) => {
  //   return <p>{`${JSON.stringify(timing)},`}</p>;
  // });

  // return newTimings.map((timing) => {
  //   return <p>{`${JSON.stringify(timing)},`}</p>;
  // });

  const results = Object.values(
    data.reduce((acc, timing) => {
      const year = format(timing.time, "yyyy");
      const month = format(timing.time, "MM");
      const key = `${year}_${month}`;

      acc[key] = acc[key] || { month, year, timings: [] };
      acc[key].timings.push(timing);

      return acc;
    }, {} as { [key: string]: { month: string; year: string; timings: { time: Date; ranking: string }[] } })
  );

  return (
    <div className="flex flex-wrap">
      {results.map((month) => {
        const monthName = format(month.month, "LLLL");
        const monthTileContent = createTileContent(month.timings);

        return (
          <div
            className="w-full md:w-1/2 lg:w-1/3 p-3"
            key={`calendarWrapper-${month.month}-${month.year}`}
          >
            <h2 className="font-bold">{`${monthName} ${month.year}`}</h2>
            <Calendar
              key={`calendar-${month.month}-${month.year}`}
              activeStartDate={
                new Date(parseInt(month.year), parseInt(month.month) - 1, 1)
              }
              tileContent={monthTileContent}
              showNeighboringMonth={false}
              showNavigation={false}
              tileClassName={({ date }) => {
                const poosForThatDay = month.timings.filter((x) =>
                  isSameDay(x.time, date)
                );

                switch (poosForThatDay.length) {
                  case 0:
                    return "bg-white cursor-default";
                  case 1:
                    return "bg-yellow-500";
                  case 2:
                    return "bg-orange-500";
                  case 3:
                    return "bg-red-500";
                  default:
                    return "bg-pink-500";
                }
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
