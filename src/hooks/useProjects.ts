import { useState } from "react";
import { ProjectQuery } from "../components/Dashboard";

// Here I'm hard-coding the projects with provided example
// in the future replace with react-query in production
const useProjects = (projectQuery: ProjectQuery) => {
  return useState([
    { name: "Project A", users: 4, dashboards: 3, category: "D" },
    { name: "Project B", users: 2, dashboards: 4, category: "C" },
    { name: "Project C", users: 1, dashboards: 2, category: "F" },
    { name: "Project D", users: 3, dashboards: 2, category: "D" },
  ]);
};

export default useProjects;
