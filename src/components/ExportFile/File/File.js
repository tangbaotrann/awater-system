import { Button } from "antd";
import { exportToExcel } from "../../../utils/exportFile";
import { useSelector } from "react-redux";
import { btnClickSidebarMenuSelector } from "../../../redux/selector";

function File() {
  const menuSidebar = useSelector(btnClickSidebarMenuSelector);

  const handleExportToExcel = () => {
    exportToExcel("table", menuSidebar);
  };

  return (
    <div className="wrapper-file">
      <Button>Word</Button>
      <Button onClick={handleExportToExcel}>Excel</Button>
    </div>
  );
}

export default File;
