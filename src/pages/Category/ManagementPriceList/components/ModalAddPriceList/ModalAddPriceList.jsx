import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  InputNumber,
  Modal,
  Select,
  Space,
  Table,
} from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./ModalAddPriceList.css";
import {
  CloseCircleOutlined,
  CloseCircleTwoTone,
  PlusCircleTwoTone,
  SaveOutlined,
} from "@ant-design/icons";

const priceListColumns = [
  {
    key: "key",
    title: "#",
    dataIndex: "key",
    width: "4vw",
  },
  {
    key: "index",
    title: "STT",
    dataIndex: "index",
    width: "4vw",
    align: "center",
  },
  {
    key: "describe",
    title: "Mô tả CT",
    dataIndex: "describe",
    width: "15vw",
  },
  {
    key: "fromNumber",
    title: "Từ số",
    dataIndex: "fromNumber",
    width: "10vw",
  },
  {
    key: "toNumber",
    title: "Đến số",
    dataIndex: "toNumber",
    width: "8vw",
  },
  {
    key: "vat",
    title: "Giá có VAT",
    dataIndex: "vat",
    width: "8vw",
  },
  {
    key: "price",
    title: "Giá",
    dataIndex: "price",
    width: "8vw",
  },
];

const priceListData = [];
for (let i = 0; i <= 5; i++) {
  priceListData.push({
    key: i,
    index: i,
    describe: `Mô tả CT${i}`,
    fromNumber: `Từ số ${i}`,
    toNumber: `Đến số ${i}`,
    vat: `Giá VAT ${i}`,
    price: `Giá ${i}`,
  });
}

const ModalAddPriceList = ({ isOpen, handleCancel, handleOk }) => {
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
    form.setFieldValue("priceObject", tabList?.priceObject || "");
    // form.setFieldValue("fromDate", tabList?.fromDate || "");
    // form.setFieldValue("toDate", tabList?.toDate || "");
  }, [tabList]);
  const handleChangeValue = (e) => {
    form.setFieldValue(e.target.name, e.target.value);
  };
  useEffect(() => {
    if (!isOpen) return;
    return () => {
      form.setFieldValue("priceObject", "");
      // form.setFieldValue("fromDate", "");
      // form.setFieldValue("toDate", "");
    };
  }, [isOpen]);

  return (
    <Modal
      title={!tabList ? "Thêm dữ liệu" : "Sửa dữ liệu"}
      open={isOpen}
      onOk={() => handleOk("addPriceList")}
      onCancel={() => handleCancel("addPriceList")}
      className="popup-add-price-list"
      bodyStyle={{ height: "800px", overflow: "auto" }}
      width={1100}
      footer={null}
    >
      <Form
        className="form-price-list"
        form={form}
        name="basic"
        style={{ maxWidth: 1100 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <div className="price-list-info">
          <h4 className="title">Thông tin bảng giá</h4>
          <div className="price-list-info-item">
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
                  rules={[
                    { required: true, message: "Hãy chọn ngày bắt đầu!" },
                  ]}
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
                  rules={[
                    { required: true, message: "Hãy chọn ngày kết thúc!" },
                  ]}
                >
                  <DatePicker
                    name="toDate"
                    placeholder="Chọn ngày kết thúc"
                    style={{ width: "100%" }}
                    format={dateFormatList}
                  />
                </Form.Item>
                <Form.Item label="Phí BVMT:" name="feeBVMT">
                  <div style={{ display: "flex", gap: "5px" }}>
                    <Select
                      name="feeBVMT"
                      size="middle"
                      placeholder="Chọn "
                      style={{ width: "100%" }}
                      options={priceObjectOptions}
                    />
                    <InputNumber
                      min={1}
                      size="middle"
                      style={{ width: "100%" }}
                    />
                  </div>
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
          </div>
        </div>
        <div className="price-list-table">
          <div className="table">
            <h4>Danh sách chi tiết giá</h4>
            <Table
              dataSource={priceListData}
              columns={priceListColumns}
              rowKey="key"
              style={{ width: "100%" }}
              scroll={{
                y: 520,
                x: 1200,
                scrollToFirstRowOnChange: true,
              }}
            />
          </div>
          <div className="button-actions-table">
            <PlusCircleTwoTone />
            <CloseCircleTwoTone />
          </div>
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
