// ALL SOURCE WEB DEVELOPMENT PORTFOLIO (MOBILE VERSION)

// certificate img
import freecodecampImg from '../img/certificate_responsive_web.png';
import javaFundamentalImg from '../img/JF_certificate.png';
import javaScriptImg from '../img/JavaScript_Algorithms_and_Data_Structures_Certificate.png';
import javaFoundationsImg from '../img/JFo_Certificate.png';

// projectlist img
import tigerWoodsImg from '../img/tiger_woods.png';
import surveyImg from '../img/survey.png'
import jsDocImg from '../img/js_doc.png'
import vacansyRemakeImg from '../img/vacansy_remake.png';
import stepWorldImg from '../img/step_world.png';
import stepWorld2Img from '../img/step_world2.png'

// certificate
const certificateArr = [
  {
    href: 'https://www.freecodecamp.org/certification/fikridean/responsive-web-design',
    imgScr: freecodecampImg,
    cardName: 'FreeCodeCamp',
    cardInfo: 'Responsive Web Design"',
    cardIssued: 'November 2nd, 2021'
  },
  {
    href: 'javascript:;',
    imgScr: javaFundamentalImg,
    cardName: 'Oracle Academy',
    cardInfo: 'Java Fundamentals',
    cardIssued: 'December 26th, 2021'
  },
  {
    href: 'https://www.freecodecamp.org/certification/fikridean/javascript-algorithms-and-data-structures',
    imgScr: javaScriptImg,
    cardName: 'FreeCodeCamp',
    cardInfo: 'Javascript Algorithms and Data Structures',
    cardIssued: 'January 18th, 2022'
  },
  {
    href: 'javascript',
    imgScr: javaFoundationsImg,
    cardName: 'Oracle Academy',
    cardInfo: 'Java Foundations',
    cardIssued: 'April 6th, 2022'
  }
];

export {certificateArr};

const contactButtonArr = [
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

export {contactButtonArr};

// project list
const projectArr = [
  {
    href: 'https://rianadi.github.io/tribute/',
    imgScr: tigerWoodsImg,
    cardName: 'Tribute Page'
  },
  {
    href: 'https://rianadi.github.io/survey-form/',
    imgScr: surveyImg,
    cardName: 'Survey Page' 
  },
  {
    href: 'https://rianadi.github.io/js-doc/',
    imgScr: jsDocImg,
    cardName: 'JS Documentation Page'
  },
  {
    href: 'https://dribbble.com/shots/12230630-Vacansy-Landing-Page',
    imgScr: vacansyRemakeImg,
    cardName: 'Vacansy Remake' 
  },
  {
    href: 'https://dribbble.com/shots/15607887-StepWorld',
    imgScr: stepWorldImg,
    cardName: 'Step World'
  },
  {
    href: 'javascript:;',
    imgScr: stepWorld2Img,
    cardName: 'Step World 2'
  }
]

export {projectArr};

// topnav
const innerClassArr = [
  {
    href: '#contact',
    value: 'Contacts'
  },
  {
    href: '#intro',
    value: 'Personal'
  },
  {
    href: '#certificate',
    value: 'Certificates'
  },
  {
    href: '#project',
    value: 'Projects'
  }
]

export {innerClassArr};