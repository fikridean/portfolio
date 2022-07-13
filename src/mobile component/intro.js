import profileLogo from '../img/formal1000.png';
import { introDiri } from './source';

export default function Intro() {
  return (
    <div class="row intro" id="intro">

      <div class="col-2 col-s-0"></div>

      <div class="col-4 col-s-12 img">

        <img src={profileLogo} alt="FIKRI DEAN RADITYO" data-aos="fade-up" />

      </div>

      <div class="col-4 col-s-12 diri">

        <h1 data-aos="fade-up"><a href="javascript:;">Fikri Dean Radityo</a></h1>

        <h3 data-aos="fade-up"><a href="javascript:;">18 December 2002</a></h3>

      </div>
    </div>
  )
}