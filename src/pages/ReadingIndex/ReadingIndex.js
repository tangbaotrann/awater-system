import {
  CheckCircleOutlined,
  CloseCircleFilled,
  DownOutlined,
  EditOutlined,
  KeyOutlined,
  PlusCircleFilled,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Progress, Space, Table, theme } from "antd";
import { useState } from "react";
import { CreateBook } from "./CreateBook/CreateBook";
import { CreateMultipleBook } from "./CreateMultipleBook/CreateMultipleBook";
import { AdvancedSearchForm as FormSearchReadingIndex } from "../../components/FormSearchReadingIndex/FormSearchReadingIndex";

const ReadingIndex = () => {
  const { token } = theme.useToken();
  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);
  const [isModalOpenMCreate, setIsModalOpenMCreate] = useState(false);

  const handleOk = (_, type) => {
    setIsOpenModalCreate(false);
    if (type === "multiple") {
      setIsModalOpenMCreate(false);
    }
  };

  const handleCancel = (_, type) => {
    setIsOpenModalCreate(false);
    if (type === "multiple") {
      setIsModalOpenMCreate(false);
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
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item（disabled）",
      key: "3",
      disabled: true,
    },
  ];

  return (
    <>
      <FormSearchReadingIndex />
      <div
        style={{
          lineHeight: "200px",
          textAlign: "center",
          background: token.colorFillAlter,
          borderRadius: token.borderRadiusLG,
          marginTop: 7,
          padding: "10px 10px",
          position: "relative",
        }}
      >
        <Table
          dataSource={dataSource}
          columns={columns}
          size="small"
          pagination={{
            current: 1,
            total: 10000,
            pageSize: 50,
          }}
          scroll={{
            y: 540,
          }}
        />
        <div style={{ display: "flex", position: "absolute", bottom: "0" }}>
          <Progress percent={10} size={[300, 20]} />
          <Progress percent={10} size={[300, 20]} strokeColor="#ff8033" />
        </div>
      </div>
      <div style={{ display: "flex", marginTop: "10px", paddingRight: "10px" }}>
        <div>
          <Button
            type="primary"
            icon={<PlusCircleFilled />}
            onClick={() => setIsOpenModalCreate(true)}
            size="small"
          >
            Tạo sổ
          </Button>
          <Button
            type="primary"
            icon={<PlusCircleFilled />}
            style={{ marginLeft: "10px" }}
            onClick={() => setIsModalOpenMCreate(true)}
            size="small"
          >
            Tạo sổ đồng loạt
          </Button>
          <Button
            type="primary"
            icon={<CloseCircleFilled />}
            style={{ marginLeft: "10px" }}
            onClick={() => setIsModalOpenMCreate(true)}
            size="small"
            disabled
          >
            Xóa sổ
          </Button>
          <Button
            type="primary"
            icon={<KeyOutlined />}
            style={{ marginLeft: "10px" }}
            onClick={() => setIsModalOpenMCreate(true)}
            size="small"
            disabled
          >
            Khóa sổ và tính tiền
          </Button>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <Button
            type="primary"
            icon={<PlusCircleFilled />}
            onClick={() => setIsOpenModalCreate(true)}
            size="small"
            disabled
          >
            Xóa biểu mẫu
          </Button>
          <Button
            type="primary"
            icon={<CheckCircleOutlined />}
            style={{ marginLeft: "10px" }}
            onClick={() => setIsModalOpenMCreate(true)}
            size="small"
            disabled
          >
            Chốt sổ
          </Button>
          <Button
            type="primary"
            icon={<SettingOutlined />}
            style={{ marginLeft: "10px" }}
            onClick={() => setIsModalOpenMCreate(true)}
            size="small"
            disabled
          >
            Ngừng ghi chỉ số
          </Button>
          <Button
            type="primary"
            icon={<EditOutlined />}
            style={{ marginLeft: "10px" }}
            onClick={() => setIsModalOpenMCreate(true)}
            size="small"
            disabled
          >
            Đồng bộ lại
          </Button>
          <Button
            icon={<SettingOutlined />}
            type="primary"
            style={{ marginLeft: "10px" }}
            size="small"
          >
            <Dropdown
              menu={{
                items,
              }}
            >
              <a href="#!" onClick={(e) => e.preventDefault()}>
                <Space>
                  Tiện ích
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </Button>
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
    </>
  );
};
export default ReadingIndex;
