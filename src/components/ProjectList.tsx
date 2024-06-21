import React from "react";
import ProjectItem from "./ProjectItem";
import { Project } from "./Dashboard";
import projectListStyles from "./ProjectList.module.css";

interface ProjectListProps {
  projects: Project[];
  onDelete: (projectToDelete: Project) => void;
}

const ProjectList = ({ projects, onDelete }: ProjectListProps) => {
  return (
    <div className={projectListStyles.container}>
      {projects.map((project) => (
        <ProjectItem key={project.name} project={project} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ProjectList;
