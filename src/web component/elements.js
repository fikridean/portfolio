// ALL FUNCTION WEB DEVELOPMENT PORTFOLIO (WEB VERSION)
// main import
import {mainButtonArr, mainHoverArr} from './source';

// navLink import
import {navLinkArr, sidebarIconArr} from './source';

// main
// Main button elements func
const mainButtonElements = mainButtonArr.map(b => {
  return <div className="col-3 col-s-12"> <input type="button" formtarget="_blank" className={b.className} value={b.value} id={b.id} /></div>
});

// hover main button elements func
const mainHoverElements = mainHoverArr.map(h => {
  return ( 
    <div className="col-3 col-s-12">
      <img className={h.className} src={h.src} />
    </div>)
});

export {mainButtonElements, mainHoverElements};

// sidebar
// SidebarIcon react func
const SidebarIcon = function (props) {
  return (
    <h1 href="javascript:void(0);" className="sidebar-icon" id={props.id}>
      {props.value}
    </h1>
  )
}

// sidebarIcon mapping
const sidebarIconElements = sidebarIconArr.map(s => {
  return <SidebarIcon id={s.id} value={s.value}/>
})

// NavLink react func
const NavLink = function(props) {
  return (
    <li><a href="javascript:;" className={props.className}>{props.icon} {props.text}</a></li>
  )
}

// navLink mapping
const navLinkElements = navLinkArr.map(n => {
  return <NavLink className={n.className} icon={<i class={n.icon}></i>} text={n.text} />
})

export {sidebarIconElements, navLinkElements};

