// "use client";
import Image from "next/image";
import { Project } from "../../types";

const ProjectDetail = ({ product }: { product: Project }) => {
  return (
    <>
      <div className="product ">
        <Image
          src={product.img ? product.img : ""}
          alt={product.title}
          width={300}
          height={240}
          // onClick={() => {
          //  width ="300"? width={"100%"}:width={300};
          // }} //не можемо писати в серверних компонентах поведінку!!!!
          className="product__img"
        />
      </div>
      <div className="description rounded-md">
        <a className="product__title" href={product.link} target="_blank">
          <h3>{product.title} </h3>
        </a>

        <p className="product__text">{product.type}</p>
        <p className="product__text">{product.tech}</p>

        <a href={product.linkGitHub} target="_blank">
          linkGitHub
        </a>
      </div>
    </>
  );
};

export default ProjectDetail;
