import React, { useState, useEffect } from 'react';
import "./ImageZoom.css"

interface ImageZoomProps {
  src: string;
}

const ImageZoom: React.FC<ImageZoomProps> = ({ src }) => {
  const [zoom, setZoom] = useState<number>(1);
  const [isVertical, setIsVertical] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsVertical(img.naturalHeight > img.naturalWidth);
    };
    img.src = src;
  }, [src]);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>): void => {
    e.preventDefault();
    const zoomFactor = 0.1;
    if (e.deltaY < 0) {
      setZoom(zoom => Math.min(zoom + zoomFactor, 3));
    } else {
      setZoom(zoom => Math.max(zoom - zoomFactor, 1));
    }
  };

  const imageStyle: React.CSSProperties = {
    cursor: zoom > 1 ? 'zoom-out' : 'zoom-in',
    transform: `scale(${zoom})`,
    transformOrigin: 'center center',
    objectFit: isVertical ? 'contain' : 'cover',
  };

  return (
    <div className="image-container" onWheel={handleWheel}>
      <img
        src={src}
        alt="Zoomable"
        className="zoomable-image"
        style={imageStyle}
      />
    </div>
  );
};

export default ImageZoom;
