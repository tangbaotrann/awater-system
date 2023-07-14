import React, { useState } from 'react';
import { useMediaQuery } from "react-responsive";
import { Table, Form, Input, Col, Row } from 'antd';
import TableCategory_SRN from "./TableCategory_SRN";
import { render } from '@testing-library/react';



const initialData = Array.from({ length: 100 }, (_, i) => {
    return {
        key: `${i + 1}`,
        stt: i + 1,
        maTT: `  Mã trạng thái ${i + 1}`,
        tenTT: `Tên trạng thái ${i + 1}`,
        maMau: `#FF6600`,
        khongChoPhepGhi: null,
        khongChoHienThi: null,
        soTT: null,
        moTaNgan: null
    };
});

const columns = [
    {
        title: '#',
        dataIndex: 'stt',
        width: 70,
        onCell(text, record) {
            return {
                props: {
                    style: {
                        background: "#FF3333"
                    },
                    children: <div>{text}</div>
                }
            }
        }
    },
    {
        title: 'Mã trạng thái',
        dataIndex: 'maTT',
        width: 100
    },
    {
        title: 'Tên trạng thái',
        dataIndex: 'tenTT',
        width: 170,
    },
    {
        title: 'Mã màu',
        dataIndex: 'maMau',
        width: 170
    },
    {
        title: 'Không cho phép ghi',
        dataIndex: 'khongChoPhepGhi',
        width: 170
    },
    {
        title: 'Không cho cho hiển thị',
        dataIndex: 'khongChoHienThi',
        width: 170
    },
    {
        title: 'Số TT',
        dataIndex: 'soTT',
        width: 70
    },
    {
        title: 'Mô tả ngắn',
        dataIndex: 'moTaNgan',
        width: 270
    },
];

const Category_Status_ReadNumber = () => {
    // resp
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
    // dummy data
    const [dummyData] = useState(initialData);

    // ========================================================================================
    const AdvancedSearchForm = () => {
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
                                <TableCategory_SRN />
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
    // ========================================================================================

    return (
        <div>
            <AdvancedSearchForm />
            <Table
                style={{ marginTop: "10px" }}
                size="small"
                bordered
                rowKey="index"
                scroll={{ x: 1000, y: 480 }}
                columns={columns.map(col => ({ ...col, className: 'cell-wrap' }))}
                dataSource={dummyData}
                onRow={(record, rowIndex) => ({
                    style: {
                        color: record.maMau
                    }
                })}
            ></Table>
        </div>
    );
};

export default Category_Status_ReadNumber;