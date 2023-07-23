import React, { useEffect, useRef } from "react";
import { Select, Button, Form, Row } from "antd";
import { useNavigate } from "react-router-dom";
import "./LoginSelect.css";
import { fetchApiAllFactory } from "../../redux/slices/factorySlice/factorySlice";
import { fetchApiAllFactorySelector } from "../../redux/selector";
import { useDispatch, useSelector } from "react-redux";

function LoginSelect() {
  const factoryNames = useSelector(fetchApiAllFactorySelector);
  const firstInputRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiAllFactory());
  }, []);
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="login-select-container">
      <div className="login-select-box">
        <h1 className="login-select-title">Hãy chọn nhà máy</h1>
        <Row>
          <Select
            className="login-select"
            ref={firstInputRef}
            options={
              factoryNames?.length <= 0
                ? []
                : factoryNames.map((_factory) => ({
                    label: _factory.tenNhaMay,
                    value: _factory.id,
                  }))
            }
            fieldNames="nhaMayId"
            placeholder="Chọn nhà máy"
          />
          <Button
            className="login-button"
            type="primary"
            onClick={handleLoginClick}
          >
            Tiếp tục
          </Button>
        </Row>
      </div>
    </div>
  );
}

export default LoginSelect;
