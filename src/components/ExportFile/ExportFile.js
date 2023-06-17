import { Button, Popover } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

import "./ExportFile.css";

function ExportFile() {
  return (
    <div className="export-file-report-cus">
      <Popover content="word" trigger="click" placement="rightTop">
        <Button type="primary">
          Xuất file <CaretDownOutlined />
        </Button>
      </Popover>
    </div>
  );
}

export default ExportFile;
