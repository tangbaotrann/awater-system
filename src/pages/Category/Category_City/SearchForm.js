import { Col, Form, Input, Row } from "antd";
import { useMediaQuery } from "react-responsive";
import TableCity from "./TableCity";

export const SearchForm = () => {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

    const layout = {
        labelCol: {
            span: 9,
        },
    };

    return (
        <Form {...layout}>
            <Row>
                {!isTabletOrMobile && (
                    <Col span={8}>
                        <Form.Item>
                            <TableCity />
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
        </Form>
    );
};
