# react-single-image-zoom

`react-single-image-zoom` is a React component that allows for easy image zoom functionality on wheel events within your React applications.

## Features

- Simple integration with React applications.
- Zoom in/out functionality triggered by mouse wheel events.
- Customizable styles via className or inline style.
- Support for TypeScript.

![react-image-zoom-example](https://github.com/koglak/react-image-zoom/assets/24697147/c1f62e4c-6451-4382-9dbb-df3302232e81)


## Installation

Install the component using npm:

```sh
npm i react-single-image-zoom
```


## Usage

To use the component, import it and wrap your image element:

```sh
import React from 'react';
import ImageZoom from 'react-single-image-zoom';

const MyComponent = () => {
  return (
    <ImageZoom
          src={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS"}
          name={"dog"}
          containerClassName={"imageContainer"}
          containerStyle={{ width: "auto", height: "auto" }}
          imageClassName={"imageClassName"}
          imageStyle={{ width: "auto", height: "auto" }}
      />
  );
};

export default MyComponent;
```

## Props

| **Prop** | **Type** | **Description** |
| --- | --- | --- |
| `src` |	`string` |	The source URL of the image. |
| `name` |	`string` |	Alt text for the image. |
| `containerClassName` |	`string (optional)` |	Custom class for the image container. |
| `containerStyle` |	`object (optional)` |	Inline style for the image container. |
| `imageClassName` | 	`string (optional)` |	Custom class for the image itself. |
| `imageStyle` | 	`object (optional)` | Inline style for the image. |

## Contributing

If you have any suggestions or improvements, feel free to create issues or pull requests on the GitHub repository.
