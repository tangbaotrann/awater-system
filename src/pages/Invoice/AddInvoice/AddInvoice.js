import {
  CloseCircleFilled,
  FolderFilled,
  ProjectOutlined,
  SaveFilled,
} from "@ant-design/icons";
import { Button, Col, Collapse, Modal, Row } from "antd";
import { useState } from "react";
import TableModifyPrice from "./TableModifyPrice";
import { FormClock } from "../EditInvoice/FormClock";
import { FormUserInfo } from "../EditInvoice/FormUserInfo";
import { GeneralInfo } from "../EditInvoice/GeneralInfo";
import { useMediaQuery } from "react-responsive";

export const AddInvoice = (props) => {
  const { isOpen, handleCancel, handleOk } = props;
  const [isOpenTablePrice, setIsOpenTablePrice] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

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
      title="Thêm hóa đơn"
      open={isOpen}
      onOk={() => handleOk("", "addInvoice")}
      onCancel={() => handleCancel("", "addInvoice")}
      width={1000}
      footer={null}
      style={{
        top: 20,
      }}
    >
      {/* <div className="clock-info"> 
        <fieldset>
          <legend
            style={{ padding: "0 11px", marginLeft: "10px", fontSize: "18px" }}
          >
            Thông tin đồng hồ
          </legend>
          <Form
            size="small"
            style={{
              maxWidth: "none",
              background: token.colorFillAlter,
              borderRadius: token.borderRadiusLG,
              padding: 10,
            }}
          >
            <Row gutter={24}>
              <Col span={8}>
                <Form.Item name="date" label="Vùng">
                  <Select
                    style={{
                      width: "100%",
                    }}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="person" label="Khu vực">
                  <Input placeholder="" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="tuyendoc"
                  label="Nhân viên"
                  rules={[{ required: true }]}
                >
                  <Select
                    style={{
                      width: "100%",
                    }}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                      {
                        value: "Yiminghe",
                        label: "yiminghe",
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={8}>
                <Form.Item name="date" label="Tuyến đọc">
                  <Select
                    style={{
                      width: "100%",
                    }}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="person" label="Phạm vi">
                  <Select
                    style={{
                      width: "100%",
                    }}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="tuyendoc" label="Số hợp đồng">
                  <Input placeholder="" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={6}>
                <Form.Item name="date" label="Mã đồng hồ">
                  <Input placeholder="" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  name="person"
                  label="CS đầu"
                  rules={[{ required: true }]}
                >
                  <Select
                    style={{
                      width: "100%",
                    }}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  name="tuyendoc"
                  label="CS cuối"
                  rules={[{ required: true }]}
                >
                  <Select
                    style={{
                      width: "100%",
                    }}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                      {
                        value: "Yiminghe",
                        label: "yiminghe",
                      },
                      {
                        value: "disabled",
                        label: "Disabled",
                        disabled: true,
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="tuyendoc" label="Tiêu thụ">
                  <Input placeholder="" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={6}>
                <Form.Item name="date" label="Mã đồng hồ cũ">
                  <Input placeholder="" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="person" label="CS đầu cũ">
                  <Select
                    style={{
                      width: "100%",
                    }}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="tuyendoc" label="CS cuối cũ">
                  <Select
                    style={{
                      width: "100%",
                    }}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                      {
                        value: "Yiminghe",
                        label: "yiminghe",
                      },
                      {
                        value: "disabled",
                        label: "Disabled",
                        disabled: true,
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="tuyendoc" label="Truy thu">
                  <Select
                    style={{
                      width: "100%",
                    }}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                      {
                        value: "Yiminghe",
                        label: "yiminghe",
                      },
                      {
                        value: "disabled",
                        label: "Disabled",
                        disabled: true,
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item name="date" label="Loại hóa đơn">
                  <Select
                    defaultValue="--Chọn loại hóa đơn--"
                    style={{
                      width: "100%",
                    }}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                      {
                        value: "disabled",
                        label: "Disabled",
                        disabled: true,
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="person" label="Số nước KM">
                  <Select
                    style={{
                      width: "100%",
                    }}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item name="date" label="Hình thức TT">
                  <Select
                    style={{
                      width: "100%",
                    }}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="person" label="Đối tượng giá">
                  <Select
                    style={{
                      width: "100%",
                    }}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </fieldset>
      </div>
      <div className="user-info" style={{ marginTop: "15px" }}>
        <fieldset>
          <legend
            style={{ padding: "0 11px", marginLeft: "10px", fontSize: "18px" }}
          >
            Thông tin khách hàng
          </legend>
          <Form
            size="small"
            style={{
              maxWidth: "none",
              background: token.colorFillAlter,
              borderRadius: token.borderRadiusLG,
              padding: 10,
            }}
          >
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item name="date" label="Mã KH">
                  <Input placeholder="" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="person" label="Tên KH">
                  <Input placeholder="" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item name="date" label="Mã số thuế">
                  <Input placeholder="" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="person" label="Điện thoại">
                  <Input placeholder="" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item name="date" label="Địa chỉ">
                  <Input placeholder="" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={8}>
                <Form.Item name="date" label="Số hộ">
                  <Input placeholder="" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="person" label="Số khẩu">
                  <Input placeholder="" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="tuyendoc" label="Tên ngân hàng">
                  <Input placeholder="" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item name="date" label="Tài khoản NH">
                  <Input placeholder="" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="person" label="Tên tài khoản">
                  <Input placeholder="" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </fieldset>
      </div>
      <div className="general-info" style={{ marginTop: "15px" }}>
        <fieldset>
          <legend
            style={{ padding: "0 11px", marginLeft: "10px", fontSize: "18px" }}
          >
            Thông tin chung
          </legend>
          <Form
            size="small"
            style={{
              maxWidth: "none",
              background: token.colorFillAlter,
              borderRadius: token.borderRadiusLG,
              padding: 10,
            }}
          >
            <Row gutter={24}>
              <Col span={8}>
                <Form.Item name="date" label="Chọn tháng">
                  <DatePicker
                    allowClear
                    placeholder="Chọn tháng"
                    style={{ width: "100%" }}
                    format="MM-YYYY"
                    picker="month"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="person" label="Kỳ ghi chỉ số">
                  <Select
                    style={{
                      width: "100%",
                    }}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="tuyendoc" label="Ngày đầu kỳ">
                  <DatePicker
                    allowClear
                    placeholder="Chọn ngày đầu kỳ"
                    style={{ width: "100%" }}
                    format="MM-YYYY"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={8}>
                <Form.Item
                  name="date"
                  label="Ngày cuối kỳ"
                  rules={[{ required: true }]}
                >
                  <DatePicker
                    allowClear
                    placeholder="Chọn tháng"
                    style={{ width: "100%" }}
                    format="MM-YYYY"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="person" label="Ngày lập">
                  <DatePicker
                    allowClear
                    placeholder="Chọn ngày lập hóa đơn"
                    style={{ width: "100%" }}
                    format="MM-YYYY"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="tuyendoc" label="Số hóa đơn">
                  <Select
                    style={{
                      width: "100%",
                    }}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                      {
                        value: "Yiminghe",
                        label: "yiminghe",
                      },
                      {
                        value: "disabled",
                        label: "Disabled",
                        disabled: true,
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item name="date" label="Trạng thái đọc">
                  <Input placeholder="" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="person" label="Ghi chú">
                  <Input placeholder="" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </fieldset>
      </div> */}
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
        gutter={24}
      >
        <Col sm={24} md={24} lg={12}>
          <Button
            type="primary"
            danger
            style={{
              width: `${isMobile ? "100%" : ""}`,
              // marginLeft: `${isDesktopOrLaptop ? "3px" : 0}`,
              marginTop: `${isMobile ? "10px" : ""}`,
              marginLeft: "3px",
            }}
          >
            Chỉ số tháng sau: 1155
          </Button>
          <Button
            type="primary"
            icon={<FolderFilled />}
            style={{
              // marginLeft: `${isDesktopOrLaptop ? "3px" : 0}`,
              width: `${isMobile ? "100%" : ""}`,
              marginTop: `${isMobile ? "10px" : ""}`,
              marginLeft: "3px",
            }}
          >
            Tệp đính kèm
          </Button>
        </Col>
        <Col sm={24} md={24} lg={12} style={{ textAlign: "end" }}>
          <Button
            type="primary"
            icon={<ProjectOutlined />}
            style={{
              width: `${isMobile ? "100%" : ""}`,
              // marginLeft: `${isDesktopOrLaptop ? "3px" : 0}`,
              marginTop: `${isMobile ? "10px" : ""}`,
              marginLeft: "3px",
            }}
            onClick={() => setIsOpenTablePrice(true)}
          >
            Chỉnh bảng giá
          </Button>
          <Button
            type="primary"
            icon={<SaveFilled />}
            style={{
              // marginLeft: `${isDesktopOrLaptop ? "3px" : 0}`,
              width: `${isMobile ? "100%" : ""}`,
              marginTop: `${isMobile ? "10px" : ""}`,
              marginLeft: "3px",
            }}
          >
            Lưu
          </Button>
          <Button
            type="primary"
            icon={<CloseCircleFilled />}
            style={{
              // marginLeft: `${isDesktopOrLaptop ? "3px" : 0}`,
              width: `${isMobile ? "100%" : ""}`,
              marginTop: `${isMobile ? "10px" : ""}`,
              marginLeft: "3px",
            }}
            onClick={() => handleCancel("", "addInvoice")}
          >
            Đóng
          </Button>
        </Col>
      </Row>
      <TableModifyPrice
        isOpen={isOpenTablePrice}
        setIsOpen={setIsOpenTablePrice}
      />
    </Modal>
  );
};
