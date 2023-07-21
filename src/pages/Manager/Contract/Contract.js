import { Collapse, Popover } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import { ToastContainer } from "react-toastify";

import "./Contract.css";
import TableListContract from "../../../components/TableListContract/TableListContract";
import TabList from "../../../components/TableListContract/TabList/TabList";
import FormFilterContract from "../../../components/TableListContract/FormFilterContract/FormFilterContract";

function Contract() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  // Collapse filter
  const items = [
    {
      key: "1",
      label: "Thông tin tìm kiếm",
      children: <FormFilterContract />,
    },
  ];

  return (
    <div className="wrapper-contract">
      <Collapse
        key="1"
        items={items}
        accordion={false}
        defaultActiveKey={["1"]}
        style={{ marginBottom: "12px" }}
        size="small"
      />

      {/* render table */}
      <TableListContract />

      {/* func bottom */}
      <div className="contract-bottom">
        {/* check mobile */}
        {isTabletOrMobile ? (
          <Popover
            rootClassName="fix-popover-z-index"
            placement="bottomRight"
            trigger="click"
            content={<TabList isTabletOrMobile={isTabletOrMobile} />}
          >
            <div className="contract-bottom-func">
              <PlusOutlined />
            </div>
          </Popover>
        ) : (
          <div className="contract-bottom-func">
            <TabList />
          </div>
        )}
      </div>

      {/* Notification */}
      <ToastContainer position="top-right" autoClose="1000" />
    </div>
  );
}

export default Contract;
