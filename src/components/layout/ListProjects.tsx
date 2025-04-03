"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// import axios from "axios";
import { Project } from "../../../types";
import "../../styles/projects.css";
import getProjectsList from "../../app/(server)/project";
import ProjectDetails from "@/app/projects/[id]/page";

const ListProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getProjectsList();
        setProjects(response);
      } catch (error: any) {
        return error.message;
      }
    }

    fetchData();
  }, []);

  console.log("projects====>", projects);
  return (
    <ul className="grid">
      {projects.map((project) => {
        console.log("project====>", project);
        return (
          <li key={project.id} className="grid__item rounded-md">
            <ProjectDetails product={project} />
          </li>
        );
      })}
    </ul>
  );
};

export default ListProjects;
