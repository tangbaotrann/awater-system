import { Button, Col, Collapse, Form, Input, Modal, Row, Tabs } from "antd";
import {
  PlusCircleOutlined,
  EditOutlined,
  CloseCircleOutlined,
  FileExcelOutlined,
  RetweetOutlined,
  BarsOutlined,
  DashboardOutlined,
  FormOutlined,
  PrinterOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  btnClickSidebarMenuSelector,
  btnClickTabListContractSelector,
} from "../../../redux/selector";
import tabListContractSlice from "../../../redux/slices/tabListContractSlice/tabListContractSlice";
import InfoCustomer from "./InfoCustomer/InfoCustomer";
import InfoContract from "./InfoContract/InfoContract";
import InfoClock from "./InfoClock/InfoClock";
import InfoDetailClock from "./InfoDetailClock/InfoDetailClock";
import { exportToExcel } from "../../../utils/exportFile";

// Tabs bottom 
const tabs = [
  {
    id: "1",
    label: "Lập hợp đồng",
    icon: <PlusCircleOutlined />,
  },
  {
    id: "2",
    label: "Sửa hợp đồng",
    icon: <EditOutlined />,
  },
  {
    id: "3",
    label: "Xóa",
    icon: <CloseCircleOutlined />,
  },
  {
    id: "4",
    label: "Xuất excel",
    icon: <FileExcelOutlined />,
  },
  {
    id: "5",
    label: "Chuyển",
    icon: <RetweetOutlined />,
  },
  {
    id: "6",
    label: "Lịch sử SD nước",
    icon: <BarsOutlined />,
  },
  {
    id: "7",
    label: "Thay đồng hồ",
    icon: <DashboardOutlined />,
  },
];

function TabList({ isTabletOrMobile }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalUpdateContract, setModalUpdateContract] = useState(false);

  const dispatch = useDispatch();

  const tabList = useSelector(btnClickTabListContractSelector);
  const menuSidebar = useSelector(btnClickSidebarMenuSelector);

  // console.log("tabList", tabList);
  // console.log("menuSidebar", menuSidebar);

  // handle change tabs
  const handleChangeTabs = (key) => {
    if (key === "1") {
      setOpenModal(true);
    } else if (key === "2") {
      setModalUpdateContract(true);
    } else if (key === "3") {
      console.log("deleted.");
      dispatch(tabListContractSlice.actions.btnClickTabListContract(null));
    } else if (key === "4") {
      exportToExcel("table-contract", menuSidebar);
      console.log("export excel.");
    } else if (key === "5") {
      console.log("go to.");
    } else if (key === "6") {
      console.log("history.");
    } else if (key === "7") {
      console.log("update clock.");
    }
  };

  // hide modal
  const hideModal = () => {
    setOpenModal(false);
    setModalUpdateContract(false);
    dispatch(tabListContractSlice.actions.btnClickTabListContract(null));
  };

  // handle submit form
  const handleSubmit = (values) => {
    console.log("values", values);
  };

  // handle submit error
  const handleFailed = (error) => {
    console.log({ error });
  };

  // collapse (Thông tin khách hàng)
  const items = [
    {
      key: "1",
      label: "Thông tin khách hàng",
      children: <InfoCustomer />,
    },
  ];

  // collapse (Thông tin hợp đồng)
  const itemsInfoContract = [
    {
      key: "2",
      label: "Thông tin hợp đồng",
      children: <InfoContract />,
    },
  ];

  // collapse (Đồng hồ)
  const itemsClock = [
    {
      key: "3",
      label: "Đồng hồ",
      children: <InfoClock />,
    },
  ];

  // collapse (Chi tiết đồng hồ)
  const itemsDetailClock = [
    {
      key: "4",
      label: "Chi tiết đồng hồ",
      children: <InfoDetailClock />,
    },
  ];

  return (
    <>
      <Tabs
        type={isTabletOrMobile ? "line" : "card"}
        tabPosition={isTabletOrMobile ? "left" : "top"}
        activeKey="0"
        items={tabs.map((_tab) => {
          return {
            label: (
              <div>
                {_tab.icon} {_tab.label}
              </div>
            ),
            key: _tab.id,
            disabled:
              (tabList === null && _tab.id === "2") ||
              (tabList === null && _tab.id === "3")
                ? true
                : false,
          };
        })}
        onChange={handleChangeTabs}
      />

      {/* Modal (Lập hợp đồng) */}
      <Modal
        open={modalUpdateContract ? modalUpdateContract : openModal}
        onCancel={hideModal}
        width={2000}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract">
          Cập nhật thông tin hợp đồng
        </h2>

        <Form
          onFinish={handleSubmit}
          onFinishFailed={handleFailed}
          fields={[
            {
              name: "type_customer",
              value: tabList ? tabList?.type_customer : "",
            },
            {
              name: "code_cus",
              value: tabList ? tabList?.code_customer : "",
            },
            {
              name: "fullName",
              value: tabList ? tabList?.fullName : "",
            },
            {
              name: "address_cus",
              value: tabList ? tabList?.address : "",
            },
            {
              name: "phone",
              value: tabList ? tabList?.phone : "",
            },
          ]}
        >
          {/* Mã khách hàng */}
          <Row>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Form.Item name="code_customer" label="Mã khách hàng: ">
                <Input name="code_customer" placeholder="Nhập mã khách hàng" />
              </Form.Item>
            </Col>
          </Row>

          {/* Thông tin khách hàng */}
          <Row>
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              style={{ paddingRight: "10px" }}
            >
              <Collapse
                key="1"
                items={items}
                accordion={false}
                defaultActiveKey={["1"]}
              />
            </Col>

            <Col xs={24} sm={24} md={12} lg={12}>
              <Collapse
                key="3"
                items={itemsClock}
                accordion={false}
                defaultActiveKey={["3"]}
              />
            </Col>
          </Row>

          {/* Thông tin hợp đồng */}
          <Row className="space-col">
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              style={{ paddingRight: "10px" }}
            >
              <Collapse
                key="2"
                items={itemsInfoContract}
                accordion={false}
                defaultActiveKey={["2"]}
              />
            </Col>

            <Col xs={24} sm={24} md={12} lg={12}>
              <Collapse
                key="4"
                items={itemsDetailClock}
                accordion={false}
                defaultActiveKey={["4"]}
              />
            </Col>
          </Row>

          {/* Bottom */}
          <Row>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Button htmlType="submit" type="primary">
                <FormOutlined />
                Tệp đính kèm
              </Button>
            </Col>

            <Col xs={24} sm={24} md={12} lg={12}>
              <Button htmlType="submit" type="primary" className="gutter-item">
                <FormOutlined />
                Biên bản thỏa thuận
              </Button>

              <Button htmlType="submit" type="primary" className="gutter-item">
                <PrinterOutlined />
                In hợp đồng
              </Button>

              <Button htmlType="submit" type="primary" className="gutter-item">
                <SaveOutlined />
                Lưu và thêm tiếp
              </Button>

              <Button htmlType="submit" type="primary" className="gutter-item">
                <SaveOutlined />
                Lưu
              </Button>

              <Button htmlType="submit" type="primary">
                <CloseCircleOutlined />
                Đóng
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}

export default TabList;
