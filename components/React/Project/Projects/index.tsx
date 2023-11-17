import Image from "next/image";

import { Project, ProjectBox } from "./ProjectBox";
import blogs from "@/public/projects/blogs.png";

const projects: Project[] = [
    {
        name: "Blog Project",
        description: "A multi-user blog website made using ReactJS & NodeJS",
        image: <Image src={blogs} placeholder="blur" alt="Blog Project" />,
        sourceLink: "https://github.com",
        demoLink: "https://github.com",
    }
];

export default function Projects() {
    return (
        <div>
            {projects.map((project, index) => (
                <ProjectBox
                    key={index}
                    name={project.name}
                    image={project.image}
                    description={project.description}
                    demoLink={project.demoLink}
                    sourceLink={project.sourceLink}
                />
            ))}
        </div>
    );
}