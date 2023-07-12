import { React, useState } from "react";
// import { initialData } from "../../utils/dataEnterIndexPage/data/data";
import TabListEP from "./FormEnterIndexPage/TableListEP";
import ImageModal from "./FormEnterIndexPage/ImageModel/ImageModel";
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
  Table,
  Popover,
  Collapse,
  Tooltip,
} from "antd";
import {
  SearchOutlined,
  RedoOutlined,
  PlusOutlined,
  PictureOutlined,
  LockOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import moment from "moment";
import "./EnterIndexPage.css";
import "moment/locale/vi";
import { useMediaQuery } from "react-responsive";
moment.locale("vi");
function EnterIndexPage() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  // const { token } = theme.useToken();
  const [form] = Form.useForm();
  // xu ly hinh anh
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImagePath, setSelectedImagePath] = useState(null);
  const handleShowImage = (imagePath) => {
    setSelectedImagePath(imagePath);
    setShowImageModal(true);
  };
  const handleMonthChange = (date) => {
    if (date) {
      form.setFieldsValue({ month: date.format("M/YYYY") });
    } else {
      form.setFieldsValue({ month: undefined });
    }
  };

  const { Option } = Select;
  // const [data1, setData1] = useState(initialData);

  // function fetchDataForPage(page) {
  //   const pageSize = 18;
  //   const startIndex = (page - 1) * pageSize;
  //   const endIndex = startIndex + pageSize;
  //   return initialData.slice(startIndex, endIndex);
  // }

  // const handleData1Change = (pagination) => {
  //   const currentPage = pagination.current;
  //   // const newData = fetchDataForPage(currentPage);
  //   // setData1(newData);
  // };
  const initialData = Array.from({ length: 100 }, (_, i) => {
    return {
      key: "1",
      imageAndStatus: ``,
      imagePath: "/dhn.jpg",
      order: i + 1,
      readingLine: `Tuyến đọc ${i + 1}`,
      contractNumber: `Số hợp đồng ${i + 1}`,
      clockSen: `Sen đồng hồ ${i + 1}`,
      customerName: `Tên khách hàng ${i + 1}`,
      address: `Địa chỉ ${i + 1}`,
      moneyCollected: `Tiền thu ${i + 1}`,
      oldIndex: `Chỉ số cũ ${i + 1}`,
      newIndex: `Chỉ số mới ${i + 1}`,
      consumption: `Tiêu thụ ${i + 1}`,
      readingDate: `Ngày đọc ${i + 1}`,
      ttd: `Trạng thái đọc ${i + 1}`,
      ndk: `Ngày đầu kì ${i + 1}`,
      nck: `Ngày cuối kì ${i + 1}`,
      ttdh: `Trạng thái ĐH ${i + 1}`,
      gc: `Ghi chú ${i + 1}`,
    };
  });
  const columns = [
    {
      title: "#",
      dataIndex: "order",
      key: "order",
      width: 40,
    },
    {
      title: "",
      dataIndex: "icons",
      key: "icons",
      width: 90,
      render: (text, record) => {
        const iconType = Math.random();
        const percent = Math.floor(Math.random() * 100);
        const info = `Sản lượng theo tháng ${
          iconType > 0.6 ? "tăng" : "giảm"
        } ${percent}%`;
        return (
          <>
            <PictureOutlined
              style={{ fontSize: "21px", marginRight: "5px" }}
              onClick={() => handleShowImage(record.imagePath)}
            />
            <LockOutlined style={{ fontSize: "21px", marginRight: "5px" }} />
            <Tooltip title={info}>
              {iconType > 0.8 ? (
                <CaretUpOutlined style={{ fontSize: "21px", color: "green" }} />
              ) : iconType > 0.4 ? (
                <CaretDownOutlined style={{ fontSize: "21px", color: "red" }} />
              ) : iconType > 0.6 ? (
                <ArrowUpOutlined style={{ fontSize: "21px", color: "green" }} />
              ) : iconType > 0.4 ? (
                <ArrowDownOutlined style={{ fontSize: "21px", color: "red" }} />
              ) : null}
            </Tooltip>
          </>
        );
      },
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
      dataIndex: "ttd",
      key: "ttd",
    },
    {
      title: "Ngày đầu kì",
      dataIndex: "ndk",
      key: "ndk",
    },
    {
      title: "Ngày cuối kì",
      dataIndex: "nck",
      key: "nck",
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
      dataIndex: "ttdh",
      key: "ttdh",
    },
    {
      title: "Ghi chú",
      dataIndex: "gc",
      key: "gc",
    },
  ];
  const AdvancedSearchForm = () => {
    // const { token } = theme.useToken();
    const [form] = Form.useForm();
    // const onFinish = (values) => {
    //   console.log("Received values of form: ", values);
    // };
    const handleReset = () => {
      form.resetFields();
    };

    const layout = {
      labelCol: {
        span: 10,
      },
    };
    return (
      <Form {...layout}>
        <Row gutter={5}>
          <Col xs={24} sm={12} md={12} lg={4} span={4}>
            <Form.Item
              className="custom-form-item"
              label="Chọn tháng"
              name="month"
            >
              <DatePicker
                locale={viVN}
                picker="month"
                style={{ width: "100%" }}
                onChange={handleMonthChange}
                format="M/YYYY"
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6} span={6}>
            <Form.Item label="Cán bộ đọc" name="1">
              <Select style={{ width: "100%" }} name="s1">
                <Option value="1">1</Option>
                <Option value="2">2</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6} span={6}>
            <Form.Item className="custom-form-item" label="Tuyến đọc" name="2">
              <Select style={{ width: "100%" }}>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12} lg={4} span={4}>
            <Form.Item
              className="custom-form-item"
              style={{
                width: "100%",
              }}
            >
              <Input
                placeholder="Tên hoặc mã hoặc ID KH"
                style={{ color: "black" }}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12} lg={4} span={4}>
            <Form.Item
              className="custom-form-item"
              style={{
                width: "100%",
              }}
              name="4"
            >
              <Input placeholder="Số hợp đồng" style={{ color: "black" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={5}>
          <Col span={7} xs={24} sm={12} md={12} lg={4}>
            <Form.Item lassName="custom-form-item" label="Số ghi" name="9">
              <Input
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
          <Col span={5} xs={24} sm={12} md={12} lg={6}>
            <Form.Item label="Trạng thái đọc" name="6">
              <Select style={{ width: "100%" }}>
                <Option value="1"> 1</Option>
                <Option value="2"> 2</Option>
                <Option value="3"> 3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={4} xs={24} sm={12} lg={6}>
            <Form.Item label={<>Bất thường</>}>
              <Select style={{ width: "100%" }} name="s1">
                <Option value="1">Lựa chọn 1</Option>
                <Option value="2">Lựa chọn 2</Option>
                <Option value="3">Lựa chọn 3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={3} xs={24} sm={12} md={12} lg={4}>
            <Form.Item label="Tiêu thụ" name="8">
              <Select style={{ width: "100%" }} name="s1">
                <Option value="1"> 1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="3">3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={2} xs={24} sm={12} md={12} lg={4}>
            <Form.Item className="custom-form-item" label="" name="quantity">
              <InputNumber
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <div style={{ textAlign: "right" }}>
              <Button className="custom-btn-search" htmlType="submit">
                <SearchOutlined />
                Tìm kiếm
              </Button>
              <Button
                className="custom-btn-reset"
                style={{
                  marginLeft: "10px",
                }}
                onClick={handleReset}
                icon={<RedoOutlined />}
              >
                Làm mới
              </Button>
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
      {/* <AdvancedSearchForm /> */}
      <Collapse size="small" items={item} />
      {/* <div
        style={{
          textAlign: "center",
          padding: "10px 10px",
          height: "450px",
          position: "relative",
        }}
      > */}
      <Table
        style={{ marginTop: "10px" }}
        size="small"
        bordered
        rowKey="index"
        scroll={{ x: 3000, y: 440 }}
        columns={columns.map((column) => ({
          ...column,
          className: "cell-wrap",
        }))}
        dataSource={initialData}
        // onChange={handleData1Change}
      />
      <ImageModal
        visible={showImageModal}
        onClose={() => setShowImageModal(false)}
        imagePath={selectedImagePath}
      />
      {/* func bottom */}
      <div className="contract-bottom">
        {/* check mobile */}
        {isTabletOrMobile ? (
          <Popover
            size="small"
            rootClassName="fix-popover-z-index"
            placement="bottomRight"
            trigger="click"
            content={<TabListEP isTabletOrMobile={isTabletOrMobile} />}
          >
            <div className="contract-bottom-func">
              <PlusOutlined />
            </div>
          </Popover>
        ) : (
          <div className="contract-bottom-func">
            <TabListEP />
          </div>
        )}
      </div>
      {/* </div> */}
    </>
  );
}
export default EnterIndexPage;
