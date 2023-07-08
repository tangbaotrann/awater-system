import {
  EyeOutlined,
  CloseOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  Collapse,
  DatePicker,
  Form,
  Modal,
  Row,
  Select,
  Table,
} from "antd";
import { useState } from "react";
import { SearchForm } from "./SearchForm";
import { ViewDetailListClock } from "../ViewDetail/ViewDetailListClock";

export const CreateMultipleBook = (props) => {
  const { isOpen, handleOk, handleCancel } = props;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isOpenModalViewDetail, setIsOpenModalViewDetail] = useState(false);
  console.log(isOpen);

  const hanldeShowDetail = () => {
    setIsOpenModalViewDetail(true)
  };

  const dataSource = Array.from({ length: 100 }, (_, index) => ({
    key: index,
    stt: index + 1,
    employee: `Cán bộ ${index}`,
    readCode: `Mã tuyến ${index}`,
    namecode: `Tên tuyến ${index}`,
    semesterIndex: `Kỳ ghi chỉ số ${index}`,
    created: `Đã tạo ${index}`,
    eye: (
      <span onClick={hanldeShowDetail}>
        <EyeOutlined style={{ color: "#258ae3", cursor: 'pointer' }} />
      </span>
    ),
  }));

  const columns = [
    {
      title: "#",
      dataIndex: "stt",
      key: "stt",
      width: 100,
    },
    {
      title: "Nhân viên",
      dataIndex: "employee",
      key: "employee",
    },
    {
      title: "Mã tuyến đọc",
      dataIndex: "readCode",
      key: "readCode",
    },
    {
      title: "Tên tuyến đọc",
      dataIndex: "namecode",
      key: "namecode",
    },
    {
      title: "Kỳ ghi chỉ số",
      dataIndex: "semesterIndex",
      key: "semesterIndex",
    },
    {
      title: "Đã tạo",
      dataIndex: "created",
      key: "created",
    },
    {
      title: "",
      dataIndex: "eye",
      key: "eye",
      width: 40,
    },
  ];

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const items = [
    {
      key: "1",
      label: "Tìm kiếm",
      children: <SearchForm />,
    },
  ];

  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 24,
    },
  };

  return (
    <Modal
      title="Tạo sổ ghi chỉ số"
      open={isOpen}
      onOk={() => handleOk("", "multiple")}
      onCancel={() => handleCancel("", "multiple")}
      width={1000}
      footer={null}
      centered
    >
      <Collapse items={items} size="small" />
      <div
        style={{
          marginTop: 16,
        }}
      >
        <Table
          rowSelection={rowSelection}
          dataSource={dataSource}
          columns={columns}
          size="small"
          pagination={{
            current: 1,
            // total: 10000,
            // pageSize: 50,
          }}
          scroll={{
            x: 1000,
            y: 240,
          }}
          bordered
        />
        <Form {...layout}>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                defaultValue="--Chọn kỳ ghi chỉ số--"
                name="status"
                label="Kỳ ghi chỉ số"
                rules={[
                  {
                    required: true,
                  },
                ]}
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
              <Form.Item
                name="status"
                label="Ngày đầu kỳ"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <DatePicker
                  allowClear
                  placeholder="Chọn ngày"
                  style={{ width: "100%" }}
                  format="DD-MM-YYYY"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="place"
                label="Ngày hóa đơn"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <DatePicker
                  allowClear
                  placeholder="Chọn ngày"
                  style={{ width: "100%" }}
                  format="DD-MM-YYYY"
                />
              </Form.Item>
              <Form.Item
                name="place"
                label="Ngày cuối kỳ"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <DatePicker
                  allowClear
                  placeholder="Chọn ngày"
                  style={{ width: "100%" }}
                  format="DD-MM-YYYY"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      <Row
        style={{
          display: "flex",
          justifyContent: "justify-between",
          marginBottom: 16,
          marginTop: 16,
          width: "100%",
        }}
      >
        <div>
          <Checkbox style={{ marginRight: "13px" }}>Tạo biểu mẫu</Checkbox>
          <Checkbox style={{ marginRight: "13px" }}>Ghi chỉ số online</Checkbox>
          <Checkbox style={{ marginRight: "13px" }}>Không SD kỳ</Checkbox>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <Button
            icon={<PlusCircleOutlined />}
            className="tab-item-readingIndex-2 "
            style={{ marginRight: 5 }}
          >
            Tạo sổ đồng loạt
          </Button>
          <Button
            onClick={() => handleCancel("", "multiple")}
            size="middle"
            className="custom-btn-close"
          >
            <CloseOutlined />
            Đóng
          </Button>
        </div>
      </Row>
      <ViewDetailListClock
        isOpen={isOpenModalViewDetail}
        handleOk={() => setIsOpenModalViewDetail(false)}
        setIsOpen={setIsOpenModalViewDetail}
      />
    </Modal>
  );
};
