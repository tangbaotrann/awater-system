import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Button, Col, Form, Input, Row, Select, theme } from "antd";
import {
  CloseOutlined,
  FileAddOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const AddAndEditDistrict = ({ hideModal }) => {
  const [form] = Form.useForm();
  const { token } = theme.useToken();
  const Option = Select;
  const dispatch = useDispatch();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const [listCity, setListCity] = useState([]);

  // handle submit form (main)
  const handleSubmit = (values) => {
    console.log({ values });
  };

  useEffect(() => {
    const getAllCity = async () => {
      try {
        const res = await axios.get("https://provinces.open-api.vn/api/p");
        if (res && res.data) {
          console.log({ res });
          setListCity(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllCity();
  }, []);

  const layout = {
    labelCol: {
      span: 5,
    },
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      {...layout}
      form={form}
      onFinish={handleSubmit}
      style={{
        maxWidth: "none",
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        padding: 10,
      }}
    >
      <Row>
        <Col
          xs={24}
          sm={12}
          md={12}
          lg={24}
          span={24}
          className={isTabletOrMobile ? "" : "gutter-item"}
        >
          <Form.Item name="tp" label="Thành phố/tỉnh">
            <Select style={{ width: "100%" }}>
              {listCity &&
                listCity.length > 0 &&
                listCity?.map((item) => (
                  <Option value={item.code}>{item.name}</Option>
                ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col
          xs={24}
          sm={12}
          md={12}
          lg={24}
          span={24}
          className={isTabletOrMobile ? "" : "gutter-item"}
        >
          <Form.Item
            name="tenTrangThai"
            label="Tên quận huyện"
            // rules={[
            //   {
            //     required: true,
            //   },
            // ]}
          >
            <Input name="tenTrangThai" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>

      <Row
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginTop: "10px",
        }}
      >
        <Button
          style={{
            marginLeft: "10px",
          }}
          icon={<FileAddOutlined />}
          className="custom-btn-reset-d"
          onClick={onReset}
        >
          Lưu Và Thêm Tiếp
        </Button>

        <Button
          style={{
            marginLeft: "10px",
          }}
          htmlType="submit"
          icon={<SaveOutlined />}
          className="custom-btn-attachment-d"
        >
          Lưu Và Đóng
        </Button>

        <Button
          style={{
            marginLeft: "10px",
          }}
          icon={<CloseOutlined />}
          htmlType="submit"
          className="custom-btn-close-d"
          onClick={() => hideModal()}
        >
          Đóng
        </Button>
      </Row>
    </Form>
  );
};

export default AddAndEditDistrict;
