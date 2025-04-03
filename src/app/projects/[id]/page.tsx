import ProjectDetail from "@/components/projectDetail";

import { Project } from "../../../../types";

const ProjectDetailsPage = ({ product }: { product: Project }) => {
  console.log("img===>", product.img);
  return (
    <>
      <h2>Project Details</h2>
      <ProjectDetail product={product} />
    </>
  );
};

export default ProjectDetailsPage;
