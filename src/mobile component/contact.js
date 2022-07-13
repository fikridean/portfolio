import { contactButtonElements } from "./elements";

export default function Contact() {
  return (
    <main className='contact' id="contact">
        <div className="row">
          <div className='col-12 col-s-12'>
            <h1 data-aos="zoom-in"><a href="javascript:;">Fikri Dean Radityo</a></h1>
            <h2 data-aos="zoom-in"><a href="javascript:;" className="job">Web Developer</a></h2>
            <h3 data-aos="zoom-in"><a href="javascript:;">rianadi.github.io</a></h3>
          </div>
        </div>
        <div className="row btn">
          <div className="col-2 col-s-0"></div>
          {contactButtonElements}
        </div>
      </main>
  )
}