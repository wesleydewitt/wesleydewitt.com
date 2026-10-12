import { useState } from "react";
import { Link } from "react-router-dom";

const getColorPalette = (image) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d", { willReadFrequently: true });
  const scale = Math.min(
    1,
    80 / Math.max(image.naturalWidth, image.naturalHeight),
  );

  canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
  canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  const { data } = context.getImageData(0, 0, canvas.width, canvas.height);
  const colors = new Map();

  for (let index = 0; index < data.length; index += 16) {
    const red = Math.round(data[index] / 32) * 32;
    const green = Math.round(data[index + 1] / 32) * 32;
    const blue = Math.round(data[index + 2] / 32) * 32;
    const color = `${red}, ${green}, ${blue}`;

    colors.set(color, (colors.get(color) || 0) + 1);
  }

  return [...colors.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([color]) => `rgb(${color})`);
};

const PostLinkEssay = ({ essay }) => {
  const [palette, setPalette] = useState([]);

  const handleImageLoad = (event) => {
    setPalette(getColorPalette(event.currentTarget));
  };

  return (
    <Link
      className="post-link post-link--essay"
      style={{
        backgroundColor: palette[0],
      }}
      to={`/${essay.type}/${essay.slug}`}
    >
      <div className="post-link__cover-image">
        <img src={`/images/${essay.image}`} alt="" onLoad={handleImageLoad} />
      </div>
      <div className="post-link__text">
        <div className="post-link__type">{essay.type}</div>
        <h4 className="post-link__title">{essay.title}</h4>
        <h5 className="post-link__subtitle">{essay.subtitle}</h5>
      </div>
    </Link>
  );
};

export default PostLinkEssay;
