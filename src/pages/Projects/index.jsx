import { useContext } from "react";
import ProjectContext from "../../context/ProjectContext";
import ProjectCard from "../../components/ProjectCard";
import Spinner from "../../components/Spinner";

const Index = () => {
    const { allProjects, loading } = useContext(ProjectContext);

    return (
        <main className="w-full flex flex-col items-center">
            <div className="2xl:w-[80%] w-[90%] md:mt-36 pt-32 text-center">
                <h1 className="text-purple font-semibold md:text-7xl text-4xl leading-[90px]">Projects</h1>
                <p className="text-[#fff] md:text-xl text-lg md:mt-6">Check out some of my projects</p>

                <div className="w-full flex flex-col items-center justify-center">
                    {loading ? (
                        <Spinner loading={loading} />
                    ) : (
                        <>
                            <div className="relative gradient-border rounded-[24px] lg:p-10 p-4 grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-24 gap-x-10 bg-[#000] my-10">
                                {allProjects.map((project) => (
                                    <ProjectCard key={project.sys.id} project={project} />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Index;
