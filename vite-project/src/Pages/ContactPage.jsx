
import Button from "../Components/Button.jsx";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  useGSAP(() => {
    // Animation for the collaboration header
    gsap.from(".collaborateH1", {
      y: -40,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".collaborateH1",
        scroller: "body",
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.to(".collaborateH1", { y: 0, opacity: 1 });
        },
        onLeave: () => {
          gsap.to(".collaborateH1", { y: -40, opacity: 0 });
        },
        onLeaveBack: () => {
          gsap.to(".collaborateH1", { y: -40, opacity: 0 });
        },
        onEnterBack: () => {
          gsap.to(".collaborateH1", { y: 0, opacity: 1 });
        },
      },
    });

    // Animation for the chat header
    gsap.from(".chatH1", {
      y: 40,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".chatH1",
        scroller: "body",
        start: "top 75%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.to(".chatH1", { y: 0, opacity: 1 });
        },
        onLeave: () => {
          gsap.to(".chatH1", { y: 40, opacity: 0 });
        },
        onLeaveBack: () => {
          gsap.to(".chatH1", { y: 40, opacity: 0 });
        },
        onEnterBack: () => {
          gsap.to(".chatH1", { y: 0, opacity: 1 });
        },
      },
    });

    // Animation for the buttons section
    gsap.from(".buttonsH1", {
      y: 40,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".buttonsH1",
        scroller: "body",
        start: "top 70%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.to(".buttonsH1", { y: 0, opacity: 1 });
        },
        onLeave: () => {
          gsap.to(".buttonsH1", { y: 40, opacity: 0 });
        },
        onLeaveBack: () => {
          gsap.to(".buttonsH1", { y: 40, opacity: 0 });
        },
        onEnterBack: () => {
          gsap.to(".buttonsH1", { y: 0, opacity: 1 });
        },
      },
    });

    // Animation for the short name
    gsap.from(".trShortName", {
      y: 40,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".trShortName",
        scroller: "body",
        start: "top 70%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.to(".trShortName", { y: 0, opacity: 1 });
        },
        onLeave: () => {
          gsap.to(".trShortName", { y: 40, opacity: 0 });
        },
        onLeaveBack: () => {
          gsap.to(".trShortName", { y: 40, opacity: 0 });
        },
        onEnterBack: () => {
          gsap.to(".trShortName", { y: 0, opacity: 1 });
        },
      },
    });

    // Animation for the long name
    gsap.from(".trLongName", {
      y: 40,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".trLongName",
        scroller: "body",
        start: "top 70%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.to(".trLongName", { y: 0, opacity: 1 });
        },
        onLeave: () => {
          gsap.to(".trLongName", { y: 40, opacity: 0 });
        },
        onLeaveBack: () => {
          gsap.to(".trLongName", { y: 40, opacity: 0 });
        },
        onEnterBack: () => {
          gsap.to(".trLongName", { y: 0, opacity: 1 });
        },
      },
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center z-10">
      <div className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] h-auto flex flex-col justify-between p-4">
        {/* Top Section: Collaboration & Chat Message */}
        <div className="w-full flex flex-col items-center justify-center text-center mb-4">
          {/* Collaborate Text */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-wide leading-relaxed collaborateH1">
            Want to collaborate?
          </h1>

          {/* Chat Text */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wide leading-relaxed chatH1">
            Lets have a chat!
          </h1>
        </div>

        {/* Bottom Section: Buttons and Name */}
        <div className="w-full flex flex-col items-center justify-center">
          {/* Buttons Section */}
          <div className="w-full flex items-center justify-center gap-4 mb-4 buttonsH1">
            <Button label="LinkedIn" source="https://www.linkedin.com/in/tanmayramteke21/" />
            <Button label="Email" email="tanmay.github.21@gmail.com" />
          </div>

          {/* Name and Initials */}
          <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wide trShortName">
              TR
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-wide trLongName">
              Tanmay Ramteke
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
