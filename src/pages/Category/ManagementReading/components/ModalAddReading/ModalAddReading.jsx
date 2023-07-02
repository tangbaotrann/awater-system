import { CloseCircleOutlined, SaveOutlined } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Space,
} from "antd";
import React, { useEffect, useId } from "react";

import "./ModalAddReading.css";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

const ModalAddReading = ({ isOpen, handleCancel, handleOk }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  const employeeOptions = [];
  for (let i = 1; i < 36; i++) {
    employeeOptions.push({
      value: `NV${i}`,
      label: `Nhân viên ${i}`,
    });
  }
  const indexingPeriodOptions = [];
  for (let i = 1; i < 36; i++) {
    indexingPeriodOptions.push({
      value: `KG${i}`,
      label: `Kỳ ghi ${i}`,
    });
  }
  const areaOptions = [];
  for (let i = 1; i < 36; i++) {
    areaOptions.push({
      value: `KG${i}`,
      label: `Kỳ ghi ${i}`,
    });
  }
  const [form] = Form.useForm();
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];
  const tabList = useSelector((state) => state.tabListContractSlice.tabList);

  useEffect(() => {
    form.setFieldValue("employee", tabList?.cashier || "");
    form.setFieldValue("index", tabList?.index || "");
    form.setFieldValue("codeLine", tabList?.codeLine || "");
    form.setFieldValue("nameLine", tabList?.nameLine || "");
    form.setFieldValue("cashier", tabList?.cashier || "");
    form.setFieldValue("indexingPeriod", tabList?.indexingPeriod || "");
  }, [tabList]);
  useEffect(() => {
    if (!isOpen) return;
    return () => {
      form.setFieldValue("employee", "");
      form.setFieldValue("index", "");
      form.setFieldValue("codeLine", "");
      form.setFieldValue("nameLine", "");
      form.setFieldValue("cashier", "");
      form.setFieldValue("indexingPeriod", "");
    };
  }, [isOpen]);

  return (
    <Modal
      title={!tabList ? "Thêm dữ liệu" : "Sửa dữ liệu"}
      open={isOpen}
      onOk={() => handleOk("addReading")}
      onCancel={() => handleCancel("addReading")}
      className="popup-add-reading"
      width={800}
      bodyStyle={{ height: "600px", overflow: "auto" }}
      footer={null}
    >
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 15 }}
        style={{ maxWidth: 800 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="Nhân viên:"
          name="employee"
          rules={[{ required: true, message: "Hãy chọn nhân viên!" }]}
        >
          <Select
            name="employee"
            size="middle"
            placeholder="Chọn nhân viên"
            style={{ width: "100%" }}
            options={employeeOptions}
          />
        </Form.Item>
        <Form.Item
          label="Số thứ tự:"
          name="index"
          rules={[{ required: true, message: "Hãy nhập số thứ tự!" }]}
        >
          <InputNumber
            min={1}
            size="middle"
            placeholder="Số thứ tự"
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item
          label="Mã tuyến:"
          name="codeLine"
          rules={[{ required: true, message: "Hãy nhập vào mã tuyến!" }]}
        >
          <Input placeholder="Mã tuyến" name="codeLine" />
        </Form.Item>
        <Form.Item
          label="Tên tuyến:"
          name="nameLine"
          rules={[{ required: true, message: "Hãy nhập vào tên tuyến!" }]}
        >
          <Input placeholder="Tên tuyến" name="nameLine" />
        </Form.Item>
        <Form.Item label="Nhân viên thu tiền:" name="cashier">
          <Select
            name="cashier"
            size="middle"
            placeholder="Chọn nhân viên"
            style={{ width: "100%" }}
            options={employeeOptions}
          />
        </Form.Item>
        <Form.Item label="Số ĐT người thu:" name="phoneNumberCashier">
          <Input placeholder="Số ĐT người thu" name="phoneNumberCashier" />
        </Form.Item>
        <Form.Item label="Địa chỉ thu:" name="address">
          <Input placeholder="Địa chỉ thu" name="address" />
        </Form.Item>
        <Form.Item label="Thời gian thu:" name="time">
          <Input placeholder="Thời gian thu" name="time" />
        </Form.Item>
        <Form.Item label="Số ĐT hóa đơn:" name="phoneNumberInvoice">
          <Input placeholder="Số ĐT hóa đơn" name="phoneNumberInvoice" />
        </Form.Item>
        <Form.Item label="Số ĐT sửa chữa:" name="phoneNumberRepair">
          <Input placeholder="Số ĐT sửa chữa" name="phoneNumberRepair" />
        </Form.Item>
        <Form.Item label="Kỳ ghi chỉ số:" name="indexingPeriod">
          <Select
            name="indexingPeriod"
            size="middle"
            placeholder="Kỳ ghi chỉ số"
            style={{ width: "100%" }}
            options={indexingPeriodOptions}
          />
        </Form.Item>
        <Form.Item label="Khu vực:" name="area">
          <Select
            name="area"
            size="middle"
            placeholder="Chọn khu vực"
            style={{ width: "100%" }}
            options={areaOptions}
          />
        </Form.Item>
        <Form.Item label="NV xem biểu mẫu:" name="employeeViewForm">
          <Select
            name="employeeViewForm"
            size="middle"
            placeholder="Chọn nhân viên xem biểu mẫu"
            style={{ width: "100%" }}
            options={employeeOptions}
          />
        </Form.Item>
        <Form.Item label="NV sửa biểu mẫu:" name="employeeEditForm">
          <Select
            name="employeeEditForm"
            size="middle"
            placeholder="Chọn nhân viên sửa biểu mẫu"
            style={{ width: "100%" }}
            options={employeeOptions}
          />
        </Form.Item>
        <Form.Item label="Đơn vị:" name="unit">
          <Select
            name="unit"
            size="middle"
            placeholder="Chọn đơn vị"
            style={{ width: "100%" }}
            options={employeeOptions}
          />
        </Form.Item>
        <Form.Item label="Ngày ghi CS từ:" name="fromDate">
          <DatePicker
            name="fromDate"
            placeholder="Chọn ngày ghi từ"
            style={{ width: "100%" }}
            format={dateFormatList}
          />
        </Form.Item>
        <Form.Item label="Ngày ghi CS đến:" name="toDate">
          <DatePicker
            name="toDate"
            placeholder="Chọn ngày ghi từ"
            style={{ width: "100%" }}
            format={dateFormatList}
          />
        </Form.Item>
        {tabList && (
          <div style={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: "600" }}>
              Nếu bạn muốn sửa nhân viên quản lý thì dùng chức năng:{" "}
              <span style={{ fontWeight: "600", color: "red" }}>
                Chuyển cán bộ quản lý
              </span>
            </span>
          </div>
        )}

        <Form.Item className="form-item-button">
          <Space size={5} className="modal-button-actions">
            <Button
              className="button"
              type="primary"
              icon={<SaveOutlined />}
              style={{ marginRight: 5, width: "100%" }}
              size="middle"
              //   disabled={!(valueSymbol && valueDescribe)}
            >
              Lưu và thêm tiếp
            </Button>
            <Button
              className="button"
              type="primary"
              icon={<SaveOutlined />}
              style={{
                marginRight: 5,
                width: "100%",
                backgroundColor: "#fbf2ef",
                color: "#fa8a6d",
              }}
              size="middle"
              //   disabled={!(valueSymbol && valueDescribe)}
            >
              Lưu và đóng
            </Button>
            <Button
              className="button"
              key="submit"
              icon={<CloseCircleOutlined />}
              onClick={() => handleCancel("addReading")}
              style={{
                width: "100%",
                backgroundColor: "#fa896b",
                color: "#ffffff",
                border: "none",
              }}
              size="middle"
            >
              Đóng
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalAddReading;
