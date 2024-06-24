import React, { useEffect, useState } from "react";
import PageHeader from "../../pageHeader/PageHeader";
import FeaturesComposition from "../../featuresComposition/FeaturesComposition";
import BlogFeatureImage from "./blogfeatureimage/BlogFeatureImage";
import "./blog.scss";
import Pagination from "../../pagination/Pagination";
import RecentPosts from "./recentPosts/RecentPosts";
import CategoriesBlog from "./categories/CategoriesBlog";

const Blog = () => {
  const [blogContent, setBlogContent] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/Blog")
      .then((response) => response.json())
      .then((data) => setBlogContent(data));
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentButtonGroup, setCurrentButtonGroup] = useState([1, 2, 3]);
  const blogTopicPerPage = 3;

  const totalPages = Math.ceil(blogContent.length / blogTopicPerPage);

  const indexOfLastBlog = currentPage * blogTopicPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogTopicPerPage;
  const currentBlogs = blogContent.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextGroup = () => {
    const nextGroupStart = currentButtonGroup[2] + 1;
    const nextGroupEnd = Math.min(nextGroupStart + 2, totalPages);
    const newGroup = Array.from(
      { length: nextGroupEnd - nextGroupStart + 1 },
      (_, i) => nextGroupStart + i
    );
    setCurrentButtonGroup(newGroup);
    setCurrentPage(nextGroupStart);
  };

  const handlePrevGroup = () => {
    const prevGroupStart = Math.max(currentButtonGroup[0] - 3, 1);
    const prevGroupEnd = prevGroupStart + 2;
    const newGroup = Array.from(
      { length: prevGroupEnd - prevGroupStart + 1 },
      (_, i) => prevGroupStart + i
    );
    setCurrentButtonGroup(newGroup);
    setCurrentPage(prevGroupStart);
  };

  return (
    <div id="blogPage">
      <PageHeader page={"Blog"} role={"Blog"} />
      <div className="blog-page">
        <div className="blogMain">
          {currentBlogs.map((content) => (
            <div className="blogContent" key={content.id}>
              <BlogFeatureImage
                role={content.role}
                date={content.date}
                imgSrc={content.featureImage}
                category={content.category}
                title={content.title}
                excerpt={content.excerpt}
              />
            </div>
          ))}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            currentButtonGroup={currentButtonGroup}
            handleNextGroup={handleNextGroup}
            handlePrevGroup={handlePrevGroup}
          />
        </div>
        <div className="sidebar">
          <div className="search-category">
            <div className="search-bar">
              <input type="text" />
              <img src="../../../../src/assets/icons/search.svg" alt="" />
            </div>
          </div>
          <div className="categories-recent">
            <CategoriesBlog />
            <RecentPosts />
          </div>
        </div>
      </div>
      <FeaturesComposition />
    </div>
  );
};

export default Blog;
