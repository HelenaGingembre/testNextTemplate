"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// import axios from "axios";
import { Project } from "../../../types";
import "../../styles/projects.css";
import getProjectsList from "../../app/(server)/project";

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

  return (
    <ul className="grid">
      {projects.map((project) => {
        return (
          <li key={project.id} className="grid__item">
            <div className="product">
              <Image
                src={project.img}
                alt={project.title}
                width={300}
                height={240}
                // onclick={onClick()} не можемо писати в серверних компонентах поведінку!!!!
                className="product__img"
              />
            </div>
            <div className="description">
              <a className="product__title" href={project.link} target="_blank">
                <h3>{project.title} </h3>
              </a>

              {/* <p className="product__text">{project.type}</p> */}
              <p className="product__text">{project.tech}</p>

              {/* <a href={project.linkGitHub}>linkGitHub</a> */}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ListProjects;
