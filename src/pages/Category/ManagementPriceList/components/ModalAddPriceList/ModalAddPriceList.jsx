import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  InputNumber,
  Modal,
  Select,
  Space,
} from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./ModalAddPriceList.css";
import { CloseCircleOutlined, SaveOutlined } from "@ant-design/icons";
const ModalAddPriceList = ({
  isOpen,
  handleCancel,
  handleOk,
  openTransferManagers,
}) => {
  const tabList = useSelector((state) => state.tabListContractSlice.tabList);
  const priceObjectOptions = [];
  for (let i = 1; i < 36; i++) {
    priceObjectOptions.push({
      value: `DT${i}`,
      label: `Đối tượng giá ${i}`,
    });
  }
  const [form] = Form.useForm();
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];

  useEffect(() => {
    form.setFieldValue("oldEmployee", tabList?.cashier || "");
    form.setFieldValue("codeLine", tabList?.codeLine || "");
    form.setFieldValue("nameLine", tabList?.nameLine || "");
  }, [tabList, openTransferManagers]);
  const handleChangeValue = (e) => {
    form.setFieldValue(e.target.name, e.target.value);
  };
  useEffect(() => {
    if (!isOpen) return;
    return () => {
      form.setFieldValue("oldEmployee", "");
      form.setFieldValue("codeLine", "");
      form.setFieldValue("nameLine", "");
    };
  }, [isOpen]);

  return (
    <Modal
      // title={
      //   openTransferManagers
      //     ? "Chuyển cán bộ quản lý tuyến"
      //     : "Chuyển cán bộ quản lý thu"
      // }
      open={isOpen}
      onOk={() => handleOk("addPriceList")}
      onCancel={() => handleCancel("addPriceList")}
      className="popup-add-price-list"
      width={1000}
      footer={null}
    >
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 15 }}
        style={{ maxWidth: 1000 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="DT giá:"
          name="priceObject"
          rules={[{ required: true, message: "Hãy chọn đối tượng giá!" }]}
        >
          <Select
            name="priceObject"
            size="middle"
            placeholder="Chọn đối tượng tính giá"
            style={{ width: "100%" }}
            options={priceObjectOptions}
          />
        </Form.Item>
        <div className="form-item-wrap">
          <div className="form-item-left">
            <Form.Item
              label="Ngày BĐ:"
              name="fromDate"
              rules={[{ required: true, message: "Hãy chọn ngày bắt đầu!" }]}
            >
              <DatePicker
                name="fromDate"
                placeholder="Chọn ngày bắt đầu"
                style={{ width: "100%" }}
                format={dateFormatList}
              />
            </Form.Item>
            <Form.Item label="Có VAT:" name="taxVAT">
              <Checkbox style={{ marginRight: "5px" }} />
            </Form.Item>
            <Form.Item label="ĐT tính giá:" name="pricingPriceObject">
              <Select
                name="pricingPriceObject"
                size="middle"
                placeholder="Chọn đối tượng tính giá"
                style={{ width: "100%" }}
                options={priceObjectOptions}
              />
            </Form.Item>
            <Form.Item label="Có tối thiểu:" name="minimum">
              <Checkbox style={{ marginRight: "5px" }} />
            </Form.Item>
          </div>
          <div className="form-item-right">
            <Form.Item
              label="Ngày KT:"
              name="toDate"
              rules={[{ required: true, message: "Hãy chọn ngày kết thúc!" }]}
            >
              <DatePicker
                name="toDate"
                placeholder="Chọn ngày kết thúc"
                style={{ width: "100%" }}
                format={dateFormatList}
              />
            </Form.Item>
            <Form.Item label="Phí BVMT:" name="feeBVMT">
              <Select
                name="feeBVMT"
                size="middle"
                placeholder="Chọn "
                style={{ width: "100%" }}
                options={priceObjectOptions}
              />
              <InputNumber min={1} size="middle" style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item label="Kiểu tính:" name="calculationType">
              <Select
                name="calculationType"
                size="middle"
                placeholder="Chọn kiểu tính"
                style={{ width: "100%" }}
                options={priceObjectOptions}
              />
            </Form.Item>
          </div>
        </div>
        <div className="form-item-bottom">
          <Form.Item label="Phí duy trì:" name="maintainingFee">
            <Select
              name="maintainingFee"
              size="middle"
              placeholder="Chọn đối phí duy trì"
              style={{ width: "100%" }}
              options={priceObjectOptions}
            />
          </Form.Item>
          <Form.Item name="number">
            <InputNumber min={1} size="middle" style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item label="Áp VAT:" name="minimum">
            <Checkbox style={{ marginRight: "5px" }} />
          </Form.Item>
          <Form.Item name="number">
            <InputNumber min={1} size="middle" style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item label="Áp dụng khi tiêu thụ <=:" name="maintainingFee">
            <InputNumber min={1} size="middle" style={{ width: "100%" }} />
          </Form.Item>
        </div>
        <Form.Item className="form-item-button">
          <Space size={5} className="modal-button-actions">
            <Button
              className="button"
              type="primary"
              icon={<SaveOutlined />}
              style={{ marginRight: 5, width: "100%" }}
              size="middle"
            >
              Lưu và thêm tiếp
            </Button>
            <Button
              className="button"
              type="primary"
              icon={<SaveOutlined />}
              style={{ marginRight: 5, width: "100%" }}
              size="middle"
            >
              Lưu và đóng
            </Button>
            <Button
              className="button"
              key="submit"
              icon={<CloseCircleOutlined />}
              onClick={() => handleCancel("addPriceList")}
              style={{ width: "100%" }}
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

export default ModalAddPriceList;
