import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ title, img, demoLink, repoLink, children, type }) => {
  return (
    <div className={`projectCardSingleContainer ${type || ""}`}>
      <div className="projectCardSingleLeftSide">
        <Image src={img} />
      </div>
      <div className="projectCardSingleRightSide">
        <h3>{title}</h3>
        <p>{children}</p>
        <div className="projectCardSingleBtnContainer">
          <Link href={demoLink}>
            <a className="btn" target="_blank">
              Ver demo
            </a>
          </Link>
          <Link href={repoLink}>
            <a className="btn" target="_blank">
              Repositorio
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
