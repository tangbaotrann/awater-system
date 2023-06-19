import { Button, Popover } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

import "./ExportFile.css";
import File from "./File/File";

function ExportFile() {
  return (
    <Popover content={<File />} trigger="click" placement="rightTop">
      <Button type="primary">
        Xuất file <CaretDownOutlined />
      </Button>
    </Popover>
  );
}

export default ExportFile;
