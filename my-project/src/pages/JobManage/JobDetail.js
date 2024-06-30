import { useParams } from "react-router-dom";
import GoBack from "../../components/GoBack";
import { useEffect, useState } from "react";
import { getDetailJob } from "../../services/jobService";
import { Tag, Spin, Alert, Card, Row, Col } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import "./JobDetail.scss"; // Import the SCSS file

function JobDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await getDetailJob(id);
        if (response) {
          setData(response);
        }
      } catch (err) {
        setError('Failed to fetch job details.');
      } finally {
        setLoading(false);
      }
    };

    fetchApi();
  }, [id]);

  if (loading) {
    return (
      <div className="spinner-container">
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert-container">
        <Alert message={error} type="error" />
      </div>
    );
  }

  return (
    <div className="job-detail-container">
      <GoBack />
      {data && (
        <Card title={data.name} bordered={false} className="job-detail-card">
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <div className="status-container">
                <span>Trạng thái: </span>
                {data.status ? (
                  <Tag icon={<CheckCircleOutlined />} color="success">
                    Đang bật
                  </Tag>
                ) : (
                  <Tag icon={<CloseCircleOutlined />} color="error">
                    Đang tắt
                  </Tag>
                )}
              </div>
            </Col>
            <Col span={24}>
              <div className="tags-container">
                <span>Tags: </span>
                {(data.tags || []).map((item, index) => (
                  <Tag color="blue" key={index}>
                    {item}
                  </Tag>
                ))}
              </div>
            </Col>
            <Col span={12}>
              <div className="salary-container">
                Mức lương: <strong>{data.salary}$</strong>
              </div>
            </Col>
            <Col span={12}>
              <div className="date-container">
                Ngày tạo: <strong>{data.createAt}</strong>
              </div>
            </Col>
            <Col span={12}>
              <div className="date-container">
                Cập nhật: <strong>{data.updateAt}</strong>
              </div>
            </Col>
            <Col span={24}>
              <div className="city-container">
                <span>Thành phố: </span>
                {(data.city || []).map((item, index) => (
                  <Tag color="orange" key={index}>
                    {item}
                  </Tag>
                ))}
              </div>
            </Col>
            <Col span={24}>
              <div className="description-container">
                <div className="description-title">Mô tả:</div>
                <div>{data.description}</div>
              </div>
            </Col>
          </Row>
        </Card>
      )}
    </div>
  );
}

export default JobDetail;
