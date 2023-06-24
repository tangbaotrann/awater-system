import { React, useState } from "react";

import { useDispatch } from "react-redux";
import { initialData, initialData2 } from "./data/data";
import "./InvoicePrint.css";
import InvoicingDetailsModal from "./InvoicingDetailsModal/InvoicingDetailsModal";
import TwoButtonPrint from "./TwoButtonPrint/TwoButtonPrint";
import ReprintButton from "./ReprintButton/ReprintButton";
import PrintButton from "./PrintButton/PrintButton";
import PrintCodeKH from "./PrintCodeKH/PrintCodeKH";
import viVN from "antd/es/date-picker/locale/vi_VN";
import { updateSearchCriteria } from "../../redux/enterIndexPage/searchCriteriaSlice";
import {
  Form,
  Input,
  Button,
  DatePicker,
  Row,
  Col,
  Select,
  InputNumber,
  theme,
  Table,
  Progress,
  Space,
} from "antd";
import {
  SearchOutlined,
  DeleteOutlined,
  CheckCircleOutlined,
  FormOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
import moment from "moment";
import "moment/locale/vi";
moment.locale("vi");
function InvoicePrint() {
  const { token } = theme.useToken();

  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const handleButtonClick = () => {
    setIsModalVisible(true);
  };
  const handleButtonClick1 = () => {
    setIsModalVisible1(true);
  };
  const handleButtonClick5 = () => {
    setIsModalVisible5(true);
  };
  const handleModalCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values) => {
    dispatch(updateSearchCriteria(values));
  };
  const handleMonthChange = (date) => {
    if (date) {
      form.setFieldsValue({ month: date.format("M/YYYY") });
    } else {
      form.setFieldsValue({ month: undefined });
    }
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [setIsModalVisible1] = useState(false);
  const [setIsModalVisible5] = useState(false);
  const { Option } = Select;
  const [data1, setData1] = useState(initialData);

  // Hàm xử lý khi có thay đổi dữ liệu của bảng 1
  function fetchDataForPage(page) {
    const pageSize = 5;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return initialData.slice(startIndex, endIndex);
  }

  const handleData1Change = (pagination) => {
    const currentPage = pagination.current;
    const newData = fetchDataForPage(currentPage);
    setData1(newData);
  };
  const columns = [
    {
      title: "",
      dataIndex: "order",
      key: "order",
    },
    {
      title: "Tuyến đọc",
      dataIndex: "readingLine",
      key: "readingLine",
    },
    {
      title: "Cán bộ đọc",
      dataIndex: "reader",
      key: "reader",
    },
    {
      title: "Tên phiên",
      dataIndex: "sessionName",
      key: "sessionName",
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdDate",
      key: "createdDate",
    },
    {
      title: "Sê ri",
      dataIndex: "serialNumber",
      key: "serialNumber",
    },
    {
      title: "Số hóa đơn BĐ",
      dataIndex: "startInvoiceNumber",
      key: "startInvoiceNumber",
    },
    {
      title: "Số hóa đơn KT",
      dataIndex: "endInvoiceNumber",
      key: "endInvoiceNumber",
    },
    {
      title: "Số lượng HĐ",
      dataIndex: "contractCount",
      key: "contractCount",
    },
    {
      title: "Đã in xong",
      dataIndex: "isPrinted",
      key: "isPrinted",
    },
    {
      title: "",
      key: "actions",
      render: (text, record) => {
        return (
          <>
            <Button
              icon={<FormOutlined />}
              onClick={handleButtonClick}
            ></Button>
            <Button icon={<SnippetsOutlined />}></Button>
            <InvoicingDetailsModal
              visible={isModalVisible}
              onCancel={handleModalCancel}
              data={initialData2}
            />
          </>
        );
      },
    },
  ];

  const AdvancedSearchForm = () => {
    const { token } = theme.useToken();
    const [form] = Form.useForm();
    const onFinish = (values) => {
      console.log("Received values of form: ", values);
    };

    return (
      <Form
        form={form}
        name="advanced_search"
        size="small"
        onFinish={onFinish}
        style={{
          maxWidth: "none",
          background: token.colorFillAlter,
          borderRadius: token.borderRadiusLG,
          padding: 24,
        }}
      >
        <Row gutter={9}>
          <Col span={3}>
            <Form.Item
              size="small"
              className="custom-form-item"
              label="Tháng: "
              name="month"
            >
              <DatePicker
                locale={viVN}
                size="small"
                picker="month"
                style={{ width: "100%" }}
                onChange={handleMonthChange}
                format="M/YYYY"
              />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item size="small" label="Cán bộ đọc" name="1">
              <Select style={{ width: "100%" }} size="small" name="s1">
                <Option value="1">1</Option>
                <Option value="2">2</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              size="small"
              className="custom-form-item"
              label={
                <>
                  Tuyến đọc
                  <br />
                </>
              }
              name="2"
            >
              <Select style={{ width: "100%" }} size="small" name="s1">
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item
              size="small"
              label={
                <>
                  In hóa đơn
                  <br />
                </>
              }
            >
              <Select style={{ width: "100%" }} size="small">
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={5}>
          <Col span={15}>
            <Form.Item
              size="small"
              // className="custom-form-item"
              label="Tên phiên"
              name="6"
            >
              <Input
                size="small"
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              size="small"
              // className="custom-form-item"
              label="Tiêu thụ"
              name="8"
            >
              <Select style={{ width: "100%" }} size="small" name="s1">
                <Option value="1">Lựa chọn 1</Option>
                <Option value="2">Lựa chọn 2</Option>
                <Option value="3">Lựa chọn 3</Option>
                <Option value="3">Lựa chọn 3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={2}>
            <Form.Item className="custom-form-item" label="" name="quantity">
              <InputNumber
                size="small"
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
          <Col span={3}>
            <div>
              <Space size="small">
                <Button
                  style={{
                    maxWidth: "100%",
                  }}
                  size="small"
                  type="primary"
                  htmlType="submit"
                >
                  <SearchOutlined />
                  Tìm kiếm
                </Button>
              </Space>
            </div>
          </Col>
        </Row>
      </Form>
    );
  };
  const AdvanceFooterForm = () => {
    const [form] = Form.useForm();

    return (
      <Form
        form={form}
        name="advanced_search"
        size="small"
        layout="inline"
        onFinish={onFinish}
      >
        <div
          style={{ display: "flex", marginTop: "10px", paddingRight: "10px" }}
          className="footer-buttons"
        >
          <Button
            onClick={handleButtonClick1}
            icon={<CheckCircleOutlined />}
            style={{ marginRight: "10px" }}
            type="primary"
          >
            Đã in xong
          </Button>
          <div>
            <PrintButton />
          </div>
          <div>
            <TwoButtonPrint />
          </div>
          <div>
            <ReprintButton />
          </div>
          <div>
            <PrintCodeKH />
          </div>
          <Button
            onClick={handleButtonClick5}
            icon={<DeleteOutlined />}
            style={{ marginRight: "10px" }}
            type="primary"
          >
            Xóa
          </Button>
        </div>
      </Form>
    );
  };
  return (
    <>
      <AdvancedSearchForm />
      <div
        style={{
          lineHeight: "200px",
          textAlign: "center",
          background: token.colorFillAlter,
          borderRadius: token.borderRadiusLG,
          marginTop: 16,
          padding: "10px 10px",
          height: "450px",
          position: "relative",
        }}
      >
        <Table
          size="small"
          rowKey="index"
          pagination={{
            current: 1,
            total: initialData.length,
            pageSize: 5,
          }}
          scroll={{ x: 1500, y: 290 }}
          columns={columns}
          dataSource={data1}
          onChange={handleData1Change}
        />
        <div style={{ display: "flex", position: "absolute", bottom: "200" }}>
          <Progress
            percent={10}
            size={[200, 20]}
            format={(percent) => `${percent * 10}`}
          />
          <Progress
            percent={60}
            size={[200, 20]}
            strokeColor="yellow"
            format={(percent) => `${percent * 10}`}
          />
          <Progress
            percent={70}
            size={[200, 20]}
            strokeColor="red"
            format={(percent) => `${percent * 10}`}
          />
          <Progress
            percent={30}
            size={[200, 20]}
            strokeColor="#ff8033"
            format={(percent) => `${percent * 10}`}
          />
        </div>
      </div>
      <div style={{ display: "flex", marginTop: "10px", paddingRight: "10px" }}>
        <AdvanceFooterForm />
      </div>
    </>
  );
}
export default InvoicePrint;
