import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Row,
  Space,
  Table,
  theme,
} from "antd";
import { SaveFilled } from "@ant-design/icons";
import ChartJS from "chart.js/auto";
import {
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const AdvancedSearchForm = () => {
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const formStyle = {
    maxWidth: "none",
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    padding: 5,
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Form
      form={form}
      name="advanced_search"
      style={formStyle}
      onFinish={onFinish}
      size="small"
    >
      <Row gutter={24}>
        <Col span={6}>
          <Form.Item name="date" label="Số hợp đồng">
            <Input placeholder="Nhập số hợp đồng" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="person" label="Mã KH">
            <Input placeholder="Nhập số hợp đồng" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="tuyendoc" label="Tìm ngày">
            <DatePicker
              allowClear
              style={{ width: "100%" }}
              format="DD-MM-YYYY"
            />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="tuyendoc" label="Đếm ngày">
            <DatePicker
              allowClear
              style={{ width: "100%" }}
              format="DD-MM-YYYY"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item name="status" label="Tên KH">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="place" label="Tuyến đọc">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item name="status" label="Địa chỉ">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="place" label="Nhân viên ghi">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <div
        style={{
          textAlign: "right",
        }}
      >
        <Space size="small">
          <Button type="primary" htmlType="submit">
            Tìm kiếm
          </Button>
        </Space>
      </div>
    </Form>
  );
};
const dataSource = Array.from({ length: 5 }, (_, i) => ({
  key: i,
  stt: i + 1,
  "#": i + 1,
  name: `Nguyễn Văn A ${i + 1}`,
  oldIndex: 1000 + i,
  newIndex: 1000 + i + 1,
  consumption: 1,
  dateRead: "01/01/2021",
  dateStart: "01/01/2021",
  dateEnd: "01/01/2021",
  index: 1000 + i + 1,
}));

const columns = [
  {
    title: "",
    dataIndex: "stt",
    key: "stt",
  },
  {
    title: "#",
    dataIndex: "#",
    key: "#",
  },
  {
    title: "T Thu",
    dataIndex: "name",
    key: "name",
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
    dataIndex: "dateRead",
    key: "dateRead",
  },
  {
    title: "Ngày đầu kỳ",
    dataIndex: "dateStart",
    key: "dateStart",
  },
  {
    title: "Ngày cuối kỳ",
    dataIndex: "dateEnd",
    key: "dateEnd",
  },
  {
    title: "Chỉ số",
    dataIndex: "index",
    key: "index",
  },
];

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const WaterStatus = (props) => {
  const { isOpen, setIsOpen } = props;

  const labels = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Biểu đồ sử dụng nước",
      },
    },
    barThickness: 10,
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => getRandomNumber(0, 140)),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => getRandomNumber(0, 140)),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <Modal
      title="Tình hình sử dụng nước"
      open={isOpen}
      onOk={() => setIsOpen(false)}
      onCancel={() => setIsOpen(false)}
      width={1100}
      style={{
        top: 10,
      }}
      footer={[
        <Button key="cancel" onClick={() => setIsOpen(false)}>
          Đóng
        </Button>,
      ]}
    >
      <AdvancedSearchForm />
      <Table
        dataSource={dataSource}
        columns={columns}
        size="small"
        pagination={false}
        bordered
        style={{ marginTop: 10 }}
        scroll={{
          x: 1500,
          y: 240,
        }}
      />
      <Button
        style={{ marginTop: 5 }}
        type="primary"
        size="small"
        icon={<SaveFilled />}
      >
        Xuất tình hình sử dụng nước
      </Button>
      <div style={{ height: "300px"}}>
        <Bar options={options} data={data} updateMode="resize" />
      </div>
      <Button
        style={{ marginTop: 5 }}
        type="primary"
        size="small"
        icon={<SaveFilled />}
      >
        Lưu biểu đồ
      </Button>
    </Modal>
  );
};
