// import source from ./source.js
import {mainButtonElements, mainHoverElements} from './elements';

export default function Main() {
  return (
    <main className="main">
      <main className="contact-value" id="contact" data-aos="zoom-in">
        <div className="row">
          <div className='col-12 col-s-12'>
            <h1><a href="javascript:;">Fikri Dean Radityo</a></h1>
            <h2><a href="javascript:;" className="job">Web Developer</a></h2>
            <h3><a href="javascript:;">rianadi.github.io</a></h3>
          </div>
        </div>
        <div className="row btn">
          {mainButtonElements}
        </div>

        <div className="row home-hover">
          {mainHoverElements}
        </div>
      </main>
    </main>
  )
}