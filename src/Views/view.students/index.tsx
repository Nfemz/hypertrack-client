import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useHistory } from "react-router-dom";
import { Columns, goToStudent } from "./utils";
const axios = require("axios").default;

export const Students = () => {
  const history = useHistory();
  const [students, setStudents] = useState([]);
  useEffect(() => {
    async function fetchStudents() {
      const url = "https://hypertrack-server.herokuapp.com/devices";
      const res = await axios.get(url);
      setStudents(res.data);
    }
    fetchStudents();
  }, []);
  return (
    <Table
      dataSource={students}
      columns={Columns}
      onRow={(record) => {
        return {
          onClick: () => goToStudent(record, history),
        };
      }}
    />
  );
};
