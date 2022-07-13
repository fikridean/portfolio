import $ from 'jquery';
import AOS from "aos";

// intro and univ
import introImg from './img/formal1000.png';
import uinImg from './img/uin.png';

// sidebar and main background
import sidebarBackground from './img/background.jpg';
import mainBackground from './img/background-2.jpg';

// main hover img
import emailHover from './img/email.png';
import linkedHover from './img/linkedin.png';
import githubHover from './img/github.png';
import freecodecampHover from './img/freecodecamp.png';

// certificates img
import responsiveWeb from './img/certificate_responsive_web.png';
import javaFundamentals from './img/JF_certificate.png';
import javascriptAlgorithms from './img/JavaScript_Algorithms_and_Data_Structures_Certificate.png';
import javaFoundations from './img/JFo_Certificate.png';

// projects img
import tribute from './img/tiger_woods.png';
import survey from './img/survey.png';
import jsDoc from './img/js_doc.png';
import vacansyRemake from './img/vacansy_remake.png';
import stepWorld from './img/step_world.png';
import stepWorld2 from './img/step_world2.png';


$(document).ready(function() {
  // AOS JS Initialization
  AOS.init();

  // checking screen
  const screenWidth = window.innerWidth;

  // checking screen for mobile/web version
  if (screenWidth > 1200) {
    $('.mobile').hide();
  } 
  
  else {
    $('.web').hide();
  }

  // function TopNav
  function myFunction() {
    if ($('#myTopnav').hasClass('topnav') && $('#myTopnav').hasClass('responsive')) {
      $('#myTopnav').removeClass('responsive');
    } else {
      $('#myTopnav').addClass('responsive');
    }
  }

  // background sidebar
  $('.sidebar').css({
    'background-image': 'url(' + sidebarBackground + ')'
  })

  // background main
  $('.main').css({
    'background-image': 'url(' + mainBackground + ')'
  })

  // Email button
  function email() {
    window.location.href = "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBptCNkzXPGKQFhFQflhqSTFvRPLDPfnfkrRTJscwSZgRdNDhKwPHhSdVjJPrbcxhzQZTlW";
  }
  
  // Linkedin button
  function linked() {
    window.location.href = "https://www.linkedin.com/in/fikri-dean-radityo-23bb3621a/";
  }
  
  // Github button
  function github() {
    window.location.href = "https://github.com/Rianadi";
  }
  
  // Freecodecamp button
  function freecodecamp() {
    window.location.href = "https://www.freecodecamp.org/fikridean";
  }

  // click a.icon
  $(document).on('click', 'a[id^="icon"]', function() {
    myFunction();
  });

  // click email button
  $(document).on('click', 'input[id^="email"]', function() {
    email();
  });

  // click linkedIn button
  $(document).on('click', 'input[id^="linked"]', function() {
    linked();
  });

  // click github button
  $(document).on('click', 'input[id^="github"]', function() {
    github();
  });

  // click freecodecamp button
  $(document).on('click', 'input[id^="freecodecamp"]', function() {
    freecodecamp();
  });

  // hover in email button
  $(document).on('mouseenter', 'input[id^="email"]', function() {
    $('.email-hover').css({
      'opacity': 1,
      'transform': 'translateY(40px)'
    })
  });

  // hover out email button
  $(document).on('mouseleave', 'input[id^="email"]', function() {
    $('.email-hover').css({
      'opacity': 0,
      'transform': 'translateY(-40px)'
    })
  });

  // hover in linked button
  $(document).on('mouseenter', 'input[id^="linked"]', function() {
    $('.linked-hover').css({
      'opacity': 1,
      'transform': 'translateY(40px)'
    })
  });

  // hover out linked button
  $(document).on('mouseleave', 'input[id^="linked"]', function() {
    $('.linked-hover').css({
      'opacity': 0,
      'transform': 'translateY(-40px)'
    })
  });

  // hover in github button
  $(document).on('mouseenter', 'input[id^="github"]', function() {
    $('.github-hover').css({
      'opacity': 1,
      'transform': 'translateY(40px)'
    })
  });

  // hover out github button
  $(document).on('mouseleave', 'input[id^="github"]', function() {
    $('.github-hover').css({
      'opacity': 0,
      'transform': 'translateY(-40px)'
    })
  });

  // hover in freecodecamp button
  $(document).on('mouseenter', 'input[id^="freecodecamp"]', function() {
    $('.freecodecamp-hover').css({
      'opacity': 1,
      'transform': 'translateY(40px)'
    })
  });

  // hover out freecodecamp button
  $(document).on('mouseleave', 'input[id^="freecodecamp"]', function() {
    $('.freecodecamp-hover').css({
      'opacity': 0,
      'transform': 'translateY(-40px)'
    })
  });

  // click button certificate slide left
  $(document).on('click', 'button[id^="cerLeft"]', function() {
    const numChange = 200;
    let numLeft = $(".card-web").scrollLeft() - numChange;
    $('.certificate-web').animate({scrollLeft: numLeft}, 300);
  });

  // click button certificate slide right
  $(document).on('click', 'button[id^="cerRight"]', function() {
    const numChange = 200;
    let numLeft = $(".card-web").scrollLeft() + numChange;
    $('.certificate-web').animate({scrollLeft: numLeft}, 300);
  });

  // click button project slide left
  $(document).on('click', 'button[id^="proLeft"]', function() {
    const numChange = 200;
    let numLeft = $(".card-web").scrollLeft() - numChange;
    $('.project-web').animate({scrollLeft: numLeft}, 300);
  });

  // click button project slide right
  $(document).on('click', 'button[id^="proRight"]', function() {
    const numChange = 200;
    let numLeft = $(".card-web").scrollLeft() + numChange;
    $('.project-web').animate({scrollLeft: numLeft}, 300);
  });

  // hover in footer-text
  $(document).on('mouseenter', 'h5[id^="footer-text"]', function(){
    $(this).css("color", "#FF5403");
  });

  // hover out footer-text
  $(document).on('mouseleave', 'h5[id^="footer-text"]', function(){
    $(this).css("color", "#FFCA03");
  });

  // click open-icon
  $(document).on('click', 'h1[id^="open-icon"]', function(){
    $('.sidebar').css({
      'width': '20%',
      'transition': '2s'
    });

    $('.main').css({
      'width': '80%',
      'transition': '2s'
    });

    setTimeout(() => {
      $('#close-icon').css({
        'text-align': 'left',
        'transition': '2s',
        'opacity': '1'
      });

      $('.nav-link').css({
        'opacity': '1',
        'transition': '3s'
      })
    }, 1000);
    
    $('.nav-link').show();

    $('#open-icon').hide();

    $('#close-icon').show();

    $('#contact-icon, #personal-icon, #certificate-icon, #project-icon, #open-icon, #home-icon').css({
      'opacity': '0'
    });

    $('#contact-icon, #personal-icon, #certificate-icon, #project-icon, #open-icon, #home-icon').hide();
  });

  // click close-icon
  $(document).on('click', 'h1[id^="close-icon"]', function(){
    $('.sidebar').css({
      'width': '5%',
      'transition': '2s'
    });

    $('.main').css({
      'width': '95%',
      'transition': '2s'
    });

    $('.nav-link').css({
      'opacity': '0'
    });

    $('.nav-link').hide();

    $('#close-icon').css({
      'opacity': '0'
    });

    $('#burger-icon, #contact-icon, #personal-icon, #certificate-icon, #project-icon, #open-icon, #home-icon').css({
      'padding': '15px 0',
      'margin': '15px 0',
      'transition': '2s'
    });

    setTimeout(() => {
      $('#burger-icon, #contact-icon, #personal-icon, #certificate-icon, #project-icon, #open-icon, #home-icon').css({
        'opacity': '1',
      })
    }, 1000);

    $('#close-icon').hide();

    $('#contact-icon, #personal-icon, #certificate-icon, #project-icon, #open-icon, #home-icon').show();
  });

  // click home-icon
  $(document).on('click', 'h1[id^="home-icon"]', function(){
    $('.active').removeClass('active');
    $('.active-icon').removeClass('active-icon');
    // landing();
  });

  // click contact-icon
  $(document).on('click', 'h1[id^="contact-icon"]', function(){
    $('.active').removeClass('active');
    $('.active-icon').removeClass('active-icon');
    contactMain();
  });

  // click personal-icon
  $(document).on('click', 'h1[id^="personal-icon"]', function(){
    $('.active').removeClass('active');
    $('.active-icon').removeClass('active-icon');
    personalMain();
  });

  // click certificate-icon
  $(document).on('click', 'h1[id^="certificate-icon"]', function(){
    $('.active').removeClass('active');
    $('.active-icon').removeClass('active-icon');
    certificateMain();
  });

  // click project-icon
  $(document).on('click', 'h1[id^="project-icon"]', function(){
    $('.active').removeClass('active');
    $('.active-icon').removeClass('active-icon');
    projectMain();
  });

  // click link a home
  $('.nav ul li a').on({
    click: function() {
      $('nav ul .active').removeClass('active');
      $('.active-icon').removeClass('active-icon');

      if ($(this).hasClass('home')) {
        // landing();
      }

      else if ($(this).hasClass('contact-value')) {
        contactMain();
      } 
      
      else if ($(this).hasClass('personal')) {
        personalMain();
      } 
      
      else if ($(this).hasClass('certificate')) {
        certificateMain();
      } 
      
      else if ($(this).hasClass('project')) {
        projectMain();
      }
    }
  });

  // $(document).on('click', 'div[id^="l-linked"]', function(){
  //   linked();
  // });

  // $(document).on('click', 'div[id^="l-github"]', function(){
  //   github();
  // });

  // $(document).on('click', 'div[id^="l-freecodecamp"]', function(){
  //   freecodecamp();
  // });

  // $(document).on('click', 'div[id^="l-contact"]', function(){
  //   $('.landing').css({
  //     'opacity': '0',
  //   });

  //   setTimeout(() => {
  //     $('.landing').css({
  //       'display': 'none',
  //     });
  //   }, 500);

  //   $('.active').removeClass('active');

  //   $('.active-icon').removeClass('active-icon');

  //   contactMain();
  // });

  // $(document).on('click', 'div[id^="l-personal"]', function(){
  //   $('.landing').css({
  //     'opacity': '0',
  //   });

  //   setTimeout(() => {
  //     $('.landing').css({
  //       'display': 'none',
  //     });
  //   }, 500);

  //   $('.active').removeClass('active');

  //   $('.active-icon').removeClass('active-icon');

  //   personalMain();
  // });

  // $(document).on('click', 'div[id^="l-certificate"]', function(){
  //   $('.landing').css({
  //     'opacity': '0',
  //   });

  //   setTimeout(() => {
  //     $('.landing').css({
  //       'display': 'none',
  //     });
  //   }, 500);

  //   $('.active').removeClass('active');

  //   $('.active-icon').removeClass('active-icon');

  //   certificateMain();
  // });

  // $(document).on('click', 'div[id^="l-project"]', function(){
  //   $('.landing').css({
  //     'opacity': '0',
  //   });

  //   setTimeout(() => {
  //     $('.landing').css({
  //       'display': 'none',
  //     });
  //   }, 500);

  //   $('.active').removeClass('active');
  //   $('.active-icon').removeClass('active-icon');
  //   projectMain();
  // });

});

