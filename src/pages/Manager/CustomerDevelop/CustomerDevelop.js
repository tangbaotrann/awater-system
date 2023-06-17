import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Select,
} from "antd";
import { useDispatch, useSelector } from "react-redux";

import "./CustomerDevelop.css";
import TableReportCustomer from "../../../components/TableReportCustomer/TableReportCustomer";
import reportContractSlice from "../../../redux/slices/reportContractSlice/reportContractSlice";
import { btnClickOptionFactory } from "../../../redux/selector";
import { useEffect } from "react";
import Reporter from "../../../components/Reporter/Reporter";

function CustomerDevelop() {
  const dispatch = useDispatch();

  const optionNameFactory = useSelector(btnClickOptionFactory);

  // handle submit form
  const handleSubmit = (values) => {
    console.log("values", values);
  };

  // handle submit error
  const handleFailed = (error) => {
    console.log({ error });
  };

  useEffect(() => {
    dispatch(reportContractSlice.actions.btnClickOptionFactory("all"));
  }, []);

  // handle filter change name factory
  const handleChangeNameFactory = (value) => {
    dispatch(reportContractSlice.actions.btnClickOptionFactory(value));
  };

  return (
    <>
      <Form
        onFinish={handleSubmit}
        onFinishFailed={handleFailed}
        initialValues={{
          unit: "all",
          employee: "all",
          reading_line: "all",
          watch_style: "all",
        }}
        fields={[
          { name: "no_val_one", value: false },
          { name: "no_val_two", value: false },
        ]}
      >
        {/* Đơn vị + Nhân viên */}
        <Row>
          <Col xs={24} sm={24} md={24} lg={10} className="gutter-item">
            <Form.Item name="unit" label="Đơn vị: ">
              <Select
                fieldNames="unit"
                options={[
                  { value: "all", label: "Tất cả" },
                  { value: "opt_1", label: "Nhà máy nước Hiệp Hòa 1" },
                  { value: "opt_2", label: "Nhà máy nước Hiệp Hòa 2" },
                ]}
                onSelect={handleChangeNameFactory}
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={24} lg={10} className="gutter-item">
            <Form.Item name="employee" label="Nhân viên: ">
              <Select
                fieldNames="employee"
                options={[
                  { value: "all", label: "Tất cả" },
                  { value: "opt_1", label: "NV_01" },
                ]}
                onSelect={handleChangeNameFactory}
              />
            </Form.Item>
          </Col>
        </Row>

        {/* Tìm kiếm tuyến + Tuyến dọc */}
        <Row>
          <Col xs={24} sm={24} md={24} lg={10} className="gutter-item">
            <Form.Item name="online_search" label="Tìm kiếm tuyến: ">
              <Input name="online_search" placeholder="Tìm kiếm tuyến" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={24} lg={10} className="gutter-item">
            <Form.Item name="reading_line" label="Tuyến đọc: ">
              <Select
                fieldNames="reading_line"
                options={[
                  { value: "all", label: "Tất cả" },
                  { value: "opt_1", label: "TD_01" },
                ]}
                onSelect={handleChangeNameFactory}
              />
            </Form.Item>
          </Col>
        </Row>

        {/* Từ ngày + Đến ngày */}
        <Row>
          <Col xs={24} sm={24} md={6} lg={6} className="gutter-item">
            <Form.Item name="start_date" label="Từ ngày: ">
              <DatePicker placeholder="Chọn ngày" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={4} lg={4}>
            <Form.Item
              rules={[
                {
                  required: false,
                },
              ]}
              valuePropName="checked"
              hasFeedback
              name="no_val_one"
            >
              <Checkbox>Không có giá trị</Checkbox>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={6} lg={6} className="gutter-item">
            <Form.Item name="end_start" label="Đến ngày: ">
              <DatePicker placeholder="Chọn ngày" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={4} lg={4}>
            <Form.Item
              rules={[
                {
                  required: false,
                },
              ]}
              hasFeedback
              valuePropName="checked"
              name="no_val_two"
            >
              <Checkbox>Không có giá trị</Checkbox>
            </Form.Item>
          </Col>
        </Row>

        {/* Kiểu đồng hồ + Kích cở */}
        <Row>
          <Col xs={24} sm={24} md={24} lg={10} className="gutter-item">
            <Form.Item name="watch_style" label="Kiểu đồng hồ: ">
              <Select
                fieldNames="watch_style"
                options={[
                  { value: "all", label: "Tất cả" },
                  { value: "opt_1", label: "Kiểu 01" },
                ]}
                onSelect={handleChangeNameFactory}
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={24} lg={10} className="gutter-item">
            <Form.Item name="size" label="Kích cỡ: ">
              <Input placeholder="Kích cỡ" />
            </Form.Item>
          </Col>

          <Col span={2}>
            <Button htmlType="submit" type="primary">
              Xem báo cáo
            </Button>
          </Col>
        </Row>
      </Form>

      <Divider />

      <Reporter />

      <Divider />

      {/* render table */}
      {optionNameFactory === "all" ? (
        <TableReportCustomer />
      ) : (
        <p className="message-empty">
          <i>-- Hiện tại chưa có dữ liệu. --</i>
        </p>
      )}
    </>
  );
}

export default CustomerDevelop;
