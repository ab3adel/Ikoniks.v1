import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

import NavBar from '../NavBar/NavBar'
import "../../globalVar"
import { Helmet } from "react-helmet";

import ContactUs from '../ContactUs/ContactUs'
import SliderBanner from './SliderBanner/SliderBanner'
import Footer from '../Footer/Footer'
import './About3d.css'
import { useTranslation } from 'react-i18next';

const About3d = () => {
  const [t, i18n] = useTranslation();

  const textBylang = (fetchedData, index, key) => {
    console.log('text', fetchedData[index])
    if (i18n.language == 'de') { return fetchedData[index][key].gr }
    else { return fetchedData[index][key][i18n.language] }
  }
  AOS.init();

  const scroll = (ref) => {
    const divElement = document.getElementById(ref);
    divElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (

    <>
      {i18n.language == 'ar' &&
        <Helmet><link rel="stylesheet" type="text/css" href="/assets/arabicStyle/arabicStyle.css" /></Helmet>}
      <NavBar scroll={scroll} />
      {/* Slider */}
      <SliderBanner textBylang={textBylang} scroll={scroll} />
      {/* end Slider */}
      <section id="section_about" className='section'>

        <div className="container">
          <div className="row pb-40 mt-xs-20 " data-aos="zoom-in"
            data-aos-duration="600">
            <div className="col-md-12 text-center">
              <h3 className=' colorBlue boldRelawy'> {t('About')}  {' '}<b>IKONIKS</b> </h3>
            </div>
          </div>
          <div className="row text-center"

          >
            <div className="col-md-8   text-center">
              <blockquote className="about-quote ">
                <p data-aos="zoom-in"
                  data-aos-duration="1000">
                  {t('about1')}

                </p>
                <p data-aos="zoom-in"
                  data-aos-duration="1200">
                  {t('about2')}

                </p>
                <p data-aos="zoom-in"
                  data-aos-duration="1400">
                  {t('about3')} </p>
                <footer className="about-quote-author pt-4" data-aos="zoom-in"
                  data-aos-duration="1400">- Maher Al-baba, CEO -
                </footer>
              </blockquote>
            </div></div>
        </div>

      </section>

      {/* contact US */}
      <ContactUs />
      {/* end contact US*/}

      <Footer scroll={scroll} />
    </>
  )
}

export default About3d