// const landing = function() {
//   $('.landing').css({
//     'display': 'flex'
//   });
  
//   setTimeout(() => {
//     $('.landing').css({
//       'opacity': '1'
//     });
//   }, 0);

//   $('.home').addClass('active');

//   $('#home-icon').addClass('active-icon');
// }

// function main > contact
const contactMain = function() {
  $('.contact-value').addClass('active');
  $('#contact-icon').addClass('active-icon');
  $('.main').html(`<main class='contact-value' id="contact" data-aos="zoom-in">
                      <div class="row">
                        <div class='col-12 col-s-12'>
                          <h1><a href="javascript:;">Fikri Dean Radityo</a></h1>
                          <h2><a href="javascript:;" class="job">Web Developer</a></h2>
                          <h3><a href="javascript:;">rianadi.github.io</a></h3>
                        </div>
                      </div>
                      <div class="row btn">
                        <div class="col-3 col-s-12">
                          <input type="button" formtarget="_blank" class='email' value="Email" id="email">
                        </div>
                        <div class="col-3 col-s-12">
                          <input type="button" formtarget="_blank" class='linked' value="LinkedIn" id="linked">
                        </div>
                        <div class="col-3 col-s-12">
                          <input type="button" formtarget="_blank" class='github' value="Github" id="github">
                        </div>
                        <div class="col-3 col-s-12">
                          <input type="button" formtarget="_blank" class='freecodecamp' value="FreeCodeCamp" id="freecodecamp">
                        </div>
                      </div>

                      <div class="row home-hover">
                        <div class="col-3 col-s-12">
                          <img class="email-hover" src=${emailHover} alt="">
                        </div>
                        <div class="col-3 col-s-12">
                          <img class="linked-hover" src=${linkedHover} alt="">
                        </div>
                        <div class="col-3 col-s-12">
                          <img class="github-hover" src=${githubHover} alt="">
                        </div>
                        <div class="col-3 col-s-12">
                          <img class="freecodecamp-hover" src=${freecodecampHover} alt="">
                        </div>
                      </div>

                      <!-- <div class="row footer">
                        <h5 id="footer-text">2022 ● FIKRI DEAN RADITYO</h5>
                      </div> -->
                    </main>`);
};

