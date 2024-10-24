

const FooterSection = () => {
  return (
    <div className="w-full h-[20vh]    bottom-0  flex items-center justify-center bg-footer-texture bg-cover bg-top z-10 ">
      <div className="w-full h-[20vh]     absolute  bg-black backdrop-blur-md bg-opacity-10 z-20"></div>
      <div className="w-[90%] md:w-[60%] lg:w-[40%] h-full flex flex-col items-center justify-center text-center text-white px-4 md:px-6 z-30">
        <p className="text-sm md:text-base lg:text-lg">
          © Tanmay Ramteke 2024. All rights reserved. Location: India
        </p>
        <p className="mt-2 text-xs md:text-sm lg:text-base">
          This site showcases my personal projects and professional work. Content
          may not be used without permission.
        </p>
      </div>
    </div>
  );
};

export default FooterSection;
