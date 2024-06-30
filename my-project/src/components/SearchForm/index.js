import { Input, Select, Form, Button, Row, Col } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getListCity } from "../../services/cityService";
import "./SearchForm.scss";

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
    navigate(`/search?city=${city}&keyword=${values.keyword || ""}`);
  };

  return (
    <div className="search-form">
      <h1 className="search-form__title">1000+ IT Jobs For Developers</h1>
      {city && (
        <Form onFinish={handleFinish}>
          <Row gutter={[12, 12]}>
            <Col xxl={8} xl={8} lg={8}>
              <Form.Item name="city" className="search-form__input-wrapper">
                <Select options={city} placeholder="Chọn thành phố" />
              </Form.Item>
            </Col>
            <Col xxl={12} xl={12} lg={12}>
              <Form.Item name="keyword" className="search-form__input-wrapper">
                <Input placeholder="Nhập từ khóa..." />
              </Form.Item>
            </Col>
            <Col xxl={3} xl={3} lg={3}>
              <Form.Item className="search-form__button-wrapper">
                <Button type="primary" htmlType="submit" className="search-form__submit-button">
                  Tìm kiếm
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      )}
    </div>
  );
}

export default SearchForm;