// function main > personal
const personalMain = function() {
  $('.personal').addClass('active');
  $('#personal-icon').addClass('active-icon');
  $('.main').html(`<div data-aos="zoom-in">
                      <div class="row intro" id="intro">

                      <div class="col-6 col-s-12 img">
                        <img src=${introImg} alt="FIKRI DEAN RADITYO">
                      </div>
                    
                      <div class="col-6 col-s-12 diri">
                        <h1><a href="javascript:;">Fikri Dean Radityo</a></h1>
                        <h3><a href="javascript:;">18 December 2002</a></h3>
                      </div>
                    </div>

                    <div class="row univ">
                      <div class="col-6 col-s-12">
                        <div class="img">
                          <a href="https://www.uinjkt.ac.id/" target="_blank" title="click to go to uin official website">
                            <img src=${uinImg} alt="Universitas Islam Negeri Syarif Hidayatullah Jakarta">
                          </a>
                        </div>
                      </div>

                      <div class="col-6 col-s-12">
                        <div class="profile">
                          <h1><a href="https://www.uinjkt.ac.id/" target="_blank" title="click to go to uin official website">Universitas Islam Negeri Syarif Hidayatullah Jakarta</a></h1>
                          <h3><a href="javascript:;">College Student</a></h3>
                        </div>
                      </div>
                    </div>
                  </div>`);
}

