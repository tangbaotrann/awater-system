import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initialData } from "../../utils/dataEnterIndexPage/data/data";
import ImageModal from "./ImageModel";
import SearchForm from "./SearchForm";
import ExcelForm from "./ExcelForm";
import FileForm from "./FileForm";
import UtilityButton from "./UtilityButton";
import PriceTableButton from "./PriceTableButton";
import UsageButton from "./UsageButton";
import ChartButton from "./ChartButton";
import "./EnterIndexPage.css";
import viVN from "antd/es/date-picker/locale/vi_VN";
import { updateSearchCriteria } from "../../redux/enterIndexPage/searchCriteriaSlice";
import {
  Dropdown,
  Menu,
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
  Modal,
  Upload,
  Space,
} from "antd";
import {
  SearchOutlined,
  DownloadOutlined,
  EditOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
  CalculatorOutlined,
  SyncOutlined,
  RetweetOutlined,
  CheckCircleOutlined,
  CalendarOutlined,
  RedoOutlined,
  FileExcelOutlined,
  UploadOutlined,
  ToolOutlined,
  TableOutlined,
  FundOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import moment from "moment";
import "./EnterIndexPage.css";
import "moment/locale/vi";
moment.locale("vi");
function EnterIndexPage() {
  const { token } = theme.useToken();

  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleButtonClick5 = () => {
    setIsModalVisible5(true);
  };

  const handleModalCancel5 = () => {
    setIsModalVisible5(false);
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

  const [isModalVisible5, setIsModalVisible5] = useState(false);
  const { Option } = Select;
  const [data1, setData1] = useState(initialData);

  // Hàm xử lý khi có thay đổi dữ liệu của bảng 1
  const handleData1Change = (newData) => {
    setData1(newData);
  };

  // Hàm xử lý khi có thay đổi dữ liệu của bảng 2

  const columns = [
    {
      title: "HA và TT",
      dataIndex: "imageAndStatus",
      key: "imageAndStatus",
    },
    {
      title: "Thứ tự",
      dataIndex: "order",
      key: "order",
    },
    {
      title: "Tuyến đọc",
      dataIndex: "readingLine",
      key: "readingLine",
    },
    {
      title: "Số hợp đồng",
      dataIndex: "contractNumber",
      key: "contractNumber",
    },
    {
      title: "Sen đồng hồ",
      dataIndex: "clockSen",
      key: "clockSen",
    },
    {
      title: "Tên khách hàng",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tiền thu",
      dataIndex: "moneyCollected",
      key: "moneyCollected",
    },
    {
      title: "Chỉ số cũ",
      dataIndex: "oldIndex",
      key: "oldIndex",
    },
    {
      title: "Chỉ số mới",
      dataIndex: "newIndex",
      key: "newIndex",
    },
    {
      title: "Tiêu thụ",
      dataIndex: "consumption",
      key: "consumption",
    },
    {
      title: "Ngày đọc",
      dataIndex: "readingDate",
      key: "readingDate",
    },
    {
      title: "Ngày đồng bộ",
      dataIndex: "readingDate",
      key: "readingDate",
    },
    {
      title: "Trạng thái đọc",
      dataIndex: "recordedIndex",
      key: "recordedIndex",
    },
    {
      title: "Ngày đầu kì",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "Ngày cuối kì",
      dataIndex: "endDate",
      key: "endDate",
    },
    {
      title: "Chỉ số cũ",
      dataIndex: "oldIndex",
      key: "oldIndex",
    },
    {
      title: "Chỉ số mới",
      dataIndex: "newIndex",
      key: "newIndex",
    },
    {
      title: "Trạng thái ĐH",
      dataIndex: "recordedIndex",
      key: "recordedIndex",
    },
    {
      title: "Ghi chú",
      dataIndex: "recordedIndex",
      key: "recordedIndex",
    },
  ];
  const AdvancedSearchForm = () => {
    const { token } = theme.useToken();
    const [form] = Form.useForm();
    const onFinish = (values) => {
      console.log("Received values of form: ", values);
    };
    const handleReset = () => {
      form.resetFields();
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
        <Row gutter={8}>
          <Col span={4}>
            <Form.Item
              size="small"
              className="custom-form-item"
              label="Chọn tháng"
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
          <Col span={4}>
            <Form.Item size="small" label="Cán bộ đọc" name="1">
              <Select style={{ width: "100%" }} size="small" name="s1">
                <Option value="1">1</Option>
                <Option value="2">2</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
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
          <Col span={4}>
            <Form.Item
              size="small"
              className="custom-form-item"
              style={{
                width: "100%",
              }}
            >
              <Input
                size="small"
                placeholder="Tên hoặc mã hoặc ID KH"
                style={{ color: "black" }}
              />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              size="small"
              className="custom-form-item"
              style={{
                width: "100%",
              }}
              name="4"
            >
              <Input
                size="small"
                placeholder="Số hợp đồng"
                style={{ color: "black" }}
              />
            </Form.Item>
          </Col>
          <Col span={4}>
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

        <Row gutter={8}>
          <Col span={5}>
            <Form.Item
              size="small"
              // className="custom-form-item"
              label="Trạng thái đọc"
              name="6"
            >
              <Select style={{ width: "100%" }} size="small">
                <Option value="1"> 1</Option>
                <Option value="2"> 2</Option>
                <Option value="3"> 3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              size="small"
              // className="custom-form-item"
              label={
                <>
                  Bất thường
                  <br />
                </>
              }
            >
              <Select style={{ width: "100%" }} size="small" name="s1">
                <Option value="1">Lựa chọn 1</Option>
                <Option value="2">Lựa chọn 2</Option>
                <Option value="3">Lựa chọn 3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={3}>
            <Form.Item
              size="small"
              // className="custom-form-item"
              label="Tiêu thụ"
              name="8"
            >
              <Select style={{ width: "100%" }} size="small" name="s1">
                <Option value="1"> 1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="3">3</Option>
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
          <Col span={7}>
            <Form.Item
              size=" small"
              lassName="custom-form-item"
              label="Số ghi"
              name="9"
            >
              <Input
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
                  size="small"
                  style={{
                    width: "100%",
                  }}
                  className="small-button"
                  onClick={handleReset}
                  icon={<RedoOutlined />}
                >
                  Làm mới
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
          <div>
            <SearchForm />
          </div>
          <div>
            <ExcelForm />
          </div>
          <div>
            <FileForm />
          </div>
          <div>
            <UtilityButton />
          </div>
          <div>
            <PriceTableButton />
          </div>
          <div>
            <UsageButton />
          </div>
          <div>
            <ChartButton />
          </div>
          <div>
            <ImageModal />
          </div>
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
          height: "340px",
          position: "relative",
        }}
      >
        <Table
          size="small"
          pagination={{
            current: 1,
            total: 10000,
            pageSize: 50,
          }}
          scroll={{ x: 3000, y: 280 }}
          columns={columns}
          dataSource={data1}
          onChange={handleData1Change}
        />
      </div>
      <div style={{ display: "flex", marginTop: "0px", paddingRight: "10px" }}>
        <AdvanceFooterForm />
      </div>
    </>
  );
}
export default EnterIndexPage;
