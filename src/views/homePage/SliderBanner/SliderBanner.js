import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import "../../../globalVar"
import Particles from 'react-tsparticles';
import Parallax from 'parallax-js'
import blurflake3 from './blurflake3.png'
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';
import Fade from 'react-reveal/Fade';
import { Helmet } from "react-helmet";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderBanner.css'
import { useTranslation } from 'react-i18next';

const SliderBanner = ({ textBylang, scroll }) => {
  const [t, i18n] = useTranslation();
  const [changeSlide, setChangeSlide] = useState(false)
  const [fetchedData, setfetchedData] = useState('')
  useEffect(() => {

    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene, {
      relativeInput: true
    });
    var scene2 = document.getElementById('scene2');
    var parallaxInstance2 = new Parallax(scene2, {
      relativeInput: true
    });
    var scene3 = document.getElementById('scene3');
    var parallaxInstance3 = new Parallax(scene3, {
      relativeInput: true
    });

    var paralaxClass = document.getElementsByClassName('paralaxClass');
    for (var i = 0; i < paralaxClass.length; i++) {
      var paralaxClass2 = new Parallax(paralaxClass.item(i), { relativeInput: true });
    }
  })

  useEffect(async () => {
    const fetchSlides = async (e) => {
      try {
        const responsee = await fetch(
          `${global.apiUrl}api/website/nodes?category=1`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );
        console.log(responsee.status);
        if (responsee.status == '204') { setfetchedData([]) }
        const response = await responsee.json();
        console.log(response)
        if (response.payload) { setfetchedData(response.payload) }
      }
      catch (err) { console.log(err); }
    }

    await fetchSlides()
  }, [i18n.language])

  const options = {
    fpsLimit: 80,
    particles: {
      zIndex: 1,
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#FFFFFF0f",

      },
      shape: {
        type: "circle",
        stroke: {
          width: 0
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "https://cdn.matteobruni.it/images/particles/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.3,
        random: false,
        anim: {
          enable: false,
          speed: 6,
          opacity_min: 0.3,
          sync: false
        }
      },
      size: {
        value: 6,
        random: true,
        anim: {
          enable: false,
          speed: 0,
          size_min: 1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 220,
        color: "#ffffff01",
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 0.2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "bounce",
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200
        }
      },
      life: {
        duration: {
          sync: false,
          value: 196
        },
        count: 6,
        delay: {
          random: {
            enable: false,
            minimumValue: 3
          },
          value: 1
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
          duration: 0.5,
          parallax: { enable: true, force: 20, smooth: 70 }
        },
        onclick: {
          enable: false,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 50,
          line_linked: {
            opacity: 0.5
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8
        },
        repulse: {
          "distance": 180,
          "duration": 0.2,
          "factor": 70,
          "speed": 0.8,
          "maxSpeed": 3,
          "easing": "ease-out-quad"

        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 6
        }
      }
    },
    retina_detect: true,
    background: {
      color: "",
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover"
    },

  }

  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 3000,

    loop: true,
    vertical: true,
    fade: true,
    // rtl: true,
    slidesToShow: 1,
    beforeChange: (current, next) => setChangeSlide(!changeSlide),
    // afterChange: current => setChangeSlide(!changeSlide),
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }
      ,
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }
    ]
  };



  return (


    <>

      <div className="slide1" id="banner">
        <div className="parallaxParent" >
          <div data-relative-input="true" id="scene">
            <div data-depth="0.9">
              <img src={blurflake3} id='imgBlure1'></img>
            </div>

          </div>
        </div>
        <div className="parallaxParent2" >
          <div data-relative-input="true" id="scene2">
            <div data-depth="0.1">
              <img src={blurflake3} id='imgBlure1'></img>
            </div>

          </div>
        </div>
        <div className="parallaxParent3" >
          <div data-relative-input="true" id="scene3">
            <div data-depth="0.4">
              <img src={blurflake3} id='imgBlure1'></img>
            </div>

          </div>
        </div>


        <Particles options={options} canvasClassName="canvasClass" />

        <div className='sliderParent' >
          {fetchedData &&

            <Slider {...settings}    >
              {fetchedData.map((slide, index) => {

                return (<div className='sliderItem' key={slide.id}  >

                  {slide.attachment &&
                    <div data-relative-input="true"
                      // id="scene4"
                      className='paralaxClass' >
                      <div data-depth="0.4" >
                        <Fade left spy={changeSlide} duration={2000} delay={1000}>
                          <img src={`${global.apiUrl}${slide.attachment}`} className='slideImg' />
                        </Fade>

                      </div>
                    </div>
                  }
                  <div data-relative-input="true"
                    // id="scene4"
                    className='paralaxClass'
                  >
                    <div data-depth="0.3" >
                      {/* <Rotate appear spy={changeSlide} bottom left duration={3000}> */}
                      <h1 className='colorWhite slideTitle '>
                        <Zoom appear spy={changeSlide} right duration={3000} >
                          {textBylang(fetchedData, index, 'title')}
                        </Zoom>
                      </h1>
                      {/* </Rotate> */}

                    </div>

                  </div>
                  <div data-relative-input="true"
                    // id="scene4"  delay={1000}
                    className='paralaxClass'
                  >
                    <div data-depth="0.1" >
                      <h3 className='colorWhite  slideText'> <Zoom spy={changeSlide} right duration={3000} delay={1000} >
                        {textBylang(fetchedData, index, 'body')}
                      </Zoom>
                      </h3>



                    </div>

                  </div>

                </div>)

              })}


            </Slider>
          }



        </div>
        <a className='scrollBtn' onClick={() => scroll('section_about')}>
          <div class="boxx">
            <span></span>
            <span></span>
            <span></span>

          </div>
        </a>
      </div>


    </>
  )
}

export default SliderBanner