// function main > certificate
const certificateMain = function() {
  $('.certificate').addClass('active');
  $('#certificate-icon').addClass('active-icon');
  $('.main').html(`
                    <div class="row button btn-certificate" data-aos="fade-up">
                      <div class="col-6 col-s-12">
                        <button class="button" id="cerLeft">
                          <i class="fa-solid fa-arrow-left"></i> 
                        </button>
                      </div>

                      <div class="col-6 col-s-12">
                        <button class="button" id="cerRight">
                          <i class="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                    <div class="row card-web certificate-web" id="certificate-web" data-aos="zoom-in">
                      <div class="col-12 col-s-12">
                        <div class="card-list first">
                          <a href="https://www.freecodecamp.org/certification/fikridean/responsive-web-design" target="_blank"><img src=${responsiveWeb} alt="Responsive Web Design" /></a>
                          <div class="card-info">
                            <p class="rating"><span class="star"><i class="fa-solid fa-star"></i></span> FreeCodeCamp</span></p>
                            <p class="info">Responsive Web Design</p>
                            <p class="date"><span>Issued</span> • November 2nd, 2021</p>
                          </div>
                        </div>
                        <div class="card-list">
                          <img src=${javaFundamentals} alt="Java Fundamentals" />
                          <div class="card-info">
                            <p class="rating"><span class="star"><i class="fa-solid fa-star"></i></span> Oracle Academy</span></p>
                            <p class="info">Java Fundamentals</p>
                            <p class="date"><span>Issued</span> • December 26th, 2021</p>
                          </div>
                        </div>
                        <div class="card-list">
                          <a href="https://www.freecodecamp.org/certification/fikridean/javascript-algorithms-and-data-structures" target="_blank"><img src=${javascriptAlgorithms} alt="JavaScript Algorithms and Data Structures" /></a>
                          <div class="card-info">
                            <p class="rating"><span class="star"><i class="fa-solid fa-star"></i></span> FreeCodeCamp</span></p>
                            <p class="info">JavaScript Algorithms and Data Structures</p>
                            <p class="date"><span>Issued</span> • January 18th, 2022</p>
                          </div>
                        </div>
                        <div class="card-list">
                          <img src=${javaFoundations} alt="JavaScript Algorithms and Data Structures" />
                          <div class="card-info">
                            <p class="rating"><span class="star"><i class="fa-solid fa-star"></i></span> Oracle Academy</span></p>
                            <p class="info">Java Foundations</p>
                            <p class="date"><span>Issued</span> • April 6th, 2022</p>
                          </div>
                        </div>
                      </div>
                    </div>`);
}

