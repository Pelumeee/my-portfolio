const ProjectCard = ({ project }) => {
    return (
        <div className="project-cards h-full">
            <div className="relative rounded-[24px] overflow-hidden mb-4 h-full">
                <img src={project.fields.image.fields.file.url} alt="" className="w-full h-full object-cover transition-all duration-500" />
                <div className="description__text absolute w-full h-[15%] flex items-center justify-between bg-[#000000dd] bottom-0 md:py-6 py-2 md:px-6 px-4 text-white text-left overflow-y-scroll">
                    <p className="md:text text-xs  leading-7 max-w-[30rem]">{project.fields.description}</p>
                </div>
            </div>
            <span className="text-[#fff] font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300">
                <a href={project.fields.link} target="_blank">
                    {project.fields.name}
                </a>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        className="transition-all duration-300"
                        d="M1.34375 12.6575L12.6575 1.34375M12.6575 1.34375L4.17217 1.34383M12.6575 1.34375L12.6575 9.82911"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </span>
        </div>
    );
};

export default ProjectCard;
