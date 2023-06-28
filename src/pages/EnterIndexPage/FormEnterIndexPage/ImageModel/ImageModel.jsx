import React, { useState } from "react";
import { Modal, Button, Table, Upload } from "antd";
import { PictureOutlined } from "@ant-design/icons";

const ImageModal = () => {
  const [visible, setVisible] = useState(false);
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleUploadChange = ({ fileList }) => {
    setFileList(
      fileList.map((file) => ({
        ...file,
        thumbUrl: URL.createObjectURL(file.originFileObj),
        lastModifiedDate: file.originFileObj.lastModifiedDate,
      }))
    );
  };

  const columns = [
    {
      title: "Tên tệp tin",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Định dạng",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Kích thước",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Ngày tạo",
      dataIndex: "lastModifiedDate",
      key: "lastModifiedDate",
      render: (text) => new Date(text).toLocaleString(),
    },
    {
      title: "Hình ảnh",
      dataIndex: "thumbUrl",
      key: "thumbUrl",
      render: (text, record) => (
        <img
          src={record.thumbUrl}
          alt={record.name}
          style={{ maxWidth: "100px", maxHeight: "100px" }}
        />
      ),
    },
    {
      title: "",
      key: "action",
      render: (text, record) => (
        <Button
          onClick={() => handleDelete(record)}
          size="small"
          type="primary"
        >
          Xóa
        </Button>
      ),
    },
  ];

  const handleDelete = (record) => {
    setFileList(fileList.filter((item) => item.uid !== record.uid));
  };

  return (
    <>
      <Button
        onClick={() => setVisible(true)}
        type="primary"
        icon={<PictureOutlined />}
      >
        Nhấp
      </Button>
      <Modal
        title="Thông tin tệp đính kèm"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Upload
            onChange={handleUploadChange}
            fileList={fileList}
            beforeUpload={() => false}
            showUploadList={false}
          >
            <Button
              style={{
                marginLeft: "10px",
              }}
            >
              Tải tệp lên
            </Button>
          </Upload>,
          <Button
            onClick={handleCancel}
            type="primary"
            style={{
              marginLeft: "10px",
            }}
          >
            Đóng
          </Button>,
        ]}
      >
        <Table
          dataSource={fileList}
          scroll={{ x: 1000, y: 290 }}
          columns={columns}
          style={{ maxHeight: "400px", overflowY: "auto" }}
        />
      </Modal>
    </>
  );
};

export default ImageModal;
