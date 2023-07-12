import { React, useState } from "react";
import TabListBC from "./TableListLRL";
import "../../../components/GlobalStyles/GlobalStyles.css";
import "../../Manager/Contract/Contract.css";
import { Form, Input, theme, Table, Popover, Col, Row } from "antd";
import { PlusOutlined, SnippetsOutlined } from "@ant-design/icons";
import moment from "moment";
import "moment/locale/vi";
import { useMediaQuery } from "react-responsive";
moment.locale("vi");
function List_Regions_Location() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const { token } = theme.useToken();

  const initialData = Array.from({ length: 100 }, (_, i) => {
    return {
      key: "1",
      stt: i + 1,
      maVung: `  Mã Vùng ${i + 1}`,
      tenVung: `Tên Vùng ${i + 1}`,
    };
  });
  const [data1, setData1] = useState(initialData);

  function fetchDataForPage(page) {
    const pageSize = 18;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return initialData.slice(startIndex, endIndex);
  }

  const handleData1Change = (pagination) => {
    const currentPage = pagination.current;
    // const newData = fetchDataForPage(currentPage);
    // setData1(newData);
  };

  const columns = [
    {
      title: "#",
      dataIndex: "stt",
      key: "stt",
      width: 70,
    },
    {
      title: " Mã Vùng",
      dataIndex: "maVung",
      key: "maVung",
      width: 170,
      render: (text, record) => (
        <>
          <SnippetsOutlined />
          {text}
        </>
      ),
    },
    {
      title: "Tên Vùng",
      dataIndex: "tenVung",
      key: "tenVung",
    },
  ];
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
                <TabListBC />
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

  return (
    <>
      {/* <AdvancedSearchForm /> */}
      <AdvancedSearchForm />
      <div
        style={{
          textAlign: "center",
          background: token.colorFillAlter,
          borderRadius: token.borderRadiusLG,
          marginTop: 16,
          padding: "10px 10px",
          height: "550px",
          position: "relative",
        }}
      >
        <Table
          size="small"
          rowKey="index"
          scroll={{ x: 2000, y: 480 }}
          columns={columns.map((column) => ({
            ...column,
            className: "cell-wrap",
          }))}
          dataSource={data1}
          onChange={handleData1Change}
        />
        {isTabletOrMobile && (
          <div className="contract-bottom">
            {/* check mobile */}
            {isTabletOrMobile ? (
              <Popover
                size="small"
                rootClassName="fix-popover-z-index"
                placement="bottomRight"
                trigger="click"
                content={<TabListBC isTabletOrMobile={isTabletOrMobile} />}
              >
                <div className="contract-bottom-func">
                  <PlusOutlined />
                </div>
              </Popover>
            ) : (
              <div className="contract-bottom-func">
                <TabListBC />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
export default List_Regions_Location;
