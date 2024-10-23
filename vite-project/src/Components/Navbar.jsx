
// import { LuMenu } from "react-icons/lu";
import sharedTimeline from "../Contexts/AnimationTimeline.jsx"; // Import the shared timeline
import "../Styles/Navbar.css";
import { useGSAP } from "@gsap/react";

const Navbar = () => {

  useGSAP(() => {
    const tl = sharedTimeline;

    // Navbar animation
    // tl.from(".myLogo", {
    //   opacity: 0,
    //   y: -20,
    //   duration: 0.4,
    // });
   

    // Optional: Play the timeline here if the Hero component isn't controlling it
    tl.play();
  }, []);

  return (
    <div className="w-full h-24 px-6 lg:px-10 pt-3 pb-3 text-white fixed flex items-center font-ptSans custom-hover-animation bg-black backdrop-blur-lg bg-opacity-40 z-50">
      <div className="w-1/2 h-full flex items-center">
        <div className="w-1/2 h-full flex items-center overflow-hidden hover:cursor-pointer hoverDiv myLogo">
          <h1 className="font-bold text-3xl md:text-4xl custom-after relative ">TR</h1>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
