import { AutoComplete, Button, Col, Input, Row } from "antd";
import { UndoOutlined } from "@ant-design/icons";

import ExportFile from "../ExportFile/ExportFile";

function Reporter() {
  // handle search auto complete
  const handleSearch = (value) => {
    console.log(value);
  };

  // handle select value search auto complete
  const handleSelect = (value, { label }) => {
    console.log(label);
  };

  return (
    <Row>
      <Col xs={24} sm={12} md={11} lg={8}>
        <AutoComplete
          // dropdownMatchSelectWidth={250}
          // options={options}
          className="reporter-auto-search-input"
          filterOption={true}
          onSearch={handleSearch}
          onSelect={handleSelect}
        >
          <Input.Search size="middle" placeholder="Tìm kiếm..." enterButton />
        </AutoComplete>
      </Col>

      <Col xs={24} sm={6} md={6} lg={6}>
        <Button className="reset-report-btn custom-btn-reset">
          Làm mới <UndoOutlined />
        </Button>
      </Col>

      <Col xs={24} sm={6} md={6} lg={6}>
        {/* Export file */}
        <ExportFile />
      </Col>
    </Row>
  );
}

export default Reporter;
