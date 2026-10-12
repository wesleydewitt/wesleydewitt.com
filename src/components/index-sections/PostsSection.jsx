import { useState } from "react";
import { Link } from "react-router-dom";
import { posts } from "../../lib/posts.js";
import EssaysIcon from "../svg/EssaysIcon";
import "../../styles/components/index-sections/posts-section.css";
import PostLinkEssay from "../post-links/PostLinkEssay.jsx";
import PostLinkPoem from "../post-links/PostLinkPoem.jsx";
import PostLinkShortFiction from "../post-links/PostLinkShortFiction.jsx";

const PostsSection = () => {
  const [selectedType, setSelectedType] = useState("all");
  const postTypes = ["all", ...new Set(posts.map((post) => post.type))];
  const filteredPosts =
    selectedType === "all"
      ? posts
      : posts.filter((post) => post.type === selectedType);
  const getFilterLabel = (type) =>
    type === "all" ? "All" : type === "short-fiction" ? type : `${type}s`;

  return (
    <section className="section section--posts">
      <h3 className="section__heading">
        <EssaysIcon />
        Posts
      </h3>

      <div className="post-filters" aria-label="Filter posts by type">
        {postTypes.map((type) => (
          <button
            className={`post-filter${selectedType === type ? " post-filter--active" : ""}`}
            key={type}
            type="button"
            aria-pressed={selectedType === type}
            onClick={() => setSelectedType(type)}
          >
            {getFilterLabel(type).replace("-", " ")}
          </button>
        ))}
      </div>

      <div className="section__content">
        {filteredPosts.map((post) =>
          post.type === "essay" ? (
            <PostLinkEssay key={`${post.type}/${post.slug}`} essay={post} />
          ) : post.type === "poem" ? (
            <PostLinkPoem key={`${post.type}/${post.slug}`} poem={post} />
          ) : post.type === "short-fiction" ? (
            <PostLinkShortFiction
              key={`${post.type}/${post.slug}`}
              shortFiction={post}
            />
          ) : null,
        )}
      </div>
    </section>
  );
};

export default PostsSection;
