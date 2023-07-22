import React from "react";
import { Select, Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./LoginSelect.css";

const { Option } = Select;

function LoginSelect() {
  const factories = ["Nhà máy 1", "Nhà máy 2", "Nhà máy 3", "Nhà máy 4"];
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="login-select-container">
      <h1 className="login-select-title">Hãy chọn nhà máy </h1>
      <Select
        className="login-select"
        placeholder="Chọn nhà máy"
        style={{ marginTop: "10px" }}
      >
        {factories.map((factory) => (
          <Option value={factory}>{factory}</Option>
        ))}
      </Select>
      <Button
        className="login-button"
        type="primary"
        onClick={handleLoginClick}
      >
        Tiếp tục
      </Button>
    </div>
  );
}

export default LoginSelect;
