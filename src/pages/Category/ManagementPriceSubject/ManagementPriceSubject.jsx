import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../../../components/GlobalStyles/GlobalStyles.css";
import CategoryHeader from "../../../components/CategoryHeader/CategoryHeader";
import ModalConfirmDelete from "../../../components/ModalConfirmDelete/ModalConfirmDelete";
import TablePriceSubject from "./components/TablePriceSubject/TablePriceSubject";
import ModalAddPriceSubject from "./components/ModalAddPriceSubject/ModalAddPriceSubject";
import { btnClickTabListContract } from "../../../redux/slices/tabListContractSlice/tabListContractSlice";
import TableListMPL from "./TableListMPS";
import "./ManagementPriceSubject.css";
import { useMediaQuery } from "react-responsive";
import { Col, Form, Input, Popover, Row } from "antd";
import TableListMPS from "./TableListMPS";
import { PlusOutlined } from "@ant-design/icons";

const ManagementPriceSubject = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const [isOpenModalAddSubject, setIsOpenModalAddSubject] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(btnClickTabListContract(null));
  }, []);
  const handleOk = (type) => {
    if (type === "addPriceSubject") {
      setIsOpenModalAddSubject(false);
    }
  };

  const handleCancel = (type) => {
    if (type === "addPriceSubject") {
      setIsOpenModalAddSubject(false);
    }
    if (type === "closeModalDeleteSubject") {
      setIsOpenModalDelete(false);
    }
  };
  const layout = {
    labelCol: {
      span: 9,
    },
  };
  return (
    <div className="management-price-subject-wrapper">
      <div className="management-price-subject-header">
        <CategoryHeader
          setIsOpenModalAddSubject={setIsOpenModalAddSubject}
          setIsOpenModalDelete={setIsOpenModalDelete}
        />
        {/* <Form {...layout}>
          <Row>
            {!isTabletOrMobile && (
              <Col span={8}>
                <Form.Item>
                  <TableListMPS />
                </Form.Item>
              </Col>
            )}

            <Col span={16}>
              <Form.Item
                lassName="custom-form-item"
                label="Nhập và Enter để tìm kiếm"
                name="9"
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form> */}
      </div>
      <div className="management-price-subject-table">
        <TablePriceSubject />
      </div>
      <ModalAddPriceSubject
        handleCancel={handleCancel}
        handleOk={handleOk}
        isOpen={isOpenModalAddSubject}
      />
      <ModalConfirmDelete
        title="Thông báo"
        isModalOpen={isOpenModalDelete}
        handleCancel={handleCancel}
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
              content={<TableListMPS isTabletOrMobile={isTabletOrMobile} />}
            >
              <div className="contract-bottom-func">
                <PlusOutlined />
              </div>
            </Popover>
          ) : (
            <div className="contract-bottom-func">
              <TableListMPS />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ManagementPriceSubject;
