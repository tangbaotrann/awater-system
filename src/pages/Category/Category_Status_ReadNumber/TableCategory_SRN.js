import { Modal, Popover, Tabs, message } from "antd";
import {
    PlusCircleOutlined,
    EditOutlined,
    RetweetOutlined,
    DeleteOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { btnClickTabListInvoicePrintSelector } from "../../../redux/selector";
import tabListInvoicePrintSlice from "../../../redux/slices/tabListInvoicePrintSlice/tabListInvoicePrintSlice";
import "./CSS_Category_Status_ReadNumber.css";
import Add_Status_ReadNumber from "./Add_Status_ReadNumber";
import Edit_Status_ReadNumber from "./Edit_Status_ReadNumber";

// Tabs bottom
const tabs_bc = [
    {
        id: "1",
        label: "Làm mới",
        icon: <RetweetOutlined />,
    },
    {
        id: "2",
        label: "Thêm mới",

        icon: <PlusCircleOutlined />,
    },
    {
        id: "3",
        label: "Sửa",
        icon: <EditOutlined />,
    },
    {
        id: "4",
        label: "Xóa",
        icon: <DeleteOutlined />,
    },
];

const TableCategory_SRN = ({ isTabletOrMobile }) => {
    const [openModal, setOpenModal] = useState(false);
    const [modalAdd_Status_ReadNumber, setAdd_Status_ReadNumber] = useState(false);
    const [modalEdit_Status_ReadNumber, setEdit_Status_ReadNumber] = useState(false);
    const dispatch = useDispatch();

    const tabListbc = useSelector(btnClickTabListInvoicePrintSelector);
    // handle change tabs
    const handleChangeTabs = (key) => {
        if (key === "1") {
            message.error("Tính năng chưa khả dụng!");
        } else if (key === "2") {
            setAdd_Status_ReadNumber(true);
        } else if (key === "3") {
            setEdit_Status_ReadNumber(true);
        } else if (key === "4") {
            message.error("Tính năng chưa khả dụng!");
        }
    };

    // hide modal
    const hideModal = () => {
        setOpenModal(false);
        setAdd_Status_ReadNumber(false);
        setEdit_Status_ReadNumber(false);
        dispatch(
            tabListInvoicePrintSlice.actions.btnClickTabListInvoicePrint(null)
        );
    };

    return (
        <>
            <Tabs
                type={isTabletOrMobile ? "line" : "card"}
                tabPosition={isTabletOrMobile ? "left" : "top"}
                activeKey="0"
                items={tabs_bc.map((_tab) => {
                    return {
                        label: (
                            <div
                                className={`tab-item-bc tab-item-bc-${_tab.id} ${tabListbc === null && _tab.id === "2"
                                    }`}
                            >
                                {_tab.id === "7" ? (
                                    <>
                                        <Popover
                                            rootClassName="fix-popover-z-index"
                                            placement={isTabletOrMobile ? "right" : "topRight"}
                                            className={tabListbc === null ? "popover-debt" : null}
                                        >
                                            {_tab.icon} {_tab.label} {_tab.iconRight}
                                        </Popover>
                                    </>
                                ) : (
                                    <>
                                        {_tab.icon} {_tab.label}
                                    </>
                                )}
                            </div>
                        ),
                        key: _tab.id,
                    };
                })}
                onChange={handleChangeTabs}
            />

            <Modal
                open={modalAdd_Status_ReadNumber ? modalAdd_Status_ReadNumber : openModal}
                onCancel={hideModal}
                width={700}
                centered={true}
                cancelButtonProps={{ style: { display: "none" } }}
                okButtonProps={{ style: { display: "none" } }}
            >
                <h2 className="title-update-info-contract">Thêm dữ liệu</h2>
                <Add_Status_ReadNumber tabListbc={tabListbc} hideModal={hideModal} />
            </Modal>
            <Modal
                open={modalEdit_Status_ReadNumber ? modalEdit_Status_ReadNumber : openModal}
                onCancel={hideModal}
                width={700}
                centered={true}
                cancelButtonProps={{ style: { display: "none" } }}
                okButtonProps={{ style: { display: "none" } }}
            >
                <h2 className="title-update-info-contract">Sửa dữ liệu</h2>
                <Edit_Status_ReadNumber tabListbc={tabListbc} hideModal={hideModal} />
            </Modal>
        </>
    );
};

export default TableCategory_SRN;