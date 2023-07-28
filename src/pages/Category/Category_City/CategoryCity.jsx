import { React, useState } from "react";
import "../../../components/GlobalStyles/GlobalStyles.css";
import "../../Manager/Contract/Contract.css";
import { Table, Popover, Tooltip } from "antd";
import { PlusOutlined, RedoOutlined } from "@ant-design/icons";
import { SearchForm } from "./SearchForm";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import tabListInvoicePrintSlice from "../../../redux/slices/tabListInvoicePrintSlice/tabListInvoicePrintSlice";
import { btnClickTabListInvoicePrintSelector } from "../../../redux/selector";

const CategoryCity = () => {
    const dispatch = useDispatch();
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

    const initialData = Array.from({ length: 100 }, (_, i) => {
        return {
            keyID: `Mã Thành Phố/ Tỉnh ${i + 1}`,
            ten: `Tên Thành Phố/ Tỉnh ${i + 1}`,
        };
    });
    const [cities] = useState(initialData);

    const columns = [
        {
            title: "#",
            dataIndex: "index",
            key: "index",
            width: 70,
        },

        {
            title: "Mã Thành Phố/ Tỉnh",
            dataIndex: "keyID",
            key: "keyID",
        },
        {
            title: "Tên Thành Phố/ Tỉnh",
            dataIndex: "ten",
            key: "ten",
        },
    ];

    // import kỳ lạ của Dương 
    const tabCity = useSelector(btnClickTabListInvoicePrintSelector);

    // handle row select
    const handleRowSelection = (selectedRowKeys, selectedRows) => {
        dispatch(
            tabListInvoicePrintSlice.actions.btnClickTabListInvoicePrint(
                selectedRows[0]
            )
        );
    };

    // handle un-check radio
    const handleUncheckRadio = () => {
        dispatch(
            tabListInvoicePrintSlice.actions.btnClickTabListInvoicePrint(null)
        );
    };
    // Kết thúc import kỳ lạ của Dương

    return (
        <>
            <SearchForm />
            <Table
                style={{ marginTop: "10px" }}
                size="small"
                bordered
                rowKey="index"
                scroll={{ x: 1000, y: 480 }}
                columns={columns}
                dataSource={cities.map((_cities, index) => ({
                    index: index + 1,
                    keyID: _cities.keyID,
                    ten: _cities.ten
                }))}
                // import kỳ lạ của Dương
                onRow={(record, index) => {
                    return {
                        onClick: () => {
                            console.log(record)
                            // clicked row to check radio
                            dispatch(
                                tabListInvoicePrintSlice.actions.btnClickTabListInvoicePrint(
                                    record
                                )
                            );
                        },
                    };
                }}
                rowSelection={{
                    type: "radio",
                    columnTitle: () => {
                        return (
                            <Tooltip title="Bỏ chọn hàng hiện tại.">
                                <RedoOutlined
                                    className="icon-reset-rad-btn"
                                    onClick={handleUncheckRadio}
                                />
                            </Tooltip>
                        );
                    },
                    onChange: (selectedRowKeys, selectedRows) =>
                        handleRowSelection(selectedRowKeys, selectedRows),
                    selectedRowKeys: tabCity ? [tabCity.index] : [],
                }}
            // kết thúc import kỳ lạ của Dương
            />

            {isTabletOrMobile && (
                <div className="contract-bottom">
                    {/* check mobile */}
                    {isTabletOrMobile ? (
                        <Popover
                            size="small"
                            rootClassName="fix-popover-z-index"
                            placement="bottomRight"
                            trigger="click"
                        >
                            <div className="contract-bottom-func">
                                <PlusOutlined />
                            </div>
                        </Popover>
                    ) : (
                        <div className="contract-bottom-func">{/* <TabListBC /> */}</div>
                    )}
                </div>
            )}
        </>
    );
};

export default CategoryCity;