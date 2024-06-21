import React from "react";
import { Project } from "./Dashboard";

interface ProjectItemProps {
  project: Project;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  return <div>{project.name}</div>;
};

export default ProjectItem;
