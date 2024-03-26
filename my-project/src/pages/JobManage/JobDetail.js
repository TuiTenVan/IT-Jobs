/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import GoBack from "../../components/GoBack";
import { useEffect, useState } from "react";
import { getDetailJob } from "../../services/jobService";
import { Tag } from "antd";

function JobDetail() {
  const params = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getDetailJob(params.id);
      if (response) {
        setData(response);
      }
    };
    fetchApi();
  }, []);

  console.log(data);

  return (
    <>
      <GoBack />
      {data && (
        <>
          <h1>Tên job: {data.name}</h1>
          <div className="mb-20">
            <span>Trạng thái: </span>
            {data.status ? (
              <Tag color="green">Đang bật</Tag>
            ) : (
              <Tag color="red">Đang tắt</Tag>
            )}
          </div>
          <div className="mb-20">
            <span>Tags: </span>
            {(data.tags || []).map((item, index) => (
              <Tag color="blue" key={index}>
                {item}
              </Tag>
            ))}
          </div>
          <div className="mb-20">
            Mức lương: <strong>{data.salary}$</strong>
          </div>
          <div className="mb-20">
            Ngày tạo: <strong>{data.createAt}</strong>
          </div>
          <div className="mb-20">
            Cập nhật: <strong>{data.updateAt}</strong>
          </div>
          <div className="mb-20">
            <span>Thành phố: </span>
            {(data.city || []).map((item, index) => (
              <Tag color="orange" key={index}>
                {item}
              </Tag>
            ))}
          </div>
          <div className="mb-20">
            <div className="mb-10">Mô tả:</div>
            <div>{data.description}</div>
          </div>
        </>
      )}
    </>
  );
}

export default JobDetail;
