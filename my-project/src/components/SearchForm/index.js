import { Input, Select, Form, Button, Row, Col } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getListCity } from "../../services/cityService";

function SearchForm() {
  const navigate = useNavigate();
  const [city, setCity] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListCity();
      if (response) {
        const objAll = {
          key: 0,
          value: "All",
        };
        setCity([objAll, ...response]);
      }
    };
    fetchApi();
  }, []);

  const handleFinish = (values) => {
    let city = values.city || "";
    city = values.city === "All" ? "" : city;
    navigate(
      `/search?city=${city}&keyword=${values.keyword || ""}`
    );
  };

  return (
    <>
      <h1>1000+ IT Jobs For Developers</h1>
      {city && (
        <Form onFinish={handleFinish}>
          <Row gutter={[12, 12]}>
            <Col xxl={6} xl={6} lg={6}>
              <Form.Item name="city">
                <Select options={city} placeholder="Chọn thành phố" />
              </Form.Item>
            </Col>
            <Col xxl={15} xl={15} lg={15}>
              <Form.Item name="keyword">
                <Input placeholder="Nhập từ khóa..." />
              </Form.Item>
            </Col>
            <Col xxl={3} xl={3} lg={3}>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Tìm kiếm
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      )}
    </>
  );
}

export default SearchForm;
