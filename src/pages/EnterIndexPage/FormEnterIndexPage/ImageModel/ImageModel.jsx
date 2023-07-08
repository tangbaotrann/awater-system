import React, { useEffect, useState } from "react";
import { Modal, Button, Table, Upload } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import ModalImage from "react-modal-image";
const ImageModal = ({ visible, onClose, imagePath, imageData }) => {
  const [fileList, setFileList] = useState([]);
  useEffect(() => {
    if (imagePath) {
      setFileList([
        {
          uid: "-1",
          name: "Hình ảnh",
          status: "done",
          url: imagePath,
          thumbUrl: imagePath,
        },
      ]);
    }
  }, [imagePath]);
  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose();
  };

  const handleUploadChange = ({ fileList }) => {
    setFileList(
      fileList.map((file) => {
        if (file.originFileObj instanceof Blob) {
          return {
            ...file,
            thumbUrl: URL.createObjectURL(file.originFileObj),
            lastModifiedDate: file.originFileObj.lastModifiedDate,
          };
        } else {
          return file;
        }
      })
    );
  };

  const columns = [
    {
      title: "Tên tệp tin",
      dataIndex: "name",
      key: "name",
      width: 120,
    },
    {
      title: "Định dạng",
      dataIndex: "type",
      key: "type",
      width: 120,
    },
    {
      title: "Kích thước",
      dataIndex: "size",
      key: "size",
      width: 120,
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
      width: 40,
      render: (text, record) => (
        <Button
          onClick={() => handleDelete(record)}
          style={{ color: "red" }}
          icon={<DeleteOutlined />}
        ></Button>
      ),
    },
  ];

  const handleDelete = (record) => {
    setFileList(fileList.filter((item) => item.uid !== record.uid));
  };
  return (
    <>
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
              className="custom-btn-watch-report-d"
              style={{
                marginLeft: "10px",
              }}
            >
              Tải tệp lên
            </Button>
          </Upload>,
          <Button
            onClick={handleCancel}
            className="custom-btn-close-d"
            style={{
              marginLeft: "10px",
            }}
          >
            Đóng
          </Button>,
        ]}
      >
        {imagePath && (
          <div style={{ textAlign: "center", marginBottom: "10px" }}>
            <ModalImage
              small={imagePath}
              large={imagePath}
              alt="Hình ảnh"
              hideDownload={false}
              hideZoom={false}
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />
          </div>
        )}
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
