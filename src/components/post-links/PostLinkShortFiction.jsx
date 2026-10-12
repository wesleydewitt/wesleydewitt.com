import { Link } from "react-router-dom";

const PostLinkShortFiction = ({ shortFiction }) => {
  return (
    <Link
      className="post-link post-link--short-fiction"
      to={`/${shortFiction.type}/${shortFiction.slug}`}
    >
      <div className="post-link__type">{shortFiction.type}</div>
      <h3 className="post-link__title">{shortFiction.title}</h3>
    </Link>
  );
};

export default PostLinkShortFiction;
