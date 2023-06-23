import { useState } from "react";
import { Divider, Modal } from "antd";
import { OrderedListOutlined } from "@ant-design/icons";

import FormUpdateInfoDebt from "./FormUpdateInfoDebt/FormUpdateInfoDebt";
import FormInfoContractDebt from "./FormInfoContractDebt/FormInfoContractDebt";

function TableListDebt({ tabList }) {
  const [openModal, setOpenModal] = useState(false);
  const [openModalUpdateInfoDebt, setOpenModalUpdateInfoDebt] = useState(false);

  //   console.log(tabList);

  //   handle open modal debt
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  // hide modal debt
  const hideModal = () => {
    setOpenModal(false);
  };

  // handle open modal update info debt
  const handleOpenModalUpdateInfoDebt = () => {
    setOpenModalUpdateInfoDebt(true);
  };

  //  modal update info debt
  const hideModalUpdateInfoDebt = () => {
    setOpenModalUpdateInfoDebt(false);
  };

  return (
    <>
      {/* Title debt (Tiện ích) */}
      <span className="debt-title-name" onClick={handleOpenModal}>
        <OrderedListOutlined className="debt-icon-left" /> Xem danh sách nợ
      </span>

      {/* Modal debt */}
      <Modal
        open={openModal}
        onCancel={hideModal}
        width={1000}
        zIndex={9999}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h3>Thông tin hợp đồng nợ</h3>

        {/* Form info contract debt */}
        <FormInfoContractDebt
          handleOpenModalUpdateInfoDebt={handleOpenModalUpdateInfoDebt}
          hideModal={hideModal}
          tabList={tabList}
        />
      </Modal>

      {/* Show modal update info debt */}
      <Modal
        zIndex={99999}
        width={1000}
        open={openModalUpdateInfoDebt}
        onCancel={hideModalUpdateInfoDebt}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <Divider orientation="left" style={{ fontWeight: "bold" }}>
          Cập nhật thông tin hợp đồng nợ
        </Divider>

        {/* Form update info debt */}
        <FormUpdateInfoDebt hideModalUpdateInfoDebt={hideModalUpdateInfoDebt} />
      </Modal>
    </>
  );
}

export default TableListDebt;
