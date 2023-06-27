import { React, useState } from "react";
import { initialData } from "../../utils/dataEnterIndexPage/data/data";
import TabListEP from "./TableListEP";
import "./EnterIndexPage.css";
import "../../components/GlobalStyles/GlobalStyles.css";
import viVN from "antd/es/date-picker/locale/vi_VN";
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
  Space,
  Popover,
} from "antd";
import { SearchOutlined, RedoOutlined, PlusOutlined } from "@ant-design/icons";
import moment from "moment";
import "./EnterIndexPage.css";
import "moment/locale/vi";
import { useMediaQuery } from "react-responsive";
moment.locale("vi");
function EnterIndexPage() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const { token } = theme.useToken();
  const [form] = Form.useForm();

  const handleMonthChange = (date) => {
    if (date) {
      form.setFieldsValue({ month: date.format("M/YYYY") });
    } else {
      form.setFieldsValue({ month: undefined });
    }
  };

  const { Option } = Select;
  const [data1, setData1] = useState(initialData);

  function fetchDataForPage(page) {
    const pageSize = 18;
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
          <Col xs={24} sm={12} md={8} lg={6} span={4}>
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
          <Col xs={24} sm={12} md={8} lg={6} span={4}>
            <Form.Item size="small" label="Cán bộ đọc" name="1">
              <Select style={{ width: "100%" }} size="small" name="s1">
                <Option value="1">1</Option>
                <Option value="2">2</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} span={4}>
            <Form.Item
              size="small"
              className="custom-form-item"
              label={<>Tuyến đọc</>}
              name="2"
            >
              <Select style={{ width: "100%" }} size="small" name="s1">
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} span={4}>
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
        </Row>

        <Row gutter={8}>
          <Col xs={24} sm={12} md={8} lg={6} span={4}>
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
          <Col span={5} xs={24} sm={12} md={6}>
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
          <Col span={4} xs={24} sm={12} md={6}>
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
          <Col span={7} xs={24} sm={12} md={6}>
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
        </Row>
        <Row gutter={8}>
          <Col span={3} xs={24} sm={12} md={6}>
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
          <Col span={2} xs={24} sm={12} md={6}>
            <Form.Item className="custom-form-item" label="" name="quantity">
              <InputNumber
                size="small"
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>

          <Col>
            <div>
              <Space size="small">
                <Button
                  size="small"
                  type="primary"
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
          <Col>
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
          height: "350px",
          position: "relative",
        }}
      >
        <Table
          size="small"
          rowKey="index"
          pagination={{
            current: 1,
            total: initialData.length,
            pageSize: 18,
          }}
          scroll={{ x: 2800, y: 290 }}
          columns={columns}
          dataSource={data1}
          onChange={handleData1Change}
        />
        <div className="EnterIndexPage-bottom">
          <div className="contract-bottom-func">
            {isTabletOrMobile ? (
              <Popover
                rootClassName="fix-popover-z-index"
                placement="bottomRight"
                trigger="click"
                content={<TabListEP isTabletOrMobile={isTabletOrMobile} />}
              >
                <PlusOutlined />
              </Popover>
            ) : (
              <TabListEP />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default EnterIndexPage;
