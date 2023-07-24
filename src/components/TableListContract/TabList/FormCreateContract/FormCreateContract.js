import { Button, Col, Collapse, Form, Row } from "antd";
import {
  CloseOutlined,
  FormOutlined,
  PrinterOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";

import InfoContract from "./InfoContract/InfoContract";
import InfoClock from "./InfoClock/InfoClock";
import InfoDetailClock from "./InfoDetailClock/InfoDetailClock";
import InfoCustomer from "./InfoCustomer/InfoCustomer";
import {
  fetchApiCreateClockDetail,
  fetchApiCreateCustomer,
  fetchApiCreateInfoContract,
  fetchApiUpdateCustomer,
} from "../../../../redux/slices/contractSlice/contractSlice";
import {
  fetchApiCreateCustomerSelector,
  fetchApiCreateInfoContractSelector,
} from "../../../../redux/selector";

// Tabs
// const itemsCollapse = [
//   {
//     id: "1",
//     label: "Thông tin khách hàng",
//     children: <InfoCustomer />,
//   },
//   {
//     id: "2",
//     label: "Thông tin hợp đồng",
//   },
//   {
//     id: "3",
//     label: "Đồng hồ",
//   },
//   {
//     id: "4",
//     label: "Chi tiết đồng hồ",
//   },
// ];

function FormCreateContract({ tabList, hideModal, isUpdate }) {
  const [formMain] = Form.useForm();
  // const [dataContract, setDataContract] = useState({});
  const [saveAndAdd, setSaveAndAdd] = useState(false);

  const dispatch = useDispatch();

  // const isCreateCustomer = useSelector(fetchApiCreateCustomerSelector);
  // const isCreateContract = useSelector(fetchApiCreateInfoContractSelector);
  // const customer = useSelector(fetchApiFindByKeyIdCustomerSelector);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  // console.log(tabList);
  // console.log(dayjs("2022-10-10"));

  // handle submit error (main)
  const handleFailed = (error) => {
    console.log({ error });
  };

  // useEffect(() => {
  //   if (
  //     isCreateCustomer?.statusCode === 200 ||
  //     isCreateCustomer?.statusCode === 201
  //   ) {
  //     // find customer
  //     // dispatch(fetchApiFindByKeyIdCustomer(isCreateCustomer.data));
  //     // if (customer?.id) {}

  //     dispatch(
  //       fetchApiCreateInfoContract({
  //         dataContract: dataContract,
  //         id: isCreateCustomer?.data,
  //       })
  //     );
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isCreateCustomer?.statusCode, isCreateCustomer?.data]);

  // useEffect(() => {
  //   if (
  //     isCreateContract?.statusCode === 200 ||
  //     isCreateContract?.statusCode === 201
  //   ) {
  //     dispatch(
  //       fetchApiCreateClockDetail({
  //         dataContract: dataContract,
  //         id: isCreateContract?.data,
  //       })
  //     );

  //     // check button
  //     if (saveAndAdd) {
  //       formMain.resetFields();
  //       setSaveAndAdd(false);
  //     } else {
  //       formMain.resetFields();
  //       hideModal();
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isCreateContract?.statusCode, isCreateContract?.data]);

  // handle create contract

  const handleSaveContract = () => {
    formMain
      .validateFields()
      .then((values) => {
        if (values) {
          console.log(values);
          // dispatch(fetchApiCreateCustomer(values));
          // setDataContract(values);
        }
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  // handle create contract save and add
  const handleSaveAndAddContract = () => {
    formMain
      .validateFields()
      .then((values) => {
        if (values) {
          console.log(values);
          // dispatch(fetchApiCreateCustomer(values));

          // setDataContract(values);
          setSaveAndAdd(true);
        }
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  // handle update contract (Customer)
  const handleUpdateContract = () => {
    formMain
      .validateFields()
      .then((values) => {
        if (values) {
          console.log("vals update", values);
          // dispatch(fetchApiUpdateCustomer(values));

          // hideModal();
          // formMain.resetFields();
        }
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  return (
    <>
      <div className="wrapper-tab-modal-create-contract">
        {/* Tabs options */}
        <Form
          form={formMain}
          onFinishFailed={handleFailed}
          fields={[
            {
              name: "keyIdOfCustomer",
              value: tabList ? tabList?.keyId : "",
            },
            {
              name: "loaiKhachHang",
              value: tabList ? tabList?.loaiKhachHang : "",
            },
            {
              name: "nhaMayId",
              value: tabList ? tabList?.nhaMayId : "",
            },
            {
              name: "nguonNuoc",
              value: tabList ? tabList?.nguonNuoc : "",
            },
            {
              name: "tenKhachHang",
              value: tabList ? tabList?.tenKhachHang : "",
            },
            {
              name: "soGcn",
              value: tabList ? tabList?.soGcn : "",
            },
            {
              name: "tenThuongGoi",
              value: tabList ? tabList?.tenThuongGoi : "",
            },
            { name: "soHo", value: tabList ? tabList?.soHo : "" },
            {
              name: "soKhau",
              value: tabList ? tabList?.soKhau : "",
            },
            {
              name: "email",
              value: tabList ? tabList?.email : "",
            },
            {
              name: "dienThoai",
              value: tabList ? tabList?.dienThoai : "",
            },
            {
              name: "doiTuong",
              value: tabList ? tabList?.doiTuong : "",
            },
            {
              name: "soCmnd",
              value: tabList ? tabList?.soCmnd : "",
            },
            {
              name: "ngayCapCmnd",
              value: tabList ? dayjs(tabList?.ngayCapCmnd) : "",
            },
            {
              name: "noiCapCmnd",
              value: tabList ? tabList?.noiCapCmnd : "",
            },
            {
              name: "maSoThue",
              value: tabList ? tabList?.maSoThue : "",
            },
            {
              name: "ghiChu",
              value: tabList ? tabList?.ghiChu : "",
            },
            {
              name: "nguoiDaiDien",
              value: tabList ? tabList?.nguoiDaiDien : "",
            },
          ]}
        >
          {/* Mã khách hàng */}
          {/* <Row>
            <Col xs={24} sm={24} md={12} lg={10}>
              <Form.Item name="code_customer" label="Mã khách hàng">
                <Input name="code_customer" placeholder="Nhập mã khách hàng" />
              </Form.Item>
            </Col>
          </Row> */}

          <Row>
            <Col xs={24} sm={24} md={24} lg={12}>
              <InfoCustomer />
            </Col>

            <Col
              xs={24}
              sm={24}
              md={24}
              lg={12}
              className={
                !isTabletOrMobile ? "" : "collapse-space-top-mobile-item"
              }
            >
              <InfoClock />
            </Col>

            <Col xs={24} sm={24} md={24} lg={12}>
              <InfoContract />
            </Col>

            <Col
              xs={24}
              sm={24}
              md={24}
              lg={12}
              className={
                !isTabletOrMobile ? "" : "collapse-space-top-mobile-item"
              }
            >
              <InfoDetailClock />
            </Col>
          </Row>

          {/* Bottom */}
          <Row>
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              className={
                isTabletOrMobile ? "func-form-create-contract-mobile" : ""
              }
            >
              <Button htmlType="submit" className="custom-btn-attachment">
                <FormOutlined />
                Tệp đính kèm
              </Button>
            </Col>

            {/* Buttons */}
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              className={
                isTabletOrMobile ? "func-form-create-contract-mobile" : ""
              }
            >
              <Button
                htmlType="submit"
                className={
                  isTabletOrMobile
                    ? "footer-func-btn-item-report custom-btn-agreement"
                    : "gutter-item custom-btn-agreement"
                }
              >
                <FormOutlined />
                Biên bản thỏa thuận
              </Button>

              <Button
                htmlType="submit"
                className={
                  isTabletOrMobile
                    ? "footer-func-btn-item-print custom-btn-export"
                    : "gutter-item custom-btn-export"
                }
              >
                <PrinterOutlined />
                In hợp đồng
              </Button>

              <Button
                key="createContractSaveAndAdd"
                onClick={handleSaveAndAddContract}
                className={
                  isTabletOrMobile
                    ? "footer-func-btn-item-save-add custom-btn-save-and-add"
                    : "gutter-item custom-btn-save-and-add"
                }
              >
                <SaveOutlined />
                Lưu và thêm tiếp
              </Button>

              <Button
                key="createContract"
                onClick={isUpdate ? handleUpdateContract : handleSaveContract}
                className={
                  isTabletOrMobile
                    ? "footer-func-btn-item-save custom-btn-add"
                    : "gutter-item custom-btn-add"
                }
              >
                <SaveOutlined />
                {isUpdate ? "Cập nhật" : "Lưu"}
              </Button>

              <Button
                className={
                  isTabletOrMobile
                    ? "footer-func-btn-item-close custom-btn-close"
                    : "gutter-item custom-btn-close"
                }
                onClick={() => hideModal()}
              >
                <CloseOutlined />
                Đóng
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}

export default FormCreateContract;
