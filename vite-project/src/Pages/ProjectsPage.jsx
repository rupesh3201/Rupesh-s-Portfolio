
import ProjectDiv from "../Components/ProjectDiv";
import { gsap } from "gsap"; // Import gsap
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const ProjectsPage = () => {
  gsap.registerPlugin(MotionPathPlugin);

  useGSAP(() => {
    // Animation for the project title
    gsap.from(".projectTopic", {
      y: -40,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".projectPage",
        scroller: "body",
        start: "top 60%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.to(".projectTopic", { y: 0, opacity: 1 });
        },
        onLeave: () => {
          gsap.to(".projectTopic", { y: -40, opacity: 0 });
        },
        onLeaveBack: () => {
          gsap.to(".projectTopic", { y: -40, opacity: 0 });
        },
        onEnterBack: () => {
          gsap.to(".projectTopic", { y: 0, opacity: 1 });
        },
      },
    });

    // Animation for the project divs
    gsap.from(".projectDivs", {
      y: 40,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".projectPage",
        scroller: "body",
        start: "top 30%",
        onEnter: () => {
          gsap.to(".projectDivs", { y: 0, opacity: 1 });
        },
        onLeave: () => {
          gsap.to(".projectDivs", { y: 40, opacity: 0 });
        },
        onLeaveBack: () => {
          gsap.to(".projectDivs", { y: 40, opacity: 0 });
        },
        onEnterBack: () => {
          gsap.to(".projectDivs", { y: 0, opacity: 1 });
        },
      },
    });

    // GUI animation
    gsap.to(".gui", {
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      x: -50,
      y: 60,
    });
  }, []);

  const ProjectInfo = [
    { projectIndex: "01", projectName: "Coming Soon" },
    { projectIndex: "02", projectName: "Coming Soon" },
    // Add more projects as needed
  ];

  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center relative z-10 projectPage">
      {/* Responsive Blurred Element */}
      <div className="w-[40vh] h-[40vh] bg-[#AB20FD] absolute right-0 bottom-2 rounded-br-[100%] rounded-[100%] z-20 blur-[20px] sm:blur-[30px] md:blur-[40px] lg:blur-[50px] opacity-40 gui"></div>

      <div className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] h-auto flex flex-col justify-between z-30">
        <div className="w-full mb-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-left text-white tracking-wide leading-relaxed projectTopic">
            PROJECTS
          </h1>
        </div>

        <div className="w-full flex flex-col space-y-4 overflow-auto projectDivs">
          {ProjectInfo.map((item, index) => (
            <ProjectDiv
              projectIndex={item.projectIndex}
              projectName={item.projectName}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
