import { Link } from "react-router-dom";

const PostLinkPoem = ({ poem }) => {
  return (
    <Link className="post-link post-link--poem">
      <div className="post-link__type">{poem.type}</div>
      <h4 className="post-link__title">{poem.title}</h4>
    </Link>
  );
};

export default PostLinkPoem;
