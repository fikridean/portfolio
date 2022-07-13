// ALL FUNCTION WEB DEVELOPMENT PORTFOLIO (MOBILE VERSION)

// certificate import
import {certificateArr} from './source';

// contact import
import {contactButtonArr} from './source';

// project import
import Project from "./project";
import { projectArr } from "./source";

// topnav import
import {innerClassArr} from './source';

// certificate
const Certificate = function(props) {
  return (
    <div className="card-list">
      <a href={props.hrefLink} target="_blank">
        <img src={props.imgScr} alt="Responsive Web Design" />
      </a>
      <div className="card-info">
        <p className="rating"><span className="star"><i className="fa-solid fa-star"></i></span> {props.cardName}</p>
        <p className="info">{props.cardInfo}</p>
        <p className="date"><span>Issued</span> • {props.cardIssued}</p>
      </div>
    </div>
  )
};

const CertificateElements = certificateArr.map(c => {
  return <Certificate href={c.href} imgScr={c.imgScr} cardName={c.cardName} cardInfo={c.cardInfo} cardIssued={c.cardIssued}/>
})

export {CertificateElements};

// contact
const contactButtonElements = contactButtonArr.map(b => {
  return (
    <div className="col-2 col-s-12">
      <input type="button" formtarget="_blank" className={b.className} id={b.id} data-aos="fade-up" value={b.value} />
    </div>
  )
})

export {contactButtonElements};

// project
const projectElements = projectArr.map(p => {
  if (p.href) {
    return <Project href={p.href} imgScr={p.imgScr} cardName={p.cardName} />
  }
})

export {projectElements};

// topnav
const innerClassElements = innerClassArr.map(i => {
  return (
    <a href={i.href} data-aos="fade-up">{i.value}</a>
  )
})

export {innerClassElements}