// function main > project
const projectMain = function() {
  $('.project').addClass('active');
  $('#project-icon').addClass('active-icon');
  $('.main').html(`<div class="row button btn-project" data-aos="fade-up">
                      <div class="col-6 col-s-12">
                        <button class="button" id="proLeft">
                          <i class="fa-solid fa-arrow-left"></i> 
                        </button>
                      </div>

                      <div class="col-6 col-s-12">
                        <button class="button" id="proRight">
                          <i class="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
    
                    <div class="row card-web project-web" id="project-web" data-aos="zoom-in">
                      <div class="col-12 col-s-12">
                          <div class="card-list">
                            <a href="https://rianadi.github.io/tribute/" target="_blank"><img src=${tribute} alt="card" /></a>
                            <div class="card-info">
                              <p class="rating"><span><i class="fa-solid fa-star star"></i> Tribute Page</span></p>
                            </div>
                          </div>
                          <div class="card-list">
                            <a href="https://rianadi.github.io/survey-form/" target="_blank"><img src=${survey} alt="card" /></a>
                            <div class="card-info">
                              <p class="rating"><span><i class="fa-solid fa-star star"></i> Survey Page</span></p>
                            </div>
                          </div>
                          <div class="card-list">
                            <a href="https://rianadi.github.io/js-doc/" target="_blank"><img src=${jsDoc} alt="card" /></a>
                            <div class="card-info">
                              <p class="rating"><span><i class="fa-solid fa-star star"></i> JS Documentation Page</span></p>
                            </div>
                          </div>
                          <div class="card-list">
                            <a href="https://dribbble.com/shots/12230630-Vacansy-Landing-Page" target="_blank"><img src=${vacansyRemake} alt="card" /></a>
                            <div class="card-info">
                              <p class="rating"><span><i class="fa-solid fa-star star"></i> Vacansy Remake</span></p>
                            </div>
                          </div>
                          <div class="card-list">
                            <a href="https://dribbble.com/shots/15607887-StepWorld" target="_blank"><img src=${stepWorld} alt="card" /></a>
                            <div class="card-info">
                              <p class="rating"><span><i class="fa-solid fa-star star"></i> Step World</span></p>
                            </div>
                          </div>
                          <div class="card-list">
                            <img src=${stepWorld2} alt="card" />
                            <div class="card-info">
                              <p class="rating"><span><i class="fa-solid fa-star star"></i> Step World v2</span></p>
                            </div>
                          </div>
                      </div>
                    </div>`);
}