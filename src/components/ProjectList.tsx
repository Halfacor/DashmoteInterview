import React from "react";
import ProjectItem from "./ProjectItem";
import { Project } from "./Dashboard";
import projectListStyles from "./ProjectList.module.css";

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className={projectListStyles.container}>
      {projects.map((project) => (
        <ProjectItem key={project.name} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
