import gql from "graphql-tag";
import client from "./client";

const deviceUpdatedSubscription = gql`
  subscription {
    deviceUpdate {
      device_id
      device_status
      battery_status
      longitude
      latitude
      device_user
    }
  }
`;

export async function onDeviceUpdated(handleDevice) {
  const observable = client.subscribe({ query: deviceUpdatedSubscription });
  observable.subscribe(({ data }) => handleDevice(data));
}
