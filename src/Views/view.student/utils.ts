export const Columns = [
  {
    title: "Longitude",
    dataIndex: "longitude",
    key: "longitude",
  },
  {
    title: "Latitude",
    dataIndex: "latitude",
    key: "latitude",
  },
  {
    title: "Altitude",
    dataIndex: "altitude",
    key: "altitude",
  },
  {
    title: "Time Stamp",
    dataIndex: "recorded_at",
    key: "recorded_at",
    render: (timeStamp) => new Date(timeStamp).toLocaleString(),
  },
];
