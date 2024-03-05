"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Project } from "../../../types";

const ListProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    async function fetchProjects() {
      const response = await axios.get("api/project");
      setProjects(response.data as Project[]);
    }

    fetchProjects();
  }, []);

  return (
    <>
      {projects.map((project) => {
        return (
          <ul>
            <li key={project.id}>
              <div>
                <h5>{project.title}</h5>
                <p>category:{project.type}</p>
                <p>{project.tech}</p>
                <a href={project.link}>link</a>
                {/* <a href={project.linkGitHub}>linkGitHub</a> */}
              </div>
              <div>
                <img src={project.img} alt={project.title} />
              </div>
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default ListProjects;
