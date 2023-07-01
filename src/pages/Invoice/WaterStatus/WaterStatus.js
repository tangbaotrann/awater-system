import { Button, Collapse, Modal, Table } from "antd";
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
import "./WaterStatus.css";
import { AdvancedSearchForm as FormSearchWaterStatus } from "../../../components/FormSearchWaterStatus/FormSearchWaterStatus";

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
  firstIndex: 1000 + i,
  lastIndex: 1000 + i + 1,
  note: "Không có",
  status: "Đã đọc",
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
    title: "Chỉ số đầu",
    dataIndex: "firstIndex",
    key: "firstIndex",
  },
  {
    title: "Chỉ số cuối",
    dataIndex: "lastIndex",
    key: "lastIndex",
  },
  {
    title: "Ghi chú",
    dataIndex: "note",
    key: "note",
  },
  {
    title: "Trạng thái đọc",
    dataIndex: "status",
    key: "status",
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
    "T1",
    "T2",
    "T3",
    "T4",
    "T5",
    "T6",
    "T7",
    "T8",
    "T9",
    "T10",
    "T11",
    "T12",
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

  const items = [
    {
      key: "1",
      label: "Tìm kiếm",
      children: <FormSearchWaterStatus />,
    },
  ];
 
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
      <Collapse items={items} />
      <Table
        dataSource={dataSource}
        columns={columns}
        size="small"
        pagination={false}
        bordered
        style={{ marginTop: 10 }}
        scroll={{
          x: 2000,
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
      <div style={{ height: "270px", display: "grid", placeItems: "center" }}>
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
