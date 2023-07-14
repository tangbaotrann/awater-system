import React from 'react';
import { useMediaQuery } from "react-responsive";
import { Button, Checkbox, Col, ColorPicker, Form, Input, Row, Select, theme } from "antd";
import {
    CloseOutlined,
    FileAddOutlined,
    SaveOutlined,
} from "@ant-design/icons";


const Edit_Status_ReadNumber = ({ hideModal }) => {

    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

    // handle submit form (main)
    const handleSubmit = (values) => {
        console.log("values", values);
    };
    // handle submit error (main)
    const handleFailed = (error) => {
        console.log({ error });
    };

    const { Option } = Select;
    const [form1] = Form.useForm();
    const { token } = theme.useToken();

    const layout = {
        labelCol: {
            span: 5,
        },
    };

    const onChange_ChoPhepGhi = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    const onChange_ChoPhepHienThi = (e) => {
        console.log(`checked = ${e.target.checked}`);
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
                        <Form.Item label="Mã trạng thái" required>
                            <Input style={{ width: "100%" }} />
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
                        <Form.Item label="Tên trạng thái" required>
                            <Input style={{ width: "100%" }} />
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
                        <Form.Item label="Mô tả ngắn">
                            <Input style={{ width: "100%" }} />
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
                        <Form.Item label="Số thứ tự">
                            <Input placeholder='Nhập số thứ tự' type='Number' min={1} style={{ width: "100%" }} />
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
                        <Form.Item label="Mã màu">
                            <ColorPicker size="large" showText={(color) => <span>Custom Text ({color.toHexString()})</span>} />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col
                        style={{ marginLeft: '40px' }}
                        className={isTabletOrMobile ? "" : "gutter-item"}
                    >
                        <Form.Item>
                            <p>Không cho phép ghi: <Checkbox onChange={onChange_ChoPhepGhi}></Checkbox></p>
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col
                        style={{ marginLeft: '40px' }}
                        className={isTabletOrMobile ? "" : "gutter-item"}
                    >
                        <Form.Item>
                            <p>Không cho phép hiển thị trên thanh ghi chỉ số: <Checkbox onChange={onChange_ChoPhepHienThi}></Checkbox></p>
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
                        key="submit"
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

export default Edit_Status_ReadNumber;