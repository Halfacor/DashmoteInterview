import React from "react";
import { Project } from "./Dashboard";
import { Avatar, Button } from "antd";
import projectItemStyles from "./ProjectItem.module.css";

interface ProjectItemProps {
  project: Project;
  onDelete: (projectToDelete: Project) => void;
}

// todos: replace hardcoded color with mapping with respect to the category
const getColorBarColorBasedOnCategory = (category: string): string => {
  return "green";
};

const getAvatarTextColorBasedOnCategory = (category: string): string => {
  return "blue";
};

const getAvatarBackgroundColorBasedOnCategory = (category: string): string => {
  return "grey";
};

const ProjectItem = ({ project, onDelete }: ProjectItemProps) => {
  return (
    <div className={projectItemStyles.container}>
      <div
        className={projectItemStyles.colorBar}
        style={{
          backgroundColor: getColorBarColorBasedOnCategory(project.category),
        }}
      ></div>
      <div className={projectItemStyles.details}>
        <Avatar
          className={projectItemStyles.avatar}
          style={{
            backgroundColor: getAvatarBackgroundColorBasedOnCategory(
              project.category
            ),
            color: getAvatarTextColorBasedOnCategory(project.category),
          }}
          size={28}
        >
          {project.category}
        </Avatar>
        <p className={projectItemStyles.title}>{project.name}</p>
        <p className={projectItemStyles.user}>{`${project.users} users`}</p>
        <div className={projectItemStyles.dashboard}>
          <span
            className={projectItemStyles.dashboardText}
          >{`${project.dashboards} dashboards`}</span>
        </div>
        <Button
          className={projectItemStyles.deleteButton}
          type="text"
          danger
          onClick={() => onDelete(project)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ProjectItem;
