import React from "react";

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end  text-third">
      <a href="mailto:muhammed.ersln@icloud.com">
        <p className="text-sm rotate-90 w-72 tracking-wide text-primary">Bana Mail  Gönder</p>
      </a>
      <span className="w-[2px] h-32 bg-third inline-flex"></span>
    </div>
  );
};

export default RightSide;
