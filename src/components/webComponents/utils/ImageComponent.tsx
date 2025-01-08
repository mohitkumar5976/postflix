import React from "react";

interface ImageComponentProps {
  photo: string; // URL or path to the image
  borderRadius: string | number; // Can be a number or string (e.g., "50%" or 10)
}

const ImageComponent: React.FC<ImageComponentProps> = ({ photo, borderRadius }) => {
  return (
    <img
      style={{
        width: "100%",
        height: "100%",
        borderRadius: typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius,
      }}
      src={photo}
      alt="loading image..."
    />
  );
};

export default ImageComponent;
