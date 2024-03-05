import projects from "./projects.json";
import type { Project } from "../../../types";
// import { NextApiRequest, NextApiResponse } from "../../../node_modules/next/dist/shared/lib/utils";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return getProjectsList(req, res);
    default:
      res.status(405).end;
      break;
  }
}

const projectsList: Project[] = projects;

async function getProjectsList(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).send(projectsList);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
