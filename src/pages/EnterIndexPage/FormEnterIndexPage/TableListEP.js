import { Modal, Popover, Tabs, message } from "antd";
import {
  FileExcelOutlined,
  SearchOutlined,
  UploadOutlined,
  ToolOutlined,
  TableOutlined,
  FundOutlined,
  LineChartOutlined,
  PictureOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { btnClickTabListEnterIndexPageSelector } from "../../../redux/selector";
import tabListEnterIndexPageSlice from "../../../redux/slices/tabListEnterIndexPageSlice/tabListEnterIndexPageSlice";
import SearchForm from "./SearchForn/SearchForm";
import ExcelForm from "./ExcelForm/ExcelForm";
import FileForm from "./FileForm/FileForm";
import UtilityButton from "./UtilityButton/UtilityButton";
import UsageButton from "./UsageButton/UsageButton";
import ChartButton from "./ChartButton/ChartButton.jsx";
import ImageModal from "./ImageModel/ImageModel";
import FormProgress from "./ProgressBarExample/ProgressBarExample.jsx";
import PriceTableButton from "./PriceTableButton/PriceTableButton";
import FromBarChart from "./FromBarChart";
// Tabs bottom
const tabs = [
  {
    id: "1",
    label: "Tìm kiếm",
    icon: <SearchOutlined />,
  },
  {
    id: "2",
    label: "Nhập excel",
    icon: <FileExcelOutlined />,
  },
  {
    id: "3",
    label: "Nhập tệp",
    icon: <UploadOutlined />,
  },
  {
    id: "4",
    label: "Tiện ích",
    icon: <ToolOutlined />,
  },
  {
    id: "5",
    label: "Bảng giá",
    icon: <TableOutlined />,
  },
  {
    id: "6",
    label: "Xem TH SD",
    icon: <FundOutlined />,
  },
  {
    id: "7",
    label: "Xem biểu đồ",
    icon: <LineChartOutlined />,
  },
  {
    id: "8",
    label: "Xem hình ảnh",
    icon: <PictureOutlined />,
  },
  {
    id: "9",
    label: "Chỉ số",
    icon: <BarChartOutlined />,
  },
];

function TableListEP({ isTabletOrMobile }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalSearchForm, setSearchForm] = useState(false);
  const [modalExcelForm, setExcelForm] = useState(false);
  const [modalFileForm, setFileForm] = useState(false);
  const [modalUtilityButton, setUtilityButton] = useState(false);
  const [modalPriceTableButton, setPriceTableButton] = useState(false);
  const [modalUsageButton, setUsageButton] = useState(false);
  const [modalChartButton, setChartButton] = useState(false);
  const [modalImageModal, setImageModal] = useState(false);
  const [modalProgress, setProgess] = useState(false);
  const [modalChart, setChart] = useState(false);
  const dispatch = useDispatch();

  const tabList = useSelector(btnClickTabListEnterIndexPageSelector);
  // handle change tabs
  const handleChangeTabs = (key) => {
    if (key === "1") {
      setSearchForm(true);
    } else if (key === "2") {
      // setExcelForm(true);
      message.error("Tính năng chưa khả dụng!");
    } else if (key === "3") {
      setFileForm(true);
    } else if (key === "4") {
      message.error("Tính năng chưa khả dụng!");
    } else if (key === "5") {
      setPriceTableButton(true);
    } else if (key === "6") {
      setUsageButton(true);
    } else if (key === "7") {
      setChart(true);
      // message.error("Tính năng chưa khả dụng!");
    } else if (key === "8") {
      setImageModal(true);
      // message.error("Tính năng chưa khả dụng!");
    } else if (key === "9") {
      setProgess(true);
      // message.error("Tính năng chưa khả dụng!");
    }
  };

  // hide modal
  const hideModal = () => {
    setOpenModal(false);
    setSearchForm(false);
    setExcelForm(false);
    setFileForm(false);
    setUtilityButton(false);
    setPriceTableButton(false);
    setUsageButton(false);
    setChartButton(false);
    setImageModal(false);
    setProgess(false);
    setChart(false);
    dispatch(
      tabListEnterIndexPageSlice.actions.btnClickTabListEnterIndexPage(null)
    );
  };

  return (
    <>
      <Tabs
        type={isTabletOrMobile ? "line" : "card"}
        tabPosition={isTabletOrMobile ? "left" : "top"}
        activeKey="0"
        items={tabs.map((_tab) => {
          return {
            label: (
              <div>
                {_tab.id === "5" ? (
                  <>
                    <Popover
                      rootClassName="fix-popover-z-index"
                      placement={isTabletOrMobile ? "right" : "topRight"}
                      className={tabList === null ? "popover-debt" : null}
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

      {/* Modal (Tìm kiếm) */}
      <Modal
        open={modalSearchForm ? modalSearchForm : openModal}
        onCancel={hideModal}
        width={800}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract">Tìm kiếm nâng cao</h2>

        <SearchForm tabList={tabList} hideModal={hideModal} />
      </Modal>
      {/* Modal ( Nhập Excel) */}
      <Modal
        open={modalExcelForm ? modalExcelForm : openModal}
        onCancel={hideModal}
        width={800}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract">Nhập Excel</h2>

        <ExcelForm tabList={tabList} hideModal={hideModal} />
      </Modal>
      {/* Modal (Nhập tệp) */}
      <Modal
        open={modalFileForm ? modalFileForm : openModal}
        onCancel={hideModal}
        width={800}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract">Nhập tệp</h2>

        <FileForm tabList={tabList} hideModal={hideModal} />
      </Modal>
      {/* Modal ( Tiện ích) */}
      <Modal
        open={modalUtilityButton ? modalUtilityButton : openModal}
        onCancel={hideModal}
        width={800}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <UtilityButton tabList={tabList} hideModal={hideModal} />
      </Modal>
      {/* Modal (Bảng giá) */}
      <Modal
        open={modalPriceTableButton ? modalPriceTableButton : openModal}
        onCancel={hideModal}
        width={800}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract">Bảng giá </h2>
        {/* Form Reprint Button */}
        <PriceTableButton tabList={tabList} hideModal={hideModal} />
      </Modal>
      {/* Modal (Xem tình hình sử dụng nước) */}
      <Modal
        open={modalUsageButton ? modalUsageButton : openModal}
        onCancel={hideModal}
        width={800}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract">
          Xem tình hình sử dụng nước{" "}
        </h2>
        {/* Form Reprint Button */}
        <UsageButton tabList={tabList} hideModal={hideModal} />
      </Modal>
      {/* Modal (Xem biểu đồ) */}
      <Modal
        open={modalChartButton ? modalChartButton : openModal}
        onCancel={hideModal}
        width={800}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract">Xem biểu đồ</h2>
        {/* Form Reprint Button */}
        <ChartButton tabList={tabList} hideModal={hideModal} />
      </Modal>
      {/* Modal (Xem hình ảnh) */}
      <Modal
        open={modalImageModal ? modalImageModal : openModal}
        onCancel={hideModal}
        width={800}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract">Xem hình ảnh</h2>
        {/* Form Reprint Button */}
        <ImageModal tabList={tabList} hideModal={hideModal} />
      </Modal>
      {/* Modal (Progress) */}
      <Modal
        open={modalProgress ? modalProgress : openModal}
        onCancel={hideModal}
        width={800}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract">Các chỉ số </h2>
        {/* Form Reprint Button */}
        <FormProgress tabList={tabList} hideModal={hideModal} />
      </Modal>
      <Modal
        open={modalChart ? modalChart : openModal}
        onCancel={hideModal}
        width={1000}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract"> Xem biểu đồ</h2>

        <FromBarChart tabList={tabList} hideModal={hideModal} />
      </Modal>
    </>
  );
}

export default TableListEP;
