import React from 'react';
interface ImageZoomProps {
    src: string;
    name: string;
    containerClassName?: string;
    containerStyle?: React.CSSProperties;
    imageClassName?: string;
    imageStyle?: React.CSSProperties;
}
declare const ImageZoom: React.FC<ImageZoomProps>;
export default ImageZoom;
