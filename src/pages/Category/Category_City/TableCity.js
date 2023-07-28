import React, { useState } from 'react';
import { Modal, Popconfirm, Tabs, message } from "antd";
import {
    PlusCircleOutlined,
    EditOutlined,
    RetweetOutlined,
    DeleteOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { btnClickTabListInvoicePrintSelector } from '../../../redux/selector';
import tabListInvoicePrintSlice from '../../../redux/slices/tabListInvoicePrintSlice/tabListInvoicePrintSlice';
import AddCity from "./AddCity";
import EditCity from "./EditCity";

// Tabs bottom
const tabs_city = [
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

const TableCity = ({ isTabletOrMobile }) => {
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);
    const [modalAddCity, setModalAddCity] = useState(false);
    const [modalEditCity, setModalEditCity] = useState(false);

    const tabCity = useSelector(btnClickTabListInvoicePrintSelector);

    const handleChangeTabs = (key) => {
        if (key === "1") {
            message.warning("Not support now!");
        } else if (key === "2") {
            setModalAddCity(true);
        } else if (key === "3") {
            setModalEditCity(true);
        }
    };

    const hideModal = () => {
        setOpenModal(false);
        setModalAddCity(false);
        setModalEditCity(false);
        dispatch(
            tabListInvoicePrintSlice.actions.btnClickTabListInvoicePrint(null)
        );
    };

    // handle delete region
    const handleConfirmDeleteRegion = () => {
        console.log(tabCity.keyId);
    };

    return (
        <>
            <Tabs
                type={isTabletOrMobile ? "line" : "card"}
                tabPosition={isTabletOrMobile ? "left" : "top"}
                activeKey="0"
                items={tabs_city?.map((_tab) => {
                    return {
                        label: (
                            <div
                                className={`tab-item-bc tab-item-bc-${_tab.id} ${tabCity === null && _tab.id === "3"
                                    ? "tab-item-disabled"
                                    : tabCity === null && _tab.id === "4"
                                        ? "tab-item-disabled"
                                        : ""
                                    }`}
                            >
                                {_tab.id === "4" ? (
                                    <Popconfirm
                                        placement="bottom"
                                        title="Bạn có chắc chắn muốn xóa Thành Phố/ tỉnh này không?"
                                        onConfirm={handleConfirmDeleteRegion}
                                        okText="Có"
                                        cancelText="Không"
                                    >
                                        {_tab.icon} {_tab.label}
                                    </Popconfirm>
                                ) : (
                                    <>
                                        {_tab.icon} {_tab.label}
                                    </>
                                )}
                            </div>
                        ),
                        key: _tab.id,
                        disabled:
                            (tabCity === null && _tab.id === "3") ||
                                (tabCity === null && _tab.id === "4")
                                ? true
                                : false,
                    };
                })}
                onChange={handleChangeTabs}
            />

            <Modal
                open={modalAddCity ? modalAddCity : openModal}
                onCancel={hideModal}
                width={700}
                centered={true}
                cancelButtonProps={{ style: { display: "none" } }}
                okButtonProps={{ style: { display: "none" } }}
            >
                <h2 className="title-update-info-contract">Thêm dữ liệu</h2>

                <AddCity hideModal={hideModal} />
            </Modal>
            <Modal
                open={modalEditCity ? modalEditCity : openModal}
                onCancel={hideModal}
                width={700}
                centered={true}
                cancelButtonProps={{ style: { display: "none" } }}
                okButtonProps={{ style: { display: "none" } }}
            >
                <h2 className="title-update-info-contract">Sửa dữ liệu</h2>
                <EditCity tabCity={tabCity} hideModal={hideModal} />
            </Modal>
        </>
    );
};

export default TableCity;