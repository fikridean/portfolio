import Topnav from "./topnav";
import Contact from "./contact";
import Intro from "./intro";
import Univ from "./univ";
import Divider from "./divider";
import CertificateList from "./certificateList";
import ProjectList from "./projectList";

export default function Mobile() {
  return (
    <div className="mobile">

      <div className="container">

        <Topnav />
        <Contact />
        <Intro />
        <Univ />
        <Divider title="Certificates"/>
        <CertificateList />
        <Divider title="Projects" />
        <ProjectList />

      </div>

    </div>
  )
}