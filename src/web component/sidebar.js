import {sidebarIconElements, navLinkElements} from './elements';

export default function Sidebar(props) {
  return (
    <aside class="sidebar">
      <nav class="nav">

        {sidebarIconElements}

        <ul class="nav-link">
          
          {navLinkElements}
        
        </ul>
      </nav>
    </aside>
  )
}