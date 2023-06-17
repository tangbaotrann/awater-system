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
      <Col>
        <AutoComplete
          // dropdownMatchSelectWidth={250}
          // options={options}
          style={{ width: 275 }}
          filterOption={true}
          onSearch={handleSearch}
          onSelect={handleSelect}
        >
          <Input.Search size="middle" placeholder="Tìm kiếm..." enterButton />
        </AutoComplete>
      </Col>

      <Col>
        <Button type="primary" className="reset-report-btn">
          Làm mới <UndoOutlined />
        </Button>
      </Col>

      <Col>
        {/* Export file */}
        <ExportFile />
      </Col>
    </Row>
  );
}

export default Reporter;
