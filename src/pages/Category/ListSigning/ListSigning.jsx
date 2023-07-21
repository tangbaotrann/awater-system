import { React, useState } from "react";
import TableListLocation from "./TableListSigning.js";
import "../../../components/GlobalStyles/GlobalStyles.css";
import "../../Manager/Contract/Contract.css";
import { Form, Input, Table, Popover, Col, Row, DatePicker } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment";
import "moment/locale/vi";
import viVN from "antd/es/date-picker/locale/vi_VN";
import { useMediaQuery } from "react-responsive";
moment.locale("vi");

function ListSigning() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  // const { token } = theme.useToken();

  const initialData = Array.from({ length: 100 }, (_, i) => {
    return {
      key: "1",
      stt: i + 1,
      kh: `  Ký hiệu ${i + 1}`,
      mt: `Mô tả ${i + 1}`,
      nsdt: `  Thời gian từ ${i + 1}`,
      nsdd: `Thời gian đến ${i + 1}`,
      nhd: `  Thời gian hóa đơn ${i + 1}`,
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
      title: "Ký hiệu",
      dataIndex: "kh",
      key: "kh",
      width: 170,
    },
    {
      title: "Mô tả",
      dataIndex: "mt",
      key: "mt",
    },
    {
      title: "Ngày sử dụng từ",
      dataIndex: "nsdt",
      key: "nsdt",
    },
    {
      title: "Ngày sử dụng đến",
      dataIndex: "nsdd",
      key: "nsdd",
    },
    {
      title: "Ngày hóa đơn",
      dataIndex: "nhd",
      key: "nhd",
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
          <Col span={5}>
            <Form.Item lassName="custom-form-item">
              <Input
                placeholder="Nhập và Enter để tìm kiếm"
                style={{
                  marginRight: "5px",
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item lassName="custom-form-item">
              <DatePicker
                locale={viVN}
                placeholder="Nhập ngày ghi chỉ"
                style={{ marginLeft: "5px", width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item lassName="custom-form-item">
              <DatePicker
                locale={viVN}
                placeholder="Nhập ngày hóa đơn"
                style={{
                  marginLeft: "10px",
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
export default ListSigning;
