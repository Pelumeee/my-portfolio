import { useState, useEffect } from "react";
import ProjectContext from "./ProjectContext";
import { createClient } from "contentful";

const client = createClient({
    space: import.meta.env.VITE_SPACE_ID,
    accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

const ProjectContextProvider = ({ children }) => {
    const [allProjects, setAllProjects] = useState(null);
    const [featuredProjects, setFeaturedProjects] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProjects = async () => {
            try {
                const response = await client.getEntries({
                    content_type: "myProjects",
                });

                const projects = response.items;
                setAllProjects(projects);

                const featured = projects.filter((project) => project.fields?.featured === true);
                setFeaturedProjects(featured);

                setLoading(false);
            } catch (error) {
                console.error("Error fetching entries:", error);
                setLoading(false);
            }
        };
        getProjects();
    }, []);

    return <ProjectContext.Provider value={{ allProjects, loading, featuredProjects }}>{children}</ProjectContext.Provider>;
};

export default ProjectContextProvider;
