import { Collapse, Popover, Table, theme } from "antd";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { PlusOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { FooterLogNotice } from "../../components/Footer/FooterLogNotice";
import { AdvancedSearchForm as HeaderSearchLogNotice } from "../../components/HeaderSearchLogNotice/HeaderSearchLogNotice";
import { NoticeDetail } from "./NoticeDetail/NoticeDetail";

const LogNotice = () => {
  const { token } = theme.useToken();
  const [isOpenModalNoticeDetail, setIsOpenModalNoticeDetail] = useState(false);
  // const [isModalOpenMCreate, setIsModalOpenMCreate] = useState(false);
  // const [isModalOpenIndexBar, setIsModalOpenIndexBar] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  const hanldeShowDetailRecord = (item) => {
    setIsOpenModalNoticeDetail(true)
    console.log(item);
  };

  const dataSource = Array.from(Array(10000).keys()).map((item) => ({
    key: item,
    stt: item + 1,
    ht: "HT" + item,
    personSend: "Người gửi " + item,
    time: "Thời gian " + item,
    nameSend: "Tên lần gửi " + item,
    process: "Tiến trình " + item,
    numberMessage: "Số tin nhắn " + item,
    numberTNTB: "Số TNTB " + item,
    action: <UnorderedListOutlined style={{cursor: 'pointer'}} onClick={() => hanldeShowDetailRecord(item)}/>,
  }));

  const columns = [
    {
      title: "#",
      dataIndex: "stt",
      width: 40,
      key: "stt",
    },
    {
      title: "HT",
      dataIndex: "ht",
      key: "ht",
    },
    {
      title: "Người gửi",
      dataIndex: "personSend",  
      key: "personSend",
    },
    {
      title: "Thời gian",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Tên lần gửi",
      dataIndex: "nameSend",
      key: "nameSend",
    },
    {
      title: "Tiến trình",
      dataIndex: "process",
      key: "process",
    },
    {
      title: "Số tin nhắn",
      dataIndex: "numberMessage",
      key: "numberMessage",
    },
    {
      title: "Số TNTB",
      dataIndex: "numberTNTB",
      key: "numberTNTB",
    },
    {
      title: "",
      dataIndex: "action",
      fixed: 'right',
      width: 40,
      key: "action",
    },
  ]; 

  const items = [
    {
      key: "1",
      label: "Tìm kiếm",
      children: <HeaderSearchLogNotice />,
    },
  ];

  return (
    <>
      <Collapse items={items} size="small" />
      <div
        style={{
          lineHeight: "200px",
          textAlign: "center",
          borderRadius: token.borderRadiusLG,
          marginTop: 7,
        }}
      >
        <Table
          bordered
          dataSource={dataSource}
          columns={columns}
          size="small"
          pagination={{
            current: 1,
            total: 10000,
            pageSize: 50,
          }}
          scroll={{
            x: 1000,
            y: 330,
          }}
        />
      </div>
      <div className="contract-bottom">
        <div className="contract-bottom-func">
          {isTabletOrMobile ? (
            <Popover
              rootClassName="fix-popover-z-index"
              placement="bottomRight"
              trigger="click"
              content={
                <FooterLogNotice/>
              }
            >
              <PlusOutlined />
            </Popover>
          ) : (
            <FooterLogNotice/>
          )}
        </div>
      </div>
      <NoticeDetail
        isOpen={isOpenModalNoticeDetail}
        setIsOpenModalNoticeDetail={setIsOpenModalNoticeDetail}
      />
    </>
  );
};
export default LogNotice;
