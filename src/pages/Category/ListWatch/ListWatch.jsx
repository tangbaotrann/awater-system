import { React, useState } from "react";
import TableListLocation from "./TableListWatch.js";
import "../../../components/GlobalStyles/GlobalStyles.css";
import "../../Manager/Contract/Contract.css";
import { Form, Input, Table, Popover, Col, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment";
import "moment/locale/vi";
import { useMediaQuery } from "react-responsive";
moment.locale("vi");
function ListWatch() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  // const { token } = theme.useToken();

  const initialData = Array.from({ length: 100 }, (_, i) => {
    return {
      key: "1",
      stt: i + 1,
      maDH: `  Mã Kiểu đồng hồ ${i + 1}`,
      tenDH: `Tên Kiểu đồng hồ ${i + 1}`,
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
      title: "Mã kiểu đồng hồ",
      dataIndex: "maDH",
      key: "maDH",
      width: 170,
    },
    {
      title: "Tên kiểu đồng hồ",
      dataIndex: "tenDH",
      key: "tenDH",
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
export default ListWatch;
