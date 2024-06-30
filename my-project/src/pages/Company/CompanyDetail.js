import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getDetailCompany } from "../../services/companyService";
import { getListJob } from "../../services/jobService";
import { Col, Row, Card, Tag } from "antd";
import GoBack from "../../components/GoBack";
import "./CompanyDetail.scss"; // Import the SCSS file

function CompanyDetail() {
  const params = useParams();
  const [infoCompany, setInfoCompany] = useState();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      const response = await getDetailCompany(params.id);
      setInfoCompany(response);
    };
    fetchCompanyInfo();
  }, []);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await getListJob(params.id);
      setJobs(response);
    };
    fetchJobs();
  }, []);

  return (
    <div className="company-detail">
      <GoBack />

      {infoCompany && (
        <div>
          <div className="company-name">{infoCompany.companyName}</div>

          <div className="company-info">
            <div>Địa chỉ: <strong>{infoCompany.address}</strong></div>
            <div>Số lượng nhân sự: <strong>{infoCompany.quantityPeople}</strong></div>
            <div>Thời gian làm việc: <strong>{infoCompany.workingTime}</strong></div>
            <div>Link website: <strong>{infoCompany.website}</strong></div>
          </div>

          <div className="mb-20">Mô tả ngắn:</div>
          <div>{infoCompany.description}</div>

          <div className="mb-20">Mô tả chi tiết:</div>
          <div>{infoCompany.detail}</div>

          <div className="job-list">
            <div className="mb-10">Danh sách các job:</div>
            <Row gutter={[20, 20]}>
              {jobs.map(item => (
                <Col span={8} key={item.id}>
                  <Card
                    title={<Link to={`/job/${item.id}`}>{item.name}</Link>}
                    size="small"
                  >
                    <div className="mb-10">
                      <span>Ngôn ngữ: </span>
                      {item.tags.map((tag, index) => (
                        <Tag color="blue" className="mb-5" key={index}>
                          {tag}
                        </Tag>
                      ))}
                    </div>
                    <div className="mb-10">
                      <span>Thành phố: </span>
                      {item.city.map((city, index) => (
                        <Tag color="orange" className="mb-5" key={index}>
                          {city}
                        </Tag>
                      ))}
                    </div>
                    <div className="mb-10">
                      Lương: <strong>{item.salary}$</strong>
                    </div>
                    <div className="mb-10">
                      Ngày tạo: <strong>{item.createAt}</strong>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      )}
    </div>
  );
}

export default CompanyDetail;
