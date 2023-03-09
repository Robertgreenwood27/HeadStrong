import React from "react";
import Masonry from "react-masonry-css";

const Gallery = ({ images }) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid w-full"
        columnClassName="masonry-grid_column px-4"
      >
        {images.map((image) => (
          <img
            key={image.asset._id}
            src={image.asset.url}
            alt={image.description}
            className="masonry-grid_item mb-4 rounded-lg hover:scale-105 transition-all duration-300"
          />
        ))}
      </Masonry>
    </div>
  );
};

export default Gallery;
