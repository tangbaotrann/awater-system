import { React, useState } from "react";
import TableListLocation from "./TableListLocation.js";
import "../../../components/GlobalStyles/GlobalStyles.css";
import "../../Manager/Contract/Contract.css";
import { Form, Input, Table, Popover, Col, Row } from "antd";
import { PlusOutlined, SnippetsOutlined } from "@ant-design/icons";
import moment from "moment";
import "moment/locale/vi";
import { useMediaQuery } from "react-responsive";
moment.locale("vi");
function List_Location() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  // const { token } = theme.useToken();

  const initialData = Array.from({ length: 100 }, (_, i) => {
    return {
      key: "1",
      stt: i + 1,
      maKV: `  Mã Khu Vực ${i + 1}`,
      tenKV: `Tên Khu Vực ${i + 1}`,
      Vung: `Vùng ${i + 1}`,
    };
  });
  const [data1] = useState(initialData);

  const columns = [
    {
      title: "#",
      dataIndex: "stt",
      key: "stt",
      width: 70,
    },
    {
      title: " Mã Khu Vực",
      dataIndex: "maKV",
      key: "maKV",
      width: 170,
      render: (text, record) => (
        <>
          <SnippetsOutlined />
          {text}
        </>
      ),
    },
    {
      title: "Tên Khu Vực",
      dataIndex: "tenKV",
      key: "tenVung",
      width: 170,
    },
    {
      title: "Vùng",
      dataIndex: "Vung",
      key: "Vung",
    },
  ];
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
                <TableListLocation />
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

  return (
    <>
      {/* <AdvancedSearchForm /> */}
      <AdvancedSearchForm />
      {/* <div
        style={{
          textAlign: "center",
          background: token.colorFillAlter,
          borderRadius: token.borderRadiusLG,
          marginTop: 16,
          padding: "10px 10px",
          height: "550px",
          position: "relative",
        }}
      > */}
      <Table
        style={{ marginTop: "10px" }}
        size="small"
        bordered
        rowKey="index"
        scroll={{ x: 1000, y: 480 }}
        columns={columns.map((column) => ({
          ...column,
          className: "cell-wrap",
        }))}
        dataSource={data1}
        // onChange={handleData1Change}
      />
      {isTabletOrMobile && (
        <div className="contract-bottom">
          {/* check mobile */}
          {isTabletOrMobile ? (
            <Popover
              size="small"
              rootClassName="fix-popover-z-index"
              placement="bottomRight"
              trigger="click"
              content={
                <TableListLocation isTabletOrMobile={isTabletOrMobile} />
              }
            >
              <div className="contract-bottom-func">
                <PlusOutlined />
              </div>
            </Popover>
          ) : (
            <div className="contract-bottom-func">
              <TableListLocation />
            </div>
          )}
        </div>
      )}
      {/* </div> */}
    </>
  );
}
export default List_Location;