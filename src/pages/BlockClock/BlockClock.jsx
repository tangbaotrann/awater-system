import { React, useState } from "react";
import { initialData } from "../../utils/dataBlock";
import TabListIP from "./TableListBC";

import "../../components/GlobalStyles/GlobalStyles.css";
import "../Manager/Contract/Contract.css";
import { Form, Input, theme, Table, Popover } from "antd";
import { PlusOutlined, SnippetsOutlined } from "@ant-design/icons";
import moment from "moment";
import "moment/locale/vi";
import { useMediaQuery } from "react-responsive";
moment.locale("vi");
function BlockClock() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const { token } = theme.useToken();

  const [data1, setData1] = useState(initialData);

  function fetchDataForPage(page) {
    const pageSize = 18;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return initialData.slice(startIndex, endIndex);
  }

  const handleData1Change = (pagination) => {
    const currentPage = pagination.current;
    const newData = fetchDataForPage(currentPage);
    setData1(newData);
  };

  const columns = [
    {
      title: "#",
      dataIndex: "stt",
      key: "stt",
      width: 70,
    },
    {
      title: " Mã block",
      dataIndex: "mablock",
      key: "mablock",
      render: (text, record) => (
        <>
          <SnippetsOutlined />
          {text}
        </>
      ),
    },
    {
      title: "Tên block",
      dataIndex: "tenblock",
      key: "tenblock",
    },
    {
      title: "Địa chỉ",
      dataIndex: "diachi",
      key: "diachi",
    },
    {
      title: "Mã khách hàng",
      dataIndex: "makh",
      key: "makh",
    },
    {
      title: "Tên khách hàng",
      dataIndex: "tenkhach",
      key: "tenkhach",
    },
    {
      title: "Tuyến đọc",
      dataIndex: "tuyendoc",
      key: "tuyendoc",
    },
    {
      title: "Tiền thu",
      dataIndex: "tienthu",
      key: "tienthu",
    },
    {
      title: "Cán bộ đọc",
      dataIndex: "canbodoc",
      key: "canbodoc",
    },
    {
      title: "Seri",
      dataIndex: "seri",
      key: "seri",
    },
    {
      title: "Số hiệu",
      dataIndex: "sohieu",
      key: "sohieu",
    },
    {
      title: "Kiểu đồng hồ",
      dataIndex: "kieudongho",
      key: "kieudongho",
    },
    {
      title: " # ",
      dataIndex: "trong",
      key: "trong",
      width: 100,
    },
  ];
  const AdvancedSearchForm = () => {
    const layout = {
      labelCol: {
        span: 13,
      },
      wrapperCol: {
        span: 30,
      },
    };

    return (
      <Form {...layout}>
        <Form.Item
          lassName="custom-form-item"
          label="Nhập mã đồng hồ cần tìm kiếm"
          name="9"
        >
          <Input
            style={{
              width: "100%",
            }}
          />
        </Form.Item>
      </Form>
    );
  };

  return (
    <>
      {/* <AdvancedSearchForm /> */}
      <AdvancedSearchForm />
      <div
        style={{
          textAlign: "center",
          background: token.colorFillAlter,
          borderRadius: token.borderRadiusLG,
          marginTop: 16,
          padding: "10px 10px",
          height: "350px",
          position: "relative",
        }}
      >
        <Table
          size="small"
          rowKey="index"
          pagination={{
            current: 1,
            total: initialData.length,
            pageSize: 18,
          }}
          scroll={{ x: 2000, y: 450 }}
          columns={columns.map((column) => ({
            ...column,
            className: "cell-wrap",
          }))}
          dataSource={data1}
          onChange={handleData1Change}
        />
        {/* func bottom */}
        <div className="contract-bottom">
          {/* check mobile */}
          {isTabletOrMobile ? (
            <Popover
              size="small"
              rootClassName="fix-popover-z-index"
              placement="bottomRight"
              trigger="click"
              content={<TabListIP isTabletOrMobile={isTabletOrMobile} />}
            >
              <div className="contract-bottom-func">
                <PlusOutlined />
              </div>
            </Popover>
          ) : (
            <div className="contract-bottom-func">
              <TabListIP />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default BlockClock;
