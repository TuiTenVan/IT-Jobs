/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllJob } from "../../services/jobService";
import { Tag } from "antd";
import SearchList from "./SearchList";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState();
  const citySearch = searchParams.get("city") || "";
  const keywordSearch = searchParams.get("keyword") || "";

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getAllJob();
      if (response) {
        const newData = response.filter((item) => {
          const city = citySearch ? item.city?.includes(citySearch) : true;
          const keyword = keywordSearch
            ? item.tags?.includes(keywordSearch)
            : true;
          const status = item.status;
          return city && keyword && status;
        });
        setData(newData.reverse());
      }
    };
    fetchApi();
  }, []);

  return (
    <>
      <div>
        <strong>Kết quả tìm kiếm: </strong>
        {citySearch && <Tag>{citySearch}</Tag>}
        {keywordSearch && <Tag>{keywordSearch}</Tag>}
      </div>
      {data && (
        <SearchList data={data} />
      )}
    </>
  );
}

export default Search;
