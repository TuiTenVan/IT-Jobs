import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function GoBack() {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate(-1)}>
        Trở lại
      </Button>
    </>
  );
}

export default GoBack;
