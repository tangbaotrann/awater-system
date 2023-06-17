import { Button, Popover } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

import "./ExportFile.css";

function ExportFile() {
  return (
    <Popover content="word" trigger="click" placement="rightTop">
      <Button type="primary">
        Xuất file <CaretDownOutlined />
      </Button>
    </Popover>
  );
}

export default ExportFile;
