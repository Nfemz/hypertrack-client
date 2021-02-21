import React, { useEffect } from "react";
const axios = require("axios").default;

export const Students = () => {
  useEffect(() => {
    fetchStudents();
  });
  return <div>Students View</div>;
};

async function fetchStudents() {
  const url = "https://hypertrack-server.herokuapp.com/devices";
  const data = await axios.get(url);
  console.log(data);
}
