/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getDetailJob } from "../../services/jobService";

function CVJobName(props) {
  const { record } = props;
  const [job, setJob] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getDetailJob(record.idJob);
      if (response) {
        setJob(response);
      }
    };
    fetchApi();
  }, []);

  return (
    <>
      {job && job.name}
    </>
  )
}

export default CVJobName;