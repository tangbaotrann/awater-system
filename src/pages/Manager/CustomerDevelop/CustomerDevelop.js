import { useEffect } from "react";
import { Collapse, Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";

import "./CustomerDevelop.css";
import TableReportCustomer from "../../../components/TableReportCustomer/TableReportCustomer";
import reportContractSlice from "../../../redux/slices/reportContractSlice/reportContractSlice";
import { btnClickOptionFactorySelector } from "../../../redux/selector";
import Reporter from "../../../components/Reporter/Reporter";
import FormFilterReportCustomer from "../../../components/TableReportCustomer/FormFilterReportCustomer/FormFilterReportCustomer";

function CustomerDevelop() {
  const dispatch = useDispatch();

  const optionNameFactory = useSelector(btnClickOptionFactorySelector);

  // Collapse filter
  const items = [
    {
      key: "1",
      label: "Thông tin tìm kiếm",
      children: <FormFilterReportCustomer />,
    },
  ];

  useEffect(() => {
    dispatch(reportContractSlice.actions.btnClickOptionFactory("all"));
  }, []);

  return (
    <>
      <Collapse
        key="1"
        items={items}
        accordion={false}
        defaultActiveKey={["1"]}
        style={{ marginBottom: "12px" }}
        size="small"
      />

      <Divider />

      <Reporter />

      <Divider />

      {/* render table */}
      {optionNameFactory === "all" ? (
        <TableReportCustomer />
      ) : (
        <p className="message-empty">
          <i>-- Hiện tại chưa có dữ liệu. --</i>
        </p>
      )}
    </>
  );
}

export default CustomerDevelop;
