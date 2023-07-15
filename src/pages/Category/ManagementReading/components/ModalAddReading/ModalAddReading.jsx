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
  message,
} from "antd";
import React, { useEffect } from "react";
import "./ModalAddReading.css";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { AddDMTuyenDoc } from "../../../../../redux/slices/DMTuyenDoc/tuyenDocSlice";
import { fetchApiAllArea } from "../../../../../redux/slices/areaSlice/areaSlice";

const ModalAddReading = ({ isOpen, handleCancel, handleOk }) => {
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];
  const tabList = useSelector((state) => state.tabListContractSlice.tabList);
  const { Option } = Select;
  const dispatch = useDispatch();
  const listAreas = useSelector(state => state.areaSlice.data);
  const isAddedSuccess = useSelector(state => state.tuyendoc.isAddedSuccess);
  const danhSachNguoiDung = useSelector(state => state.nguoidung.danhSachNguoiDung)

  // const employeeOptions = [];
  // for (let i = 1; i < 36; i++) {
  //   employeeOptions.push({
  //     value: `NV${i}`,
  //     label: `Nhân viên ${i}`,
  //   });
  // }
  // const indexingPeriodOptions = [];
  // for (let i = 1; i < 36; i++) {
  //   indexingPeriodOptions.push({
  //     value: `KG${i}`,
  //     label: `Kỳ ghi ${i}`,
  //   });
  // }
  // const areaOptions = [];
  // for (let i = 1; i < 36; i++) {
  //   areaOptions.push({
  //     value: `KG${i}`,
  //     label: `Kỳ ghi ${i}`,
  //   });
  // }


  // useEffect(() => {
  //   form.setFieldValue("employee", tabList?.cashier || "");
  //   form.setFieldValue("index", tabList?.index || "");
  //   form.setFieldValue("codeLine", tabList?.codeLine || "");
  //   form.setFieldValue("nameLine", tabList?.nameLine || "");
  //   form.setFieldValue("cashier", tabList?.cashier || "");
  //   form.setFieldValue("indexingPeriod", tabList?.indexingPeriod || "");
  // }, [tabList]);

  // useEffect(() => {
  //   if (!isOpen) return;
  //   return () => {
  //     form.setFieldValue("employee", "");
  //     form.setFieldValue("index", "");
  //     form.setFieldValue("codeLine", "");
  //     form.setFieldValue("nameLine", "");
  //     form.setFieldValue("cashier", "");
  //     form.setFieldValue("indexingPeriod", "");
  //   };
  // }, [isOpen]);

  useEffect(() => {
    dispatch(fetchApiAllArea())
  }, [])

  const onFinish = (values) => {
    const data = { ...values };
    data.KeyId = uuidv4();
    data.nhaMayId = 'nhamaycuangan';
    if (data) {
      dispatch(AddDMTuyenDoc(data)) 
    }
    if (isAddedSuccess) {
      handleCancel("addReading")
      message.success({ content: 'Thêm thành công' })
    }
  };

  // console.log(danhSachNguoiDung);
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
        onFinish={onFinish}
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 15 }}
        initialValues={{ remember: true }}
      >
        <Form.Item
          label="Nhân viên"
          name="Id"
          hidden
        >
          <Input value={() => uuidv4()} />
        </Form.Item>
        <Form.Item
          label="Nhân viên"
          name="nguoiQuanLyId"
          rules={[{ required: true, message: "Hãy chọn nhân viên!" }]}
        >
          <Select
            name="nguoiQuanLyId"
            size="middle"
            placeholder="Chọn nhân viên"
            style={{ width: "100%" }}
          >
            {
              danhSachNguoiDung && danhSachNguoiDung.length > 0 && danhSachNguoiDung?.map((item) => (
                <Option value={item.id}>{item.keyId}</Option>
              ))
            }
          </Select>
        </Form.Item>
        <Form.Item
          label="Số thứ tự"
          name="index"
          rules={[{ required: true, message: "Hãy nhập số thứ tự!" }]}
        >
          <InputNumber
            min={1}
            size="middle"
            name="index"
            placeholder="Số thứ tự"
            style={{ width: "100%" }}
          />
        </Form.Item>
        {/* <Form.Item
          label="Mã tuyến"
          name="maTuyen"
          // rules={[{ required: true, message: "Hãy nhập vào mã tuyến!" }]}
        >
          <Input placeholder="Mã tuyến" name="maTuyen" />
        </Form.Item> */}
        <Form.Item
          label="Tên tuyến"
          name="tenTuyen"
          rules={[{ required: true, message: "Hãy nhập vào tên tuyến!" }]}
        >
          <Input placeholder="Tên tuyến" name="tenTuyen" />
        </Form.Item>
        <Form.Item
          label="Nhân viên thu tiền"
          name="nguoiThuTienId"
          rules={[{ required: true, message: "Hãy chọn nhân viên thu tiền!" }]}
        >
          <Select
            name="nguoiThuTienId"
            size="middle"
            placeholder="Chọn nhân viên"
            style={{ width: "100%" }}
          >
            <Option value="nhân viên 1">nhân viên 1</Option>
            <Option value="nhân viên 2">nhân viên 2</Option>
            <Option value="nhân viên 3">nhân viên 3</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Số ĐT người thu" name="phoneNumberCashier">
          <Input placeholder="Số ĐT người thu" name="phoneNumberCashier" />
        </Form.Item>
        <Form.Item label="Địa chỉ thu" name="address">
          <Input placeholder="Địa chỉ thu" name="address" />
        </Form.Item>
        <Form.Item label="Thời gian thu" name="time">
          <Input placeholder="Thời gian thu" name="time" />
        </Form.Item>
        <Form.Item label="Số ĐT hóa đơn" name="phoneNumberInvoice">
          <Input placeholder="Số ĐT hóa đơn" name="phoneNumberInvoice" />
        </Form.Item>
        <Form.Item label="Số ĐT sửa chữa" name="phoneNumberRepair">
          <Input placeholder="Số ĐT sửa chữa" name="phoneNumberRepair" />
        </Form.Item>
        <Form.Item label="Kỳ ghi chỉ số" name="indexingPeriod">
          <Select
            name="indexingPeriod"
            size="middle"
            placeholder="Kỳ ghi chỉ số"
            style={{ width: "100%" }}
          // options={indexingPeriodOptions}
          />
        </Form.Item>
        <Form.Item label="Khu vực" name="khuVucId">
          <Select
            name="khuVucId"
            size="middle"
            placeholder="Chọn khu vực"
            style={{ width: "100%" }}
          >
            {
              listAreas && listAreas.length > 0 && listAreas.map((area) => (
                <Option value={area.id}>{area?.tenKhuVuc}</Option>
              ))
            }
          </Select>
        </Form.Item>
        <Form.Item label="NV xem biểu mẫu" name="employeeViewForm">
          <Select
            name="employeeViewForm"
            size="middle"
            placeholder="Chọn nhân viên xem biểu mẫu"
            style={{ width: "100%" }}
          // options={employeeOptions}
          />
        </Form.Item>
        <Form.Item label="NV sửa biểu mẫu" name="employeeEditForm">
          <Select
            name="employeeEditForm"
            size="middle"
            placeholder="Chọn nhân viên sửa biểu mẫu"
            style={{ width: "100%" }}
          // options={employeeOptions}
          />
        </Form.Item>
        <Form.Item label="Đơn vị" name="unit">
          <Select
            name="unit"
            size="middle"
            placeholder="Chọn đơn vị"
            style={{ width: "100%" }}
          // options={employeeOptions}
          />
        </Form.Item>
        <Form.Item label="Ngày ghi CS từ" name="fromDate">
          <DatePicker
            name="fromDate"
            placeholder="Chọn ngày ghi từ"
            style={{ width: "100%" }}
            format={dateFormatList}
          />
        </Form.Item>
        <Form.Item label="Ngày ghi CS đến" name="toDate">
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

        <Form.Item className="form-item-button footer">
          <Space>
            <Button
              type="primary"
              icon={<SaveOutlined />}
              style={{ marginRight: 5 }}
            >
              Lưu và thêm tiếp
            </Button>
            <Button
              htmlType="submit"
              icon={<SaveOutlined />}
              style={{
                marginRight: 5,
                backgroundColor: "#fbf2ef",
                color: "#fa8a6d",
              }}
            >
              Lưu và đóng
            </Button>
            <Button
              icon={<CloseCircleOutlined />}
              onClick={() => handleCancel("addReading")}
              style={{
                backgroundColor: "#fa896b",
                color: "#ffffff",
                border: "none",
              }}
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
