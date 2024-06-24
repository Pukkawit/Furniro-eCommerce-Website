import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./RecentPosts.scss";

const RecentPosts = () => {
  const [recentContent, setRecentContent] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/Blog")
      .then((response) => response.json())
      .then((data) => setRecentContent(data));
  }, []);

  return (
    <div>
      <div className="recent-posts">
        <h3>Recent Posts</h3>

        {recentContent.map((content) => (
          <div className="thumbnail-title-date" key={content.id}>
            <div className="thumbnail">
              <LazyLoadImage src={content.featureImage} />
            </div>
            <div className="topic-date">
              <h4>{content.title}</h4>
              <p>{content.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
