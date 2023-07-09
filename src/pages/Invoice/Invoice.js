import { PlusOutlined } from "@ant-design/icons";
import { Collapse, Popover, Table, theme } from "antd";
import { useState } from "react";
import { DetailInvoice } from "./Detail_Invoice/Detail_Invoice";
import { Instalments } from "./Instalments/Instalments";
import { CalculateMoney } from "./CalculateMoney/CalculateMoney";
import "./Invoice.css";
import { AddInvoice } from "./AddInvoice/AddInvoice";
import { EditInvoice } from "./EditInvoice/EditInvoice";
import { ModalMessage } from "./SendMessage/ModalMessage";
import { data } from "../../utils/dataTableInvoice";
import { WaterStatus } from "./WaterStatus/WaterStatus";
import { AdvancedSearchForm as FormSearchInvoice } from "../../components/FormSearchInvoice/FormSearchInvoice";
import { FooterInvoice } from "../../components/Footer/FooterInvoice";
import { useMediaQuery } from "react-responsive";
import { ModalIndexBarInvoice } from "./ModalIndexBar/ModalIndexBar";

const Invoice = () => {
  const { token } = theme.useToken();
  const [open, setOpen] = useState(false);
  const [isOpenModalBill, setIsOpenModalBill] = useState(false);
  const [isModalInstalmentsOpen, setIsModalInstalmentsOpen] = useState(false);
  const [isOpenModalAddInvoice, setIsOpenModalAddInvoice] = useState(false);
  const [isOpenModalEditInvoice, setIsOpenModalEditInvoice] = useState(false);
  const [isModalEmail, setIsModalEmail] = useState(false);
  const [isModalSMS, setIsModalSMS] = useState(false);
  const [isOpenModalWaterStatus, setIsOpenModalWaterStatus] = useState(false);
  const [isOpenModalInvoiceBar, setIsOpenModalInvoiceBar] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleOk = (_, type) => {
    setIsOpenModalBill(false);
    if (type === "instalments") {
      setIsModalInstalmentsOpen(false);
    }
    if (type === "addInvoice") {
      setIsOpenModalAddInvoice(false);
    }
  };

  const handleCancel = (_, type) => {
    setIsOpenModalBill(false);
    if (type === "instalments") {
      setIsModalInstalmentsOpen(false);
    }
    if (type === "addInvoice") {
      setIsOpenModalAddInvoice(false);
    }
  };
 
  const columns = [
    {
      title: "#",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Số hợp đồng",
      dataIndex: "contractNumber",
      key: "contractNumber",
      render: (text) => (
        <a href="#!" onClick={showDrawer} style={{ color: "#4078f2" }}>
          {text}
        </a>
      ),
    },
    {
      title: "Mã ĐH",
      dataIndex: "codeClock",
      key: "codeClock",
    },
    {
      title: "Tuyến đọc",
      dataIndex: "readingRoute",
      key: "readingRoute",
    },
    {
      title: "Tên KH",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Chỉ số cũ",
      dataIndex: "oldIndex",
      key: "oldIndex",
    },
    {
      title: "Chỉ số mới",
      dataIndex: "newIndex",
      key: "newIndex",
    },
    {
      title: "Tiêu thụ",
      dataIndex: "consumption",
      key: "consumption",
    },
    {
      title: "Mã ĐT giá",
      dataIndex: "codePrice",
      key: "codePrice",
    },
  ];
  const items = [
    {
      key: "1",
      label: "Tìm kiếm",
      children: <FormSearchInvoice />,
    },
  ];

  return (
    <>
      {/* filter */} 
      <Collapse 
        items={items}  
        size="small"
      />

      {/* main contain */}
      <div
        style={{
          lineHeight: "200px",
          textAlign: "center",
          borderRadius: token.borderRadiusLG,
          marginTop: 7,
          position: "relative",
        }}
      >
        <Table 
          bordered
          dataSource={data}
          columns={columns}
          size="small"
          pagination={{
            current: 1,
            total: 10000,
            pageSize: 50,
          }}
          scroll={{
            x: 1500,
            y: 365,
          }}
        />
        <DetailInvoice open={open} onClose={onClose} />
      </div>

      {/* Footer */}
      <div className="contract-bottom-func">
        {isTabletOrMobile ? (
          <Popover
            placement="bottomRight"
            rootClassName="fix-popover-z-index"
            trigger="click"
            // content={<TabList isTabletOrMobile={isTabletOrMobile} />}
            content={
              <FooterInvoice
                setIsOpenModalBill={setIsOpenModalBill}
                setIsModalInstalmentsOpen={setIsModalInstalmentsOpen}
                setIsOpenModalAddInvoice={setIsOpenModalAddInvoice}
                setIsOpenModalEditInvoice={setIsOpenModalEditInvoice}
                setIsOpenModalWaterStatus={setIsOpenModalWaterStatus}
                setIsModalEmail={setIsModalEmail}
                setIsModalSMS={setIsModalSMS}
                setIsOpenModalInvoiceBar={setIsOpenModalInvoiceBar}
                isTabletOrMobile={isTabletOrMobile}
              /> 
            }
          >
            <PlusOutlined />
          </Popover>
        ) : (
          <div className="contract-bottom">
            <FooterInvoice
              setIsOpenModalBill={setIsOpenModalBill}
              setIsModalInstalmentsOpen={setIsModalInstalmentsOpen}
              setIsOpenModalAddInvoice={setIsOpenModalAddInvoice}
              setIsOpenModalEditInvoice={setIsOpenModalEditInvoice}
              setIsOpenModalWaterStatus={setIsOpenModalWaterStatus}
              setIsModalEmail={setIsModalEmail}
              setIsModalSMS={setIsModalSMS}
              setIsOpenModalInvoiceBar={setIsOpenModalInvoiceBar}
              isTabletOrMobile={isTabletOrMobile}
            />
          </div>
        )}
      </div>

      <CalculateMoney
        handleCancel={handleCancel}
        handleOk={handleOk}
        isOpen={isOpenModalBill}
      />
      <Instalments
        handleCancel={handleCancel}
        handleOk={handleOk}
        isOpen={isModalInstalmentsOpen}
      />
      <AddInvoice
        handleCancel={handleCancel}
        handleOk={handleOk}
        isOpen={isOpenModalAddInvoice}
      />
      <EditInvoice
        isOpenEdit={isOpenModalEditInvoice} 
        setIsOpenModalEditInvoice={setIsOpenModalEditInvoice}
      />
      <ModalMessage
        isModalEmail={isModalEmail}
        setIsModalEmail={setIsModalEmail}
        isModalSMS={isModalSMS}
        setIsModalSMS={setIsModalSMS}
      />
      <WaterStatus
        isOpen={isOpenModalWaterStatus}
        setIsOpen={setIsOpenModalWaterStatus}
      />
      <ModalIndexBarInvoice
        isOpen={isOpenModalInvoiceBar}
        setIsOpen={setIsOpenModalInvoiceBar}
      />
    </>
  );
};
export default Invoice;
