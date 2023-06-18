import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { initialData } from "./data";
import { otherData } from "./otherData.js";
import WaterPriceTable from "./WaterPriceTable";
import ImageModal from "./ImageModel";

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
  Progress,
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
} from "@ant-design/icons";
import moment from "moment";
import "./EnterIndexPage.css";
import "moment/locale/vi";
import { Column } from "@ant-design/charts";
moment.locale("vi");
// import "./ViewWater.jsx";
function EnterIndexPage() {
  const dispatch = useDispatch();
  const searchCriteria = useSelector((state) => state.searchCriteria);
  const [form] = Form.useForm();
  // const navigate = useNavigate();
  // const handleButtonClick = () => {
  //   navigate("./ViewWater.jsx");
  // };
  const handleButtonClick = () => {
    setIsModalVisible(true);
  };
  const handleButtonClick1 = () => {
    setIsModalVisible1(true);
  };
  const handleButtonClick2 = () => {
    setIsModalVisible2(true);
  };
  const handleButtonClick3 = () => {
    setIsModalVisible3(true);
  };
  const handleButtonClick4 = () => {
    setIsModalVisible4(true);
  };
  const handleButtonClick5 = () => {
    setIsModalVisible5(true);
  };
  const handleButtonClick6 = () => {
    setIsModalVisible6(true);
  };
  const handleModalCancel = () => {
    setIsModalVisible(false);
  };
  const handleModalCancel1 = () => {
    setIsModalVisible1(false);
  };
  const handleModalCancel2 = () => {
    setIsModalVisible2(false);
  };
  const handleModalCancel3 = () => {
    setIsModalVisible3(false);
  };
  const handleModalCancel4 = () => {
    setIsModalVisible4(false);
  };
  const handleModalCancel5 = () => {
    setIsModalVisible5(false);
  };
  const handleModalCancel6 = () => {
    setIsModalVisible6(false);
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
  const handleReset = () => {
    form.resetFields();
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);
  const [isModalVisible4, setIsModalVisible4] = useState(false);
  const [isModalVisible5, setIsModalVisible5] = useState(false);
  const [isModalVisible6, setIsModalVisible6] = useState(false);
  const { Option } = Select;
  const [data1, setData1] = useState(initialData);
  const [data2, setData2] = useState(otherData);

  // Hàm xử lý khi có thay đổi dữ liệu của bảng 1
  const handleData1Change = (newData) => {
    setData1(newData);
  };

  // Hàm xử lý khi có thay đổi dữ liệu của bảng 2
  const handleData2Change = (newData) => {
    setData2(newData);
  };

  // // Hàm tính toán số lượng dữ liệu cho mỗi trạng thái
  // const countByStatus = (status) => {
  //   return data.filter((item) => item.status === status).length;
  // };
  const [showChart, setShowChart] = useState(false);
  const [chartData, setChartData] = useState([]);
  const getTableData = () => {
    return otherData;
  };
  const handleExportChartClick = () => {
    // Lấy dữ liệu từ bảng
    const tableData = getTableData();

    // Chuyển đổi dữ liệu bảng thành dạng phù hợp để vẽ biểu đồ
    const chartData = tableData
      .map((row) => [
        { date: row.readingDate, value: row.oldIndex, type: "Chỉ số đầu cũ" },
        { date: row.readingDate, value: row.newIndex, type: "Chỉ số đầu mới" },
      ])
      .flat();

    // Hiển thị biểu đồ
    setChartData(chartData);
    setShowChart(true);
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
  const otherColumns = [
    {
      title: "Số thứ tự",
      dataIndex: "order",
      key: "order",
    },
    {
      title: "Mã Khách Hàng",
      dataIndex: "customerCode",
      key: "customerCode",
    },
    {
      title: "Tiền Thu",
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
      title: "Chỉ số đầu cũ",
      dataIndex: "recordedIndex",
      key: "recordedIndex",
    },
    {
      title: "Chỉ số cuối cũ",
      dataIndex: "recordedIndex",
      key: "recordedIndex",
    },
    {
      title: "Ghi chú",
      dataIndex: "recordedIndex",
      key: "recordedIndex",
    },
    {
      title: "Trạng thái đọc",
      dataIndex: "recordedIndex",
      key: "recordedIndex",
    },
  ];

  const AdvancedSearchForm = () => {
    const { token } = theme.useToken();
    const [form] = Form.useForm();
    const formStyle = {
      maxWidth: "none",
      background: token.colorFillAlter,
      borderRadius: token.borderRadiusLG,
      padding: 24,
    };
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
        style={formStyle}
        size="small"
        layout="inline"
        onFinish={onFinish}
      >
        <Row gutter={24}>
          <Col
            className="full-width-col"
            xs={24}
            sm={12}
            md={8}
            lg={4}
            span={8}
          >
            <Form.Item
              size="small"
              style={{
                width: "100%",
              }}
              className="custom-form-item"
              label="Tháng: "
              name="month"
            >
              <DatePicker
                locale={viVN}
                size="small"
                style={{
                  width: "100%",
                }}
                picker="month"
                onChange={handleMonthChange}
                format="M/YYYY"
              />
            </Form.Item>
          </Col>
          <Col
            className="full-width-col"
            xs={24}
            sm={12}
            md={8}
            lg={4}
            span={8}
          >
            <Form.Item size="small" label="Cán bộ đọc" name="1">
              <Select size="small" name="s1">
                <Option value="1"> 1</Option>
                <Option value="2"> 2</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col
            className="full-width-col"
            xs={24}
            sm={12}
            md={8}
            lg={4}
            span={8}
          >
            <Form.Item
              size="small"
              className="custom-form-item"
              label="Tuyến đọc"
              name="2"
            >
              <Select size="small" name="s1">
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col
            className="full-width-col"
            xs={24}
            sm={12}
            md={8}
            lg={4}
            span={8}
          >
            <Form.Item
              size="small"
              style={{
                width: "100%",
              }}
              className="custom-form-item"
              label="Mã KH"
              name="3"
            >
              <Input size="small" />
            </Form.Item>
          </Col>
          <Col
            className="full-width-col"
            xs={24}
            sm={12}
            md={8}
            lg={4}
            span={8}
          >
            <Form.Item
              size="small"
              style={{
                width: "100%",
              }}
              className="custom-form-item"
              label="Số HĐ"
              name="4"
            >
              <Input size="small" />
            </Form.Item>
          </Col>

          <Col
            className="full-width-col"
            xs={24}
            sm={12}
            md={8}
            lg={4}
            span={8}
          >
            <Form.Item size="small" className="custom-form-item">
              <Button
                style={{
                  textAlign: "right",
                  maxWidth: "100%",
                }}
                size="small"
                type="primary"
                htmlType="submit"
              >
                <SearchOutlined />
                Tìm kiếm
              </Button>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col
            className="full-width-col"
            xs={24}
            sm={12}
            md={8}
            lg={4}
            span={8}
          >
            <Form.Item
              size="small"
              style={{
                textAlign: "left",
                width: "100%",
              }}
              className="custom-form-item"
              label="Trạng thái đọc"
              name="6"
            >
              <Select size="small" name="s1" dropdownStyle={{ width: "200px" }}>
                <Option value="1"> 1</Option>
                <Option value="2"> 2</Option>
                <Option value="3"> 3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col
            className="full-width-col"
            xs={24}
            sm={12}
            md={8}
            lg={4}
            span={8}
          >
            <Form.Item
              size="small"
              style={{
                width: "100%",
              }}
              className="custom-form-item"
              label="Bất thường"
              name="7"
            >
              <Select size="small" name="s1">
                <Option value="1">Lựa chọn 1</Option>
                <Option value="2">Lựa chọn 2</Option>
                <Option value="3">Lựa chọn 3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col
            className="full-width-col"
            xs={24}
            sm={12}
            md={8}
            lg={4}
            span={8}
          >
            <Form.Item
              size="small"
              style={{
                width: "100%",
              }}
              className="custom-form-item"
              label="Tiêu thụ"
              name="8"
            >
              <Select
                style={{
                  width: "100%",
                }}
                size="small"
                name="s1"
              >
                <Option value="1">Lựa chọn 1</Option>
                <Option value="2">Lựa chọn 2</Option>
                <Option value="3">Lựa chọn 3</Option>
                <Option value="3">Lựa chọn 3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col className="full-width-col" xs={24} sm={12} md={8} lg={4}>
            <Form.Item className="custom-form-item" label="" name="quantity">
              <InputNumber
                size="small"
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
          <Col className="full-width-col" xs={24} sm={12} md={8} lg={4}>
            <Form.Item
              size=" small"
              style={{
                width: "100%",
              }}
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
          <Col
            className="full-width-col"
            xs={24}
            sm={12}
            md={8}
            lg={4}
            span={8}
          >
            <Form.Item className="custom-form-item">
              <Button
                size="small"
                style={{
                  width: "100%",
                }}
                className="small-button"
                onClick={handleReset}
              >
                Làm mới
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  };
  const AdvanceFooterForm = () => {
    const { token } = theme.useToken();
    const [form] = Form.useForm();
    const formStyle = {
      maxWidth: "none",
      background: token.colorFillAlter,
      borderRadius: token.borderRadiusLG,
      padding: 24,
    };
    const handleFinish = (values) => {
      console.log(values);
      // Xử lý dữ liệu tìm kiếm tại đây
    };

    const handleReset = () => {
      form.resetFields();
    };

    const { Option } = Select;
    const menu = (
      <Menu>
        <Menu.Item key="1" icon={<DownloadOutlined />}>
          Xuất excel
        </Menu.Item>
        <Menu.Item key="2" icon={<EditOutlined />}>
          Cập nhật sản lượng tạm tính
        </Menu.Item>
        <Menu.Item key="3" icon={<DeleteOutlined />}>
          Cập nhật hủy hóa đơn
        </Menu.Item>
        <Menu.Item key="4" icon={<PlusCircleOutlined />}>
          Nhập truy thu
        </Menu.Item>
        <Menu.Item key="5" icon={<CalculatorOutlined />}>
          Nhập chỉ số
        </Menu.Item>
        <Menu.Item key="6" icon={<SyncOutlined />}>
          Nhập tiêu thụ
        </Menu.Item>
        <Menu.Item key="7" icon={<RetweetOutlined />}>
          Thay đồng hồ
        </Menu.Item>
        <Menu.Item key="8" icon={<CheckCircleOutlined />}>
          Quay đồng hồ
        </Menu.Item>
        <Menu.Item key="9" icon={<CalendarOutlined />}>
          Gán chỉ số cuối
        </Menu.Item>
        <Menu.Item key="10" icon={<CalendarOutlined />}>
          Gán ngày cuối
        </Menu.Item>
      </Menu>
    );
    const getTableData1 = () => {
      return initialData;
    };
    const [showChart1, setShowChart1] = useState(false);
    const [chartData1, setChartData1] = useState([]);
    const handleExportChartClick1 = () => {
      // Lấy dữ liệu từ bảng
      const tableData1 = getTableData1();

      // Lọc dữ liệu chỉ lấy 4 tháng gần nhất
      const filteredData = tableData1.filter((row) => {
        const readingDate = moment(row.readingDate, "DD/MM/YYYY");
        return readingDate.isAfter(moment().subtract(4, "months"));
      });

      // Chuyển đổi dữ liệu bảng thành dạng phù hợp để vẽ biểu đồ
      const chartData1 = filteredData.map((row) => ({
        date: row.readingDate,
        value: row.consumption,
      }));

      // Hiển thị biểu đồ
      setChartData(chartData);
      setShowChart(true);
    };
    return (
      <Form
        form={form}
        name="advanced_search"
        style={formStyle}
        size="small"
        layout="inline"
        onFinish={onFinish}
      >
        <div
          style={{ display: "flex", marginTop: "10px", paddingRight: "10px" }}
        >
          <Button onClick={handleButtonClick3} icon={<SearchOutlined />}>
            Tìm kiếm
          </Button>
          <Modal
            title="Tìm kiếm nhập chỉ số nâng cao"
            visible={isModalVisible3}
            onCancel={handleModalCancel3}
            footer={null}
          >
            <Form form={form} onFinish={handleFinish}>
              <Row>
                <Col span={12}>
                  <Form.Item label="Loại khách hàng" name="customerType">
                    <Select>
                      {/* Thêm các lựa chọn loại khách hàng tại đây */}
                      <Option value="1">Loại 1</Option>
                      <Option value="2">Loại 2</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Phạm vi" name="range">
                    <Select>
                      {/* Thêm các lựa chọn phạm vi tại đây */}
                      <Option value="1">Phạm vi 1</Option>
                      <Option value="2">Phạm vi 2</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Form.Item label="Vùng" name="region">
                    <Select>
                      {/* Thêm các lựa chọn vùng tại đây */}
                      <Option value="1">Vùng 1</Option>
                      <Option value="2">Vùng 2</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Khu vực" name="area">
                    <Select>
                      {/* Thêm các lựa chọn khu vực tại đây */}
                      <Option value="1">Khu vực 1</Option>
                      <Option value="2">Khu vực 2</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Form.Item label="Ngày đọc từ" name="fromDate">
                    <DatePicker
                      locale={viVN}
                      size="small"
                      style={{
                        width: "100%",
                      }}
                      onChange={handleMonthChange}
                      format="DD/MM/YYYY"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Đến" name="toDate">
                    <DatePicker
                      locale={viVN}
                      size="small"
                      style={{
                        width: "100%",
                      }}
                      onChange={handleMonthChange}
                      format="DD/MM/YYYY"
                    />
                  </Form.Item>
                </Col>
              </Row>

              {/* Nút Tìm kiếm, Xóa điều kiện TK và Đóng */}
              <Row justify="end">
                <Button type="primary" htmlType="submit">
                  Tìm kiếm
                </Button>{" "}
                &nbsp;
                <Button onClick={handleReset}>Xóa điều kiện TK</Button> &nbsp;
                <Button onClick={handleModalCancel3}>Đóng</Button> &nbsp;
              </Row>
            </Form>
          </Modal>
          <div className="button-container1">
            <Button size="small" onClick={handleButtonClick1}>
              Nhập excel
            </Button>
          </div>
          <Modal
            title="Nhập execel"
            visible={isModalVisible1}
            onCancel={handleModalCancel1}
            footer={null}
          >
            <Row justify="end">
              <Button>Cập Nhật</Button>
              <Button onClick={handleModalCancel1}>Đóng</Button>
            </Row>
          </Modal>
          <div className="button-container2">
            <Button size="small" onClick={handleButtonClick2}>
              Nhập tệp
            </Button>
          </div>
          <Modal
            title="Nhập chỉ số từ tệp"
            visible={isModalVisible2}
            onCancel={handleModalCancel2}
            footer={null}
          >
            <Row>
              <Col span={12}>
                Chọn tệp:
                <Upload>
                  <Button>Chọn tệp từ thư mục máy</Button>
                </Upload>
              </Col>
              <Col span={12}>
                Tháng:
                <br />
                <DatePicker
                  locale={viVN}
                  size="small"
                  style={{
                    width: "100%",
                  }}
                  picker="month"
                  onChange={handleMonthChange}
                  format="MM/YYYY"
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                Dữ liệu chỉ số trong tệp:
                <br />
                <Input.TextArea rows={4} />
              </Col>
            </Row>
            <Row justify="end">
              <Button>Cập Nhật</Button>
              <Button onClick={handleModalCancel2}>Đóng</Button>
            </Row>
          </Modal>
          <Dropdown overlay={menu}>
            <Button>Tiện ích</Button>
          </Dropdown>
          <div className="button-container1">
            <Button size="small" onClick={handleButtonClick4}>
              Bảng giá
            </Button>
          </div>
          <Modal
            title="Bảng giá"
            visible={isModalVisible4}
            onCancel={handleModalCancel4}
            footer={null}
          >
            {/* Sử dụng thành phần WaterPriceTable để hiển thị bảng giá nước */}
            <WaterPriceTable />
            <Row justify="end">
              <Button>Cập Nhật</Button>
              <Button onClick={handleModalCancel4}>Đóng</Button>
            </Row>
          </Modal>
          <div className="button-container">
            <Button size="small" onClick={handleButtonClick}>
              Xem TH SD
            </Button>
          </div>
          <Modal
            title="Tình hình sử dụng nước"
            visible={isModalVisible}
            onCancel={handleModalCancel}
            footer={null}
          >
            <Row gutter={24}>
              <Col>
                Số HĐ:
                <br />
                <Input />
              </Col>
              <Col>
                Mã Kh:
                <br />
                <Input />
              </Col>
              <Col>
                Từ ngày:
                <br />
                <DatePicker
                  locale={viVN}
                  size="small"
                  style={{
                    width: "100%",
                  }}
                  picker="month"
                  onChange={handleMonthChange}
                  format="DD/MM/YYYY"
                />
              </Col>

              <Col>
                Đến Ngày:
                <br />
                <DatePicker
                  locale={viVN}
                  size="small"
                  style={{
                    width: "100%",
                  }}
                  picker="month"
                  onChange={handleMonthChange}
                  format="DD/MM/YYYY"
                />
              </Col>
              <Col>
                <br />
                <Form.Item className="custom-form-item">
                  <Button
                    style={{
                      textAlign: "right",
                      maxWidth: "100%",
                    }}
                    type="primary"
                    htmlType="submit"
                  >
                    <SearchOutlined />
                    Tìm kiếm
                  </Button>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                Tên khách hàng:
                <br />
                <Input />
              </Col>
              <Col span={12}>
                Tuyến đọc:
                <br />
                <Input />
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                Địa chỉ:
                <br />
                <Input />
              </Col>
              <Col span={12}>
                Nhân Viên ghi:
                <br />
                <Input />
              </Col>
            </Row>
            <Table
              className="d1"
              columns={otherColumns}
              dataSource={data2}
              onChange={handleData2Change}
              // scroll={{ y: 240 }}
              // scroll={{ x: 300, y: 240 }}
              scroll={{ x: 1600, y: 450 }}
            />
            {showChart && (
              <Column
                data={chartData}
                xField="date"
                yField="value"
                seriesField="type"
                legend={{ position: "top" }}
              />
            )}
            <Row justify="end">
              <Button size="small" onClick={handleExportChartClick}>
                Xuất biểu đồ nước
              </Button>
              <Button size="small">Lưu biểu đồ</Button>
              <Button size="small" onClick={handleModalCancel}>
                Đóng
              </Button>
            </Row>
          </Modal>
          <div className="button-container1">
            <Button size="small" onClick={handleButtonClick5}>
              Xem biểu đồ
            </Button>
          </div>
          <Modal
            title="Xem biểu đồ"
            visible={isModalVisible5}
            onCancel={handleModalCancel5}
            footer={null}
          >
            {showChart1 && (
              <Column
                data={chartData1}
                xField="date"
                yField="value"
                legend={{ position: "top" }}
              />
            )}
            <Row justify="end">
              <Button>Cập Nhật</Button>
              <Button onClick={handleModalCancel5}>Đóng</Button>
            </Row>
          </Modal>
          <div>
            <ImageModal />
          </div>
          {/* <div className="button-container1">
            <Button size="small" onClick={handleButtonClick6}>
              Xem hình ảnh
            </Button>
          </div>
          <Modal
            title="Thông tin tệp đính kèm"
            visible={isModalVisible6}
            onCancel={handleModalCancel6}
            footer={null}
          >
            <Row justify="end">
              <Button>Cập Nhật</Button>
              <Button onClick={handleModalCancel6}>Đóng</Button>
            </Row>
          </Modal> */}
          {/* <div className="button-container">
        <Button onClick={handleButtonClick}>
          Xem tình hình nước lệch về phí
        </Button>
      </div> */}
        </div>
      </Form>
    );
  };
  return (
    <>
      <AdvancedSearchForm />
      <Table
        size="small"
        pagination={{
          current: 1,
          total: 10000,
          pageSize: 50,
        }}
        scroll={{ x: 3000, y: 450 }}
        columns={columns}
        dataSource={data1}
        onChange={handleData1Change}
      />
      <div>
        <div style={{ display: "flex", position: "absolute", bottom: "300" }}>
          <Progress
            percent={10}
            size={[300, 20]}
            format={(percent) => `${percent * 10}`}
          />
          <Progress
            percent={60}
            size={[300, 20]}
            strokeColor="yellow"
            format={(percent) => `${percent * 10}`}
          />
          <Progress
            percent={70}
            size={[300, 20]}
            strokeColor="red"
            format={(percent) => `${percent * 10}`}
          />
          <Progress
            percent={30}
            size={[300, 20]}
            strokeColor="#ff8033"
            format={(percent) => `${percent * 10}`}
          />
        </div>
      </div>
      <AdvanceFooterForm />

      {/* <div>
        Tổng số dữ liệu: {data.length}
        <br />
        Trạng thái 1: {countByStatus("Trạng thái 1")}
        <br />
        Trạng thái 2: {countByStatus("Trạng thái 2")}

      </div> */}
    </>
  );
}
export default EnterIndexPage;
