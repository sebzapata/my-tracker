import { isBefore, parse } from "date-fns";

const timings = [
  {
    DateTime: "23/02/2020 10:30",
    Ranking: "4",
  },
  {
    DateTime: "24/02/2020 11:05",
    Ranking: "3",
  },
  {
    DateTime: "24/02/2020 18:39",
    Ranking: "3",
  },
  {
    DateTime: "25/02/2020 11:45",
    Ranking: "3",
  },
  {
    DateTime: "26/02/2020 08:00",
    Ranking: "3",
  },
  {
    DateTime: "26/02/2020 20:03",
    Ranking: "3",
  },
  {
    DateTime: "26/02/2020 21:31",
    Ranking: "5",
  },
  {
    DateTime: "27/02/2020 19:15",
    Ranking: "3",
  },
  {
    DateTime: "28/02/2020 19:03",
    Ranking: "3",
  },
  {
    DateTime: "29/02/2020 12:17",
    Ranking: "5",
  },
  {
    DateTime: "02/03/2020 09:16",
    Ranking: "3",
  },
  {
    DateTime: "03/03/2020 12:43",
    Ranking: "3",
  },
  {
    DateTime: "03/03/2020 19:02",
    Ranking: "3",
  },
  {
    DateTime: "04/03/2020 17:15",
    Ranking: "3",
  },
  {
    DateTime: "04/03/2020 22:03",
    Ranking: "3",
  },
  {
    DateTime: "05/03/2020 16:52",
    Ranking: "3",
  },
  {
    DateTime: "05/03/2020 22:55",
    Ranking: "3",
  },
  {
    DateTime: "06/03/2020 14:57",
    Ranking: "2",
  },
  {
    DateTime: "06/03/2020 20:25",
    Ranking: "2",
  },
  {
    DateTime: "07/03/2020 12:41",
    Ranking: "4",
  },
  {
    DateTime: "09/03/2020 14:32",
    Ranking: "1",
  },
  {
    DateTime: "10/03/2020 14:03",
    Ranking: "2",
  },
  {
    DateTime: "11/03/2020 00:01",
    Ranking: "2",
  },
  {
    DateTime: "11/03/2020 11:52",
    Ranking: "3",
  },
  {
    DateTime: "12/03/2020 16:15",
    Ranking: "3",
  },
  {
    DateTime: "12/03/2020 20:20",
    Ranking: "3",
  },
  {
    DateTime: "14/03/2020 01:30",
    Ranking: "3",
  },
  {
    DateTime: "14/03/2020 11:30",
    Ranking: "3",
  },
  {
    DateTime: "15/03/2020 13:10",
    Ranking: "3",
  },
  {
    DateTime: "16/03/2020 19:49",
    Ranking: "3",
  },
  {
    DateTime: "17/03/2020 12:26",
    Ranking: "3",
  },
  {
    DateTime: "18/03/2020 10:58",
    Ranking: "3",
  },
  {
    DateTime: "19/03/2020 17:55",
    Ranking: "3",
  },
  {
    DateTime: "20/03/2020 11:56",
    Ranking: "4",
  },
  {
    DateTime: "21/03/2020 10:30",
    Ranking: "5",
  },
  {
    DateTime: "21/03/2020 11:30",
    Ranking: "6",
  },
  {
    DateTime: "23/03/2020 10:30",
    Ranking: "4",
  },
  {
    DateTime: "24/03/2020 01:15",
    Ranking: "3",
  },
  {
    DateTime: "24/03/2020 15:10",
    Ranking: "2",
  },
  {
    DateTime: "25/03/2020 11:05",
    Ranking: "4",
  },
  {
    DateTime: "27/03/2020 00:30",
    Ranking: "1",
  },
  {
    DateTime: "27/03/2020 10:30",
    Ranking: "4",
  },
  {
    DateTime: "28/03/2020 10:40",
    Ranking: "4",
  },
  {
    DateTime: "28/03/2020 11:40",
    Ranking: "6",
  },
  {
    DateTime: "30/03/2020 10:30",
    Ranking: "4",
  },
  {
    DateTime: "31/03/2020 11:10",
    Ranking: "3",
  },
  {
    DateTime: "01/04/2020 10:45",
    Ranking: "3",
  },
  {
    DateTime: "02/04/2020 22:30",
    Ranking: "3",
  },
  {
    DateTime: "03/04/2020 11:30",
    Ranking: "3",
  },
  {
    DateTime: "04/04/2020 08:29",
    Ranking: "4",
  },
  {
    DateTime: "04/04/2020 11:30",
    Ranking: "6",
  },
  {
    DateTime: "05/04/2020 23:00",
    Ranking: "3",
  },
  {
    DateTime: "06/04/2020 14:00",
    Ranking: "4",
  },
  {
    DateTime: "07/04/2020 09:30",
    Ranking: "3",
  },
  {
    DateTime: "08/04/2020 17:45",
    Ranking: "3",
  },
  {
    DateTime: "09/04/2020 11:14",
    Ranking: "3",
  },
  {
    DateTime: "10/04/2020 14:50",
    Ranking: "3",
  },
  {
    DateTime: "11/04/2020 11:04",
    Ranking: "5",
  },
  {
    DateTime: "12/04/2020 21:05",
    Ranking: "3",
  },
  {
    DateTime: "13/04/2020 11:45",
    Ranking: "2",
  },
  {
    DateTime: "13/04/2020 16:30",
    Ranking: "3",
  },
  {
    DateTime: "14/04/2020 15:20",
    Ranking: "3",
  },
  {
    DateTime: "15/04/2020 15:40",
    Ranking: "3",
  },
  {
    DateTime: "16/04/2020 16:20",
    Ranking: "2",
  },
  {
    DateTime: "17/04/2020 11:40",
    Ranking: "4",
  },
  {
    DateTime: "18/04/2020 10:47",
    Ranking: "4",
  },
  {
    DateTime: "20/04/2020 10:14",
    Ranking: "3",
  },
  {
    DateTime: "21/04/2020 12:18",
    Ranking: "3",
  },
  {
    DateTime: "22/04/2020 14:05",
    Ranking: "3",
  },
  {
    DateTime: "23/04/2020 10:10",
    Ranking: "4",
  },
  {
    DateTime: "24/04/2020 16:11",
    Ranking: "4",
  },
  {
    DateTime: "25/04/2020 10:39",
    Ranking: "3",
  },
  {
    DateTime: "26/04/2020 20:24",
    Ranking: "4",
  },
  {
    DateTime: "27/04/2020 15:24",
    Ranking: "3",
  },
  {
    DateTime: "28/04/2020 12:04",
    Ranking: "4",
  },
  {
    DateTime: "29/04/2020 14:36",
    Ranking: "3",
  },
  {
    DateTime: "30/04/2020 09:37",
    Ranking: "4",
  },
  {
    DateTime: "30/04/2020 20:10",
    Ranking: "6",
  },
  {
    DateTime: "02/05/2020 10:40",
    Ranking: "3",
  },
  {
    DateTime: "03/05/2020 11:40",
    Ranking: "1",
  },
  {
    DateTime: "04/05/2020 09:30",
    Ranking: "4",
  },
  {
    DateTime: "05/05/2020 11:08",
    Ranking: "3",
  },
  {
    DateTime: "06/05/2020 20:21",
    Ranking: "3",
  },
  {
    DateTime: "07/05/2020 11:44",
    Ranking: "2",
  },
  {
    DateTime: "08/05/2020 11:36",
    Ranking: "2",
  },
  {
    DateTime: "09/05/2020 11:58",
    Ranking: "4",
  },
  {
    DateTime: "09/05/2020 15:58",
    Ranking: "5",
  },
  {
    DateTime: "10/05/2020 15:50",
    Ranking: "3",
  },
  {
    DateTime: "11/05/2020 16:50",
    Ranking: "2",
  },
  {
    DateTime: "12/05/2020 20:46",
    Ranking: "2",
  },
  {
    DateTime: "13/05/2020 11:15",
    Ranking: "3",
  },
  {
    DateTime: "14/05/2020 09:30",
    Ranking: "3",
  },
  {
    DateTime: "14/05/2020 18:41",
    Ranking: "2",
  },
  {
    DateTime: "14/05/2020 22:14",
    Ranking: "3",
  },
  {
    DateTime: "15/05/2020 18:12",
    Ranking: "4",
  },
  {
    DateTime: "16/05/2020 10:27",
    Ranking: "3",
  },
  {
    DateTime: "17/05/2020 10:59",
    Ranking: "3",
  },
  {
    DateTime: "18/05/2020 11:32",
    Ranking: "4",
  },
  {
    DateTime: "19/05/2020 23:59",
    Ranking: "2",
  },
  {
    DateTime: "20/05/2020 12:20",
    Ranking: "3",
  },
  {
    DateTime: "21/05/2020 13:17",
    Ranking: "3",
  },
  {
    DateTime: "22/05/2020 16:57",
    Ranking: "4",
  },
  {
    DateTime: "23/05/2020 12:19",
    Ranking: "3",
  },
  {
    DateTime: "24/05/2020 12:02",
    Ranking: "3",
  },
  {
    DateTime: "25/05/2020 19:32",
    Ranking: "2",
  },
  {
    DateTime: "26/05/2020 15:22",
    Ranking: "3",
  },
  {
    DateTime: "27/05/2020 12:00",
    Ranking: "4",
  },
  {
    DateTime: "28/05/2020 10:03",
    Ranking: "4",
  },
  {
    DateTime: "29/05/2020 10:20",
    Ranking: "3",
  },
  {
    DateTime: "30/05/2020 11:10",
    Ranking: "4",
  },
  {
    DateTime: "31/05/2020 11:20",
    Ranking: "2",
  },
  {
    DateTime: "01/06/2020 14:03",
    Ranking: "3",
  },
  {
    DateTime: "02/06/2020 15:08",
    Ranking: "3",
  },
  {
    DateTime: "03/06/2020 09:58",
    Ranking: "4",
  },
  {
    DateTime: "04/06/2020 19:57",
    Ranking: "2",
  },
  {
    DateTime: "05/06/2020 00:38",
    Ranking: "4",
  },
  {
    DateTime: "05/06/2020 20:22",
    Ranking: "4",
  },
  {
    DateTime: "06/06/2020 12:18",
    Ranking: "3",
  },
  {
    DateTime: "07/06/2020 11:24",
    Ranking: "4",
  },
  {
    DateTime: "08/06/2020 13:43",
    Ranking: "4",
  },
  {
    DateTime: "09/06/2020 10:14",
    Ranking: "3",
  },
  {
    DateTime: "10/06/2020 11:05",
    Ranking: "3",
  },
  {
    DateTime: "11/06/2020 10:21",
    Ranking: "4",
  },
  {
    DateTime: "12/06/2020 11:00",
    Ranking: "5",
  },
  {
    DateTime: "13/06/2020 10:39",
    Ranking: "4",
  },
  {
    DateTime: "15/06/2020 19:19",
    Ranking: "4",
  },
  {
    DateTime: "16/06/2020 20:05",
    Ranking: "3",
  },
  {
    DateTime: "17/06/2020 21:45",
    Ranking: "2",
  },
  {
    DateTime: "18/06/2020 12:05",
    Ranking: "3",
  },
  {
    DateTime: "19/06/2020 12:55",
    Ranking: "3",
  },
  {
    DateTime: "20/06/2020 13:45",
    Ranking: "4",
  },
  {
    DateTime: "21/06/2020 12:53",
    Ranking: "3",
  },
  {
    DateTime: "22/06/2020 11:45",
    Ranking: "4",
  },
  {
    DateTime: "23/06/2020 10:27",
    Ranking: "3",
  },
  {
    DateTime: "23/06/2020 23:02",
    Ranking: "4",
  },
  {
    DateTime: "24/06/2020 14:37",
    Ranking: "3",
  },
  {
    DateTime: "24/06/2020 15:51",
    Ranking: "6",
  },
  {
    DateTime: "26/06/2020 11:20",
    Ranking: "2",
  },
  {
    DateTime: "27/06/2020 11:03",
    Ranking: "3",
  },
  {
    DateTime: "27/06/2020 20:08",
    Ranking: "4",
  },
  {
    DateTime: "28/06/2020 11:38",
    Ranking: "5",
  },
  {
    DateTime: "29/06/2020 19:33",
    Ranking: "3",
  },
  {
    DateTime: "30/06/2020 12:47",
    Ranking: "4",
  },
  {
    DateTime: "01/07/2020 16:02",
    Ranking: "2",
  },
  {
    DateTime: "02/07/2020 21:39",
    Ranking: "3",
  },
  {
    DateTime: "03/07/2020 22:48",
    Ranking: "3",
  },
  {
    DateTime: "05/07/2020 12:02",
    Ranking: "3",
  },
  {
    DateTime: "06/07/2020 10:59",
    Ranking: "4",
  },
  {
    DateTime: "07/07/2020 17:31",
    Ranking: "3",
  },
  {
    DateTime: "08/07/2020 10:33",
    Ranking: "4",
  },
  {
    DateTime: "09/07/2020 20:10",
    Ranking: "3",
  },
  {
    DateTime: "10/07/2020 13:49",
    Ranking: "3",
  },
  {
    DateTime: "10/07/2020 22:24",
    Ranking: "2",
  },
  {
    DateTime: "11/07/2020 10:03",
    Ranking: "6",
  },
  {
    DateTime: "12/07/2020 21:30",
    Ranking: "4",
  },
  {
    DateTime: "14/07/2020 15:25",
    Ranking: "1",
  },
  {
    DateTime: "14/07/2020 20:45",
    Ranking: "7",
  },
  {
    DateTime: "14/07/2020 21:36",
    Ranking: "7",
  },
  {
    DateTime: "16/07/2020 15:45",
    Ranking: "3",
  },
  {
    DateTime: "17/07/2020 13:08",
    Ranking: "3",
  },
  {
    DateTime: "18/07/2020 14:04",
    Ranking: "2",
  },
  {
    DateTime: "19/07/2020 15:34",
    Ranking: "4",
  },
  {
    DateTime: "20/07/2020 16:20",
    Ranking: "3",
  },
  {
    DateTime: "21/07/2020 14:54",
    Ranking: "3",
  },
  {
    DateTime: "21/07/2020 21:34",
    Ranking: "4",
  },
  {
    DateTime: "22/07/2020 11:16",
    Ranking: "4",
  },
  {
    DateTime: "24/07/2020 13:41",
    Ranking: "4",
  },
  {
    DateTime: "25/07/2020 09:33",
    Ranking: "4",
  },
  {
    DateTime: "25/07/2020 23:44",
    Ranking: "3",
  },
  {
    DateTime: "26/07/2020 11:46",
    Ranking: "4",
  },
  {
    DateTime: "27/07/2020 10:33",
    Ranking: "5",
  },
  {
    DateTime: "29/07/2020 19:50",
    Ranking: "4",
  },
  {
    DateTime: "30/07/2020 13:57",
    Ranking: "4",
  },
  {
    DateTime: "01/08/2020 10:55",
    Ranking: "3",
  },
  {
    DateTime: "02/08/2020 17:26",
    Ranking: "3",
  },
  {
    DateTime: "03/08/2020 14:51",
    Ranking: "3",
  },
  {
    DateTime: "05/08/2020 10:40",
    Ranking: "4",
  },
  {
    DateTime: "06/08/2020 21:18",
    Ranking: "3",
  },
  {
    DateTime: "07/08/2020 17:05",
    Ranking: "3",
  },
  {
    DateTime: "08/08/2020 12:42",
    Ranking: "4",
  },
  {
    DateTime: "09/08/2020 12:55",
    Ranking: "3",
  },
  {
    DateTime: "10/08/2020 10:51",
    Ranking: "3",
  },
  {
    DateTime: "11/08/2020 10:51",
    Ranking: "3",
  },
  {
    DateTime: "12/08/2020 23:07",
    Ranking: "1",
  },
  {
    DateTime: "13/08/2020 15:13",
    Ranking: "3",
  },
  {
    DateTime: "14/08/2020 13:44",
    Ranking: "4",
  },
  {
    DateTime: "15/08/2020 11:34",
    Ranking: "3",
  },
  {
    DateTime: "15/08/2020 15:02",
    Ranking: "7",
  },
  {
    DateTime: "16/08/2020 12:18",
    Ranking: "3",
  },
  {
    DateTime: "16/08/2020 14:47",
    Ranking: "6",
  },
  {
    DateTime: "16/08/2020 16:24",
    Ranking: "6",
  },
  {
    DateTime: "17/08/2020 11:04",
    Ranking: "5",
  },
  {
    DateTime: "17/08/2020 12:09",
    Ranking: "6",
  },
  {
    DateTime: "18/08/2020 23:13",
    Ranking: "4",
  },
  {
    DateTime: "19/08/2020 10:00",
    Ranking: "4",
  },
  {
    DateTime: "20/08/2020 16:02",
    Ranking: "3",
  },
  {
    DateTime: "21/08/2020 14:42",
    Ranking: "3",
  },
  {
    DateTime: "22/08/2020 21:32",
    Ranking: "2",
  },
  {
    DateTime: "23/08/2020 11:38",
    Ranking: "3",
  },
  {
    DateTime: "24/08/2020 08:25",
    Ranking: "3",
  },
  {
    DateTime: "25/08/2020 09:18",
    Ranking: "5",
  },
  {
    DateTime: "26/08/2020 10:14",
    Ranking: "4",
  },
  {
    DateTime: "26/08/2020 20:58",
    Ranking: "5",
  },
  {
    DateTime: "27/08/2020 14:40",
    Ranking: "3",
  },
  {
    DateTime: "28/08/2020 14:38",
    Ranking: "2",
  },
  {
    DateTime: "29/08/2020 03:08",
    Ranking: "3",
  },
  {
    DateTime: "30/08/2020 09:03",
    Ranking: "3",
  },
  {
    DateTime: "31/08/2020 08:30",
    Ranking: "2",
  },
  {
    DateTime: "31/08/2020 19:45",
    Ranking: "4",
  },
  {
    DateTime: "01/09/2020 13:18",
    Ranking: "4",
  },
  {
    DateTime: "02/09/2020 18:36",
    Ranking: "3",
  },
  {
    DateTime: "03/09/2020 11:58",
    Ranking: "4",
  },
  {
    DateTime: "05/09/2020 05:30",
    Ranking: "2",
  },
  {
    DateTime: "05/09/2020 07:41",
    Ranking: "4",
  },
  {
    DateTime: "06/09/2020 14:15",
    Ranking: "6",
  },
  {
    DateTime: "07/09/2020 23:21",
    Ranking: "2",
  },
  {
    DateTime: "08/09/2020 19:29",
    Ranking: "3",
  },
  {
    DateTime: "09/09/2020 17:13",
    Ranking: "2",
  },
  {
    DateTime: "09/09/2020 21:42",
    Ranking: "3",
  },
  {
    DateTime: "10/09/2020 11:09",
    Ranking: "3",
  },
  {
    DateTime: "11/09/2020 10:26",
    Ranking: "6",
  },
  {
    DateTime: "12/09/2020 12:43",
    Ranking: "4",
  },
  {
    DateTime: "13/09/2020 17:42",
    Ranking: "2",
  },
  {
    DateTime: "14/09/2020 12:02",
    Ranking: "4",
  },
  {
    DateTime: "15/09/2020 15:01",
    Ranking: "2",
  },
  {
    DateTime: "16/09/2020 17:55",
    Ranking: "4",
  },
  {
    DateTime: "17/09/2020 17:23",
    Ranking: "3",
  },
  {
    DateTime: "19/09/2020 00:20",
    Ranking: "4",
  },
  {
    DateTime: "19/09/2020 13:03",
    Ranking: "4",
  },
  {
    DateTime: "20/09/2020 23:31",
    Ranking: "2",
  },
  {
    DateTime: "22/09/2020 11:17",
    Ranking: "5",
  },
  {
    DateTime: "23/09/2020 21:19",
    Ranking: "6",
  },
  {
    DateTime: "25/09/2020 10:38",
    Ranking: "4",
  },
  {
    DateTime: "26/09/2020 11:51",
    Ranking: "4",
  },
  {
    DateTime: "27/09/2020 23:42",
    Ranking: "1",
  },
  {
    DateTime: "29/09/2020 11:28",
    Ranking: "4",
  },
  {
    DateTime: "30/09/2020 09:54",
    Ranking: "5",
  },
  {
    DateTime: "01/10/2020 12:17",
    Ranking: "4",
  },
  {
    DateTime: "02/10/2020 14:58",
    Ranking: "2",
  },
  {
    DateTime: "03/10/2020 09:51",
    Ranking: "3",
  },
  {
    DateTime: "03/10/2020 16:23",
    Ranking: "3",
  },
  {
    DateTime: "04/10/2020 21:02",
    Ranking: "2",
  },
  {
    DateTime: "04/10/2020 23:55",
    Ranking: "5",
  },
  {
    DateTime: "05/10/2020 23:42",
    Ranking: "1",
  },
  {
    DateTime: "06/10/2020 15:54",
    Ranking: "1",
  },
  {
    DateTime: "07/10/2020 21:44",
    Ranking: "3",
  },
  {
    DateTime: "07/10/2020 23:55",
    Ranking: "5",
  },
  {
    DateTime: "09/10/2020 08:11",
    Ranking: "1",
  },
  {
    DateTime: "09/10/2020 14:43",
    Ranking: "4",
  },
  {
    DateTime: "09/10/2020 23:15",
    Ranking: "3",
  },
  {
    DateTime: "10/10/2020 20:52",
    Ranking: "3",
  },
  {
    DateTime: "11/10/2020 16:26",
    Ranking: "3",
  },
  {
    DateTime: "11/10/2020 21:58",
    Ranking: "2",
  },
  {
    DateTime: "12/10/2020 11:10",
    Ranking: "2",
  },
  {
    DateTime: "13/10/2020 12:05",
    Ranking: "3",
  },
  {
    DateTime: "13/10/2020 21:44",
    Ranking: "4",
  },
  {
    DateTime: "14/10/2020 12:12",
    Ranking: "4",
  },
  {
    DateTime: "14/10/2020 23:28",
    Ranking: "5",
  },
  {
    DateTime: "15/10/2020 15:20",
    Ranking: "3",
  },
  {
    DateTime: "17/10/2020 09:00",
    Ranking: "3",
  },
  {
    DateTime: "17/10/2020 11:46",
    Ranking: "5",
  },
  {
    DateTime: "19/10/2020 12:14",
    Ranking: "2",
  },
  {
    DateTime: "20/10/2020 18:42",
    Ranking: "2",
  },
  {
    DateTime: "21/10/2020 11:35",
    Ranking: "4",
  },
  {
    DateTime: "22/10/2020 12:19",
    Ranking: "2",
  },
  {
    DateTime: "23/10/2020 12:07",
    Ranking: "3",
  },
  {
    DateTime: "24/10/2020 10:50",
    Ranking: "4",
  },
  {
    DateTime: "25/10/2020 15:40",
    Ranking: "4",
  },
  {
    DateTime: "26/10/2020 21:29",
    Ranking: "2",
  },
  {
    DateTime: "28/10/2020 10:43",
    Ranking: "4",
  },
  {
    DateTime: "29/10/2020 12:28",
    Ranking: "4",
  },
  {
    DateTime: "30/10/2020 06:34",
    Ranking: "4",
  },
  {
    DateTime: "31/10/2020 13:35",
    Ranking: "5",
  },
  {
    DateTime: "02/11/2020 20:37",
    Ranking: "4",
  },
  {
    DateTime: "03/11/2020 11:45",
    Ranking: "5",
  },
  {
    DateTime: "05/11/2020 16:45",
    Ranking: "2",
  },
  {
    DateTime: "06/11/2020 17:43",
    Ranking: "3",
  },
  {
    DateTime: "08/11/2020 10:36",
    Ranking: "2",
  },
  {
    DateTime: "08/11/2020 11:46",
    Ranking: "5",
  },
  {
    DateTime: "09/11/2020 10:50",
    Ranking: "5",
  },
  {
    DateTime: "10/11/2020 13:11",
    Ranking: "4",
  },
  {
    DateTime: "11/11/2020 12:48",
    Ranking: "4",
  },
  {
    DateTime: "12/11/2020 22:10",
    Ranking: "3",
  },
  {
    DateTime: "13/11/2020 10:24",
    Ranking: "3",
  },
  {
    DateTime: "14/11/2020 04:05",
    Ranking: "4",
  },
  {
    DateTime: "14/11/2020 12:42",
    Ranking: "5",
  },
  {
    DateTime: "15/11/2020 22:06",
    Ranking: "2",
  },
  {
    DateTime: "16/11/2020 20:26",
    Ranking: "3",
  },
  {
    DateTime: "17/11/2020 17:44",
    Ranking: "2",
  },
  {
    DateTime: "18/11/2020 13:41",
    Ranking: "4",
  },
  {
    DateTime: "19/11/2020 09:48",
    Ranking: "4",
  },
  {
    DateTime: "20/11/2020 17:21",
    Ranking: "1",
  },
  {
    DateTime: "21/11/2020 11:50",
    Ranking: "2",
  },
  {
    DateTime: "22/11/2020 01:27",
    Ranking: "3",
  },
  {
    DateTime: "22/11/2020 18:40",
    Ranking: "2",
  },
  {
    DateTime: "23/11/2020 14:12",
    Ranking: "4",
  },
  {
    DateTime: "24/11/2020 20:46",
    Ranking: "3",
  },
  {
    DateTime: "25/11/2020 13:47",
    Ranking: "3",
  },
  {
    DateTime: "26/11/2020 13:50",
    Ranking: "3",
  },
  {
    DateTime: "27/11/2020 16:49",
    Ranking: "2",
  },
  {
    DateTime: "28/11/2020 12:50",
    Ranking: "3",
  },
  {
    DateTime: "29/11/2020 19:27",
    Ranking: "4",
  },
  {
    DateTime: "30/11/2020 18:40",
    Ranking: "2",
  },
  {
    DateTime: "01/12/2020 14:02",
    Ranking: "3",
  },
  {
    DateTime: "02/12/2020 20:26",
    Ranking: "2",
  },
  {
    DateTime: "03/12/2020 12:22",
    Ranking: "4",
  },
  {
    DateTime: "04/12/2020 20:54",
    Ranking: "2",
  },
  {
    DateTime: "05/12/2020 10:25",
    Ranking: "5",
  },
  {
    DateTime: "07/12/2020 10:43",
    Ranking: "4",
  },
  {
    DateTime: "08/12/2020 20:12",
    Ranking: "2",
  },
  {
    DateTime: "09/12/2020 12:26",
    Ranking: "4",
  },
  {
    DateTime: "10/12/2020 14:31",
    Ranking: "4",
  },
  {
    DateTime: "11/12/2020 14:39",
    Ranking: "3",
  },
  {
    DateTime: "11/12/2020 16:25",
    Ranking: "7",
  },
  {
    DateTime: "13/12/2020 13:24",
    Ranking: "4",
  },
  {
    DateTime: "14/12/2020 17:33",
    Ranking: "4",
  },
  {
    DateTime: "16/12/2020 01:17",
    Ranking: "3",
  },
  {
    DateTime: "16/12/2020 14:39",
    Ranking: "3",
  },
  {
    DateTime: "17/12/2020 10:28",
    Ranking: "3",
  },
  {
    DateTime: "17/12/2020 21:06",
    Ranking: "5",
  },
  {
    DateTime: "18/12/2020 22:30",
    Ranking: "3",
  },
  {
    DateTime: "19/12/2020 17:26",
    Ranking: "4",
  },
  {
    DateTime: "20/12/2020 16:59",
    Ranking: "3",
  },
  {
    DateTime: "21/12/2020 18:42",
    Ranking: "3",
  },
  {
    DateTime: "22/12/2020 22:21",
    Ranking: "3",
  },
  {
    DateTime: "24/12/2020 01:18",
    Ranking: "4",
  },
  {
    DateTime: "24/12/2020 11:18",
    Ranking: "5",
  },
  {
    DateTime: "24/12/2020 14:19",
    Ranking: "4",
  },
  {
    DateTime: "25/12/2020 13:02",
    Ranking: "4",
  },
  {
    DateTime: "26/12/2020 14:40",
    Ranking: "4",
  },
  {
    DateTime: "27/12/2020 10:40",
    Ranking: "3",
  },
  {
    DateTime: "27/12/2020 16:00",
    Ranking: "5",
  },
  {
    DateTime: "28/12/2020 12:04",
    Ranking: "3",
  },
  {
    DateTime: "29/12/2020 13:03",
    Ranking: "4",
  },
  {
    DateTime: "30/12/2020 15:55",
    Ranking: "3",
  },
  {
    DateTime: "31/12/2020 11:09",
    Ranking: "2",
  },
  {
    DateTime: "31/12/2020 17:16",
    Ranking: "3",
  },
  {
    DateTime: "01/01/2021 11:15",
    Ranking: "4",
  },
  {
    DateTime: "02/01/2021 16:07",
    Ranking: "4",
  },
  {
    DateTime: "03/01/2021 12:24",
    Ranking: "4",
  },
  {
    DateTime: "05/01/2021 13:08",
    Ranking: "3",
  },
  {
    DateTime: "06/01/2021 10:45",
    Ranking: "4",
  },
  {
    DateTime: "07/01/2021 21:39",
    Ranking: "3",
  },
  {
    DateTime: "09/01/2021 03:06",
    Ranking: "2",
  },
  {
    DateTime: "09/01/2021 12:59",
    Ranking: "4",
  },
  {
    DateTime: "09/01/2021 15:10",
    Ranking: "6",
  },
  {
    DateTime: "11/01/2021 15:09",
    Ranking: "3",
  },
  {
    DateTime: "12/01/2021 19:44",
    Ranking: "3",
  },
  {
    DateTime: "13/01/2021 12:26",
    Ranking: "4",
  },
  {
    DateTime: "14/01/2021 10:55",
    Ranking: "3",
  },
  {
    DateTime: "14/01/2021 18:52",
    Ranking: "3",
  },
  {
    DateTime: "16/01/2021 16:12",
    Ranking: "4",
  },
  {
    DateTime: "17/01/2021 23:21",
    Ranking: "2",
  },
  {
    DateTime: "18/01/2021 16:12",
    Ranking: "3",
  },
  {
    DateTime: "20/01/2021 10:50",
    Ranking: "3",
  },
  {
    DateTime: "20/01/2021 11:23",
    Ranking: "4",
  },
  {
    DateTime: "21/01/2021 21:13",
    Ranking: "2",
  },
  {
    DateTime: "22/01/2021 13:56",
    Ranking: "4",
  },
  {
    DateTime: "23/01/2021 22:03",
    Ranking: "4",
  },
  {
    DateTime: "24/01/2021 23:20",
    Ranking: "3",
  },
  {
    DateTime: "25/01/2021 13:18",
    Ranking: "4",
  },
  {
    DateTime: "26/01/2021 17:52",
    Ranking: "3",
  },
  {
    DateTime: "27/01/2021 18:13",
    Ranking: "3",
  },
  {
    DateTime: "28/01/2021 13:32",
    Ranking: "3",
  },
  {
    DateTime: "29/01/2021 14:43",
    Ranking: "3",
  },
  {
    DateTime: "29/01/2021 20:28",
    Ranking: "6",
  },
  {
    DateTime: "30/01/2021 02:36",
    Ranking: "5",
  },
  {
    DateTime: "30/01/2021 19:42",
    Ranking: "2",
  },
  {
    DateTime: "02/02/2021 14:09",
    Ranking: "3",
  },
  {
    DateTime: "03/02/2021 09:35",
    Ranking: "3",
  },
  {
    DateTime: "04/02/2021 19:37",
    Ranking: "2",
  },
  {
    DateTime: "05/02/2021 21:28",
    Ranking: "3",
  },
  {
    DateTime: "06/02/2021 11:43",
    Ranking: "4",
  },
  {
    DateTime: "07/02/2021 16:07",
    Ranking: "3",
  },
  {
    DateTime: "08/02/2021 13:32",
    Ranking: "4",
  },
  {
    DateTime: "10/02/2021 14:32",
    Ranking: "4",
  },
  {
    DateTime: "11/02/2021 16:17",
    Ranking: "4",
  },
  {
    DateTime: "12/02/2021 19:49",
    Ranking: "2",
  },
  {
    DateTime: "13/02/2021 22:45",
    Ranking: "2",
  },
  {
    DateTime: "14/02/2021 19:35",
    Ranking: "3",
  },
  {
    DateTime: "15/02/2021 17:20",
    Ranking: "1",
  },
  {
    DateTime: "15/02/2021 23:51",
    Ranking: "3",
  },
  {
    DateTime: "16/02/2021 17:49",
    Ranking: "4",
  },
  {
    DateTime: "17/02/2021 22:52",
    Ranking: "1",
  },
  {
    DateTime: "18/02/2021 11:01",
    Ranking: "4",
  },
  {
    DateTime: "19/02/2021 22:00",
    Ranking: "2",
  },
  {
    DateTime: "20/02/2021 15:22",
    Ranking: "6",
  },
  {
    DateTime: "22/02/2021 21:27",
    Ranking: "3",
  },
  {
    DateTime: "23/02/2021 17:36",
    Ranking: "3",
  },
  {
    DateTime: "24/02/2021 13:26",
    Ranking: "4",
  },
  {
    DateTime: "25/02/2021 19:56",
    Ranking: "2",
  },
  {
    DateTime: "26/02/2021 12:20",
    Ranking: "3",
  },
  {
    DateTime: "27/02/2021 12:54",
    Ranking: "3",
  },
  {
    DateTime: "28/02/2021 13:02",
    Ranking: "3",
  },
  {
    DateTime: "01/03/2021 18:10",
    Ranking: "3",
  },
  {
    DateTime: "02/03/2021 12:52",
    Ranking: "4",
  },
  {
    DateTime: "04/03/2021 16:24",
    Ranking: "3",
  },
  {
    DateTime: "05/03/2021 19:15",
    Ranking: "3",
  },
  {
    DateTime: "06/03/2021 11:18",
    Ranking: "6",
  },
  {
    DateTime: "08/03/2021 15:55",
    Ranking: "4",
  },
  {
    DateTime: "09/03/2021 16:04",
    Ranking: "4",
  },
  {
    DateTime: "10/03/2021 23:21",
    Ranking: "4",
  },
  {
    DateTime: "11/03/2021 18:10",
    Ranking: "4",
  },
  {
    DateTime: "12/03/2021 15:23",
    Ranking: "3",
  },
  {
    DateTime: "13/03/2021 11:33",
    Ranking: "3",
  },
  {
    DateTime: "14/03/2021 19:22",
    Ranking: "3",
  },
  {
    DateTime: "15/03/2021 16:27",
    Ranking: "4",
  },
  {
    DateTime: "16/03/2021 23:24",
    Ranking: "4",
  },
  {
    DateTime: "18/03/2021 09:34",
    Ranking: "4",
  },
  {
    DateTime: "19/03/2021 12:33",
    Ranking: "3",
  },
  {
    DateTime: "20/03/2021 04:10",
    Ranking: "4",
  },
  {
    DateTime: "21/03/2021 13:44",
    Ranking: "4",
  },
  {
    DateTime: "23/03/2021 11:36",
    Ranking: "3",
  },
  {
    DateTime: "24/03/2021 11:10",
    Ranking: "5",
  },
  {
    DateTime: "25/03/2021 18:15",
    Ranking: "2",
  },
  {
    DateTime: "26/03/2021 19:39",
    Ranking: "3",
  },
  {
    DateTime: "27/03/2021 12:59",
    Ranking: "4",
  },
  {
    DateTime: "29/03/2021 19:19",
    Ranking: "3",
  },
  {
    DateTime: "30/03/2021 22:48",
    Ranking: "4",
  },
  {
    DateTime: "31/03/2021 10:08",
    Ranking: "6",
  },
  {
    DateTime: "01/04/2021 19:32",
    Ranking: "3",
  },
  {
    DateTime: "02/04/2021 12:05",
    Ranking: "4",
  },
  {
    DateTime: "03/04/2021 10:34",
    Ranking: "4",
  },
  {
    DateTime: "03/04/2021 18:03",
    Ranking: "3",
  },
  {
    DateTime: "04/04/2021 12:02",
    Ranking: "3",
  },
  {
    DateTime: "04/04/2021 20:32",
    Ranking: "3",
  },
  {
    DateTime: "05/04/2021 12:53",
    Ranking: "5",
  },
  {
    DateTime: "06/04/2021 12:35",
    Ranking: "4",
  },
  {
    DateTime: "07/04/2021 21:42",
    Ranking: "4",
  },
  {
    DateTime: "08/04/2021 11:05",
    Ranking: "5",
  },
  {
    DateTime: "09/04/2021 13:41",
    Ranking: "5",
  },
  {
    DateTime: "10/04/2021 11:52",
    Ranking: "4",
  },
  {
    DateTime: "10/04/2021 23:15",
    Ranking: "2",
  },
  {
    DateTime: "11/04/2021 20:22",
    Ranking: "3",
  },
  {
    DateTime: "12/04/2021 10:26",
    Ranking: "4",
  },
  {
    DateTime: "13/04/2021 10:38",
    Ranking: "6",
  },
  {
    DateTime: "14/04/2021 11:13",
    Ranking: "4",
  },
  {
    DateTime: "15/04/2021 15:34",
    Ranking: "3",
  },
  {
    DateTime: "15/04/2021 20:59",
    Ranking: "4",
  },
  {
    DateTime: "16/04/2021 20:27",
    Ranking: "2",
  },
  {
    DateTime: "17/04/2021 17:46",
    Ranking: "4",
  },
  {
    DateTime: "18/04/2021 23:45",
    Ranking: "1",
  },
  {
    DateTime: "19/04/2021 15:28",
    Ranking: "4",
  },
  {
    DateTime: "21/04/2021 08:48",
    Ranking: "2",
  },
  {
    DateTime: "21/04/2021 11:33",
    Ranking: "4",
  },
  {
    DateTime: "22/04/2021 20:32",
    Ranking: "3",
  },
  {
    DateTime: "23/04/2021 21:32",
    Ranking: "3",
  },
  {
    DateTime: "24/04/2021 11:13",
    Ranking: "3",
  },
  {
    DateTime: "24/04/2021 17:42",
    Ranking: "2",
  },
  {
    DateTime: "25/04/2021 19:20",
    Ranking: "6",
  },
  {
    DateTime: "27/04/2021 21:35",
    Ranking: "3",
  },
  {
    DateTime: "28/04/2021 11:43",
    Ranking: "3",
  },
  {
    DateTime: "29/04/2021 16:38",
    Ranking: "2",
  },
  {
    DateTime: "30/04/2021 15:36",
    Ranking: "3",
  },
  {
    DateTime: "01/05/2021 11:38",
    Ranking: "3",
  },
  {
    DateTime: "01/05/2021 21:42",
    Ranking: "4",
  },
  {
    DateTime: "02/05/2021 22:07",
    Ranking: "4",
  },
  {
    DateTime: "03/05/2021 13:33",
    Ranking: "4",
  },
  {
    DateTime: "04/05/2021 21:28",
    Ranking: "2",
  },
  {
    DateTime: "05/05/2021 14:39",
    Ranking: "4",
  },
  {
    DateTime: "06/05/2021 18:48",
    Ranking: "3",
  },
  {
    DateTime: "07/05/2021 10:37",
    Ranking: "4",
  },
  {
    DateTime: "08/05/2021 13:21",
    Ranking: "4",
  },
  {
    DateTime: "09/05/2021 16:53",
    Ranking: "2",
  },
  {
    DateTime: "10/05/2021 23:14",
    Ranking: "3",
  },
  {
    DateTime: "11/05/2021 20:00",
    Ranking: "3",
  },
  {
    DateTime: "12/05/2021 11:06",
    Ranking: "3",
  },
  {
    DateTime: "13/05/2021 18:00",
    Ranking: "2",
  },
  {
    DateTime: "14/05/2021 09:45",
    Ranking: "4",
  },
  {
    DateTime: "15/05/2021 12:07",
    Ranking: "4",
  },
  {
    DateTime: "16/05/2021 12:17",
    Ranking: "4",
  },
  {
    DateTime: "18/05/2021 11:48",
    Ranking: "4",
  },
  {
    DateTime: "19/05/2021 20:15",
    Ranking: "3",
  },
  {
    DateTime: "20/05/2021 14:00",
    Ranking: "4",
  },
  {
    DateTime: "21/05/2021 09:23",
    Ranking: "4",
  },
  {
    DateTime: "21/05/2021 16:33",
    Ranking: "2",
  },
  {
    DateTime: "21/05/2021 19:58",
    Ranking: "3",
  },
  {
    DateTime: "22/05/2021 13:50",
    Ranking: "3",
  },
  {
    DateTime: "23/05/2021 16:45",
    Ranking: "5",
  },
  {
    DateTime: "24/05/2021 09:50",
    Ranking: "4",
  },
  {
    DateTime: "25/05/2021 10:31",
    Ranking: "3",
  },
  {
    DateTime: "26/05/2021 11:20",
    Ranking: "3",
  },
  {
    DateTime: "27/05/2021 15:31",
    Ranking: "3",
  },
  {
    DateTime: "28/05/2021 16:19",
    Ranking: "2",
  },
  {
    DateTime: "29/05/2021 09:42",
    Ranking: "4",
  },
  {
    DateTime: "30/05/2021 12:48",
    Ranking: "2",
  },
  {
    DateTime: "30/05/2021 15:36",
    Ranking: "5",
  },
  {
    DateTime: "31/05/2021 23:51",
    Ranking: "2",
  },
  {
    DateTime: "01/06/2021 23:17",
    Ranking: "1",
  },
  {
    DateTime: "02/06/2021 22:14",
    Ranking: "3",
  },
  {
    DateTime: "03/06/2021 23:51",
    Ranking: "5",
  },
  {
    DateTime: "05/06/2021 06:42",
    Ranking: "4",
  },
  {
    DateTime: "06/06/2021 04:14",
    Ranking: "6",
  },
  {
    DateTime: "07/06/2021 17:33",
    Ranking: "4",
  },
  {
    DateTime: "08/06/2021 17:10",
    Ranking: "3",
  },
  {
    DateTime: "08/06/2021 22:36",
    Ranking: "4",
  },
  {
    DateTime: "10/06/2021 10:13",
    Ranking: "3",
  },
  {
    DateTime: "11/06/2021 10:20",
    Ranking: "4",
  },
  {
    DateTime: "12/06/2021 16:31",
    Ranking: "3",
  },
  {
    DateTime: "13/06/2021 09:59",
    Ranking: "3",
  },
  {
    DateTime: "15/06/2021 08:48",
    Ranking: "2",
  },
  {
    DateTime: "15/06/2021 22:20",
    Ranking: "3",
  },
  {
    DateTime: "16/06/2021 13:48",
    Ranking: "3",
  },
  {
    DateTime: "17/06/2021 11:12",
    Ranking: "4",
  },
  {
    DateTime: "18/06/2021 10:56",
    Ranking: "3",
  },
  {
    DateTime: "19/06/2021 01:04",
    Ranking: "4",
  },
  {
    DateTime: "20/06/2021 13:16",
    Ranking: "4",
  },
  {
    DateTime: "21/06/2021 11:36",
    Ranking: "4",
  },
  {
    DateTime: "22/06/2021 10:36",
    Ranking: "6",
  },
  {
    DateTime: "24/06/2021 09:31",
    Ranking: "4",
  },
  {
    DateTime: "24/06/2021 20:16",
    Ranking: "3",
  },
  {
    DateTime: "25/06/2021 10:33",
    Ranking: "3",
  },
  {
    DateTime: "26/06/2021 13:41",
    Ranking: "3",
  },
  {
    DateTime: "26/06/2021 16:44",
    Ranking: "6",
  },
  {
    DateTime: "28/06/2021 11:52",
    Ranking: "4",
  },
  {
    DateTime: "30/06/2021 00:31",
    Ranking: "4",
  },
  {
    DateTime: "30/06/2021 10:25",
    Ranking: "4",
  },
  {
    DateTime: "01/07/2021 10:14",
    Ranking: "4",
  },
  {
    DateTime: "02/07/2021 08:12",
    Ranking: "4",
  },
  {
    DateTime: "02/07/2021 11:33",
    Ranking: "4",
  },
  {
    DateTime: "03/07/2021 10:23",
    Ranking: "4",
  },
  {
    DateTime: "04/07/2021 10:25",
    Ranking: "5",
  },
  {
    DateTime: "05/07/2021 11:46",
    Ranking: "3",
  },
  {
    DateTime: "06/07/2021 10:34",
    Ranking: "3",
  },
  {
    DateTime: "07/07/2021 10:22",
    Ranking: "3",
  },
  {
    DateTime: "08/07/2021 14:13",
    Ranking: "3",
  },
  {
    DateTime: "09/07/2021 14:36",
    Ranking: "4",
  },
  {
    DateTime: "10/07/2021 16:38",
    Ranking: "3",
  },
  {
    DateTime: "11/07/2021 12:48",
    Ranking: "4",
  },
  {
    DateTime: "12/07/2021 13:46",
    Ranking: "5",
  },
  {
    DateTime: "14/07/2021 10:51",
    Ranking: "3",
  },
  {
    DateTime: "15/07/2021 11:14",
    Ranking: "4",
  },
  {
    DateTime: "16/07/2021 09:53",
    Ranking: "3",
  },
  {
    DateTime: "17/07/2021 22:31",
    Ranking: "4",
  },
  {
    DateTime: "18/07/2021 10:55",
    Ranking: "4",
  },
  {
    DateTime: "18/07/2021 23:19",
    Ranking: "4",
  },
  {
    DateTime: "20/07/2021 09:15",
    Ranking: "1",
  },
  {
    DateTime: "20/07/2021 20:56",
    Ranking: "3",
  },
  {
    DateTime: "21/07/2021 10:01",
    Ranking: "4",
  },
  {
    DateTime: "22/07/2021 12:24",
    Ranking: "1",
  },
  {
    DateTime: "23/07/2021 14:26",
    Ranking: "2",
  },
  {
    DateTime: "24/07/2021 21:13",
    Ranking: "1",
  },
  {
    DateTime: "25/07/2021 12:22",
    Ranking: "2",
  },
  {
    DateTime: "26/07/2021 22:18",
    Ranking: "2",
  },
  {
    DateTime: "28/07/2021 11:42",
    Ranking: "3",
  },
  {
    DateTime: "28/07/2021 22:07",
    Ranking: "7",
  },
  {
    DateTime: "28/07/2021 23:04",
    Ranking: "7",
  },
  {
    DateTime: "28/07/2021 23:58",
    Ranking: "7",
  },
  {
    DateTime: "29/07/2021 10:44",
    Ranking: "5",
  },
  {
    DateTime: "30/07/2021 20:09",
    Ranking: "3",
  },
  {
    DateTime: "31/07/2021 11:58",
    Ranking: "3",
  },
  {
    DateTime: "01/08/2021 13:34",
    Ranking: "3",
  },
  {
    DateTime: "02/08/2021 10:08",
    Ranking: "4",
  },
  {
    DateTime: "03/08/2021 16:31",
    Ranking: "3",
  },
  {
    DateTime: "04/08/2021 20:35",
    Ranking: "3",
  },
  {
    DateTime: "05/08/2021 12:12",
    Ranking: "3",
  },
  {
    DateTime: "06/08/2021 12:37",
    Ranking: "4",
  },
  {
    DateTime: "07/08/2021 23:57",
    Ranking: "2",
  },
  {
    DateTime: "08/08/2021 16:35",
    Ranking: "4",
  },
  {
    DateTime: "09/08/2021 10:07",
    Ranking: "4",
  },
  {
    DateTime: "10/08/2021 16:32",
    Ranking: "3",
  },
  {
    DateTime: "11/08/2021 10:13",
    Ranking: "4",
  },
  {
    DateTime: "12/08/2021 11:38",
    Ranking: "4",
  },
  {
    DateTime: "13/08/2021 20:16",
    Ranking: "3",
  },
  {
    DateTime: "14/08/2021 17:05",
    Ranking: "4",
  },
  {
    DateTime: "15/08/2021 11:30",
    Ranking: "5",
  },
  {
    DateTime: "16/08/2021 23:55",
    Ranking: "3",
  },
  {
    DateTime: "18/08/2021 09:23",
    Ranking: "3",
  },
  {
    DateTime: "19/08/2021 11:59",
    Ranking: "4",
  },
  {
    DateTime: "20/08/2021 10:46",
    Ranking: "3",
  },
  {
    DateTime: "21/08/2021 04:13",
    Ranking: "4",
  },
  {
    DateTime: "21/08/2021 15:00",
    Ranking: "5",
  },
  {
    DateTime: "22/08/2021 12:17",
    Ranking: "5",
  },
  {
    DateTime: "23/08/2021 12:00",
    Ranking: "5",
  },
  {
    DateTime: "24/08/2021 11:45",
    Ranking: "4",
  },
  {
    DateTime: "25/08/2021 10:42",
    Ranking: "3",
  },
  {
    DateTime: "26/08/2021 10:44",
    Ranking: "4",
  },
  {
    DateTime: "27/08/2021 13:07",
    Ranking: "4",
  },
  {
    DateTime: "28/08/2021 04:38",
    Ranking: "5",
  },
  {
    DateTime: "28/08/2021 16:21",
    Ranking: "4",
  },
  {
    DateTime: "28/08/2021 21:35",
    Ranking: "5",
  },
  {
    DateTime: "29/08/2021 17:14",
    Ranking: "3",
  },
  {
    DateTime: "30/08/2021 12:52",
    Ranking: "5",
  },
  {
    DateTime: "01/09/2021 11:47",
    Ranking: "3",
  },
  {
    DateTime: "02/09/2021 09:23",
    Ranking: "3",
  },
  {
    DateTime: "02/09/2021 12:08",
    Ranking: "6",
  },
  {
    DateTime: "03/09/2021 13:48",
    Ranking: "3",
  },
  {
    DateTime: "04/09/2021 12:27",
    Ranking: "3",
  },
  {
    DateTime: "05/09/2021 10:34",
    Ranking: "6",
  },
  {
    DateTime: "06/09/2021 13:53",
    Ranking: "3",
  },
  {
    DateTime: "07/09/2021 14:01",
    Ranking: "3",
  },
  {
    DateTime: "08/09/2021 10:53",
    Ranking: "4",
  },
  {
    DateTime: "09/09/2021 16:14",
    Ranking: "3",
  },
  {
    DateTime: "10/09/2021 10:58",
    Ranking: "3",
  },
  {
    DateTime: "11/09/2021 23:33",
    Ranking: "3",
  },
  {
    DateTime: "12/09/2021 11:52",
    Ranking: "4",
  },
  {
    DateTime: "13/09/2021 15:03",
    Ranking: "3",
  },
  {
    DateTime: "14/09/2021 10:45",
    Ranking: "3",
  },
  {
    DateTime: "15/09/2021 01:15",
    Ranking: "4",
  },
  {
    DateTime: "16/09/2021 13:09",
    Ranking: "3",
  },
  {
    DateTime: "17/09/2021 16:02",
    Ranking: "6",
  },
  {
    DateTime: "18/09/2021 12:25",
    Ranking: "3",
  },
  {
    DateTime: "19/09/2021 11:32",
    Ranking: "3",
  },
  {
    DateTime: "20/09/2021 12:16",
    Ranking: "2",
  },
  {
    DateTime: "21/09/2021 12:09",
    Ranking: "3",
  },
  {
    DateTime: "22/09/2021 13:32",
    Ranking: "2",
  },
  {
    DateTime: "23/09/2021 11:02",
    Ranking: "3",
  },
  {
    DateTime: "24/09/2021 13:36",
    Ranking: "2",
  },
  {
    DateTime: "24/09/2021 17:45",
    Ranking: "3",
  },
  {
    DateTime: "25/09/2021 13:23",
    Ranking: "3",
  },
  {
    DateTime: "26/09/2021 23:26",
    Ranking: "2",
  },
  {
    DateTime: "27/09/2021 13:47",
    Ranking: "3",
  },
  {
    DateTime: "28/09/2021 14:26",
    Ranking: "3",
  },
  {
    DateTime: "29/09/2021 10:17",
    Ranking: "4",
  },
  {
    DateTime: "30/09/2021 11:52",
    Ranking: "4",
  },
  {
    DateTime: "02/10/2021 11:47",
    Ranking: "2",
  },
  {
    DateTime: "03/10/2021 13:05",
    Ranking: "3",
  },
  {
    DateTime: "03/10/2021 17:41",
    Ranking: "3",
  },
  {
    DateTime: "03/10/2021 21:37",
    Ranking: "6",
  },
  {
    DateTime: "04/10/2021 13:23",
    Ranking: "4",
  },
  {
    DateTime: "05/10/2021 17:13",
    Ranking: "3",
  },
  {
    DateTime: "07/10/2021 17:34",
    Ranking: "3",
  },
  {
    DateTime: "08/10/2021 15:40",
    Ranking: "3",
  },
  {
    DateTime: "08/10/2021 19:27",
    Ranking: "5",
  },
  {
    DateTime: "09/10/2021 09:35",
    Ranking: "2",
  },
  {
    DateTime: "09/10/2021 11:33",
    Ranking: "5",
  },
  {
    DateTime: "09/10/2021 20:58",
    Ranking: "6",
  },
  {
    DateTime: "10/10/2021 11:38",
    Ranking: "3",
  },
  {
    DateTime: "10/10/2021 18:38",
    Ranking: "3",
  },
  {
    DateTime: "11/10/2021 16:17",
    Ranking: "3",
  },
  {
    DateTime: "11/10/2021 22:06",
    Ranking: "3",
  },
  {
    DateTime: "12/10/2021 17:45",
    Ranking: "2",
  },
  {
    DateTime: "13/10/2021 12:29",
    Ranking: "3",
  },
  {
    DateTime: "14/10/2021 16:37",
    Ranking: "3",
  },
  {
    DateTime: "15/10/2021 10:40",
    Ranking: "4",
  },
  {
    DateTime: "15/10/2021 22:57",
    Ranking: "2",
  },
  {
    DateTime: "16/10/2021 13:43",
    Ranking: "3",
  },
  {
    DateTime: "18/10/2021 12:36",
    Ranking: "4",
  },
  {
    DateTime: "20/10/2021 08:39",
    Ranking: "4",
  },
  {
    DateTime: "21/10/2021 15:38",
    Ranking: "3",
  },
  {
    DateTime: "22/10/2021 17:25",
    Ranking: "4",
  },
  {
    DateTime: "23/10/2021 04:58",
    Ranking: "4",
  },
  {
    DateTime: "24/10/2021 16:37",
    Ranking: "3",
  },
  {
    DateTime: "26/10/2021 11:40",
    Ranking: "3",
  },
  {
    DateTime: "28/10/2021 09:57",
    Ranking: "4",
  },
  {
    DateTime: "29/10/2021 16:42",
    Ranking: "4",
  },
  {
    DateTime: "30/10/2021 13:21",
    Ranking: "4",
  },
  {
    DateTime: "30/10/2021 23:22",
    Ranking: "5",
  },
  {
    DateTime: "01/11/2021 14:34",
    Ranking: "4",
  },
  {
    DateTime: "02/11/2021 17:09",
    Ranking: "4",
  },
  {
    DateTime: "03/11/2021 18:41",
    Ranking: "3",
  },
  {
    DateTime: "04/11/2021 17:01",
    Ranking: "3",
  },
  {
    DateTime: "05/11/2021 10:38",
    Ranking: "5",
  },
  {
    DateTime: "06/11/2021 08:49",
    Ranking: "2",
  },
  {
    DateTime: "08/11/2021 10:38",
    Ranking: "4",
  },
  {
    DateTime: "09/11/2021 13:09",
    Ranking: "5",
  },
  {
    DateTime: "11/11/2021 09:52",
    Ranking: "2",
  },
  {
    DateTime: "12/11/2021 15:47",
    Ranking: "3",
  },
  {
    DateTime: "13/11/2021 20:34",
    Ranking: "5",
  },
  {
    DateTime: "14/11/2021 22:13",
    Ranking: "2",
  },
  {
    DateTime: "15/11/2021 11:32",
    Ranking: "4",
  },
  {
    DateTime: "15/11/2021 15:47",
    Ranking: "6",
  },
  {
    DateTime: "17/11/2021 10:24",
    Ranking: "4",
  },
  {
    DateTime: "18/11/2021 12:15",
    Ranking: "2",
  },
  {
    DateTime: "18/11/2021 16:38",
    Ranking: "4",
  },
  {
    DateTime: "19/11/2021 13:48",
    Ranking: "4",
  },
  {
    DateTime: "20/11/2021 21:45",
    Ranking: "4",
  },
  {
    DateTime: "21/11/2021 14:26",
    Ranking: "4",
  },
  {
    DateTime: "23/11/2021 19:55",
    Ranking: "4",
  },
  {
    DateTime: "23/11/2021 23:25",
    Ranking: "4",
  },
  {
    DateTime: "24/11/2021 16:46",
    Ranking: "4",
  },
  {
    DateTime: "25/11/2021 17:30",
    Ranking: "3",
  },
  {
    DateTime: "26/11/2021 10:53",
    Ranking: "4",
  },
  {
    DateTime: "27/11/2021 13:03",
    Ranking: "3",
  },
  {
    DateTime: "27/11/2021 16:14",
    Ranking: "6",
  },
  {
    DateTime: "29/11/2021 13:49",
    Ranking: "3",
  },
  {
    DateTime: "30/11/2021 16:12",
    Ranking: "2",
  },
  {
    DateTime: "01/12/2021 15:36",
    Ranking: "3",
  },
  {
    DateTime: "02/12/2021 17:21",
    Ranking: "3",
  },
  {
    DateTime: "03/12/2021 09:36",
    Ranking: "4",
  },
  {
    DateTime: "03/12/2021 19:43",
    Ranking: "3",
  },
  {
    DateTime: "04/12/2021 09:54",
    Ranking: "3",
  },
  {
    DateTime: "05/12/2021 00:44",
    Ranking: "6",
  },
  {
    DateTime: "07/12/2021 23:00",
    Ranking: "2",
  },
  {
    DateTime: "08/12/2021 13:25",
    Ranking: "2",
  },
  {
    DateTime: "09/12/2021 17:37",
    Ranking: "2",
  },
  {
    DateTime: "10/12/2021 09:55",
    Ranking: "2",
  },
  {
    DateTime: "11/12/2021 12:15",
    Ranking: "6",
  },
  {
    DateTime: "12/12/2021 23:21",
    Ranking: "3",
  },
  {
    DateTime: "14/12/2021 15:37",
    Ranking: "3",
  },
  {
    DateTime: "15/12/2021 21:01",
    Ranking: "3",
  },
  {
    DateTime: "16/12/2021 12:44",
    Ranking: "5",
  },
  {
    DateTime: "16/12/2021 13:42",
    Ranking: "6",
  },
  {
    DateTime: "16/12/2021 23:58",
    Ranking: "6",
  },
  {
    DateTime: "18/12/2021 17:46",
    Ranking: "3",
  },
  {
    DateTime: "19/12/2021 14:54",
    Ranking: "5",
  },
  {
    DateTime: "21/12/2021 12:42",
    Ranking: "2",
  },
  {
    DateTime: "23/12/2021 20:47",
    Ranking: "4",
  },
  {
    DateTime: "24/12/2021 16:35",
    Ranking: "3",
  },
  {
    DateTime: "25/12/2021 00:27",
    Ranking: "4",
  },
  {
    DateTime: "25/12/2021 13:02",
    Ranking: "3",
  },
  {
    DateTime: "26/12/2021 12:00",
    Ranking: "4",
  },
  {
    DateTime: "27/12/2021 11:42",
    Ranking: "4",
  },
  {
    DateTime: "29/12/2021 12:19",
    Ranking: "4",
  },
  {
    DateTime: "30/12/2021 14:34",
    Ranking: "5",
  },
  {
    DateTime: "31/12/2021 13:53",
    Ranking: "5",
  },
  {
    DateTime: "31/12/2021 16:07",
    Ranking: "6",
  },
  {
    DateTime: "01/01/2022 15:29",
    Ranking: "5",
  },
  {
    DateTime: "02/01/2022 16:57",
    Ranking: "4",
  },
  {
    DateTime: "03/01/2022 18:57",
    Ranking: "6",
  },
  {
    DateTime: "04/01/2022 22:15",
    Ranking: "4",
  },
  {
    DateTime: "05/01/2022 22:03",
    Ranking: "5",
  },
  {
    DateTime: "06/01/2022 09:44",
    Ranking: "6",
  },
  {
    DateTime: "07/01/2022 10:29",
    Ranking: "4",
  },
  {
    DateTime: "07/01/2022 14:05",
    Ranking: "5",
  },
  {
    DateTime: "08/01/2022 02:23",
    Ranking: "6",
  },
  {
    DateTime: "09/01/2022 09:50",
    Ranking: "4",
  },
  {
    DateTime: "09/01/2022 21:35",
    Ranking: "3",
  },
  {
    DateTime: "10/01/2022 11:54",
    Ranking: "4",
  },
  {
    DateTime: "11/01/2022 17:44",
    Ranking: "3",
  },
  {
    DateTime: "12/01/2022 04:29",
    Ranking: "5",
  },
  {
    DateTime: "12/01/2022 13:52",
    Ranking: "4",
  },
  {
    DateTime: "13/01/2022 14:23",
    Ranking: "4",
  },
  {
    DateTime: "14/01/2022 13:00",
    Ranking: "4",
  },
  {
    DateTime: "15/01/2022 14:28",
    Ranking: "4",
  },
  {
    DateTime: "16/01/2022 20:37",
    Ranking: "3",
  },
  {
    DateTime: "16/01/2022 23:55",
    Ranking: "6",
  },
  {
    DateTime: "18/01/2022 16:27",
    Ranking: "3",
  },
  {
    DateTime: "19/01/2022 12:35",
    Ranking: "4",
  },
  {
    DateTime: "19/01/2022 23:46",
    Ranking: "2",
  },
  {
    DateTime: "20/01/2022 11:46",
    Ranking: "4",
  },
  {
    DateTime: "21/01/2022 09:26",
    Ranking: "5",
  },
  {
    DateTime: "22/01/2022 09:37",
    Ranking: "6",
  },
  {
    DateTime: "22/01/2022 15:12",
    Ranking: "5",
  },
  {
    DateTime: "23/01/2022 12:36",
    Ranking: "6",
  },
  {
    DateTime: "25/01/2022 09:23",
    Ranking: "4",
  },
  {
    DateTime: "25/01/2022 22:41",
    Ranking: "3",
  },
  {
    DateTime: "26/01/2022 11:22",
    Ranking: "4",
  },
  {
    DateTime: "27/01/2022 20:45",
    Ranking: "2",
  },
  {
    DateTime: "28/01/2022 16:58",
    Ranking: "2",
  },
  {
    DateTime: "29/01/2022 10:48",
    Ranking: "5",
  },
  {
    DateTime: "30/01/2022 09:28",
    Ranking: "4",
  },
  {
    DateTime: "30/01/2022 13:25",
    Ranking: "5",
  },
  {
    DateTime: "31/01/2022 23:51",
    Ranking: "4",
  },
  {
    DateTime: "02/02/2022 11:07",
    Ranking: "4",
  },
  {
    DateTime: "02/02/2022 22:15",
    Ranking: "2",
  },
  {
    DateTime: "03/02/2022 20:36",
    Ranking: "4",
  },
  {
    DateTime: "04/02/2022 11:48",
    Ranking: "3",
  },
  {
    DateTime: "05/02/2022 12:34",
    Ranking: "4",
  },
  {
    DateTime: "06/02/2022 16:41",
    Ranking: "4",
  },
  {
    DateTime: "08/02/2022 02:39",
    Ranking: "2",
  },
  {
    DateTime: "08/02/2022 11:37",
    Ranking: "5",
  },
  {
    DateTime: "09/02/2022 19:50",
    Ranking: "3",
  },
  {
    DateTime: "10/02/2022 10:16",
    Ranking: "4",
  },
  {
    DateTime: "11/02/2022 19:02",
    Ranking: "3",
  },
  {
    DateTime: "12/02/2022 18:06",
    Ranking: "4",
  },
  {
    DateTime: "13/02/2022 13:23",
    Ranking: "3",
  },
  {
    DateTime: "14/02/2022 12:56",
    Ranking: "4",
  },
  {
    DateTime: "15/02/2022 20:11",
    Ranking: "4",
  },
  {
    DateTime: "17/02/2022 11:02",
    Ranking: "3",
  },
  {
    DateTime: "18/02/2022 10:01",
    Ranking: "4",
  },
  {
    DateTime: "19/02/2022 12:23",
    Ranking: "3",
  },
  {
    DateTime: "20/02/2022 00:47",
    Ranking: "4",
  },
  {
    DateTime: "21/02/2022 20:07",
    Ranking: "4",
  },
  {
    DateTime: "23/02/2022 13:12",
    Ranking: "6",
  },
  {
    DateTime: "23/02/2022 14:15",
    Ranking: "7",
  },
  {
    DateTime: "24/02/2022 07:25",
    Ranking: "6",
  },
  {
    DateTime: "24/02/2022 17:57",
    Ranking: "6",
  },
  {
    DateTime: "26/02/2022 10:32",
    Ranking: "3",
  },
  {
    DateTime: "27/02/2022 16:35",
    Ranking: "3",
  },
  {
    DateTime: "28/02/2022 16:16",
    Ranking: "5",
  },
  {
    DateTime: "02/03/2022 11:01",
    Ranking: "4",
  },
  {
    DateTime: "03/03/2022 10:34",
    Ranking: "4",
  },
  {
    DateTime: "03/03/2022 13:32",
    Ranking: "6",
  },
  {
    DateTime: "04/03/2022 17:15",
    Ranking: "5",
  },
  {
    DateTime: "05/03/2022 09:33",
    Ranking: "6",
  },
  {
    DateTime: "06/03/2022 12:21",
    Ranking: "4",
  },
  {
    DateTime: "06/03/2022 12:56",
    Ranking: "5",
  },
  {
    DateTime: "06/03/2022 15:34",
    Ranking: "6",
  },
  {
    DateTime: "08/03/2022 13:45",
    Ranking: "3",
  },
  {
    DateTime: "09/03/2022 00:18",
    Ranking: "5",
  },
  {
    DateTime: "09/03/2022 14:03",
    Ranking: "5",
  },
  {
    DateTime: "10/03/2022 17:11",
    Ranking: "5",
  },
  {
    DateTime: "11/03/2022 16:17",
    Ranking: "4",
  },
  {
    DateTime: "11/03/2022 22:06",
    Ranking: "6",
  },
  {
    DateTime: "13/03/2022 10:52",
    Ranking: "3",
  },
  {
    DateTime: "13/03/2022 16:14",
    Ranking: "5",
  },
  {
    DateTime: "14/03/2022 14:08",
    Ranking: "4",
  },
  {
    DateTime: "14/03/2022 22:30",
    Ranking: "5",
  },
  {
    DateTime: "15/03/2022 11:40",
    Ranking: "5",
  },
  {
    DateTime: "16/03/2022 10:39",
    Ranking: "4",
  },
  {
    DateTime: "16/03/2022 12:34",
    Ranking: "3",
  },
  {
    DateTime: "16/03/2022 15:17",
    Ranking: "5",
  },
  {
    DateTime: "16/03/2022 17:11",
    Ranking: "6",
  },
  {
    DateTime: "16/03/2022 19:26",
    Ranking: "7",
  },
  {
    DateTime: "17/03/2022 10:25",
    Ranking: "5",
  },
  {
    DateTime: "17/03/2022 16:57",
    Ranking: "6",
  },
  {
    DateTime: "18/03/2022 00:25",
    Ranking: "4",
  },
  {
    DateTime: "18/03/2022 11:15",
    Ranking: "5",
  },
  {
    DateTime: "18/03/2022 14:53",
    Ranking: "4",
  },
  {
    DateTime: "18/03/2022 20:26",
    Ranking: "4",
  },
  {
    DateTime: "18/03/2022 22:41",
    Ranking: "6",
  },
  {
    DateTime: "19/03/2022 09:36",
    Ranking: "5",
  },
  {
    DateTime: "20/03/2022 00:59",
    Ranking: "4",
  },
  {
    DateTime: "20/03/2022 08:57",
    Ranking: "5",
  },
  {
    DateTime: "20/03/2022 10:24",
    Ranking: "6",
  },
  {
    DateTime: "21/03/2022 10:23",
    Ranking: "6",
  },
  {
    DateTime: "21/03/2022 23:28",
    Ranking: "4",
  },
  {
    DateTime: "22/03/2022 21:56",
    Ranking: "4",
  },
  {
    DateTime: "23/03/2022 16:48",
    Ranking: "4",
  },
  {
    DateTime: "25/03/2022 09:09",
    Ranking: "4",
  },
  {
    DateTime: "26/03/2022 14:13",
    Ranking: "3",
  },
  {
    Ranking: 2,
    DateTime: "22/06/2022 07:32",
  },
  {
    Ranking: 6,
    DateTime: "26/03/2022 23:54",
  },
  {
    Ranking: 3,
    DateTime: "28/03/2022 10:57",
  },
  {
    Ranking: 2,
    DateTime: "29/03/2022 19:28",
  },
  {
    Ranking: 4,
    DateTime: "30/03/2022 09:28",
  },
  {
    Ranking: 6,
    DateTime: "30/03/2022 11:37",
  },
  {
    Ranking: 4,
    DateTime: "02/04/2022 00:12",
  },
  {
    Ranking: 4,
    DateTime: "01/04/2022 17:24",
  },
  {
    Ranking: 4,
    DateTime: "03/04/2022 20:28",
  },
  {
    Ranking: 5,
    DateTime: "02/04/2022 20:12",
  },
  {
    Ranking: 4,
    DateTime: "04/04/2022 16:59",
  },
  {
    Ranking: 3,
    DateTime: "05/04/2022 10:07",
  },
  {
    Ranking: 4,
    DateTime: "06/04/2022 12:39",
  },
  {
    Ranking: 1,
    DateTime: "07/04/2022 23:58",
  },
  {
    Ranking: 5,
    DateTime: "09/04/2022 01:35",
  },
  {
    Ranking: 2,
    DateTime: "10/04/2022 00:31",
  },
  {
    Ranking: 4,
    DateTime: "10/04/2022 12:42",
  },
  {
    Ranking: 3,
    DateTime: "11/04/2022 10:21",
  },
  {
    Ranking: 4,
    DateTime: "12/04/2022 19:12",
  },
  {
    Ranking: 3,
    DateTime: "13/04/2022 17:21",
  },
  {
    Ranking: 5,
    DateTime: "14/04/2022 10:32",
  },
  {
    Ranking: 4,
    DateTime: "15/04/2022 15:23",
  },
  {
    Ranking: 4,
    DateTime: "14/04/2022 17:34",
  },
  {
    Ranking: 3,
    DateTime: "17/04/2022 16:53",
  },
  {
    Ranking: 4,
    DateTime: "19/04/2022 20:19",
  },
  {
    Ranking: 3,
    DateTime: "16/04/2022 09:03",
  },
  {
    Ranking: 4,
    DateTime: "18/04/2022 20:21",
  },
  {
    Ranking: 2,
    DateTime: "23/04/2022 09:50",
  },
  {
    Ranking: 2,
    DateTime: "22/04/2022 22:15",
  },
  {
    Ranking: 3,
    DateTime: "24/04/2022 07:12",
  },
  {
    Ranking: 4,
    DateTime: "24/04/2022 11:25",
  },
  {
    Ranking: 6,
    DateTime: "24/04/2022 15:53",
  },
  {
    Ranking: 3,
    DateTime: "20/04/2022 13:45",
  },
  {
    Ranking: 6,
    DateTime: "24/04/2022 17:34",
  },
  {
    Ranking: 2,
    DateTime: "26/04/2022 16:23",
  },
  {
    Ranking: 2,
    DateTime: "28/04/2022 08:06",
  },
  {
    Ranking: 5,
    DateTime: "28/04/2022 14:58",
  },
  {
    Ranking: 3,
    DateTime: "29/04/2022 08:27",
  },
  {
    Ranking: 4,
    DateTime: "30/04/2022 16:32",
  },
  {
    Ranking: 4,
    DateTime: "01/05/2022 01:12",
  },
  {
    Ranking: 3,
    DateTime: "02/05/2022 01:23",
  },
  {
    Ranking: 3,
    DateTime: "03/05/2022 20:25",
  },
  {
    Ranking: 3,
    DateTime: "05/05/2022 20:21",
  },
  {
    Ranking: 2,
    DateTime: "06/05/2022 17:12",
  },
  {
    Ranking: 2,
    DateTime: "07/05/2022 10:36",
  },
  {
    Ranking: 5,
    DateTime: "07/05/2022 22:36",
  },
  {
    Ranking: 6,
    DateTime: "08/05/2022 14:48",
  },
  {
    Ranking: 3,
    DateTime: "10/05/2022 11:54",
  },
  {
    Ranking: 5,
    DateTime: "14/05/2022 16:22",
  },
  {
    Ranking: 6,
    DateTime: "13/05/2022 14:44",
  },
  {
    Ranking: 3,
    DateTime: "12/05/2022 17:36",
  },
  {
    Ranking: 3,
    DateTime: "11/05/2022 18:42",
  },
  {
    Ranking: 6,
    DateTime: "15/05/2022 21:33",
  },
  {
    Ranking: 6,
    DateTime: "15/05/2022 07:12",
  },
  {
    Ranking: 3,
    DateTime: "16/05/2022 22:26",
  },
  {
    Ranking: 6,
    DateTime: "17/05/2022 03:12",
  },
  {
    Ranking: 3,
    DateTime: "19/05/2022 17:20",
  },
  {
    Ranking: 3,
    DateTime: "21/05/2022 03:06",
  },
  {
    Ranking: 5,
    DateTime: "21/05/2022 11:45",
  },
  {
    Ranking: 3,
    DateTime: "23/05/2022 19:11",
  },
  {
    Ranking: 3,
    DateTime: "28/05/2022 10:06",
  },
  {
    Ranking: 2,
    DateTime: "27/05/2022 17:23",
  },
  {
    Ranking: 3,
    DateTime: "26/05/2022 20:34",
  },
  {
    Ranking: 5,
    DateTime: "25/05/2022 11:54",
  },
  {
    Ranking: 3,
    DateTime: "29/05/2022 11:16",
  },
  {
    Ranking: 6,
    DateTime: "30/05/2022 10:12",
  },
  {
    Ranking: 6,
    DateTime: "30/05/2022 23:37",
  },
  {
    Ranking: 4,
    DateTime: "01/06/2022 15:21",
  },
  {
    Ranking: 4,
    DateTime: "02/06/2022 08:44",
  },
  {
    Ranking: 3,
    DateTime: "02/06/2022 21:32",
  },
  {
    Ranking: 4,
    DateTime: "03/06/2022 09:28",
  },
  {
    Ranking: 3,
    DateTime: "04/06/2022 10:23",
  },
  {
    Ranking: 3,
    DateTime: "04/06/2022 10:23",
  },
  {
    Ranking: 5,
    DateTime: "04/06/2022 20:54",
  },
  {
    Ranking: 4,
    DateTime: "08/06/2022 10:57",
  },
  {
    Ranking: 3,
    DateTime: "06/06/2022 20:37",
  },
  {
    Ranking: 4,
    DateTime: "07/06/2022 13:21",
  },
  {
    Ranking: 6,
    DateTime: "09/06/2022 15:12",
  },
  {
    Ranking: 7,
    DateTime: "09/06/2022 23:41",
  },
  {
    Ranking: 7,
    DateTime: "11/06/2022 22:45",
  },
  {
    Ranking: 6,
    DateTime: "11/06/2022 21:21",
  },
  {
    Ranking: 7,
    DateTime: "11/06/2022 22:03",
  },
  {
    Ranking: 6,
    DateTime: "15/06/2022 10:43",
  },
  {
    Ranking: 3,
    DateTime: "14/06/2022 17:54",
  },
  {
    Ranking: 2,
    DateTime: "13/06/2022 11:15",
  },
  {
    Ranking: 3,
    DateTime: "18/06/2022 10:32",
  },
  {
    Ranking: 4,
    DateTime: "17/06/2022 20:36",
  },
  {
    Ranking: 5,
    DateTime: "16/06/2022 17:25",
  },
  {
    Ranking: 4,
    DateTime: "19/06/2022 20:23",
  },
  {
    Ranking: 3,
    DateTime: "20/06/2022 11:42",
  },
  {
    Ranking: 5,
    DateTime: "21/06/2022 14:23",
  },
  {
    Ranking: 6,
    DateTime: "23/06/2022 10:24",
  },
  {
    Ranking: 6,
    DateTime: "26/06/2022 11:27",
  },
  {
    Ranking: 7,
    DateTime: "26/06/2022 14:10",
  },
  {
    Ranking: 6,
    DateTime: "26/06/2022 19:45",
  },
  {
    Ranking: 3,
    DateTime: "27/06/2022 07:40",
  },
  {
    Ranking: 5,
    DateTime: "28/06/2022 11:44",
  },
  {
    Ranking: 5,
    DateTime: "29/06/2022 17:21",
  },
  {
    Ranking: 6,
    DateTime: "01/07/2022 01:40",
  },
  {
    Ranking: 5,
    DateTime: "02/07/2022 01:10",
  },
  {
    Ranking: 4,
    DateTime: "03/07/2022 13:30",
  },
  {
    Ranking: 3,
    DateTime: "04/07/2022 14:23",
  },
  {
    Ranking: 3,
    DateTime: "05/07/2022 11:32",
  },
  {
    Ranking: 6,
    DateTime: "06/07/2022 13:02",
  },
  {
    Ranking: 2,
    DateTime: "07/07/2022 16:43",
  },
  {
    Ranking: 5,
    DateTime: "07/07/2022 18:19",
  },
  {
    Ranking: 3,
    DateTime: "09/07/2022 21:14",
  },
  {
    Ranking: 4,
    DateTime: "10/07/2022 13:08",
  },
  {
    Ranking: 3,
    DateTime: "10/07/2022 20:46",
  },
  {
    Ranking: 3,
    DateTime: "11/07/2022 13:21",
  },
  {
    Ranking: 3,
    DateTime: "12/07/2022 00:50",
  },
  {
    Ranking: 3,
    DateTime: "13/07/2022 18:46",
  },
  {
    Ranking: 3,
    DateTime: "14/07/2022 22:36",
  },
  {
    Ranking: 3,
    DateTime: "15/07/2022 21:42",
  },
  {
    Ranking: 3,
    DateTime: "17/07/2022 11:02",
  },
  {
    Ranking: 4,
    DateTime: "18/07/2022 10:26",
  },
  {
    Ranking: 5,
    DateTime: "19/07/2022 11:44",
  },
  {
    Ranking: 4,
    DateTime: "20/07/2022 17:08",
  },
  {
    Ranking: 4,
    DateTime: "21/07/2022 10:50",
  },
  {
    Ranking: 4,
    DateTime: "22/07/2022 13:24",
  },
  {
    Ranking: 2,
    DateTime: "23/07/2022 12:30",
  },
  {
    Ranking: 5,
    DateTime: "23/07/2022 18:30",
  },
  {
    Ranking: 4,
    DateTime: "24/07/2022 22:00",
  },
  {
    Ranking: 4,
    DateTime: "25/07/2022 12:28",
  },
  {
    Ranking: 6,
    DateTime: "26/07/2022 11:04",
  },
  {
    Ranking: 6,
    DateTime: "28/07/2022 01:35",
  },
  {
    Ranking: 5,
    DateTime: "29/07/2022 09:44",
  },
  {
    Ranking: 3,
    DateTime: "29/07/2022 17:53",
  },
  {
    Ranking: 4,
    DateTime: "30/07/2022 10:57",
  },
  {
    Ranking: 6,
    DateTime: "30/07/2022 13:44",
  },
  {
    Ranking: 6,
    DateTime: "30/07/2022 18:55",
  },
  {
    Ranking: 7,
    DateTime: "31/07/2022 11:24",
  },
  {
    Ranking: 7,
    DateTime: "31/07/2022 16:43",
  },
  {
    Ranking: 6,
    DateTime: "01/08/2022 12:55",
  },
  {
    Ranking: 4,
    DateTime: "02/08/2022 15:27",
  },
  {
    Ranking: 3,
    DateTime: "03/08/2022 21:53",
  },
  {
    Ranking: 3,
    DateTime: "04/08/2022 16:12",
  },
  {
    Ranking: 4,
    DateTime: "05/08/2022 20:36",
  },
  {
    Ranking: 4,
    DateTime: "07/08/2022 11:21",
  },
  {
    Ranking: 5,
    DateTime: "08/08/2022 12:05",
  },
  {
    Ranking: 7,
    DateTime: "09/08/2022 13:24",
  },
  {
    Ranking: 4,
    DateTime: "10/08/2022 15:02",
  },
  {
    Ranking: 2,
    DateTime: "11/08/2022 20:12",
  },
  {
    Ranking: 5,
    DateTime: "12/08/2022 14:43",
  },
  {
    Ranking: 5,
    DateTime: "12/08/2022 17:01",
  },
  {
    Ranking: 2,
    DateTime: "13/08/2022 23:43",
  },
  {
    Ranking: 1,
    DateTime: "14/08/2022 06:13",
  },
  {
    Ranking: 3,
    DateTime: "14/08/2022 22:43",
  },
  {
    Ranking: 2,
    DateTime: "15/08/2022 23:14",
  },
  {
    Ranking: 6,
    DateTime: "16/08/2022 22:42",
  },
  {
    Ranking: 6,
    DateTime: "17/08/2022 20:50",
  },
  {
    Ranking: 3,
    DateTime: "19/08/2022 18:28",
  },
  {
    Ranking: 3,
    DateTime: "20/08/2022 18:32",
  },
  {
    Ranking: 4,
    DateTime: "20/08/2022 23:12",
  },
  {
    Ranking: 6,
    DateTime: "21/08/2022 03:13",
  },
  {
    Ranking: 6,
    DateTime: "21/08/2022 08:34",
  },
  {
    Ranking: 2,
    DateTime: "22/08/2022 12:12",
  },
  {
    Ranking: 3,
    DateTime: "22/08/2022 23:16",
  },
  {
    Ranking: 4,
    DateTime: "23/08/2022 21:29",
  },
  {
    Ranking: 4,
    DateTime: "25/08/2022 14:51",
  },
  {
    Ranking: 6,
    DateTime: "25/08/2022 16:22",
  },
  {
    Ranking: 7,
    DateTime: "25/08/2022 19:19",
  },
  {
    Ranking: 6,
    DateTime: "26/08/2022 12:40",
  },
  {
    Ranking: 1,
    DateTime: "29/08/2022 11:23",
  },
  {
    Ranking: 2,
    DateTime: "29/08/2022 14:35",
  },
  {
    Ranking: 4,
    DateTime: "30/08/2022 09:44",
  },
  {
    Ranking: 3,
    DateTime: "31/08/2022 11:11",
  },
  {
    Ranking: 6,
    DateTime: "01/09/2022 09:07",
  },
  {
    Ranking: 3,
    DateTime: "02/09/2022 15:34",
  },
  {
    Ranking: 4,
    DateTime: "02/09/2022 23:46",
  },
  {
    Ranking: 5,
    DateTime: "03/09/2022 09:26",
  },
  {
    Ranking: 4,
    DateTime: "04/09/2022 09:43",
  },
  {
    Ranking: 4,
    DateTime: "05/09/2022 09:32",
  },
  {
    Ranking: 4,
    DateTime: "06/09/2022 18:43",
  },
  {
    Ranking: 4,
    DateTime: "07/09/2022 09:41",
  },
  {
    Ranking: 6,
    DateTime: "08/09/2022 23:21",
  },
  {
    Ranking: 5,
    DateTime: "09/09/2022 09:54",
  },
  {
    Ranking: 6,
    DateTime: "09/09/2022 16:44",
  },
  {
    Ranking: 6,
    DateTime: "10/09/2022 13:21",
  },
  {
    Ranking: 7,
    DateTime: "10/09/2022 18:58",
  },
  {
    Ranking: 5,
    DateTime: "11/09/2022 10:43",
  },
  {
    Ranking: 3,
    DateTime: "12/09/2022 10:49",
  },
  {
    Ranking: 4,
    DateTime: "13/09/2022 14:42",
  },
  {
    Ranking: 4,
    DateTime: "14/09/2022 16:04",
  },
  {
    Ranking: 5,
    DateTime: "15/09/2022 16:12",
  },
  {
    Ranking: 4,
    DateTime: "16/09/2022 13:24",
  },
  {
    Ranking: 4,
    DateTime: "17/09/2022 13:36",
  },
  {
    Ranking: 6,
    DateTime: "18/09/2022 22:15",
  },
  {
    Ranking: 3,
    DateTime: "20/09/2022 12:45",
  },
  {
    Ranking: 4,
    DateTime: "21/09/2022 14:43",
  },
  {
    Ranking: 3,
    DateTime: "22/09/2022 18:44",
  },
  {
    Ranking: 2,
    DateTime: "23/09/2022 17:45",
  },
  {
    Ranking: 3,
    DateTime: "24/09/2022 16:45",
  },
  {
    Ranking: 4,
    DateTime: "25/09/2022 02:38",
  },
  {
    Ranking: 3,
    DateTime: "25/09/2022 18:24",
  },
  {
    Ranking: 3,
    DateTime: "27/09/2022 13:17",
  },
  {
    Ranking: 4,
    DateTime: "28/09/2022 14:33",
  },
  {
    Ranking: 5,
    DateTime: "30/09/2022 13:48",
  },
  {
    Ranking: 5,
    DateTime: "01/10/2022 10:35",
  },
  {
    Ranking: 6,
    DateTime: "02/10/2022 01:25",
  },
  {
    Ranking: 5,
    DateTime: "02/10/2022 03:54",
  },
  {
    Ranking: 5,
    DateTime: "02/10/2022 14:34",
  },
  {
    Ranking: 4,
    DateTime: "03/10/2022 15:12",
  },
  {
    Ranking: 3,
    DateTime: "04/10/2022 10:48",
  },
  {
    Ranking: 3,
    DateTime: "04/10/2022 23:42",
  },
  {
    Ranking: 3,
    DateTime: "05/10/2022 16:34",
  },
  {
    Ranking: 3,
    DateTime: "06/10/2022 23:55",
  },
  {
    Ranking: 5,
    DateTime: "07/10/2022 10:42",
  },
  {
    Ranking: 4,
    DateTime: "08/10/2022 12:48",
  },
  {
    Ranking: 3,
    DateTime: "08/10/2022 17:35",
  },
  {
    Ranking: 4,
    DateTime: "09/10/2022 10:52",
  },
  {
    Ranking: 4,
    DateTime: "09/10/2022 22:16",
  },
  {
    Ranking: 4,
    DateTime: "10/10/2022 10:34",
  },
  {
    Ranking: 3,
    DateTime: "11/10/2022 10:40",
  },
  {
    Ranking: 2,
    DateTime: "11/10/2022 20:12",
  },
  {
    Ranking: 3,
    DateTime: "12/10/2022 00:43",
  },
  {
    Ranking: 4,
    DateTime: "12/10/2022 11:20",
  },
  {
    Ranking: 3,
    DateTime: "14/10/2022 14:24",
  },
  {
    Ranking: 3,
    DateTime: "15/10/2022 18:16",
  },
  {
    Ranking: 5,
    DateTime: "16/10/2022 00:58",
  },
  {
    Ranking: 3,
    DateTime: "17/10/2022 12:27",
  },
  {
    Ranking: 4,
    DateTime: "18/10/2022 09:59",
  },
  {
    Ranking: 5,
    DateTime: "19/10/2022 01:30",
  },
  {
    Ranking: 3,
    DateTime: "20/10/2022 19:23",
  },
  {
    Ranking: 4,
    DateTime: "21/10/2022 06:35",
  },
  {
    Ranking: 4,
    DateTime: "23/10/2022 13:54",
  },
  {
    Ranking: 5,
    DateTime: "23/10/2022 15:03",
  },
  {
    Ranking: 6,
    DateTime: "23/10/2022 16:44",
  },
  {
    Ranking: 6,
    DateTime: "23/10/2022 19:55",
  },
  {
    Ranking: 4,
    DateTime: "24/10/2022 11:04",
  },
  {
    Ranking: 3,
    DateTime: "25/10/2022 18:23",
  },
  {
    Ranking: 4,
    DateTime: "26/10/2022 13:16",
  },
  {
    Ranking: 5,
    DateTime: "27/10/2022 11:43",
  },
  {
    Ranking: 3,
    DateTime: "28/10/2022 15:43",
  },
  {
    Ranking: 5,
    DateTime: "29/10/2022 12:15",
  },
  {
    Ranking: 3,
    DateTime: "29/10/2022 20:20",
  },
  {
    Ranking: 3,
    DateTime: "30/10/2022 15:14",
  },
  {
    Ranking: 5,
    DateTime: "31/10/2022 10:25",
  },
  {
    Ranking: 4,
    DateTime: "01/11/2022 10:32",
  },
  {
    Ranking: 5,
    DateTime: "02/11/2022 12:30",
  },
  {
    Ranking: 3,
    DateTime: "03/11/2022 23:45",
  },
  {
    Ranking: 4,
    DateTime: "03/11/2022 17:55",
  },
  {
    Ranking: 6,
    DateTime: "04/11/2022 23:50",
  },
  {
    Ranking: 7,
    DateTime: "05/11/2022 00:02",
  },
  {
    Ranking: 7,
    DateTime: "05/11/2022 00:42",
  },
  {
    Ranking: 3,
    DateTime: "06/11/2022 03:20",
  },
  {
    Ranking: 3,
    DateTime: "07/11/2022 14:34",
  },
  {
    Ranking: 6,
    DateTime: "07/11/2022 20:04",
  },
  {
    Ranking: 2,
    DateTime: "08/11/2022 17:21",
  },
  {
    Ranking: 5,
    DateTime: "09/11/2022 12:13",
  },
  {
    Ranking: 2,
    DateTime: "10/11/2022 19:38",
  },
  {
    Ranking: 5,
    DateTime: "11/11/2022 09:12",
  },
  {
    Ranking: 4,
    DateTime: "12/11/2022 13:23",
  },
  {
    Ranking: 2,
    DateTime: "13/11/2022 17:43",
  },
  {
    Ranking: 4,
    DateTime: "14/11/2022 10:48",
  },
  {
    Ranking: 3,
    DateTime: "15/11/2022 20:04",
  },
  {
    Ranking: 2,
    DateTime: "16/11/2022 17:25",
  },
  {
    Ranking: 3,
    DateTime: "17/11/2022 09:10",
  },
  {
    Ranking: 4,
    DateTime: "18/11/2022 10:05",
  },
  {
    Ranking: 4,
    DateTime: "18/11/2022 18:21",
  },
  {
    Ranking: 4,
    DateTime: "19/11/2022 15:50",
  },
  {
    Ranking: 3,
    DateTime: "19/11/2022 19:27",
  },
  {
    Ranking: 3,
    DateTime: "20/11/2022 01:03",
  },
  {
    Ranking: 3,
    DateTime: "20/11/2022 18:26",
  },
  {
    Ranking: 2,
    DateTime: "21/11/2022 18:28",
  },
  {
    Ranking: 5,
    DateTime: "22/11/2022 10:44",
  },
  {
    Ranking: 6,
    DateTime: "23/11/2022 12:14",
  },
  {
    Ranking: 7,
    DateTime: "23/11/2022 17:06",
  },
  {
    Ranking: 4,
    DateTime: "24/11/2022 14:45",
  },
  {
    Ranking: 4,
    DateTime: "25/11/2022 11:06",
  },
  {
    Ranking: 4,
    DateTime: "26/11/2022 16:53",
  },
  {
    Ranking: 3,
    DateTime: "27/11/2022 17:32",
  },
  {
    Ranking: 3,
    DateTime: "28/11/2022 00:57",
  },
  {
    Ranking: 4,
    DateTime: "28/11/2022 17:46",
  },
  {
    Ranking: 3,
    DateTime: "29/11/2022 15:45",
  },
  {
    Ranking: 3,
    DateTime: "30/11/2022 12:52",
  },
  {
    Ranking: 3,
    DateTime: "01/12/2022 16:34",
  },
  {
    Ranking: 3,
    DateTime: "02/12/2022 12:52",
  },
  {
    Ranking: 4,
    DateTime: "03/12/2022 16:21",
  },
  {
    Ranking: 4,
    DateTime: "04/12/2022 12:33",
  },
  {
    Ranking: 3,
    DateTime: "05/12/2022 00:25",
  },
  {
    Ranking: 3,
    DateTime: "05/12/2022 13:03",
  },
  {
    Ranking: 4,
    DateTime: "06/12/2022 10:10",
  },
  {
    Ranking: 4,
    DateTime: "07/12/2022 09:45",
  },
  {
    Ranking: 3,
    DateTime: "08/12/2022 22:59",
  },
  {
    Ranking: 5,
    DateTime: "09/12/2022 10:27",
  },
  {
    Ranking: 4,
    DateTime: "09/12/2022 19:43",
  },
  {
    Ranking: 3,
    DateTime: "10/12/2022 03:12",
  },
  {
    Ranking: 4,
    DateTime: "10/12/2022 16:56",
  },
  {
    Ranking: 4,
    DateTime: "11/12/2022 09:41",
  },
  {
    Ranking: 2,
    DateTime: "12/12/2022 18:19",
  },
  {
    Ranking: 3,
    DateTime: "13/12/2022 15:12",
  },
  {
    Ranking: 3,
    DateTime: "14/12/2022 12:30",
  },
  {
    Ranking: 4,
    DateTime: "15/12/2022 10:45",
  },
  {
    Ranking: 4,
    DateTime: "16/12/2022 10:36",
  },
  {
    Ranking: 4,
    DateTime: "17/12/2022 12:15",
  },
  {
    Ranking: 6,
    DateTime: "17/12/2022 04:19",
  },
  {
    Ranking: 5,
    DateTime: "17/12/2022 12:48",
  },
  {
    Ranking: 3,
    DateTime: "18/12/2022 12:18",
  },
  {
    Ranking: 3,
    DateTime: "19/12/2022 13:17",
  },
  {
    Ranking: 6,
    DateTime: "19/12/2022 15:31",
  },
  {
    Ranking: 1,
    DateTime: "20/12/2022 23:50",
  },
  {
    Ranking: 4,
    DateTime: "21/12/2022 18:38",
  },
  {
    Ranking: 4,
    DateTime: "22/12/2022 11:12",
  },
  {
    Ranking: 3,
    DateTime: "23/12/2022 11:10",
  },
  {
    Ranking: 3,
    DateTime: "24/12/2022 11:08",
  },
  {
    Ranking: 3,
    DateTime: "25/12/2022 11:55",
  },
  {
    Ranking: 5,
    DateTime: "25/12/2022 23:35",
  },
  {
    Ranking: 4,
    DateTime: "26/12/2022 14:03",
  },
  {
    Ranking: 4,
    DateTime: "27/12/2022 16:12",
  },
  {
    Ranking: 5,
    DateTime: "28/12/2022 09:39",
  },
  {
    Ranking: 4,
    DateTime: "29/12/2022 12:52",
  },
  {
    Ranking: 4,
    DateTime: "30/12/2022 11:52",
  },
  {
    Ranking: 3,
    DateTime: "31/12/2022 10:15",
  },
  {
    Ranking: 4,
    DateTime: "31/12/2022 19:52",
  },
  {
    Ranking: 7,
    DateTime: "31/12/2022 21:14",
  },
  {
    Ranking: 5,
    DateTime: "01/01/2023 23:45",
  },
  {
    Ranking: 4,
    DateTime: "02/01/2023 21:23",
  },
  {
    Ranking: 3,
    DateTime: "03/01/2023 14:10",
  },
  {
    Ranking: 4,
    DateTime: "04/01/2023 11:34",
  },
  {
    Ranking: 3,
    DateTime: "05/01/2023 11:03",
  },
  {
    Ranking: 6,
    DateTime: "05/01/2023 13:54",
  },
  {
    Ranking: 7,
    DateTime: "05/01/2023 14:38",
  },
  {
    Ranking: 3,
    DateTime: "06/01/2023 16:33",
  },
  {
    Ranking: 3,
    DateTime: "07/01/2023 00:30",
  },
  {
    Ranking: 5,
    DateTime: "07/01/2023 10:15",
  },
  {
    Ranking: 7,
    DateTime: "07/01/2023 11:47",
  },
  {
    Ranking: 5,
    DateTime: "08/01/2023 12:46",
  },
  {
    Ranking: 4,
    DateTime: "09/01/2023 20:40",
  },
  {
    Ranking: 4,
    DateTime: "10/01/2023 01:04",
  },
  {
    Ranking: 3,
    DateTime: "11/01/2023 11:20",
  },
  {
    Ranking: 4,
    DateTime: "12/01/2023 11:03",
  },
  {
    Ranking: 4,
    DateTime: "13/01/2023 10:25",
  },
  {
    Ranking: 3,
    DateTime: "14/01/2023 11:00",
  },
  {
    Ranking: 4,
    DateTime: "14/01/2023 17:43",
  },
  {
    Ranking: 5,
    DateTime: "15/01/2023 03:23",
  },
  {
    Ranking: 4,
    DateTime: "15/01/2023 17:34",
  },
  {
    Ranking: 5,
    DateTime: "16/01/2023 09:43",
  },
  {
    Ranking: 4,
    DateTime: "16/01/2023 16:54",
  },
  {
    Ranking: 4,
    DateTime: "17/01/2023 09:54",
  },
  {
    Ranking: 3,
    DateTime: "18/01/2023 09:43",
  },
  {
    Ranking: 4,
    DateTime: "19/01/2023 13:01",
  },
  {
    Ranking: 4,
    DateTime: "20/01/2023 09:57",
  },
  {
    Ranking: 4,
    DateTime: "21/01/2023 10:43",
  },
  {
    Ranking: 5,
    DateTime: "21/01/2023 16:32",
  },
  {
    Ranking: 3,
    DateTime: "22/01/2023 16:14",
  },
  {
    Ranking: 4,
    DateTime: "23/01/2023 09:37",
  },
  {
    Ranking: 3,
    DateTime: "24/01/2023 11:25",
  },
  {
    Ranking: 3,
    DateTime: "25/01/2023 01:59",
  },
  {
    Ranking: 5,
    DateTime: "25/01/2023 14:23",
  },
  {
    Ranking: 4,
    DateTime: "26/01/2023 12:16",
  },
  {
    Ranking: 4,
    DateTime: "27/01/2023 12:00",
  },
  {
    Ranking: 4,
    DateTime: "28/01/2023 12:25",
  },
  {
    Ranking: 5,
    DateTime: "28/01/2023 18:03",
  },
  {
    Ranking: 4,
    DateTime: "29/01/2023 17:04",
  },
  {
    Ranking: 3,
    DateTime: "30/01/2023 15:24",
  },
  {
    Ranking: 3,
    DateTime: "31/01/2023 10:36",
  },
  {
    Ranking: 4,
    DateTime: "01/02/2023 12:04",
  },
  {
    Ranking: 5,
    DateTime: "01/02/2023 11:00",
  },
  {
    Ranking: 3,
    DateTime: "02/02/2023 13:00",
  },
  {
    Ranking: 2,
    DateTime: "03/02/2023 12:07",
  },
  {
    Ranking: 5,
    DateTime: "03/02/2023 09:53",
  },
  {
    Ranking: 4,
    DateTime: "04/02/2023 13:16",
  },
  {
    Ranking: 4,
    DateTime: "05/02/2023 12:28",
  },
  {
    Ranking: 5,
    DateTime: "06/02/2023 11:48",
  },
  {
    Ranking: 3,
    DateTime: "07/02/2023 11:06",
  },
  {
    Ranking: 5,
    DateTime: "07/02/2023 23:43",
  },
  {
    Ranking: 6,
    DateTime: "08/02/2023 10:45",
  },
  {
    Ranking: 5,
    DateTime: "09/02/2023 12:09",
  },
  {
    Ranking: 5,
    DateTime: "10/02/2023 10:31",
  },
  {
    Ranking: 5,
    DateTime: "11/02/2023 08:55",
  },
  {
    Ranking: 3,
    DateTime: "12/02/2023 18:34",
  },
  {
    Ranking: 4,
    DateTime: "13/02/2023 10:55",
  },
  {
    Ranking: 5,
    DateTime: "19/02/2023 12:26",
  },
  {
    Ranking: 5,
    DateTime: "14/02/2023 11:15",
  },
  {
    Ranking: 5,
    DateTime: "15/02/2023 11:23",
  },
  {
    Ranking: 4,
    DateTime: "16/02/2023 12:23",
  },
  {
    Ranking: 4,
    DateTime: "17/02/2023 11:13",
  },
  {
    Ranking: 4,
    DateTime: "17/02/2023 16:32",
  },
  {
    Ranking: 5,
    DateTime: "18/02/2023 11:32",
  },
  {
    Ranking: 3,
    DateTime: "20/02/2023 16:31",
  },
  {
    Ranking: 5,
    DateTime: "21/02/2023 09:09",
  },
  {
    Ranking: 5,
    DateTime: "21/02/2023 13:55",
  },
  {
    Ranking: 5,
    DateTime: "22/02/2023 12:47",
  },
  {
    Ranking: 4,
    DateTime: "23/02/2023 15:43",
  },
  {
    Ranking: 4,
    DateTime: "24/02/2023 12:06",
  },
  {
    Ranking: 3,
    DateTime: "25/02/2023 23:06",
  },
  {
    Ranking: 6,
    DateTime: "26/02/2023 17:40",
  },
  {
    Ranking: 4,
    DateTime: "27/02/2023 12:12",
  },
  {
    Ranking: 5,
    DateTime: "27/02/2023 18:18",
  },
  {
    Ranking: 3,
    DateTime: "28/02/2023 23:03",
  },
  {
    Ranking: 4,
    DateTime: "01/03/2023 12:04",
  },
  {
    Ranking: 5,
    DateTime: "01/03/2023 18:35",
  },
  {
    Ranking: 4,
    DateTime: "02/03/2023 10:42",
  },
  {
    Ranking: 6,
    DateTime: "02/03/2023 17:12",
  },
  {
    Ranking: 4,
    DateTime: "03/03/2023 10:45",
  },
  {
    Ranking: 4,
    DateTime: "04/03/2023 13:44",
  },
  {
    Ranking: 3,
    DateTime: "05/03/2023 13:40",
  },
  {
    Ranking: 4,
    DateTime: "06/03/2023 11:34",
  },
  {
    Ranking: 6,
    DateTime: "06/03/2023 20:48",
  },
  {
    Ranking: 6,
    DateTime: "07/03/2023 11:54",
  },
  {
    Ranking: 4,
    DateTime: "08/03/2023 11:44",
  },
  {
    Ranking: 4,
    DateTime: "09/03/2023 12:47",
  },
  {
    Ranking: 4,
    DateTime: "10/03/2023 11:21",
  },
  {
    Ranking: 4,
    DateTime: "10/03/2023 19:18",
  },
  {
    Ranking: 5,
    DateTime: "11/03/2023 12:53",
  },
  {
    Ranking: 4,
    DateTime: "12/03/2023 19:22",
  },
  {
    Ranking: 3,
    DateTime: "13/03/2023 23:14",
  },
  {
    Ranking: 3,
    DateTime: "14/03/2023 12:42",
  },
  {
    Ranking: 6,
    DateTime: "15/03/2023 11:02",
  },
  {
    Ranking: 6,
    DateTime: "15/03/2023 12:53",
  },
  {
    Ranking: 4,
    DateTime: "16/03/2023 11:46",
  },
  {
    Ranking: 3,
    DateTime: "17/03/2023 08:23",
  },
  {
    Ranking: 3,
    DateTime: "17/03/2023 23:45",
  },
  {
    Ranking: 4,
    DateTime: "18/03/2023 04:23",
  },
  {
    Ranking: 5,
    DateTime: "18/03/2023 13:09",
  },
  {
    Ranking: 5,
    DateTime: "19/03/2023 12:38",
  },
  {
    Ranking: 4,
    DateTime: "19/03/2023 23:23",
  },
  {
    Ranking: 3,
    DateTime: "20/03/2023 18:58",
  },
  {
    Ranking: 4,
    DateTime: "21/03/2023 11:05",
  },
  {
    Ranking: 5,
    DateTime: "21/03/2023 18:11",
  },
  {
    Ranking: 5,
    DateTime: "22/03/2023 10:54",
  },
  {
    Ranking: 5,
    DateTime: "23/03/2023 09:49",
  },
  {
    Ranking: 5,
    DateTime: "23/03/2023 18:54",
  },
  {
    Ranking: 5,
    DateTime: "24/03/2023 10:08",
  },
  {
    Ranking: 4,
    DateTime: "25/03/2023 11:33",
  },
  {
    Ranking: 4,
    DateTime: "25/03/2023 21:40",
  },
  {
    Ranking: 4,
    DateTime: "26/03/2023 11:42",
  },
  {
    Ranking: 4,
    DateTime: "27/03/2023 10:31",
  },
  {
    Ranking: 4,
    DateTime: "28/03/2023 10:25",
  },
  {
    Ranking: 6,
    DateTime: "28/03/2023 19:12",
  },
  {
    Ranking: 4,
    DateTime: "29/03/2023 12:31",
  },
  {
    Ranking: 4,
    DateTime: "30/03/2023 11:12",
  },
  {
    Ranking: 4,
    DateTime: "31/03/2023 10:39",
  },
  {
    Ranking: 4,
    DateTime: "31/03/2023 16:43",
  },
  {
    Ranking: 4,
    DateTime: "01/04/2023 16:34",
  },
  {
    Ranking: 4,
    DateTime: "02/04/2023 18:04",
  },
  {
    Ranking: 5,
    DateTime: "02/04/2023 22:36",
  },
  {
    Ranking: 3,
    DateTime: "03/04/2023 14:07",
  },
  {
    Ranking: 4,
    DateTime: "04/04/2023 11:23",
  },
  {
    Ranking: 3,
    DateTime: "04/04/2023 20:43",
  },
  {
    Ranking: 4,
    DateTime: "05/04/2023 13:18",
  },
  {
    Ranking: 4,
    DateTime: "06/04/2023 11:46",
  },
  {
    Ranking: 4,
    DateTime: "07/04/2023 10:24",
  },
  {
    Ranking: 4,
    DateTime: "08/04/2023 14:00",
  },
  {
    Ranking: 4,
    DateTime: "08/04/2023 18:06",
  },
  {
    Ranking: 4,
    DateTime: "09/04/2023 15:12",
  },
  {
    Ranking: 5,
    DateTime: "10/04/2023 12:31",
  },
  {
    Ranking: 5,
    DateTime: "10/04/2023 22:30",
  },
  {
    Ranking: 3,
    DateTime: "11/04/2023 16:22",
  },
  {
    Ranking: 4,
    DateTime: "12/04/2023 11:42",
  },
  {
    Ranking: 4,
    DateTime: "13/04/2023 11:36",
  },
  {
    Ranking: 4,
    DateTime: "14/04/2023 00:32",
  },
  {
    Ranking: 4,
    DateTime: "14/04/2023 16:11",
  },
  {
    Ranking: 2,
    DateTime: "16/04/2023 03:35",
  },
  {
    Ranking: 4,
    DateTime: "16/04/2023 16:12",
  },
  {
    Ranking: 4,
    DateTime: "17/04/2023 14:44",
  },
  {
    Ranking: 4,
    DateTime: "18/04/2023 13:21",
  },
  {
    Ranking: 3,
    DateTime: "19/04/2023 00:14",
  },
  {
    Ranking: 5,
    DateTime: "19/04/2023 12:17",
  },
  {
    Ranking: 5,
    DateTime: "20/04/2023 12:14",
  },
  {
    Ranking: 4,
    DateTime: "21/04/2023 10:20",
  },
  {
    Ranking: 4,
    DateTime: "21/04/2023 18:24",
  },
  {
    Ranking: 4,
    DateTime: "22/04/2023 11:38",
  },
  {
    Ranking: 4,
    DateTime: "22/04/2023 20:05",
  },
  {
    Ranking: 6,
    DateTime: "23/04/2023 07:57",
  },
  {
    Ranking: 4,
    DateTime: "23/04/2023 17:26",
  },
  {
    Ranking: 4,
    DateTime: "24/04/2023 11:53",
  },
  {
    Ranking: 4,
    DateTime: "25/04/2023 11:09",
  },
  {
    Ranking: 4,
    DateTime: "26/04/2023 11:03",
  },
  {
    Ranking: 4,
    DateTime: "27/04/2023 10:53",
  },
  {
    Ranking: 4,
    DateTime: "28/04/2023 11:32",
  },
  {
    Ranking: 5,
    DateTime: "29/04/2023 10:32",
  },
  {
    Ranking: 3,
    DateTime: "29/04/2023 17:43",
  },
  {
    Ranking: 5,
    DateTime: "30/04/2023 11:24",
  },
  {
    Ranking: 4,
    DateTime: "01/05/2023 11:23",
  },
  {
    Ranking: 6,
    DateTime: "01/05/2023 21:01",
  },
  {
    Ranking: 6,
    DateTime: "02/05/2023 10:32",
  },
  {
    Ranking: 4,
    DateTime: "03/05/2023 12:02",
  },
  {
    Ranking: 4,
    DateTime: "04/05/2023 11:14",
  },
  {
    Ranking: 4,
    DateTime: "05/05/2023 11:23",
  },
  {
    Ranking: 6,
    DateTime: "06/05/2023 11:43",
  },
  {
    Ranking: 4,
    DateTime: "07/05/2023 14:21",
  },
  {
    Ranking: 4,
    DateTime: "08/05/2023 12:15",
  },
  {
    Ranking: 5,
    DateTime: "09/05/2023 11:12",
  },
  {
    Ranking: 3,
    DateTime: "09/05/2023 14:12",
  },
  {
    Ranking: 4,
    DateTime: "10/05/2023 11:54",
  },
  {
    Ranking: 3,
    DateTime: "11/05/2023 10:06",
  },
  {
    Ranking: 4,
    DateTime: "11/05/2023 11:12",
  },
  {
    Ranking: 4,
    DateTime: "12/05/2023 14:42",
  },
  {
    Ranking: 5,
    DateTime: "13/05/2023 11:25",
  },
  {
    Ranking: 5,
    DateTime: "14/05/2023 09:52",
  },
  {
    Ranking: 4,
    DateTime: "15/05/2023 13:26",
  },
  {
    Ranking: 4,
    DateTime: "16/05/2023 11:23",
  },
  {
    Ranking: 2,
    DateTime: "16/05/2023 19:49",
  },
  {
    Ranking: 4,
    DateTime: "17/05/2023 10:34",
  },
  {
    Ranking: 4,
    DateTime: "18/05/2023 12:30",
  },
  {
    Ranking: 4,
    DateTime: "19/05/2023 12:23",
  },
  {
    Ranking: 3,
    DateTime: "20/05/2023 15:25",
  },
  {
    Ranking: 4,
    DateTime: "21/05/2023 13:47",
  },
  {
    Ranking: 5,
    DateTime: "22/05/2023 11:34",
  },
  {
    Ranking: 4,
    DateTime: "23/05/2023 11:07",
  },
  {
    Ranking: 4,
    DateTime: "24/05/2023 19:34",
  },
  {
    Ranking: 4,
    DateTime: "25/05/2023 13:09",
  },
  {
    Ranking: 2,
    DateTime: "26/05/2023 21:51",
  },
  {
    Ranking: 4,
    DateTime: "27/05/2023 12:24",
  },
  {
    Ranking: 3,
    DateTime: "28/05/2023 11:09",
  },
  {
    Ranking: 4,
    DateTime: "29/05/2023 18:01",
  },
  {
    Ranking: 4,
    DateTime: "30/05/2023 12:40",
  },
  {
    Ranking: 3,
    DateTime: "31/05/2023 09:13",
  },
  {
    Ranking: 4,
    DateTime: "01/06/2023 13:23",
  },
  {
    Ranking: 3,
    DateTime: "02/06/2023 12:05",
  },
  {
    Ranking: 4,
    DateTime: "03/06/2023 01:46",
  },
  {
    Ranking: 2,
    DateTime: "05/06/2023 11:45",
  },
  {
    Ranking: 3,
    DateTime: "06/06/2023 10:20",
  },
  {
    Ranking: 3,
    DateTime: "07/06/2023 11:12",
  },
  {
    Ranking: 2,
    DateTime: "08/06/2023 13:56",
  },
  {
    Ranking: 2,
    DateTime: "09/06/2023 13:18",
  },
  {
    Ranking: 6,
    DateTime: "10/06/2023 12:12",
  },
  {
    Ranking: 5,
    DateTime: "10/06/2023 22:08",
  },
  {
    Ranking: 4,
    DateTime: "12/06/2023 12:36",
  },
  {
    Ranking: 3,
    DateTime: "13/06/2023 11:24",
  },
  {
    Ranking: 4,
    DateTime: "14/06/2023 10:25",
  },
  {
    Ranking: 4,
    DateTime: "15/06/2023 13:12",
  },
  {
    Ranking: 4,
    DateTime: "16/06/2023 10:22",
  },
  {
    Ranking: 3,
    DateTime: "16/06/2023 20:23",
  },
  {
    Ranking: 4,
    DateTime: "17/06/2023 10:32",
  },
  {
    Ranking: 4,
    DateTime: "19/06/2023 22:04",
  },
  {
    Ranking: 5,
    DateTime: "18/06/2023 07:36",
  },
  {
    Ranking: 3,
    DateTime: "18/06/2023 17:23",
  },
  {
    Ranking: 4,
    DateTime: "19/06/2023 13:30",
  },
  {
    Ranking: 3,
    DateTime: "19/06/2023 23:20",
  },
  {
    Ranking: 7,
    DateTime: "20/06/2023 08:32",
  },
  {
    Ranking: 6,
    DateTime: "20/06/2023 14:44",
  },
  {
    Ranking: 4,
    DateTime: "21/06/2023 09:46",
  },
  {
    Ranking: 5,
    DateTime: "22/06/2023 11:14",
  },
  {
    Ranking: 4,
    DateTime: "23/06/2023 14:15",
  },
  {
    Ranking: 5,
    DateTime: "24/06/2023 02:12",
  },
  {
    Ranking: 4,
    DateTime: "25/06/2023 11:12",
  },
  {
    Ranking: 7,
    DateTime: "25/06/2023 15:12",
  },
  {
    Ranking: 3,
    DateTime: "26/06/2023 20:03",
  },
  {
    Ranking: 3,
    DateTime: "26/06/2023 23:03",
  },
  {
    Ranking: 5,
    DateTime: "27/06/2023 10:37",
  },
  {
    Ranking: 7,
    DateTime: "27/06/2023 14:29",
  },
  {
    Ranking: 5,
    DateTime: "28/06/2023 10:22",
  },
  {
    Ranking: 6,
    DateTime: "28/06/2023 14:46",
  },
  {
    Ranking: 4,
    DateTime: "29/06/2023 12:33",
  },
  {
    Ranking: 5,
    DateTime: "30/06/2023 11:01",
  },
  {
    Ranking: 3,
    DateTime: "30/06/2023 22:12",
  },
  {
    Ranking: 4,
    DateTime: "01/07/2023 12:23",
  },
  {
    Ranking: 4,
    DateTime: "02/07/2023 15:24",
  },
  {
    Ranking: 4,
    DateTime: "03/07/2023 11:31",
  },
  {
    Ranking: 3,
    DateTime: "04/07/2023 09:59",
  },
  {
    Ranking: 5,
    DateTime: "04/07/2023 11:59",
  },
  {
    Ranking: 2,
    DateTime: "05/07/2023 22:39",
  },
  {
    Ranking: 4,
    DateTime: "06/07/2023 11:12",
  },
  {
    Ranking: 6,
    DateTime: "06/07/2023 13:59",
  },
  {
    Ranking: 3,
    DateTime: "07/07/2023 17:34",
  },
  {
    Ranking: 6,
    DateTime: "08/07/2023 02:57",
  },
  {
    Ranking: 6,
    DateTime: "09/07/2023 03:53",
  },
  {
    Ranking: 5,
    DateTime: "09/07/2023 02:21",
  },
  {
    Ranking: 4,
    DateTime: "10/07/2023 00:07",
  },
  {
    Ranking: 5,
    DateTime: "10/07/2023 11:40",
  },
  {
    Ranking: 4,
    DateTime: "11/07/2023 11:12",
  },
  {
    Ranking: 4,
    DateTime: "12/07/2023 10:12",
  },
  {
    Ranking: 2,
    DateTime: "12/07/2023 23:07",
  },
  {
    Ranking: 4,
    DateTime: "13/07/2023 11:48",
  },
  {
    Ranking: 4,
    DateTime: "14/07/2023 11:58",
  },
  {
    Ranking: 3,
    DateTime: "14/07/2023 15:12",
  },
  {
    Ranking: 3,
    DateTime: "15/07/2023 11:38",
  },
  {
    Ranking: 4,
    DateTime: "16/07/2023 02:08",
  },
  {
    Ranking: 3,
    DateTime: "17/07/2023 10:17",
  },
  {
    Ranking: 4,
    DateTime: "17/07/2023 16:43",
  },
  {
    Ranking: 3,
    DateTime: "18/07/2023 10:02",
  },
  {
    Ranking: 6,
    DateTime: "18/07/2023 11:26",
  },
  {
    Ranking: 4,
    DateTime: "19/07/2023 11:05",
  },
  {
    Ranking: 3,
    DateTime: "20/07/2023 11:32",
  },
  {
    Ranking: 3,
    DateTime: "21/07/2023 11:13",
  },
  {
    Ranking: 3,
    DateTime: "22/07/2023 08:12",
  },
  {
    Ranking: 3,
    DateTime: "22/07/2023 16:16",
  },
  {
    Ranking: 5,
    DateTime: "23/07/2023 10:47",
  },
  {
    Ranking: 5,
    DateTime: "24/07/2023 12:03",
  },
  {
    Ranking: 3,
    DateTime: "25/07/2023 10:12",
  },
  {
    Ranking: 4,
    DateTime: "26/07/2023 10:24",
  },
  {
    Ranking: 4,
    DateTime: "27/07/2023 11:14",
  },
  {
    Ranking: 3,
    DateTime: "28/07/2023 10:00",
  },
  {
    Ranking: 4,
    DateTime: "28/07/2023 12:19",
  },
  {
    Ranking: 6,
    DateTime: "29/07/2023 23:59",
  },
  {
    Ranking: 4,
    DateTime: "30/07/2023 21:41",
  },
  {
    Ranking: 4,
    DateTime: "31/07/2023 11:12",
  },
  {
    Ranking: 3,
    DateTime: "01/08/2023 10:03",
  },
  {
    Ranking: 4,
    DateTime: "01/08/2023 11:08",
  },
  {
    Ranking: 4,
    DateTime: "02/08/2023 10:23",
  },
  {
    Ranking: 6,
    DateTime: "02/08/2023 18:45",
  },
  {
    Ranking: 7,
    DateTime: "03/08/2023 17:06",
  },
  {
    Ranking: 2,
    DateTime: "05/08/2023 19:35",
  },
  {
    Ranking: 3,
    DateTime: "06/08/2023 09:30",
  },
  {
    Ranking: 4,
    DateTime: "07/08/2023 10:42",
  },
  {
    Ranking: 4,
    DateTime: "08/08/2023 11:12",
  },
  {
    Ranking: 4,
    DateTime: "09/08/2023 00:03",
  },
  {
    Ranking: 4,
    DateTime: "09/08/2023 09:14",
  },
  {
    Ranking: 4,
    DateTime: "10/08/2023 10:55",
  },
  {
    Ranking: 4,
    DateTime: "11/08/2023 11:03",
  },
  {
    Ranking: 4,
    DateTime: "12/08/2023 13:20",
  },
  {
    Ranking: 4,
    DateTime: "13/08/2023 16:46",
  },
  {
    Ranking: 4,
    DateTime: "14/08/2023 10:18",
  },
  {
    Ranking: 2,
    DateTime: "15/08/2023 00:37",
  },
  {
    Ranking: 4,
    DateTime: "15/08/2023 10:58",
  },
  {
    Ranking: 3,
    DateTime: "16/08/2023 11:12",
  },
  {
    Ranking: 6,
    DateTime: "16/08/2023 20:36",
  },
  {
    Ranking: 3,
    DateTime: "18/08/2023 11:12",
  },
  {
    Ranking: 5,
    DateTime: "19/08/2023 08:58",
  },
  {
    Ranking: 2,
    DateTime: "20/08/2023 23:54",
  },
  {
    Ranking: 4,
    DateTime: "21/08/2023 09:16",
  },
  {
    Ranking: 4,
    DateTime: "22/08/2023 10:26",
  },
  {
    Ranking: 5,
    DateTime: "23/08/2023 09:01",
  },
  {
    Ranking: 3,
    DateTime: "24/08/2023 10:34",
  },
  {
    Ranking: 4,
    DateTime: "25/08/2023 09:32",
  },
  {
    Ranking: 4,
    DateTime: "26/08/2023 13:52",
  },
  {
    Ranking: 3,
    DateTime: "27/08/2023 10:33",
  },
  {
    Ranking: 4,
    DateTime: "28/08/2023 15:30",
  },
  {
    Ranking: 5,
    DateTime: "29/08/2023 09:37",
  },
  {
    Ranking: 4,
    DateTime: "30/08/2023 09:41",
  },
  {
    Ranking: 3,
    DateTime: "31/08/2023 13:37",
  },
  {
    Ranking: 3,
    DateTime: "01/09/2023 09:18",
  },
  {
    Ranking: 4,
    DateTime: "01/09/2023 11:23",
  },
  {
    Ranking: 4,
    DateTime: "02/09/2023 18:23",
  },
  {
    Ranking: 3,
    DateTime: "03/09/2023 14:57",
  },
  {
    Ranking: 4,
    DateTime: "04/09/2023 11:23",
  },
  {
    Ranking: 5,
    DateTime: "05/09/2023 09:26",
  },
  {
    Ranking: 3,
    DateTime: "06/09/2023 10:42",
  },
  {
    Ranking: 4,
    DateTime: "07/09/2023 11:04",
  },
  {
    Ranking: 4,
    DateTime: "08/09/2023 08:57",
  },
  {
    Ranking: 4,
    DateTime: "09/09/2023 10:03",
  },
  {
    Ranking: 5,
    DateTime: "09/09/2023 15:03",
  },
  {
    Ranking: 4,
    DateTime: "10/09/2023 00:51",
  },
  {
    Ranking: 5,
    DateTime: "10/09/2023 08:55",
  },
  {
    Ranking: 4,
    DateTime: "10/09/2023 19:38",
  },
  {
    Ranking: 4,
    DateTime: "11/09/2023 10:36",
  },
  {
    Ranking: 6,
    DateTime: "12/09/2023 06:40",
  },
  {
    Ranking: 6,
    DateTime: "12/09/2023 11:42",
  },
  {
    Ranking: 7,
    DateTime: "12/09/2023 17:25",
  },
  {
    Ranking: 4,
    DateTime: "13/09/2023 15:36",
  },
  {
    Ranking: 3,
    DateTime: "14/09/2023 19:00",
  },
  {
    Ranking: 3,
    DateTime: "15/09/2023 19:56",
  },
  {
    Ranking: 4,
    DateTime: "16/09/2023 11:47",
  },
  {
    Ranking: 5,
    DateTime: "16/09/2023 14:42",
  },
  {
    Ranking: 4,
    DateTime: "17/09/2023 16:06",
  },
  {
    Ranking: 4,
    DateTime: "18/09/2023 10:23",
  },
  {
    Ranking: 4,
    DateTime: "19/09/2023 09:52",
  },
  {
    Ranking: 7,
    DateTime: "19/09/2023 10:30",
  },
  {
    Ranking: 7,
    DateTime: "19/09/2023 11:59",
  },
  {
    Ranking: 3,
    DateTime: "20/09/2023 18:28",
  },
  {
    Ranking: 4,
    DateTime: "21/09/2023 10:51",
  },
  {
    Ranking: 4,
    DateTime: "22/09/2023 11:23",
  },
  {
    Ranking: 4,
    DateTime: "23/09/2023 13:55",
  },
  {
    Ranking: 3,
    DateTime: "24/09/2023 12:58",
  },
  {
    Ranking: 3,
    DateTime: "25/09/2023 11:31",
  },
  {
    Ranking: 5,
    DateTime: "26/09/2023 09:59",
  },
  {
    Ranking: 4,
    DateTime: "27/09/2023 10:23",
  },
  {
    Ranking: 4,
    DateTime: "28/09/2023 11:01",
  },
  {
    Ranking: 4,
    DateTime: "29/09/2023 10:42",
  },
  {
    Ranking: 4,
    DateTime: "30/09/2023 00:05",
  },
  {
    Ranking: 1,
    DateTime: "30/09/2023 11:03",
  },
  {
    Ranking: 3,
    DateTime: "01/10/2023 05:22",
  },
  {
    Ranking: 4,
    DateTime: "01/10/2023 14:23",
  },
  {
    Ranking: 4,
    DateTime: "01/10/2023 18:22",
  },
  {
    Ranking: 4,
    DateTime: "02/10/2023 10:43",
  },
  {
    Ranking: 4,
    DateTime: "03/10/2023 11:57",
  },
  {
    Ranking: 3,
    DateTime: "04/10/2023 11:23",
  },
  {
    Ranking: 3,
    DateTime: "05/10/2023 11:28",
  },
  {
    Ranking: 5,
    DateTime: "05/10/2023 12:13",
  },
  {
    Ranking: 2,
    DateTime: "07/10/2023 09:50",
  },
  {
    Ranking: 5,
    DateTime: "08/10/2023 00:59",
  },
  {
    Ranking: 3,
    DateTime: "08/10/2023 21:06",
  },
  {
    Ranking: 4,
    DateTime: "09/10/2023 11:37",
  },
  {
    Ranking: 4,
    DateTime: "10/10/2023 09:45",
  },
  {
    Ranking: 5,
    DateTime: "11/10/2023 09:43",
  },
  {
    Ranking: 4,
    DateTime: "12/10/2023 11:47",
  },
  {
    Ranking: 4,
    DateTime: "13/10/2023 11:07",
  },
  {
    Ranking: 3,
    DateTime: "14/10/2023 01:17",
  },
  {
    Ranking: 3,
    DateTime: "14/10/2023 13:23",
  },
  {
    Ranking: 2,
    DateTime: "15/10/2023 17:12",
  },
  {
    Ranking: 2,
    DateTime: "16/10/2023 01:48",
  },
  {
    Ranking: 4,
    DateTime: "16/10/2023 12:06",
  },
  {
    Ranking: 4,
    DateTime: "18/10/2023 11:23",
  },
  {
    Ranking: 3,
    DateTime: "19/10/2023 11:07",
  },
  {
    Ranking: 4,
    DateTime: "20/10/2023 10:15",
  },
  {
    Ranking: 4,
    DateTime: "21/10/2023 13:42",
  },
  {
    Ranking: 4,
    DateTime: "22/10/2023 13:16",
  },
  {
    Ranking: 4,
    DateTime: "23/10/2023 13:15",
  },
  {
    Ranking: 4,
    DateTime: "24/10/2023 10:11",
  },
  {
    Ranking: 4,
    DateTime: "24/10/2023 21:43",
  },
  {
    Ranking: 4,
    DateTime: "25/10/2023 11:03",
  },
  {
    Ranking: 4,
    DateTime: "25/10/2023 20:11",
  },
  {
    Ranking: 5,
    DateTime: "26/10/2023 09:17",
  },
  {
    Ranking: 2,
    DateTime: "27/10/2023 10:34",
  },
  {
    Ranking: 4,
    DateTime: "28/10/2023 12:43",
  },
  {
    Ranking: 5,
    DateTime: "29/10/2023 12:25",
  },
  {
    Ranking: 3,
    DateTime: "31/10/2023 10:21",
  },
  {
    Ranking: 5,
    DateTime: "01/11/2023 09:21",
  },
  {
    Ranking: 5,
    DateTime: "01/11/2023 15:46",
  },
  {
    Ranking: 7,
    DateTime: "01/11/2023 22:18",
  },
  {
    Ranking: 4,
    DateTime: "03/11/2023 10:06",
  },
  {
    Ranking: 5,
    DateTime: "04/11/2023 11:12",
  },
  {
    Ranking: 4,
    DateTime: "05/11/2023 10:01",
  },
  {
    Ranking: 4,
    DateTime: "05/11/2023 21:15",
  },
  {
    Ranking: 3,
    DateTime: "06/11/2023 11:12",
  },
  {
    Ranking: 4,
    DateTime: "07/11/2023 12:45",
  },
  {
    Ranking: 4,
    DateTime: "08/11/2023 12:02",
  },
  {
    Ranking: 3,
    DateTime: "09/11/2023 11:25",
  },
  {
    Ranking: 4,
    DateTime: "10/11/2023 09:55",
  },
  {
    Ranking: 4,
    DateTime: "11/11/2023 11:22",
  },
  {
    Ranking: 6,
    DateTime: "12/11/2023 01:02",
  },
  {
    Ranking: 6,
    DateTime: "12/11/2023 13:24",
  },
  {
    Ranking: 3,
    DateTime: "13/11/2023 12:14",
  },
  {
    Ranking: 4,
    DateTime: "14/11/2023 09:33",
  },
  {
    Ranking: 3,
    DateTime: "14/11/2023 22:13",
  },
  {
    Ranking: 5,
    DateTime: "15/11/2023 10:31",
  },
  {
    Ranking: 4,
    DateTime: "16/11/2023 10:37",
  },
  {
    Ranking: 4,
    DateTime: "17/11/2023 10:19",
  },
  {
    Ranking: 4,
    DateTime: "18/11/2023 10:10",
  },
  {
    Ranking: 4,
    DateTime: "19/11/2023 10:13",
  },
  {
    Ranking: 4,
    DateTime: "20/11/2023 10:53",
  },
  {
    Ranking: 5,
    DateTime: "21/11/2023 12:08",
  },
  {
    Ranking: 5,
    DateTime: "22/11/2023 11:42",
  },
  {
    Ranking: 5,
    DateTime: "23/11/2023 10:19",
  },
  {
    Ranking: 4,
    DateTime: "24/11/2023 11:32",
  },
  {
    Ranking: 4,
    DateTime: "25/11/2023 10:26",
  },
  {
    Ranking: 5,
    DateTime: "26/11/2023 11:03",
  },
  {
    Ranking: 5,
    DateTime: "27/11/2023 09:26",
  },
  {
    Ranking: 4,
    DateTime: "27/11/2023 17:14",
  },
  {
    Ranking: 4,
    DateTime: "28/11/2023 11:02",
  },
  {
    Ranking: 4,
    DateTime: "29/11/2023 08:54",
  },
  {
    Ranking: 5,
    DateTime: "30/11/2023 03:32",
  },
  {
    Ranking: 6,
    DateTime: "30/11/2023 12:48",
  },
  {
    Ranking: 3,
    DateTime: "02/12/2023 11:15",
  },
  {
    Ranking: 4,
    DateTime: "02/12/2023 22:57",
  },
  {
    Ranking: 4,
    DateTime: "03/12/2023 12:08",
  },
  {
    Ranking: 4,
    DateTime: "04/12/2023 10:46",
  },
  {
    Ranking: 2,
    DateTime: "05/12/2023 15:33",
  },
  {
    Ranking: 4,
    DateTime: "06/12/2023 11:54",
  },
  {
    Ranking: 4,
    DateTime: "07/12/2023 10:45",
  },
  {
    Ranking: 4,
    DateTime: "08/12/2023 10:32",
  },
  {
    Ranking: 4,
    DateTime: "09/12/2023 22:11",
  },
  {
    Ranking: 4,
    DateTime: "10/12/2023 11:19",
  },
  {
    Ranking: 4,
    DateTime: "11/12/2023 11:37",
  },
  {
    Ranking: 5,
    DateTime: "12/12/2023 09:43",
  },
  {
    Ranking: 6,
    DateTime: "24/06/2022 22:12",
  },
];

export const convertTimings = () => {
  const newTimings = timings.map((timing) => ({
    DateTime: parse(timing.DateTime, "dd/MM/yyyy HH:mm", new Date()),
    Ranking: timing.Ranking,
  }));

  const sortedData = newTimings.sort((x, y) =>
    isBefore(y.DateTime, x.DateTime)
      ? 1
      : isBefore(x.DateTime, y.DateTime)
      ? -1
      : 0
  );

  return sortedData;
};

convertTimings();
