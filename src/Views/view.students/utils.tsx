import React from "react";
import { Tag } from "antd";
import moment from "moment";

export function goToStudent(record, history) {
  const studentUrl = `/students/${record.device_id}`;
  history.push(studentUrl);
}

export const Columns = [
  {
    title: "Name",
    dataIndex: "device_user",
    key: "name",
  },
  {
    title: "Device Status",
    dataIndex: "device_status",
    key: "device_status",
  },
  {
    title: "Battery Status",
    dataIndex: "battery_status",
    key: "battery_status",
    render: (status) => {
      let color = "green";
      if (status === "charging") color = "gold";
      if (status === "low") color = "red";
      return <Tag color={color}>{status}</Tag>;
    },
  },
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
    title: "Last Update",
    dataIndex: "recorded_at",
    key: "recorded_at",
    render: (timeStamp) => new Date(timeStamp).toLocaleString(),
    sorter: {
      compare: (a, b) =>
        moment(a.recorded_at).unix() - moment(b.recorded_at).unix(),
    },
  },
];
