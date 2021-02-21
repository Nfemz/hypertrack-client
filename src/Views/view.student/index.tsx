import { AntDesignOutlined, LeftOutlined } from "@ant-design/icons";
import {
  Avatar,
  Form,
  Input,
  Button,
  Divider,
  Switch,
  Spin,
  Table,
} from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Columns } from "./utils";
const axios = require("axios").default;
const configs = require("../../config.json");

export const Student = ({ match: { params } }) => {
  const history = useHistory();
  const [form] = Form.useForm();
  const [studentInfo, setStudentInfo] = useState({
    device_id: null,
    device_status: null,
    battery_status: null,
    longitude: null,
    latitude: null,
  });
  const [locationHistory, setLocationHistory] = useState([]);

  useEffect(() => {
    async function getStudentDetails() {
      const url = `https://hypertrack-server.herokuapp.com/device/${params.deviceId}`;
      const res = await axios.get(url);
      setStudentInfo(res.data);

      async function getLocationHistory() {
        const url = `https://hypertrack-server.herokuapp.com/locations/${params.deviceId}`;

        const res = await axios.get(url);
        console.warn(res.data);

        setLocationHistory(res.data);
      }

      getLocationHistory();
    }

    getStudentDetails();
  }, []);

  if (!studentInfo.device_id) {
    return <Spin size="large" />;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <LeftOutlined
          onClick={() => history.goBack()}
          style={{ float: "left" }}
        />
        <Avatar
          style={{ float: "left", margin: "36px" }}
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          icon={<AntDesignOutlined />}
        />
        <h2>Device {studentInfo && studentInfo.device_id}</h2>
      </div>
      <Switch
        checkedChildren="Disable Device"
        unCheckedChildren="Enable Device"
        checked={
          studentInfo && studentInfo.device_status === "active" ? true : false
        }
        onClick={() => setStudentInfo({ ...studentInfo, device_status: null })}
      />
      <Divider />
      <h2 style={{ alignSelf: "center" }}>Student Information</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignItems: "space-around",
          justifyContent: "space-around",
        }}
      >
        <Form form={form} name="student-details">
          <Form.Item name="student-name" label="Name">
            <Input />
          </Form.Item>
          <Form.Item name="student-email" label="Email">
            <Input />
          </Form.Item>
          <Form.Item name="update-student">
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
        <div>
          <h1>Current Location </h1>
          <p>{studentInfo.longitude + ", " + studentInfo.latitude}</p>
        </div>
      </div>
      <Divider />
      <h2 style={{ alignSelf: "center" }}>Location History</h2>
      <Table
        style={{ width: "100%" }}
        dataSource={locationHistory}
        columns={Columns}
      />
    </div>
  );
};
