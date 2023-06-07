import { useState } from "react";

const Project = () => {
  return (
    <>
      <div>yt embed test</div>
      <iframe
        width="640"
        height="360"
        src="https://www.youtube.com/watch?v=vx2u5uUu3DE"
        frameborder="0"
        allowfullscreen
      ></iframe>

      <iframe
        width="300"
        height="168"
        src="https://www.youtube.com/embed/vx2u5uUu3DE"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    </>
  );
};

export default Project;
