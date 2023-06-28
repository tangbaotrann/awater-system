import React, { useState } from "react";
import { Button, Modal, Row } from "antd";
import { FileExcelOutlined } from "@ant-design/icons";
const ExcelForm = () => {
  const handleButtonClick = () => {
    setIsModalVisible(true);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  // Đoạn mã của bạn ở đây
  return (
    <>
      <div className="button-container1">
        <Button
          icon={<FileExcelOutlined />}
          size="small"
          onClick={handleButtonClick}
          style={{ marginRight: "10px" }}
          type="primary"
        >
          Nhập excel
        </Button>
      </div>
      <Modal
        title="Nhập execel"
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        <Row justify="end">
          <Button>Cập Nhật</Button>
          <Button onClick={handleModalCancel}>Đóng</Button>
        </Row>
      </Modal>
    </>
  );
};

export default ExcelForm;
