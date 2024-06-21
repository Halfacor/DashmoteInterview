import React from "react";
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

const DashBoard = () => {
  const [projects, setProjects] = useProjects();

  return (
    <div className={dashboardStyles.dashboard}>
      <Flex align="end" vertical>
        <SearchBox />
        <ProjectList projects={projects} />
      </Flex>
    </div>
  );
};

export default DashBoard;
