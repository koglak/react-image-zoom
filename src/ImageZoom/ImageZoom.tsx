import React, { useState, useEffect } from 'react';

interface ImageZoomProps {
  src: string;
  name: string;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
  imageClassName?: string;
  imageStyle?: React.CSSProperties;
}

const ImageZoom: React.FC<ImageZoomProps> = ({ src, name, containerClassName, containerStyle, imageClassName, imageStyle }) => {
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

  const zoomStyle: React.CSSProperties = {
    cursor: zoom > 1 ? 'zoom-out' : 'zoom-in',
    transform: `scale(${zoom})`,
    transformOrigin: 'center center',
    objectFit: isVertical ? 'contain' : 'cover',
  };

  const combinedStyle: React.CSSProperties = {
    ...zoomStyle,
    ...imageStyle,
  };

  return (
    <div className={containerClassName} style={containerStyle} onWheel={handleWheel}>
      <img
        src={src}
        alt={name}
        className={imageClassName}
        style={combinedStyle} 
      />
    </div>
  )
};

export default ImageZoom;
