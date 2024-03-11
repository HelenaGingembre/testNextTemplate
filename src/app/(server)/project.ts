import projects from "./projects.json";
import type { Project } from "../../../types";

const projectsList: Project[] = projects;

export default function getProjectsList() {
  try {
    return delayed(projectsList, { timeout: 0 });
  } catch (error: any) {
    return error.message;
  }
}

type DelayOptions =
  | { timeout: number; shouldFail?: boolean }
  | { timeout?: number; shouldFail: boolean };

export function delayed<T>(
  data: T,
  options: DelayOptions = { shouldFail: false, timeout: 1500 }
) {
  const { shouldFail, timeout } = options;
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => (shouldFail ? reject(data) : resolve(data)), timeout);
  });
}
