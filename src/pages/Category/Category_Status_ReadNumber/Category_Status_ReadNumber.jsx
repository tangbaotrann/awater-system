import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Table, Form, Input, Col, Row } from "antd";
import TableCategory_SRN from "./TableCategory_SRN";
import { render } from "@testing-library/react";
import "./CSS_Category_Status_ReadNumber.css";

const initialData = Array.from({ length: 100 }, (_, i) => {
  // Tạo ngẫu nhiên mã màu
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return {
    key: `${i + 1}`,
    stt: i + 1,
    maTT: `  Mã trạng thái ${i + 1}`,
    tenTT: `Tên trạng thái ${i + 1}`,
    maMau: randomColor,
    khongChoPhepGhi: null,
    khongChoHienThi: null,
    soTT: null,
    moTaNgan: null,
  };
});

const columns = [
  {
    title: "#",
    dataIndex: "stt",
    width: 70,
    onCell(text, record) {
      return {
        props: {
          style: {
            background: "#FF3333",
          },
          children: <div>{text}</div>,
        },
      };
    },
  },
  {
    title: "Mã trạng thái",
    dataIndex: "maTT",
    width: 200,
  },
  {
    title: "Tên trạng thái",
    dataIndex: "tenTT",
    width: 170,
  },
  {
    title: "Mã màu",
    dataIndex: "maMau",
    width: 100,
  },
  {
    title: "Không cho phép ghi",
    dataIndex: "khongChoPhepGhi",
  },
  {
    title: "Không cho cho hiển thị",
    dataIndex: "khongChoHienThi",
  },
  {
    title: "Số TT",
    dataIndex: "soTT",
  },
  {
    title: "Mô tả ngắn",
    dataIndex: "moTaNgan",
  },
];

const Category_Status_ReadNumber = () => {
  // resp
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  // dummy data
  const [dummyData] = useState(initialData);

  // ========================================================================================
  const AdvancedSearchForm = () => {
    const layout = {
      labelCol: {
        span: 9,
      },
    };

    return (
      <Form {...layout}>
        <Row>
          {!isTabletOrMobile && (
            <Col span={8}>
              <Form.Item>
                <TableCategory_SRN />
              </Form.Item>
            </Col>
          )}

          <Col span={16}>
            <Form.Item
              lassName="custom-form-item"
              label="Nhập và Enter để tìm kiếm"
              name="9"
            >
              <Input
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  };
  // ========================================================================================
  const rowClass = (record) => {
    return `color-${record.maMau.replace("#", "")}`;
  };
  return (
    <div>
      <AdvancedSearchForm />
      <Table
        className="my-table"
        style={{ marginTop: "10px" }}
        size="small"
        bordered
        rowKey="index"
        scroll={{ x: 1000, y: 480 }}
        columns={columns.map((col) => ({ ...col, className: "cell-wrap" }))}
        dataSource={dummyData}
        rowClassName={rowClass}
        onRow={(record, rowIndex) => ({
          style: {
            color: record.maMau,
          },
        })}
      ></Table>
    </div>
  );
};

export default Category_Status_ReadNumber;
