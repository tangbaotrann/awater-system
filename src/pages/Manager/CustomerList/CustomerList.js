import { Collapse, Divider } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./CustomerList.css";
import TableListOfCustomer from "../../../components/TableListOfCustomer/TableListOfCustomer";
import Reporter from "../../../components/Reporter/Reporter";
import reportContractSlice from "../../../redux/slices/reportContractSlice/reportContractSlice";
import { btnClickOptionFactorySelector } from "../../../redux/selector";
import FormFilterCustomer from "../../../components/TableListOfCustomer/FormFilterCustomer/FormFilterCustomer";

function CustomerList() {
  const dispatch = useDispatch();

  const optionNameFactory = useSelector(btnClickOptionFactorySelector);

  // Collapse filter
  const items = [
    {
      key: "1",
      label: "Thông tin tìm kiếm",
      children: <FormFilterCustomer />,
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
        <TableListOfCustomer />
      ) : (
        <p className="message-empty">
          <i>-- Hiện tại chưa có dữ liệu. --</i>
        </p>
      )}
    </>
  );
}

export default CustomerList;
