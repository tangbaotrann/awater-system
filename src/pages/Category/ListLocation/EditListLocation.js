import React from "react";
import { Button, Col, Form, Input, Row, Select, theme } from "antd";
import { CloseOutlined, FileAddOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { fetchApiUpdateArea } from "../../../redux/slices/areaSlice/areaSlice";

const EditListLocation = ({ tabListbc, regions, hideModal }) => {
  const [form1] = Form.useForm();
  const { token } = theme.useToken();

  const dispatch = useDispatch();

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  const layout = {
    labelCol: {
      span: 5,
    },
    // wrapperCol: {
    //   span: 40,
    // },
  };

  console.log(tabListbc);

  // handle submit form (main)
  const handleSubmit = (values) => {
    if (values && tabListbc) {
      dispatch(
        fetchApiUpdateArea({
          values,
          tabListbc,
        })
      );
      hideModal();
    }
  };

  // handle submit error (main)
  const handleFailed = (error) => {
    console.log({ error });
  };

  return (
    <>
      <Form
        {...layout}
        form={form1}
        onFinish={handleSubmit}
        onFinishFailed={handleFailed}
        style={{
          maxWidth: "none",
          background: token.colorFillAlter,
          borderRadius: token.borderRadiusLG,
          padding: 24,
        }}
        fields={[
          { name: "id", value: tabListbc ? tabListbc?.id : null },
          { name: "tenKhuVuc", value: tabListbc ? tabListbc?.tenKhuVuc : null },
          { name: "vungId", value: tabListbc ? tabListbc?.vungId : null },
        ]}
      >
        <Row gutter={24}>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={24}
            span={24}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item label="Mã Khu Vực" name="id">
              <Input
                style={{ width: "100%" }}
                name="id"
                placeholder="Nhập mã khu vực"
              />
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
            <Form.Item label="Tên Khu Vực" name="tenKhuVuc">
              <Input
                style={{ width: "100%" }}
                name="tenKhuVuc"
                placeholder="Nhập tên khu vực"
              />
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
            <Form.Item label="Vùng" name="vungId">
              <Select
                style={{ width: "100%" }}
                fieldNames="vungId"
                options={
                  regions?.length <= 0
                    ? []
                    : regions.map((_regoin) => ({
                        label: _regoin.tenVung,
                        value: _regoin.id,
                      }))
                }
                placeholder="Chọn vùng"
                disabled
              />
            </Form.Item>

            {/* <Form.Item label="Khu Vực Cha">
              <Select style={{ width: "100%" }}>
                <Option value="A">A</Option>
                <Option value="B">B</Option>
              </Select>
            </Form.Item> */}
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
            key="update"
            htmlType="submit"
            style={{
              marginLeft: "10px",
            }}
            icon={<FileAddOutlined />}
            className="custom-btn-reset-d"
          >
            Cập nhật
          </Button>

          {/* <Button
            key="submit"
            style={{
              marginLeft: "10px",
            }}
            htmlType="submit"
            icon={<SaveOutlined />}
            className="custom-btn-attachment-d"
          >
            Lưu Và Đóng
          </Button> */}

          <Button
            style={{
              marginLeft: "10px",
            }}
            icon={<CloseOutlined />}
            className="custom-btn-close-d"
            onClick={() => hideModal()}
          >
            Đóng
          </Button>
        </Row>
      </Form>
    </>
  );
};

export default EditListLocation;
