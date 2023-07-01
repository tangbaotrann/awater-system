import { Modal } from "antd";
import React from "react";

import "./ModalConfirmDelete.css";

const ModalConfirmDelete = ({
  title,
  isModalOpen,
  handleOk,
  handleCancel,
  confirmLoading,
}) => {
  return (
    <Modal
      destroyOnClose={true}
      className="popup-delete"
      title={title}
      bodyStyle={{
        borderTop: "1px solid",
        paddingTop: "10px",
      }}
      open={isModalOpen}
      onOk={handleOk}
      okText="Confirm"
      onCancel={() => handleCancel("closeModalDeleteSubject")}
      confirmLoading={confirmLoading}
      okButtonProps={{
        style: {
          backgroundColor: "#13DEB9",
          color: "#FFFFFF",
        },
      }}
      cancelButtonProps={{
        style: {
          backgroundColor: "#FBF2EF",
          color: "#FA966E",
          border: "none",
        },
      }}
    >
      Bạn chắc chắn muốn xóa không?
    </Modal>
  );
};

export default ModalConfirmDelete;
