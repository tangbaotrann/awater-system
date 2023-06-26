import React, { useEffect, useState, useId } from "react";
import { SaveOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Space } from "antd";
import { useSelector } from "react-redux";

import "./ModalAddPriceSubject.css";

const ModalAddPriceSubject = ({ isOpen, handleCancel, handleOk }) => {
  const tabList = useSelector((state) => state.tabListContractSlice.tabList);
  const [form] = Form.useForm();
  const [valueSymbol, setValueSymbol] = useState();
  const [valueDescribe, setValueDescribe] = useState();

  useEffect(() => {
    form.setFieldValue("symbol", tabList?.symbol || "");
    form.setFieldValue("describe", tabList?.describe || "");
    form.setFieldValue("unit", tabList?.unit || "");
  }, [tabList]);

  const handleChangeValue = (e) => {
    form.setFieldValue(e.target.name, e.target.value);
    setValueSymbol(form.getFieldValue("symbol"));
    setValueDescribe(form.getFieldValue("describe"));
  };
  useEffect(() => {
    if (!isOpen) return;
    return () => {
      form.setFieldValue("symbol", "");
      form.setFieldValue("describe", "");
      form.setFieldValue("unit", "");
    };
  }, [isOpen]);
  return (
    <Modal
      title={!tabList ? "Thêm dữ liệu" : "Sửa dữ liệu"}
      open={isOpen}
      onOk={() => handleOk("addPriceSubject")}
      onCancel={() => handleCancel("addPriceSubject")}
      className="popup-add-price-subject"
      width={600}
      footer={null}
    >
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 15 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="Mã/Ký hiệu:"
          name="symbol"
          rules={[{ required: true, message: "Hãy nhập vào Mã/Ký hiệu!" }]}
        >
          <Input
            placeholder="Mã/Ký hiệu"
            name="symbol"
            onChange={handleChangeValue}
          />
        </Form.Item>
        <Form.Item
          label="Tên/Mô tả:"
          name="describe"
          id={useId()}
          rules={[{ required: true, message: "Hãy nhập vào Tên/Mô tả!" }]}
        >
          <Input
            placeholder="Tên/Mô tả"
            onChange={handleChangeValue}
            name="describe"
          />
        </Form.Item>
        <Form.Item label="Đơn vị tính:" name="unit" id={useId()}>
          <Input
            placeholder="Đơn vị tính"
            name="unit"
            onChange={handleChangeValue}
          />
        </Form.Item>
        <Form.Item className="form-item-button">
          <Space size={5} className="modal-button-actions">
            <Button
              className="button"
              type="primary"
              icon={<SaveOutlined />}
              style={{ marginRight: 5, width: "100%" }}
              size="middle"
              disabled={!(valueSymbol && valueDescribe)}
            >
              Lưu và thêm tiếp
            </Button>
            <Button
              className="button"
              type="primary"
              icon={<SaveOutlined />}
              style={{ marginRight: 5, width: "100%" }}
              size="middle"
              disabled={!(valueSymbol && valueDescribe)}
            >
              Lưu và đóng
            </Button>
            <Button
              className="button"
              key="submit"
              icon={<CloseCircleOutlined />}
              onClick={() => handleCancel("addPriceSubject")}
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

export default ModalAddPriceSubject;
