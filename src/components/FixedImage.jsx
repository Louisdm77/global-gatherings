import React from "react";
const FixedImage = () => {
  return (
    <div className="relative h-[50vh]  lg:h-[80vh] w-full ">
      <div className="fixed top-20 md:top-20  left-0 w-full h-[74%] lg:h-[80vh] z-0">
        <img
          className="w-full h-full object-cover"
          src="https://i.pinimg.com/736x/3d/69/14/3d6914c9ec843ce5f84a5097dda34b7c.jpg"
          alt="earth"
        />
        {/* Optional overlay for readability if text is added later */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
    </div>
  );
};

export default FixedImage;
