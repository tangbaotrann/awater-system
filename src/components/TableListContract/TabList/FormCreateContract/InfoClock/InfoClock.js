import {
  CloseCircleOutlined,
  CloseOutlined,
  DashboardOutlined,
  DownloadOutlined,
  FormOutlined,
  PlusCircleOutlined, 
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Col, Divider, Modal, Row, Table, Tooltip, Tree } from "antd";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

import { dataContractClockOnModal } from "../../../../../utils/dataContract";
import CustomRowTooltip from "../../../../CustomRowTooltip/CustomRowTooltip";
import InfoDetailClock from "../InfoDetailClock/InfoDetailClock";

const { DirectoryTree } = Tree;

function InfoClock({ _tab, tabKey }) {
  const [openModal, setOpenModal] = useState(false);

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
    {
      title: "",
      render: (record) => {
        return (
          <Button
            className="info-clock-edit-file"
            onClick={() => handleFile(record)}
          >
            <Tooltip title="Thông tin tệp đính kèm">
              <FormOutlined />
            </Tooltip>
          </Button>
        );
      },
    },
  ];

  // handle file (Thông tin tệp đính kèm)
  const handleFile = (record) => {
    console.log(record);
    setOpenModal(true);
  };

  const hideModal = () => {
    setOpenModal(false);
  };

  // fake data tree
  const treeData = [
    {
      title: "Tệp đính kèm 1",
      key: "0-0",
      children: [
        {
          title: "file 1.1",
          key: "0-0-0",
          isLeaf: true,
        },
        {
          title: "file 1.2",
          key: "0-0-1",
          isLeaf: true,
        },
      ],
    },
    {
      title: "Tệp đính kèm 2",
      key: "0-1",
      children: [
        {
          title: "file 2.1",
          key: "0-1-0",
          isLeaf: true,
        },
        {
          title: "leaf 2.1",
          key: "0-1-1",
          isLeaf: true,
        },
      ],
    },
  ];

  const onSelect = (keys, info) => {
    console.log("Trigger Select", keys, info);
  };

  const onExpand = (keys, info) => {
    console.log("Trigger Expand", keys, info);
  };

  return (
    <div className="container-info-clock">
      <Row>
        {/* Table */}
        <Col xs={24} sm={24} md={24} lg={22}>
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
                pageSize: 10,
              }}
              rowKey="index"
              size="small"
              scroll={{
                x: 500,
                y: 350,
              }}
              onRow={(record, index) => {
                return {
                  onDoubleClick: () => {
                    console.log(_tab, tabKey);
                    return _tab === tabKey && <InfoDetailClock />;
                  },
                };
              }}
              components={{
                body: {
                  row: CustomRowTooltip,
                },
              }}
              style={{ marginRight: "10px" }}
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
                ? "tablist-func-clock-btn-mobile space-top-10 custom-btn-export"
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

      {/* show modal (Thông tin tệp đính kèm) */}
      <Modal
        open={openModal}
        onCancel={hideModal}
        centered={true}
        width={1000}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h3>Thông tin tệp đính kèm</h3>

        {/* Left */}
        <Row>
          <Col xs={24} sm={8} md={8} lg={8}>
            <DirectoryTree
              multiple
              defaultExpandAll
              onSelect={onSelect}
              onExpand={onExpand}
              treeData={treeData}
            />
          </Col>

          {/* Right */}
          <Col xs={24} sm={16} md={16} lg={16}>
            <b>Right</b>
          </Col>
        </Row>

        <Row>
          <Col xs={24} sm={24} md={24} lg={8}>
            <Divider />
            <Divider orientation="left">Thông tin tệp đính kèm</Divider>

            <p>-- Chưa có tệp nào --</p>
          </Col>
        </Row>

        <Divider />

        {/* Buttons */}
        <div className="modal-func-files">
          <Button type="primary">
            <UploadOutlined /> Tải tệp lên
          </Button>
          <Button
            className="custom-btn-close files-btn-close"
            onClick={hideModal}
          >
            <CloseOutlined /> Đóng
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default InfoClock;
