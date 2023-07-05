import { React, useState } from "react";
// import { initialData } from "../../utils/dataBlock";
import TabListBC from "./TableListBC";
import { BlockClockDetail } from "./BlockClockDetail";
import "../../components/GlobalStyles/GlobalStyles.css";
import "../Manager/Contract/Contract.css";
import { Form, Input, theme, Table, Popover, Button } from "antd";
import {
  PlusOutlined,
  SnippetsOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import moment from "moment";
import "moment/locale/vi";
import { useMediaQuery } from "react-responsive";
moment.locale("vi");
function BlockClock() {
  const handleButtonClick = () => {
    setIsOpenModalNoticeDetail(true);
  };
  const handleModalCancel = () => {
    setIsOpenModalNoticeDetail(false);
  };
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const { token } = theme.useToken();
  const [isOpenModalNoticeDetail, setIsOpenModalNoticeDetail] = useState(false);
  const hanldeShowDetailRecord = (item) => {
    setIsOpenModalNoticeDetail(true);
    console.log(item);
  };
  const initialData = Array.from({ length: 100 }, (_, i) => {
    return {
      key: "1",
      stt: i + 1,
      mablock: `  Mã block ${i + 1}`,
      tenblock: `Tên block ${i + 1}`,
      diachi: `Địa chỉ ${i + 1}`,
      makh: `Mã khách hàng ${i + 1}`,
      tenkhach: `Tên khách hàng ${i + 1}`,
      tuyendoc: `Tuyến đọc ${i + 1}`,
      tienthu: `Tiêu thụ ${i + 1}`,
      canbodoc: `Cán bộ đọc ${i + 1}`,
      seri: `Seri ${i + 1}`,
      sohieu: `Số hiệu ${i + 1}`,
      kieudongho: `Kiểu đồng hồ ${i + 1}`,
      trong: (
        <UnorderedListOutlined
          style={{ cursor: "pointer" }}
          onClick={() => hanldeShowDetailRecord(i)}
        />
      ),
    };
  });
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

      width: 40,
      render: (text, record) => {
        return (
          <>
            <Button
              onClick={() => handleButtonClick(record)}
              icon={<UnorderedListOutlined />}
            ></Button>
          </>
        );
      },
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
          scroll={{ x: 2000, y: 480 }}
          columns={columns.map((column) => ({
            ...column,
            className: "cell-wrap",
          }))}
          dataSource={data1}
          onChange={handleData1Change}
        />
        <BlockClockDetail
          isOpen={isOpenModalNoticeDetail}
          setIsOpenModalNoticeDetail={handleModalCancel}
          data={initialData}
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
              content={<TabListBC isTabletOrMobile={isTabletOrMobile} />}
            >
              <div className="contract-bottom-func">
                <PlusOutlined />
              </div>
            </Popover>
          ) : (
            <div className="contract-bottom-func">
              <TabListBC />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default BlockClock;
