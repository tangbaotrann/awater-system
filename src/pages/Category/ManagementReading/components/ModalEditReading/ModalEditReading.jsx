import { CloseCircleOutlined, SaveOutlined } from "@ant-design/icons";
import {
    Button,
    Col,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Modal,
    Row,
    Select,
    Space,
} from "antd";
import React, { useEffect, useState } from "react";
import "../ModalAddReading/ModalAddReading.css";
import { useDispatch, useSelector } from "react-redux";
import { updateTuyenDoc } from "../../../../../redux/slices/DMTuyenDoc/tuyenDocSlice";
import { fetchApiAllArea } from "../../../../../redux/slices/areaSlice/areaSlice";

const ModalEditReading = ({ isOpenModalEditReading, setIsOpenModalEditReading }) => {
    const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];
    const tabList = useSelector((state) => state.tabListContractSlice.tabList);
    const { Option } = Select;
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const listAreas = useSelector(state => state.areaSlice.data);
    const danhSachNguoiDung = useSelector(state => state.nguoidung.danhSachNguoiDung)
    const [loadings, setLoadings] = useState(false);
    const rowSelected = useSelector(state => state.tabListReadingSlice.rowSelected);

    useEffect(() => {
        dispatch(fetchApiAllArea())
    }, [])

    const onFinish = (values) => {
        const data = { ...values };
        data.nhaMayId = 'nhamaycuangan';
        if (data) {
            dispatch(updateTuyenDoc(data))
            // console.log('data on eidt: ', data);

        }
        setIsOpenModalEditReading(false)
        form.resetFields();
    };

    return (
        <Modal
            title={"Sửa dữ liệu"}
            open={isOpenModalEditReading}
            onCancel={() => (
                setIsOpenModalEditReading(false)
            )}
            className="popup-add-reading"
            width={1200}
            footer={null}
        >
            <Form
                onFinish={onFinish}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                form={form}
                fields={form.setFieldsValue(rowSelected)}
            >
                <Row>
                    <Col lg={8}>
                        <Form.Item
                            label="Nhân viên"
                            name="nguoiQuanLyId"
                        // rules={[{ required: true, message: "Hãy chọn nhân viên!" }]}
                        >
                            <Select
                                name="nguoiQuanLyId"
                                size="middle"
                                placeholder="Chọn nhân viên"
                                style={{ width: "100%" }}
                                disabled
                            >
                                {
                                    danhSachNguoiDung && danhSachNguoiDung.length > 0 && danhSachNguoiDung?.map((item) => (
                                        <Option key={item.id} value={item.id}>{item.keyId}</Option>
                                    ))
                                }
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col lg={8}>
                        <Form.Item
                            label="Số thứ tự"
                            name="index"
                        // rules={[{ required: true, message: "Hãy nhập số thứ tự!" }]} 
                        >
                            <InputNumber
                                min={1}
                                size="middle"
                                name="index"
                                placeholder="Số thứ tự"
                                style={{ width: "100%" }}
                            />
                        </Form.Item>
                    </Col>
                    <Col lg={8}>
                        <Form.Item
                            label="Mã tuyến"
                            name="KeyId"
                            rules={[{ required: true, message: "Hãy nhập vào mã tuyến!" }]}

                        >
                            <Input placeholder="Mã tuyến" name="KeyId" disabled />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8}>
                        <Form.Item
                            label="Tên tuyến"
                            name="tenTuyen"
                            rules={[{ required: true, message: "Hãy nhập vào tên tuyến!" }]}
                        >
                            <Input placeholder="Tên tuyến" name="tenTuyen" />
                        </Form.Item>
                    </Col>
                    <Col lg={8}>
                        <Form.Item
                            label="NV thu tiền"
                            name="nguoiThuTienId"
                            rules={[{ required: true, message: "Hãy chọn nhân viên thu tiền!" }]}
                        >   
                            <Select
                                name="nguoiThuTienId"
                                size="middle"
                                placeholder="Chọn nhân viên"
                                style={{ width: "100%" }}
                            >
                                <Option value="nhân viên 1">nhân viên 1</Option>
                                <Option value="nhân viên 2">nhân viên 2</Option>
                                <Option value="nhân viên 3">nhân viên 3</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col lg={8}>
                        <Form.Item label="Số ĐT người thu" name="phoneNumberCashier">
                            <Input placeholder="Số ĐT người thu" name="phoneNumberCashier" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8}>
                        <Form.Item label="Địa chỉ thu" name="address">
                            <Input placeholder="Địa chỉ thu" name="address" />
                        </Form.Item>
                    </Col>
                    <Col lg={8}>
                        <Form.Item label="Thời gian thu" name="time">
                            <Input placeholder="Thời gian thu" name="time" />
                        </Form.Item>
                    </Col>
                    <Col lg={8}>
                        <Form.Item label="Số ĐT hóa đơn" name="phoneNumberInvoice">
                            <Input placeholder="Số ĐT hóa đơn" name="phoneNumberInvoice" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8}>
                        <Form.Item label="Số ĐT sửa chữa" name="phoneNumberRepair">
                            <Input placeholder="Số ĐT sửa chữa" name="phoneNumberRepair" />
                        </Form.Item>
                    </Col>
                    <Col lg={8}>
                        <Form.Item label="Kỳ ghi chỉ số" name="indexingPeriod">
                            <Select
                                name="indexingPeriod"
                                size="middle"
                                placeholder="Kỳ ghi chỉ số"
                                style={{ width: "100%" }}
                            // options={indexingPeriodOptions}
                            />
                        </Form.Item>
                    </Col>
                    <Col lg={8}>
                        <Form.Item
                            label="Khu vực"
                            name="khuVucId"
                            rules={[{ required: true, message: "Khu vực không được để trống" }]}
                        >
                            <Select
                                name="khuVucId"
                                size="middle"
                                placeholder="Chọn khu vực"
                                style={{ width: "100%" }}
                            >
                                {
                                    listAreas && listAreas.length > 0 && listAreas.map((area) => (
                                        <Option key={area.id} value={area.id}>{area?.tenKhuVuc}</Option>
                                    ))
                                }
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8}>
                        <Form.Item label="NV xem biểu mẫu" name="employeeViewForm">
                            <Select
                                name="employeeViewForm"
                                size="middle"
                                placeholder="Chọn nhân viên xem biểu mẫu"
                                style={{ width: "100%" }}
                            // options={employeeOptions}
                            />
                        </Form.Item>
                    </Col>
                    <Col lg={8}>
                        <Form.Item label="NV sửa biểu mẫu" name="employeeEditForm">
                            <Select
                                name="employeeEditForm"
                                size="middle"
                                placeholder="Chọn nhân viên sửa biểu mẫu"
                                style={{ width: "100%" }}
                            // options={employeeOptions}
                            />
                        </Form.Item>
                    </Col>
                    <Col lg={8}>
                        <Form.Item label="Đơn vị" name="unit">
                            <Select
                                name="unit"
                                size="middle"
                                placeholder="Chọn đơn vị"
                                style={{ width: "100%" }}
                            // options={employeeOptions}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <Form.Item label="Ngày ghi CS từ" name="fromDate">
                            <DatePicker
                                name="fromDate"
                                placeholder="Chọn ngày ghi từ"
                                style={{ width: "100%" }}
                                format={dateFormatList}
                            />
                        </Form.Item>
                    </Col>
                    <Col lg={12}>
                        <Form.Item label="Ngày ghi CS đến" name="toDate">
                            <DatePicker
                                name="toDate"
                                placeholder="Chọn ngày ghi từ"
                                style={{ width: "100%" }}
                                format={dateFormatList}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                {tabList && (
                    <div style={{ marginBottom: "10px" }}>
                        <span style={{ fontWeight: "600" }}>
                            Nếu bạn muốn sửa nhân viên quản lý thì dùng chức năng:{" "}
                            <span style={{ fontWeight: "600", color: "red" }}>
                                Chuyển cán bộ quản lý
                            </span>
                        </span>
                    </div>
                )}

                <Form.Item className="form-item-button footer">
                    <Space>
                        <Button
                            type="primary"
                            icon={<SaveOutlined />}
                            style={{ marginRight: 5 }}
                        >
                            Lưu và thêm tiếp
                        </Button>
                        <Button
                            htmlType="submit"
                            icon={<SaveOutlined />}
                            style={{
                                marginRight: 5,
                                backgroundColor: "#fbf2ef",
                                color: "#fa8a6d",
                            }}
                            loading={loadings}
                        >
                            Lưu và đóng
                        </Button>
                        <Button
                            icon={<CloseCircleOutlined />}
                            onClick={() => {
                                setIsOpenModalEditReading(false)
                                form.resetFields();
                            }}
                            style={{
                                backgroundColor: "#fa896b",
                                color: "#ffffff",
                                border: "none",
                            }}
                        >
                            Đóng
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ModalEditReading;
