import {
  CloseOutlined,
  FolderFilled,
  ProjectOutlined,
  QuestionCircleOutlined,
  SaveFilled,
  SyncOutlined,
} from "@ant-design/icons";
import { Button, Col, Collapse, Modal, Row } from "antd";
import { useState } from "react";
import TableModifyPrice from "../AddInvoice/TableModifyPrice";
import { FormClock } from "./FormClock";
import { FormUserInfo } from "./FormUserInfo";
import { GeneralInfo } from "./GeneralInfo";
import { useMediaQuery } from "react-responsive";
import "./EditInvoice.css";

export const EditInvoice = (props) => {
  const { isOpenEdit, setIsOpenModalEditInvoice } = props;
  const [isOpenTablePrice, setIsOpenTablePrice] = useState(false);
  const [modalConfirm, setModalConfirm] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const clockInfo = [
    {
      key: "1",
      label: "Thông tin đồng hồ",
      children: <FormClock />,
    },
  ];

  const userInfo = [
    {
      key: "1",
      label: "Thông tin khách hàng",
      children: <FormUserInfo />,
    },
  ];

  const generalInfo = [
    {
      key: "1",
      label: "Thông tin chung",
      children: <GeneralInfo />,
    },
  ];

  return (
    <Modal
      title="Cập nhật hóa đơn"
      open={isOpenEdit}
      onOk={() => setIsOpenModalEditInvoice(false)}
      onCancel={() => setIsOpenModalEditInvoice(false)}
      width={1066}
      footer={null}
      centered
    >
      <Collapse items={clockInfo} size="small" />
      <Collapse items={userInfo} size="small" style={{ marginTop: "10px" }} />
      <Collapse
        items={generalInfo}
        size="small"
        style={{ marginTop: "10px" }}
      />
      <Row
        className="invoice_footer"
        style={{ display: "flex", marginTop: "10px" }}
      >
        <Col>
          <Button
            size="small"
            type="primary"
            danger
            style={{ width: `${isMobile ? "100%" : ""}` }}
          >
            Chỉ số tháng sau: 1155
          </Button>
          <Button
            className="tab-item-readingIndex-3"
            size="small"
            style={{
              marginLeft: `${isDesktopOrLaptop ? "3px" : 0}`,
              width: `${isMobile ? "100%" : ""}`,
              marginTop: `${isMobile ? "10px" : ""}`,
            }}
          >
            Không lấy chỉ số theo hóa đơn này
          </Button>
          <Button
            icon={<FolderFilled />}
            style={{
              marginLeft: `${isDesktopOrLaptop ? "3px" : 0}`,
              width: `${isMobile ? "100%" : ""}`,
              marginTop: `${isMobile ? "10px" : ""}`,
            }}
            size="small"
            className="custom-btn-export-Invoice"
          >
            Tệp đính kèm
          </Button>
        </Col>
        <Col
          style={{
            marginLeft: "auto",
            marginTop: `${isMobile || isTabletOrMobile ? "10px" : "0"}`,
          }}
        >
          <Button
            icon={<ProjectOutlined />}
            style={{
              marginLeft: `${isDesktopOrLaptop ? "3px" : 0}`,
              width: `${isMobile ? "100%" : ""}`,
            }}
            onClick={() => setIsOpenTablePrice(true)}
            size="small"
            className="tab-item-EditInvoice-3"
          >
            Chỉnh bảng giá
          </Button>
          <Button
            icon={<SyncOutlined />}
            style={{
              marginLeft: `${isDesktopOrLaptop ? "3px" : 0}`,
              width: `${isMobile ? "100%" : ""}`,
              marginTop: `${isMobile ? "10px" : ""}`,
            }}
            onClick={() => setModalConfirm(true)}
            size="small"
            className="tab-item-EditInvoice-8"
          >
            Đồng bộ từ hợp đồng
          </Button>
          <Button
            type="primary"
            icon={<SaveFilled />}
            style={{
              marginLeft: `${isDesktopOrLaptop ? "3px" : 0}`,
              width: `${isMobile ? "100%" : ""}`,
              marginTop: `${isMobile ? "10px" : ""}`,
            }}
            size="small"
          >
            Lưu
          </Button>
          <Button
            className="custom-btn-close"
            style={{
              marginLeft: `${isDesktopOrLaptop ? "3px" : 0}`,
              width: `${isMobile ? "100%" : ""}`,
              marginTop: `${isMobile ? "10px" : ""}`,
            }}
            onClick={() => setIsOpenModalEditInvoice(false)}
            size="small"
          >
            <CloseOutlined />
            Đóng
          </Button>
        </Col>
      </Row>
      <TableModifyPrice
        isOpen={isOpenTablePrice}
        setIsOpen={setIsOpenTablePrice}
      />
      <Modal
        title="Thông báo"
        open={modalConfirm}
        onCancel={() => setModalConfirm(false)}
        onOk={() => setModalConfirm(false)}
        footer={null}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <QuestionCircleOutlined style={{ fontSize: "40px" }} />
          <p>
            Đồng bộ thông tin từ hợp đồng sẽ làm thay đổi lại thông tin về khách
            hàng, đồng hồ, số hợp đồng bạn có muốn thay đổi không
          </p>
        </div>
        <div style={{ marginTop: "10px", textAlign: "center" }}>
          <Button type="primary" style={{ marginLeft: "10px" }}>
            Có
          </Button>
          <Button
            type="primary"
            style={{ marginLeft: "10px" }}
            onClick={() => setModalConfirm(false)}
          >
            Không
          </Button>
        </div>
      </Modal>
    </Modal>
  );
};
