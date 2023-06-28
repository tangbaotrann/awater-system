import { Col, Collapse, Popover, Progress, Row, Table, theme } from "antd";
import { useState } from "react";
import { CreateBook } from "./CreateBook/CreateBook";
import { CreateMultipleBook } from "./CreateMultipleBook/CreateMultipleBook";
import { AdvancedSearchForm as FormSearchReadingIndex } from "../../components/FormSearchReadingIndex/FormSearchReadingIndex";
import { FooterReadingIndex } from "../../components/Footer/FooterReadingIndex";
import { useMediaQuery } from "react-responsive";
import { PlusOutlined } from "@ant-design/icons";
import { ModalIndexBar } from "./ModalIndexBar/ModalIndexBar";
import "./ReadingIndex.css";

const ReadingIndex = () => {
  const { token } = theme.useToken();
  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);
  const [isModalOpenMCreate, setIsModalOpenMCreate] = useState(false);
  const [isModalOpenIndexBar, setIsModalOpenIndexBar] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  const handleOk = (_, type) => {
    setIsOpenModalCreate(false);
    if (type === "multiple") {
      setIsModalOpenMCreate(false);
    }
    if (type === "indexBar") {
      setIsModalOpenIndexBar(false);
    }
  };

  const handleCancel = (_, type) => {
    setIsOpenModalCreate(false);
    if (type === "multiple") {
      setIsModalOpenMCreate(false);
    }
    if (type === "indexBar") {
      setIsModalOpenIndexBar(false);
    }
  };

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
      notwrite: "abc",
      close: "abc",
      status: "abc",
      dateClose: "abc",
      invoice: "abc",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
      notwrite: "abc",
      close: "abc",
      status: "abc",
      dateClose: "abc",
      invoice: "abc",
    },
    {
      key: "3",
      name: "John",
      age: 42,
      address: "10 Downing Street",
      notwrite: "abc",
      close: "abc",
      status: "abc",
      dateClose: "abc",
      invoice: "abc",
    },
    {
      key: "4",
      name: "John",
      age: 42,
      address: "10 Downing Street",
      notwrite: "abc",
      close: "abc",
      status: "abc",
      dateClose: "abc",
      invoice: "abc",
    },
    {
      key: "5",
      name: "John",
      age: 42,
      address: "10 Downing Street",
      notwrite: "abc",
      close: "abc",
      status: "abc",
      dateClose: "abc",
      invoice: "abc",
    },
    {
      key: "6",
      name: "John",
      age: 42,
      address: "10 Downing Street",
      notwrite: "abc",
      close: "abc",
      status: "abc",
      dateClose: "abc",
      invoice: "abc",
    },
    {
      key: "7",
      name: "John",
      age: 42,
      address: "10 Downing Street",
      notwrite: "abc",
      close: "abc",
      status: "abc",
      dateClose: "abc",
      invoice: "abc",
    },
    {
      key: "8",
      name: "John",
      age: 42,
      address: "10 Downing Street",
      notwrite: "abc",
      close: "abc",
      status: "abc",
      dateClose: "abc",
      invoice: "abc",
    },
    {
      key: "9",
      name: "John",
      age: 42,
      address: "10 Downing Street",
      notwrite: "abc",
      close: "abc",
      status: "abc",
      dateClose: "abc",
      invoice: "abc",
    },
    {
      key: "10",
      name: "John",
      age: 42,
      address: "10 Downing Street",
      notwrite: "abc",
      close: "abc",
      status: "abc",
      dateClose: "abc",
      invoice: "abc",
    },
  ];

  const columns = [
    {
      title: "Tuyến đọc",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Cán bộ đọc",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Tên sổ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Chưa ghi",
      dataIndex: "notwrite",
      key: "notwrite",
    },
    {
      title: "Chốt sổ",
      dataIndex: "close",
      key: "close",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Ngày chốt",
      dataIndex: "dateClose",
      key: "dateClose",
    },
    {
      title: "Hóa đơn",
      dataIndex: "invoice",
      key: "invoice",
    },
  ];

  const items = [
    {
      key: "1",
      label: "Tìm kiếm",
      children: <FormSearchReadingIndex />,
    },
  ];
 
  return (
    <>
      <Collapse items={items} size="small"/>
      <div
        style={{
          lineHeight: "200px",
          textAlign: "center",
          borderRadius: token.borderRadiusLG,
          marginTop: 7,
        }}
      >
        <Table
          bordered
          dataSource={dataSource}
          columns={columns}
          size="small"
          pagination={{
            current: 1,
            total: 10000,
            pageSize: 50,
          }}
          scroll={{
            x: 1500,
            y: 330,
          }}
        />
      </div>
      <div className="contract-bottom">
        <div className="contract-bottom-func">
          {isTabletOrMobile ? (
            <Popover
              rootClassName="fix-popover-z-index"
              placement="bottomRight"
              trigger="click"
              // content={<TabList isTabletOrMobile={isTabletOrMobile} />}
              content={
                <FooterReadingIndex
                  setIsOpenModalCreate={setIsOpenModalCreate}
                  setIsModalOpenMCreate={setIsModalOpenMCreate}
                  isTabletOrMobile={isTabletOrMobile}
                  setIsModalOpenIndexBar={setIsModalOpenIndexBar}
                />
              }
            >
              <PlusOutlined />
            </Popover>
          ) : (
            <FooterReadingIndex
              setIsOpenModalCreate={setIsOpenModalCreate}
              setIsModalOpenMCreate={setIsModalOpenMCreate}
              setIsModalOpenIndexBar={setIsModalOpenIndexBar}
            />
          )}
        </div>
      </div>

      <CreateBook
        handleCancel={handleCancel}
        handleOk={handleOk}
        isOpen={isOpenModalCreate}
      />
      <CreateMultipleBook
        handleCancel={handleCancel}
        handleOk={handleOk}
        isOpen={isModalOpenMCreate}
      />
      <ModalIndexBar
        isOpen={isModalOpenIndexBar}
        handleCancel={handleCancel}
        handleOk={handleOk}
      />
    </>
  );
};
export default ReadingIndex;
