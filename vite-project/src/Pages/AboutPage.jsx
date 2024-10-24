
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AboutPage = () => {
  useGSAP(() => {
    // Animation for the About Me heading
    gsap.from(".aboutMe", {
      y: -40,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".aboutPage",
        start: "top 60%", // Start after the Hero section
        end: "bottom 20%",
        scrub: true,
        onEnter: () => {
          gsap.to(".aboutMe", { y: 0, opacity: 1 });
        },
        onLeave: () => {
          gsap.to(".aboutMe", { y: -40, opacity: 0 });
        },
        onLeaveBack: () => {
          gsap.to(".aboutMe", { y: -40, opacity: 0 });
        },
        onEnterBack: () => {
          gsap.to(".aboutMe", { y: 0, opacity: 1 });
        },
      },
    });

    // Animation for the "Hi!" text
    gsap.from(".aboutMeHi", {
      y: 40,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".aboutPage",
        start: "top 50%", // Adjusted to sync with the previous text
        onEnter: () => {
          gsap.to(".aboutMeHi", { y: 0, opacity: 1 });
        },
        onLeave: () => {
          gsap.to(".aboutMeHi", { y: 40, opacity: 0 });
        },
        onLeaveBack: () => {
          gsap.to(".aboutMeHi", { y: 40, opacity: 0 });
        },
        onEnterBack: () => {
          gsap.to(".aboutMeHi", { y: 0, opacity: 1 });
        },
      },
    });

    // Animation for the content section
    gsap.from(".aboutMeContent", {
      y: 40,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".aboutPage",
        start: "top 40%", // Adjusted to sync with the previous text
        onEnter: () => {
          gsap.to(".aboutMeContent", { y: 0, opacity: 1 });
        },
        onLeave: () => {
          gsap.to(".aboutMeContent", { y: 40, opacity: 0 });
        },
        onLeaveBack: () => {
          gsap.to(".aboutMeContent", { y: 40, opacity: 0 });
        },
        onEnterBack: () => {
          gsap.to(".aboutMeContent", { y: 0, opacity: 1 });
        },
      },
    });
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center relative z-10 font-spaceGrotesk text-white aboutPage">
      <div className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] h-auto flex flex-col justify-between z-30">
        <div className="w-full flex items-center relative overflow-hidden">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-left tracking-wide leading-relaxed aboutMe">
            About Me
          </h1>
        </div>
        <div className="w-full flex flex-col gap-10 md:flex-row">
          <div className="md:w-[60%] w-full flex items-center justify-start">
            <h1 className="text-[16vw] sm:text-[15vw] md:text-[16vw] lg:text-[10vw] aboutMeHi">Hi!</h1>
          </div>
          <div className="md:w-[40%] w-full flex items-center justify-center">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl aboutMeContent">
              I’m Tanmay Ramteke, a passionate 23-year-old web developer and technology enthusiast. With a deep love for designing and building visually captivating and user-friendly websites, I'm always excited about new challenges and eager to collaborate on projects that push boundaries and deliver exceptional user experiences.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
