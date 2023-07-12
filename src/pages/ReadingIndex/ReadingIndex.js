import { Collapse, Popover, Table, theme } from "antd";
import { useState } from "react";
import { CreateBook } from "./CreateBook/CreateBook";
import { CreateMultipleBook } from "./CreateMultipleBook/CreateMultipleBook";
import { AdvancedSearchForm as FormSearchReadingIndex } from "../../components/FormSearchReadingIndex/FormSearchReadingIndex";
import { FooterReadingIndex } from "../../components/Footer/FooterReadingIndex";
import { useMediaQuery } from "react-responsive";
import {
  CloseCircleOutlined,
  EditOutlined,
  EnvironmentOutlined,
  EyeOutlined,
  PlusOutlined,
  SettingOutlined,
} from "@ant-design/icons";
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

  const dataSource = Array.from({ length: 500 }, (_, index) => ({
    key: index,
    "#": index + 1,
    name: `Tuyến ${index}`,
    age: `Cán bộ ${index}`,
    address: `Tên sổ ${index}`,
    notwrite: `Chưa ghi ${index}`,
    close: `Chốt sổ ${index}`,
    status: `Trạng thái ${index}`,
    dateClose: `Ngày chốt ${index}`,
    invoice: `Hóa đơn ${index}`,
    action: (
      <div>
        <EditOutlined className="iconReadingIndex editIcon" />
        <EyeOutlined className="iconReadingIndex" />
        <CloseCircleOutlined className="iconReadingIndex" />
        <SettingOutlined className="iconReadingIndex" />
        <EnvironmentOutlined className="iconReadingIndex" />
      </div>
    ),
  }));

  const columns = [
    {
      title: "#",
      dataIndex: "#",
      key: "#",
      width: 100,
    },
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
    {
      title: "",
      dataIndex: "action",
      key: "action",
    },
  ];

  const renderFooter = () => (
    <FooterReadingIndex
      setIsOpenModalCreate={setIsOpenModalCreate}
      setIsModalOpenMCreate={setIsModalOpenMCreate}
      isTabletOrMobile={isTabletOrMobile}
      setIsModalOpenIndexBar={setIsModalOpenIndexBar}
    />
  );

  return (
    <>
      <Collapse
        items={[
          {
            key: "1",
            label: "Tìm kiếm",
            children: <FormSearchReadingIndex />,
          },
        ]}
        size="small"
      />
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
              content={renderFooter()}
            >
              <PlusOutlined />
            </Popover>
          ) : (
            renderFooter()
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
