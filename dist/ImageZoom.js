var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
var ImageZoom = function (_a) {
    var src = _a.src, name = _a.name, containerClassName = _a.containerClassName, containerStyle = _a.containerStyle, imageClassName = _a.imageClassName, imageStyle = _a.imageStyle;
    var _b = useState(1), zoom = _b[0], setZoom = _b[1];
    var _c = useState(false), isVertical = _c[0], setIsVertical = _c[1];
    useEffect(function () {
        var img = new Image();
        img.onload = function () {
            setIsVertical(img.naturalHeight > img.naturalWidth);
        };
        img.src = src;
    }, [src]);
    var handleWheel = function (e) {
        e.preventDefault();
        var zoomFactor = 0.1;
        if (e.deltaY < 0) {
            setZoom(function (zoom) { return Math.min(zoom + zoomFactor, 3); });
        }
        else {
            setZoom(function (zoom) { return Math.max(zoom - zoomFactor, 1); });
        }
    };
    var zoomStyle = {
        cursor: zoom > 1 ? 'zoom-out' : 'zoom-in',
        transform: "scale(".concat(zoom, ")"),
        transformOrigin: 'center center',
        objectFit: isVertical ? 'contain' : 'cover',
    };
    var combinedStyle = __assign(__assign({}, zoomStyle), imageStyle);
    return (_jsx("div", __assign({ className: containerClassName, style: containerStyle, onWheel: handleWheel }, { children: _jsx("img", { src: src, alt: name, className: imageClassName, style: combinedStyle }) })));
};
export default ImageZoom;
