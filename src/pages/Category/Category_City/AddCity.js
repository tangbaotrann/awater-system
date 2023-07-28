import React from "react";
import { Button, Col, DatePicker, Form, Input, Row, theme } from "antd";
import {
    CloseOutlined,
    FileAddOutlined,
    SaveOutlined,
} from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { addCity } from "../../../redux/slices/citySlice/citySlice";

const AddCity = ({ hideModal }) => {
    const dispatch = useDispatch();
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
    const [form] = Form.useForm();
    const { token } = theme.useToken();
    const layout = {
        labelCol: {
            span: 6,
        },
    };

    // handle submit form (main)
    const handleSubmit = (values) => {
        console.log(values);
        if (values) {
            dispatch(addCity(values));
        }
        hideModal();
        form.resetFields();
    };

    // handle submit error (main)
    const handleFailed = (error) => {
        console.log({ error });
    };
    return (
        <>
            <Form
                {...layout}
                form={form}
                onFinish={handleSubmit}
                onFinishFailed={handleFailed}
                style={{
                    maxWidth: "none",
                    background: token.colorFillAlter,
                    borderRadius: token.borderRadiusLG,
                    padding: 24,
                }}
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
                        <Form.Item name="keyId" label="Mã Thành Phố/ Tỉnh">
                            <Input name="keyId" style={{ width: "100%" }} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col
                        xs={24}
                        sm={12}
                        md={12}
                        lg={24}
                        span={24}
                        className={isTabletOrMobile ? "" : "gutter-item"}
                    >
                        <Form.Item name="ten" label="Tên Thành Phố/ Tỉnh">
                            <Input name="ten" style={{ width: "100%" }} />
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
                        key="reset"
                        style={{
                            marginLeft: "10px",
                        }}
                        icon={<FileAddOutlined />}
                        className="custom-btn-reset-d"
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
        </>
    );
};

export default AddCity;