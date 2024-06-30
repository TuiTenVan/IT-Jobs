import { Button, Card, Col, Row } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCompany } from "../../services/companyService";
import "./CompanyList.scss";

function CompanyList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getAllCompany();
      if (response) {
        setData(response);
      }
    };
    fetchApi();
  }, []);

  return (
    <>
      <h2 className="company-list__title">Danh sách một số công ty</h2>
      <Row gutter={[20, 20]}>
        {data.map((item) => (
          <Col span={8} key={item.id}>
            <Link
              to={`/company/${item.id}`}
              className="company-list__card-link"
            >
              <Card className="company-list__card no-padding">
                <div className="company-list__card-info">
                  <div className="mb-10">
                    Công ty: <strong>{item.companyName}</strong>
                  </div>
                  <div className="mb-10">
                    Số nhân sự: <strong>{item.quantityPeople}</strong>
                  </div>
                  <div className="mb-10">
                    Địa chỉ: <strong>{item.address}</strong>
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <Link to="/company">
        <Button className="company-list__button">Xem thêm</Button>
      </Link>
    </>
  );
}

export default CompanyList;
