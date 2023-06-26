import { CloseCircleOutlined, SaveOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Modal,
  Radio,
  Select,
  Space,
} from "antd";
import React from "react";
import { useSelector } from "react-redux";

const ModalTransferEmployee = ({
  isOpen,
  handleCancel,
  handleOk,
  openTransferManagers,
}) => {
  const tabList = useSelector((state) => state.tabListContractSlice.tabList);
  const employeeOptions = [];
  for (let i = 1; i < 36; i++) {
    employeeOptions.push({
      value: `NV${i}`,
      label: `Nhân viên ${i}`,
    });
  }
  const [form] = Form.useForm();

  return (
    <Modal
      title={
        openTransferManagers
          ? "Chuyển cán bộ quản lý tuyến"
          : "Chuyển cán bộ quản lý thu"
      }
      open={isOpen}
      onOk={() => handleOk("transferEmployee")}
      onCancel={() => handleCancel("transferEmployee")}
      className="popup-add-transfer-employee"
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
        <Form.Item label="Nhân viên cũ:" name="oldEmployee">
          <Input name="oldEmployee" />
        </Form.Item>
        <Form.Item label="Mã tuyến:" name="codeLine">
          <Input name="codeLine" />
        </Form.Item>
        <Form.Item label="Tên tuyến:" name="nameLine">
          <Input name="nameLine" />
        </Form.Item>
        {openTransferManagers ? (
          <Form.Item
            label="Nhân viên mới:"
            name="newEmployee"
            rules={[{ required: true, message: "Hãy chọn nhân viên mới!" }]}
          >
            <Select
              name="newEmployee"
              size="middle"
              placeholder="Chọn nhân viên mới"
              style={{ width: "100%" }}
              options={employeeOptions}
            />
          </Form.Item>
        ) : (
          <Form.Item
            label="Nhân viên thu mới:"
            name="newEmployee"
            rules={[{ required: true, message: "Hãy chọn nhân viên mới!" }]}
          >
            <Select
              name="newEmployee"
              size="middle"
              placeholder="Chọn nhân viên mới"
              style={{ width: "100%" }}
              options={employeeOptions}
            />
          </Form.Item>
        )}
        {openTransferManagers && (
          <Form.Item label="Chuyển hóa đơn:" name="transferBill">
            <Select
              name="transferBill"
              size="middle"
              placeholder="Chọn hóa đơn"
              style={{ width: "100%" }}
              // options={employeeOptions}
            />
          </Form.Item>
        )}
        {!openTransferManagers && (
          <>
            <Form.Item name="status">
              <Radio.Group
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Radio value={true}>Theo tuyến đọc</Radio>
                <Radio value={false}>Theo tuyến thu</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item>
              <Checkbox style={{ marginRight: "5px" }} />
              Chuyển hóa đơn chưa thanh toán
            </Form.Item>
          </>
        )}
        <Form.Item className="form-item-button">
          <Space size={5} className="modal-button-actions">
            <Button
              className="button"
              type="primary"
              icon={<SaveOutlined />}
              style={{ marginRight: 5, width: "100%" }}
              size="middle"
              // disabled={!(valueSymbol && valueDescribe)}
            >
              Thực hiện
            </Button>
            <Button
              className="button"
              key="submit"
              icon={<CloseCircleOutlined />}
              onClick={() => handleCancel("transferEmployee")}
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

export default ModalTransferEmployee;
