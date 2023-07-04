import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Select,
  Space,
  Table,
  theme,
} from "antd";
import { useMediaQuery } from "react-responsive";
import {
  CloseOutlined,
  RedoOutlined,
  SearchOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
} from "@ant-design/icons";

import { useState } from "react";
const AddBlockClock = ({ hideModal }) => {
  const columns1 = [
    {
      title: "Số hợp đồng",
      dataIndex: "contractNumber",
    },
    {
      title: "Mã khách hàng",
      dataIndex: "customerCode",
    },
    {
      title: "Tên khách hàng",
      dataIndex: "customerName",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
    },
    {
      title: "Tuyến",
      dataIndex: "route",
    },
    {
      title: "Số liệu",
      dataIndex: "data",
    },
    {
      title: "Kiểu đồng hồ",
      dataIndex: "clockType",
    },
  ];

  // const columns2 = [
  //   {
  //     title: "Đã chọn",
  //     dataIndex: "selected",
  //     render: (text, record) => (
  //       <Checkbox
  //         checked={record.selected}
  //         onChange={(e) => {
  //           // Xử lý sự kiện thay đổi trạng thái nhấn chọn
  //         }}
  //       />
  //     ),
  //   },
  //   {
  //     title: "Số hợp đồng",
  //     dataIndex: "contractNumber",
  //   },
  //   {
  //     title: "Mã khách hàng",
  //     dataIndex: "customerCode",
  //   },
  //   {
  //     title: "Tên khách hàng",
  //     dataIndex: "customerName",
  //   },
  //   {
  //     title: "Địa chỉ",
  //     dataIndex: "address",
  //   },
  //   {
  //     title: "Tuyến",
  //     dataIndex: "route",
  //   },
  //   {
  //     title: "Số hiệu",
  //     dataIndex: "number",
  //   },
  //   {
  //     title: "Kiểu đồng hồ",
  //     dataIndex: "clockType",
  //   },
  // ];
  //Chuyen data
  const mockData = [
    {
      key: "1",
      contractNumber: "HD001",
      customerCode: "KH001",
      customerName: "Nguyễn Văn A",
      address: "123 Đường 1",
      route: "Tuyến 1",
      data: "Dữ liệu 1",
      clockType: "Loại 1",
    },
    {
      key: "2",
      contractNumber: "HD002",
      customerCode: "KH002",
      customerName: "Trần Thị B",
      address: "456 Đường 2",
      route: "Tuyến 2",
      data: "Dữ liệu 2",
      clockType: "Loại 2",
    },
  ];

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [leftDataSource, setLeftDataSource] = useState(mockData);
  const [rightDataSource, setRightDataSource] = useState([]);

  const handleSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const moveToRight = () => {
    const newLeftDataSource = leftDataSource.filter(
      (item) => !selectedRowKeys.includes(item.key)
    );
    const newRightDataSource = [
      ...rightDataSource,
      ...leftDataSource.filter((item) => selectedRowKeys.includes(item.key)),
    ];
    setLeftDataSource(newLeftDataSource);
    setRightDataSource(newRightDataSource);
    setSelectedRowKeys([]);
  };

  const moveToLeft = () => {
    const newRightDataSource = rightDataSource.filter(
      (item) => !selectedRowKeys.includes(item.key)
    );
    const newLeftDataSource = [
      ...leftDataSource,
      ...rightDataSource.filter((item) => selectedRowKeys.includes(item.key)),
    ];
    setRightDataSource(newRightDataSource);
    setLeftDataSource(newLeftDataSource);
    setSelectedRowKeys([]);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: handleSelectChange,
  };
  // handle submit form (main)
  const handleSubmit = (values) => {
    console.log("values", values);
  };
  // handle submit error (main)
  const handleFailed = (error) => {
    console.log({ error });
  };
  const { Option } = Select;
  const { token } = theme.useToken();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const [form1] = Form.useForm();
  return (
    <>
      <Form
        form={form1}
        onFinish={handleSubmit}
        onFinishFailed={handleFailed}
        style={{
          maxWidth: "none",
          background: token.colorFillAlter,
          borderRadius: token.borderRadiusLG,
          padding: 24,
        }}
      >
        <Row>
          <Col
            span={isTabletOrMobile ? 24 : 4}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="sohopdong" label="Số hợp đồng">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col
            span={isTabletOrMobile ? 24 : 4}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="makh" label="Mã KH">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col
            span={isTabletOrMobile ? 24 : 8}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="tenkh" label="Tên KH">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col
            span={isTabletOrMobile ? 24 : 4}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="matuyendoc" label="Mã tuyến đọc">
              <Select style={{ width: "100%" }}>
                <Option value="T01">T01</Option>
                <Option value="T02">T02</Option>
                <Option value="T03">T03</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col
            span={isTabletOrMobile ? 24 : 3}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Button icon={<SearchOutlined />} className="custom-btn-search">
              Tìm kiếm
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table
              rowSelection={rowSelection}
              columns={columns1}
              dataSource={leftDataSource}
              pagination={false}
              scroll={{ x: 1200, y: 440 }}
            />
          </Col>
          <Col>
            <Space>
              <Button
                key="submit"
                className="custom-btn-update"
                onClick={moveToRight}
                htmlType="submit"
                icon={<StepForwardOutlined />}
              >
                Chuyển qua xuống
              </Button>
            </Space>
          </Col>
          <Col>
            <Space>
              <Button
                className="custom-btn-close"
                onClick={moveToLeft}
                htmlType="submit"
                style={{
                  marginLeft: "10px",
                }}
                icon={<StepBackwardOutlined />}
              >
                Chuyển qua lên ......
              </Button>
            </Space>
          </Col>
          <Col>
            <Table
              rowSelection={rowSelection}
              columns={columns1}
              dataSource={rightDataSource}
              pagination={false}
              scroll={{ x: 1200, y: 440 }}
            />
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            marginTop: "10px",
          }}
        >
          <Button
            key="submit"
            className="custom-btn-update"
            htmlType="submit"
            icon={<RedoOutlined />}
            style={{
              marginLeft: "10px",
            }}
            onClick={""}
          >
            Cập nhật
          </Button>

          <Button
            icon={<CloseOutlined />}
            htmlType="submit"
            className="custom-btn-close"
            style={{
              marginLeft: "10px",
            }}
            onClick={() => hideModal()}
          >
            Đóng
          </Button>
        </Row>
      </Form>
    </>
  );
};
export default AddBlockClock;
