import uinLogo from '../img/uin.png';

export default function Univ() {
  return (
    <div class="row univ">

      <div class="col-2 col-s-0"></div>

      <div class="col-4 col-s-12">

        <div class="img">

          <a href="https://www.uinjkt.ac.id/" target="_blank" title="click to go to uin official website">

            <img data-aos="fade-up" src={uinLogo} alt="Universitas Islam Negeri Syarif Hidayatullah Jakarta" />

          </a>

        </div>

      </div>

      <div class="col-4 col-s-12">

        <div class="profile">

          <h1 data-aos="fade-up"><a href="https://www.uinjkt.ac.id/" target="_blank"
              title="click to go to uin official website">Universitas Islam Negeri Syarif Hidayatullah Jakarta</a>
          </h1>

          <h3 data-aos="fade-up"><a href="javascript:;">College Student</a></h3>

        </div>

      </div>

    </div>
  )
}