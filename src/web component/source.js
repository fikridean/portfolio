// ALL SOURCE WEB DEVELOPMENT PORTFOLIO (WEB VERSION)

// main page img
import emailHover from '../img/email.png';
import linkedHover from '../img/linkedin.png';
import githubHover from '../img/github.png';
import freecodecampHover from '../img/freecodecamp.png';

// main.js datas
// main button array
const mainButtonArr = [
  {
    className: 'email',
    value: 'Email',
    id: 'email'
  },
  {
    className: 'linked',
    value: 'LinkedIn',
    id: 'linked'
  },
  {
    className: 'github',
    value: 'Github',
    id: 'github'
  },
  {
    className: 'freecodecamp',
    value: 'FreeCodeCamp',
    id: 'freecodecamp'
  }
];

// main hover array
const mainHoverArr = [
  {
    className: 'email-hover',
    src: emailHover
  },
  {
    className: 'linked-hover',
    src: linkedHover
  },
  {
    className: 'github-hover',
    src: githubHover
  },
  {
    className: 'freecodecamp-hover',
    src: freecodecampHover
  }
]

export {mainButtonArr, mainHoverArr};

// sidebar.js datas
// navLink list
const navLinkArr = [
  {
    className: 'contact-value active',
    icon: <i class="fa-solid fa-id-badge"></i>,
    text: 'Contacts'
  },
  {
    className: 'personal',
    icon: <i class="fa-solid fa-user"></i>,
    text: 'Personal'
  },
  {
    className: 'certificate',
    icon: <i class="fa-solid fa-certificate"></i>,
    text: 'Certificates'
  },
  {
    className: 'project',
    icon: <i class="fa-solid fa-diagram-project"></i>,
    text: 'Projects'
  }
];

// sidebarIcon list
const sidebarIconArr = [
  {
    id: 'open-icon',
    value: <i class='fa fa-bars'></i>
  },
  {
    id: 'close-icon',
    value: <i class="fa-solid fa-circle-xmark"></i>
  },
  {
    id: 'contact-icon',
    value: <i class="fa-solid fa-id-badge"></i>
  },
  {
    id: 'personal-icon',
    value: <i class="fa-solid fa-user"></i>
  },
  {
    id: 'certificate-icon',
    value: <i class="fa-solid fa-certificate"></i>
  },
  {
    id: 'project-icon',
    value: <i class="fa-solid fa-diagram-project"></i>
  }
]

export {navLinkArr, sidebarIconArr};