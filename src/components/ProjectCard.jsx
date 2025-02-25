const ProjectCard = ({ project }) => {
    return (
        <div className="project-cards h-full">
            <div className="relative flex flex-col gap-4 overflow-hidden">
                <div className="h-[20rem] overflow-hidden rounded-[24px]">
                    <img src={project.fields.image.fields.file.url} alt="" className="w-full h-full object-cover transition-all duration-500" />
                </div>
                <div className="description__text w-full h-[4rem] px-5 py-3 flex items-start bg-[#000000dd] text-white text-left overflow-y-auto">
                    <p className="text-xs">{project.fields.description}</p>
                </div>
            </div>
            <span className="text-[#fff] font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 mt-4">
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
