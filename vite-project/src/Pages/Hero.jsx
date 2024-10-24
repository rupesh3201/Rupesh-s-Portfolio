// Hero.jsx
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import sharedTimeline from "../Contexts/AnimationTimeline.jsx";

const Hero = () => {
  useGSAP(() => {
    const tl = sharedTimeline;

    // Animation for the main heading
    tl.from(".myHeroContent h1", {
      y: -40,
      opacity: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".heroPage",
        start: "top center",
        end: "top 10%",
        scrub: true,
      },
    });

    // Animation for the subheading
    tl.from(".myHeroSmallContent h3", {
      y: 40,
      opacity: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".heroPage",
        start: "top center+=50",
        end: "top 10%",
        scrub: true,
      },
    });
    gsap.to(".guiHero2", {
      duration: 5,
      repeat: -1,
      yoyo: true,
      delay: 1,
      ease: "power1.inOut",
      x: -50,
      y: 45,
    });
    gsap.to(".guiHero1", {
      duration: 6,
      repeat: -1,
      yoyo: true,
      delay: 2,
      ease: "power2.inOut",
      x: 100,
      y: 40,
    });

    gsap.to(".guiHero3", {
      duration: 6,
      repeat: -1,
      yoyo: true,
      delay: 1,
      ease: "power2.inOut",
      x: 98,
      y: 55,
    });
    gsap.to(".guiHero4", {
      duration: 6,
      repeat: -1,
      yoyo: true,
      delay: 2,
      ease: "power2.inOut",
      x: 120,
      y: 70,
    });

    // Additional animations...
  });

  return (
    <div className="w-full h-screen text-white bg-black flex flex-col items-center justify-center overflow-hidden relative z-10 font-ptSans heroPage">
      <div className="w-[60vh] h-[60vh] bg-[#2323FF] absolute top-0 -left-[10%] rounded-br-full rounded-full z-20 blur-[20px] opacity-40 guiHero1"></div>
      <div className="w-[66vh] h-[70vh] bg-[#e54b28] absolute top-36 -left-[10%] rounded-br-full rounded-full z-20 blur-[20px] opacity-40 guiHero2"></div>
      <div className="w-[66vh] h-[70vh] bg-[#2323FF] absolute bottom-36 -right-[10%] rounded-br-full rounded-full z-20 blur-[20px] opacity-40 guiHero3"></div>
      <div className="w-[66vh] h-[70vh] bg-[#e54b28] absolute bottom-36 -right-[10%] rounded-br-full rounded-full z-20 blur-[20px] opacity-40 guiHero4"></div>
      {/* Your existing GUI elements and content */}
      <div className="h-auto w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] tracking-tight font-extrabold flex items-center justify-center text-center p-4 z-30 myHeroContent">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl ">
          <span className="mx-2 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-600">
            Driven
          </span>{" "}
          by quality, powered by
          <span className="mx-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-600">
            code
          </span>
          .
        </h1>
      </div>
      <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl flex items-center justify-center text-center h-auto w-[95vw] sm:w-[85vw] md:w-[70vw] lg:w-[60vw] mt-6 p-4 z-30 myHeroSmallContent">
        <h3>
          Transforming challenges into opportunities with creative, effective
          solutions.
        </h3>
      </div>
    </div>
  );
};

export default Hero;
