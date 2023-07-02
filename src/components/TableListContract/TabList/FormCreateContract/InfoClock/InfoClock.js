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
    <div className="container-info-clock">
      <Row>
        {/* Table */}
        <Col xs={24} sm={24} md={24} lg={20} className="gutter-item">
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
                pageSize: 9,
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
          md={24}
          lg={2}
          className={isTabletOrMobile ? "func-info-clock-btn-mobile" : ""}
        >
          <Button
            className={
              isTabletOrMobile
                ? "tablist-func-clock-btn-mobile custom-btn-add"
                : "tablist-func-clock-btn custom-btn-add"
            }
          >
            <PlusCircleOutlined />
            Thêm
          </Button>
          <Button
            className={
              isTabletOrMobile
                ? "tablist-func-clock-btn-mobile custom-btn-update"
                : "tablist-func-clock-btn custom-btn-update"
            }
          >
            <DashboardOutlined />
            Thay
          </Button>
          <Button
            className={
              isTabletOrMobile
                ? "tablist-func-clock-btn-mobile custom-btn-export"
                : "tablist-func-clock-btn custom-btn-export"
            }
          >
            <DownloadOutlined />
            Xuất
          </Button>
          <Button
            className={
              isTabletOrMobile
                ? "tablist-func-clock-btn-mobile custom-btn-del"
                : "tablist-func-clock-btn custom-btn-del"
            }
          >
            <CloseCircleOutlined />
            Xóa
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default InfoClock;
