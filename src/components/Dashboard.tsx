import React, { useState } from "react";
import SearchBox from "./SearchBox";
import ProjectList from "./ProjectList";
import useProjects from "../hooks/useProjects";
import { Flex } from "antd";
import dashboardStyles from "./Dashboard.module.css";

export interface Project {
  name: string;
  users: number;
  dashboards: number;
  category: string;
}

export interface ProjectQuery {
  searchTerm: string;
}

const DashBoard = () => {
  const [projectQuery, setProjectQuery] = useState<ProjectQuery>(
    {} as ProjectQuery
  );
  const [projects, setProjects] = useProjects(projectQuery);

  const handleDelete = (projectToDelete: Project) => {
    setProjects(projects.filter((project) => projectToDelete !== project));
  };

  const handleSearch = (phrase: string) =>
    setProjectQuery({ ...projectQuery, searchTerm: phrase });

  return (
    <div className={dashboardStyles.dashboard}>
      <Flex align="end" vertical>
        <SearchBox onSearch={handleSearch} />
        <ProjectList projects={projects} onDelete={handleDelete} />
      </Flex>
    </div>
  );
};

export default DashBoard;
