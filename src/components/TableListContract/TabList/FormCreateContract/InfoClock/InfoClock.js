import {
  CloseCircleOutlined,
  DashboardOutlined,
  DownloadOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Button, Col, Row, Table } from "antd";
import { useMediaQuery } from "react-responsive";

import { dataContractClockOnModal } from "../../../../../utils/dataContract";

function InfoClock() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  // cols (collapse Đồng hồ)
  const colsClock = [
    {
      key: "index",
      title: "#",
      dataIndex: "index",
    },
    {
      key: "status",
      title: "Trạng thái",
      dataIndex: "status",
    },
    {
      key: "code",
      title: "Mã",
      dataIndex: "code",
    },
    {
      key: "seri",
      title: "seri",
      dataIndex: "seri",
    },
    {
      key: "date_use",
      title: "Ngày sử dụng",
      dataIndex: "date_use",
    },
  ];

  return (
    <>
      <Row>
        {/* Table */}
        <Col xs={24} sm={24} md={12} lg={20} className="gutter-item">
          <div className="tablist-tbl-clock-on-modal">
            <Table
              columns={colsClock}
              dataSource={dataContractClockOnModal.map((_clock, index) => ({
                index: index + 1,
                status: _clock.status,
                code: _clock.code,
                seri: _clock.seri,
                date_use: _clock.date_use,
              }))}
              pagination={{
                pageSize: 5,
              }}
              rowKey="index"
              size="small"
              scroll={{
                x: 500,
              }}
            ></Table>
          </div>
        </Col>

        {/* Func */}
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={2}
          className={isTabletOrMobile ? "func-info-clock-btn-mobile" : ""}
        >
          <Button
            type="primary"
            className={
              isTabletOrMobile
                ? "tablist-func-clock-btn-mobile"
                : "tablist-func-clock-btn"
            }
          >
            <PlusCircleOutlined />
            Thêm
          </Button>
          <Button
            type="primary"
            className={
              isTabletOrMobile
                ? "tablist-func-clock-btn-mobile"
                : "tablist-func-clock-btn"
            }
          >
            <DashboardOutlined />
            Thay
          </Button>
          <Button
            type="primary"
            className={
              isTabletOrMobile
                ? "tablist-func-clock-btn-mobile"
                : "tablist-func-clock-btn"
            }
          >
            <DownloadOutlined />
            Xuất
          </Button>
          <Button
            type="primary"
            className={
              isTabletOrMobile
                ? "tablist-func-clock-btn-mobile"
                : "tablist-func-clock-btn"
            }
          >
            <CloseCircleOutlined />
            Xóa
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default InfoClock;
