import { innerClassElements } from "./elements";

export default function Topnav() {
  return (
    <div className="topnav" id="myTopnav">
      <a href="#" className="active" data-aos="fade-up">Portfolio</a>
      <div className="innerclass">
        {innerClassElements};
      </div>

      <a href="javascript:void(0);" className="icon" id="icon" data-aos="fade-up">
        <i className="fa fa-bars"></i>
      </a>
    </div>
  )
  
}