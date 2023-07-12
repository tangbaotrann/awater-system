import { React, useState } from "react";
import ReactToPrint from "react-to-print";
import { initialData } from "../../utils/dataInvoicePrint/data";
import "../../components/GlobalStyles/GlobalStyles.css";
import InvoicingDetailsModal from "./FormInvoicePrint/InvoicingDetailsModal/InvoicingDetailsModal";
import TabListIP from "./FormInvoicePrint/TableListIP.js";
import PrintButton from "./PrintButton.js";
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
  Collapse,
} from "antd";
import { SearchOutlined, FormOutlined, PlusOutlined } from "@ant-design/icons";
import moment from "moment";
import "moment/locale/vi";
import { useMediaQuery } from "react-responsive";
moment.locale("vi");

function InvoicePrint() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  const { token } = theme.useToken();
  const initialData = Array.from({ length: 100 }, (_, i) => {
    return {
      key: i + 1,
      order: i + 1,
      readingLine: `Tuyến đọc ${i + 1}`,
      reader: `Cán bộ ${i + 1}`,
      sessionName: `Tên phiên ${i + 1}`,
      createdDate: `Ngày tạo ${i + 1}`,
      serialNumber: `Sê ri ${i + 1}`,
      startInvoiceNumber: `Số HĐ BĐ ${i + 1}`,
      endInvoiceNumber: `Số HĐ KT ${i + 1}`,
      contractCount: `${i + 1}`,
      isPrinted: `Đã in xong ${i + 1}`,
    };
  });
  const [form] = Form.useForm();
  const handleButtonClick = () => {
    setIsModalVisible(true);
  };
  const handleModalCancel = () => {
    setIsModalVisible(false);
  };
  const handleMonthChange = (date) => {
    if (date) {
      form.setFieldsValue({ month: date.format("M/YYYY") });
    } else {
      form.setFieldsValue({ month: undefined });
    }
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const { Option } = Select;
  const [data1, setData1] = useState(initialData);

  // Hàm xử lý khi có thay đổi dữ liệu của bảng 1
  function fetchDataForPage(page) {
    const pageSize = 18;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return initialData.slice(startIndex, endIndex);
  }

  const handleData1Change = (pagination) => {
    const currentPage = pagination.current;
    // const newData = fetchDataForPage(currentPage);
    // setData1(newData);
  };
  const columns = [
    {
      title: "#",
      dataIndex: "order",
      key: "order",
      width: 70,
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
      width: 120,
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
      width: 120,
    },
    {
      title: "Đã in xong",
      dataIndex: "isPrinted",
      key: "isPrinted",
      width: 120,
    },
    {
      title: "",
      key: "actions",
      width: 120,

      render: (text, record) => {
        return (
          <>
            <Button
              icon={<FormOutlined />}
              onClick={() => handleButtonClick(record)}
            ></Button>
            <PrintButton record={record} />
            {/* <Button icon={<PrinterOutlined />}> In </Button> */}
          </>
        );
      },
    },
  ];

  const AdvancedSearchForm = () => {
    const layout = {
      labelCol: {
        span: 8,
      },
    };
    return (
      <Form {...layout}>
        <Row gutter={4}>
          <Col span={3} xs={24} sm={12} md={4}>
            <Form.Item
              // size="small"
              className="custom-form-item"
              label="Tháng: "
              name="month"
            >
              <DatePicker
                locale={viVN}
                // size="small"
                picker="month"
                style={{ width: "100%" }}
                onChange={handleMonthChange}
                format="M/YYYY"
              />
            </Form.Item>
          </Col>
          <Col span={7} xs={24} sm={12} md={9}>
            <Form.Item label="Cán bộ đọc" name="1">
              <Select
                style={{ width: "100%" }}
                name="s1"
                placeholder="Chọn cán bộ"
              >
                <Option value="1">1</Option>
                <Option value="2">2</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={4} xs={24} sm={12} md={8}>
            <Form.Item label="Tiêu thụ" name="8">
              <Select
                style={{ width: "100%" }}
                name="s1"
                placeholder="Chon tiệu thụ"
              >
                <Option value="1">Lựa chọn 1</Option>
                <Option value="2">Lựa chọn 2</Option>
                <Option value="3">Lựa chọn 3</Option>
                <Option value="3">Lựa chọn 3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={2} xs={24} sm={12} md={3}>
            <Form.Item className="custom-form-item" label="" name="quantity">
              <InputNumber
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={4}>
          <Col span={15} xs={24} sm={12} md={4}>
            <Form.Item
              // className="custom-form-item"
              label="Tên phiên"
              name="6"
            >
              <Input
                placeholder="Chọn tên"
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
          <Col span={6} xs={24} sm={12} md={9}>
            <Form.Item
              className="custom-form-item"
              label={
                <>
                  Tuyến đọc
                  <br />
                </>
              }
              name="2"
            >
              <Select
                style={{ width: "100%" }}
                name="s1"
                placeholder="Chọn tuyến"
              >
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={7} xs={24} sm={12} md={8}>
            <Form.Item label={<>In hóa đơn</>}>
              <Select style={{ width: "100%" }} placeholder="Chọn hóa đơn in">
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={3} xs={24} sm={12} md={3}>
            <div>
              <Space>
                <Button
                  style={{
                    maxWidth: "100%",
                  }}
                  className="custom-btn-search"
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
  const item = [
    {
      key: "1",
      label: "Tìm kiếm",
      children: <AdvancedSearchForm />,
    },
  ];
  return (
    <>
      <Collapse size="small" items={item} />
      {/* <AdvancedSearchForm /> */}
      <div
        style={{
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
          // pagination={{
          //   current: 1,
          //   total: initialData.length,
          //   pageSize: 18,
          // }}
          scroll={{ x: 1800, y: 440 }}
          columns={columns.map((column) => ({
            ...column,
            className: "cell-wrap",
          }))}
          dataSource={data1}
          onChange={handleData1Change}
        />
        <InvoicingDetailsModal
          visible={isModalVisible}
          onCancel={handleModalCancel}
          data={initialData}
        />
        <div className="InvoicePrint-bottom">
          <div className="contract-bottom-func">
            {isTabletOrMobile ? (
              <Popover
                size="small"
                rootClassName="fix-popover-z-index"
                placement="bottomRight"
                trigger="click"
                content={<TabListIP isTabletOrMobile={isTabletOrMobile} />}
              >
                <PlusOutlined />
              </Popover>
            ) : (
              <TabListIP />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default InvoicePrint;
