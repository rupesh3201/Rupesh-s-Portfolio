
import '../Styles/ProjectDiv.css';

// Using forwardRef to pass ref from parent (ProjectsPage) to the individual div
const ProjectDiv = forwardRef(({ projectIndex, projectName }, ref) => {
  return (
    <div
      className="w-full h-[15vh] sm:h-[20vh] md:h-[25vh] border-b-[0.5px] border-b-gray flex items-center text-white cursor-pointer hover:font-2xl transition-all duration-200 projectDiv"
      ref={ref} // Assign the ref to the parent div
    >
      {/* Index Section */}
      <div className="w-[15%] h-full flex items-center justify-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{projectIndex}</h1>
      </div>

      {/* Project Name Section */}
      <div className="w-[85%] h-full flex items-center justify-start pl-4">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{projectName}</h3>
      </div>
    </div>
  );
});

export default ProjectDiv;
