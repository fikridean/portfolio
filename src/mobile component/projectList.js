import { projectElements } from "./elements";

export default function ProjectList() {
  return (
    <div className="row card project-mobile" id="project-mobile" data-aos="zoom-in">
      <div className="col-12 col-s-12">
        {projectElements};
      </div>
    </div>
  )
}