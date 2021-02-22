import axios from "axios";
import moment from "moment";

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
    sorter: {
      compare: (a, b) =>
        moment(a.recorded_at).unix() - moment(b.recorded_at).unix(),
    },
  },
];

export function isDeviceActive(device_status): boolean {
  if (device_status && device_status === "active") return true;
  else return false;
}

export function getUser(device_user): string {
  if (device_user) return device_user;
  else return "";
}

export async function updateUser(device_user, deviceId) {
  const url = `https://hypertrack-server.herokuapp.com/device/${deviceId}`;
  await axios.post(url, {
    device_user,
  });
}

export async function updateDeviceStatus(device_status, deviceId) {
  const url = `https://hypertrack-server.herokuapp.com/device/${deviceId}`;
  await axios.post(url, {
    device_status,
  });
}
