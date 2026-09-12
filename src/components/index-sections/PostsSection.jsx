import { Link } from "react-router-dom";
import { posts } from "../../lib/posts.js";
import EssaysIcon from "../svg/EssaysIcon";
import "../../styles/components/index-sections/posts-section.css";

const PostsSection = () => {
  return (
    <section className="section section--posts">
      <h3 className="section__heading">
        <EssaysIcon />
        Posts
      </h3>
      <div className="section__content">
        {posts.map((post) => (
          <Link
            className="post-link"
            key={`${post.type}/${post.slug}`}
            to={`/${post.type}/${post.slug}`}
          >
            <div className="post__type">{post.type}</div>
            <h4 className="post__title">{post.title}</h4>
            <p className="post__excerpt">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PostsSection;
