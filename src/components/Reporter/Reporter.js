import { AutoComplete, Button, Input } from "antd";
import { UndoOutlined } from "@ant-design/icons";

import "./Reporter.css";
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
    <div className="wrapper-reporter">
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

      <Button className="reset-report-btn custom-btn-reset">
        Làm mới <UndoOutlined />
      </Button>

      {/* Export file */}
      <ExportFile />
    </div>
  );
}

export default Reporter;
