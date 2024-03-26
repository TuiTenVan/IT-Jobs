import JobList from "./JobList";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function JobsManage() {
  return (
    <>
      <h1>Danh sách việc làm</h1>
      <Link to="/create-job">
        <Button icon={<PlusOutlined />}>Tạo việc mới</Button>
      </Link>
      <JobList className="mt-20" />
    </>
  );
}

export default JobsManage;
