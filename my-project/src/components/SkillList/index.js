import { useEffect, useState } from "react";
import { getListTag } from "../../services/tagService";
import { Tag } from "antd";
import { Link } from "react-router-dom";
import "./Tags.scss"; 

function SkillList() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListTag();
      if (response) {
        setTags(response);
      }
    };
    fetchApi();
  }, []);

  return (
    <div className="tags__container">
      {tags.map((item) => (
        <Link to={`/search?keyword=${item.value || ""}`} key={item.key} className="tags__link">
          <Tag color="blue" className="tags__tag">
            {item.value}
          </Tag>
        </Link>
      ))}
    </div>
  );
}

export default SkillList;
