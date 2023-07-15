import { React, useState } from "react";
import TableListLocation from "./TableListClock.js";
import "../../../components/GlobalStyles/GlobalStyles.css";
import "../../Manager/Contract/Contract.css";
import { Form, Input, Table, Popover, Col, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment";
import "moment/locale/vi";
import { useMediaQuery } from "react-responsive";
moment.locale("vi");
function ListClock() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  // const { token } = theme.useToken();

  const initialData = Array.from({ length: 100 }, (_, i) => {
    return {
      key: "1",
      stt: i + 1,
      maDH: `  Mã đồng hồ ${i + 1}`,
      dc: `Địa chỉ ${i + 1}`,
      csd: `Chỉ số đầu ${i + 1}`,
      csc: `Chỉ số cuối ${i + 1}`,
      seri: `Seri ${i + 1}`,
      ttdh: `Tình trạng đồng hồ ${i + 1}`,
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
      title: "Mã đồng hồ",
      dataIndex: "maDH",
      key: "maDH",
      width: 170,
    },
    {
      title: "Địa chỉ",
      dataIndex: "dc",
      key: "dc",
    },
    {
      title: "Chỉ số đầu",
      dataIndex: "csd",
      key: "csd",
    },
    {
      title: "Chỉ số cuối",
      dataIndex: "csc",
      key: "csc",
    },
    {
      title: "Seri",
      dataIndex: "seri",
      key: "seri",
    },
    {
      title: "Tình trạng đồng hồ ",
      dataIndex: "ttdh",
      key: "ttdh",
    },
  ];
  const AdvancedSearchForm = () => {
    const layout = {
      labelCol: {
        span: 8,
      },
    };
    return (
      <Form {...layout}>
        <Row>
          {!isTabletOrMobile && (
            <Col span={10}>
              <Form.Item>
                <TableListLocation />
              </Form.Item>
            </Col>
          )}
          <Col span={14}>
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
      <AdvancedSearchForm />
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
    </>
  );
}
export default ListClock;
