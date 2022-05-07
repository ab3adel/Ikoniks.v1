import React, { useState, useEffect } from 'react'
import "../../globalVar"
import './Footer.css'
import { useTranslation } from 'react-i18next';

const Footer = ({ scroll }) => {
  const [t, i18n] = useTranslation();



  return (

    <>
      <footer class="page-footer">
        <div class="container text-center">
          <div class="social-links">
            <ul class="footer-social">
              <li data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1000"><a title="facebook" target="_blank" href="https://www.facebook.com/Ikoniks-101486788394291">
                  <i class="fa fa-facebook"></i></a></li>
              <li data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"><a title="twitter" target="_blank" href="https://twitter.com/IKONIKS5 ">
                  <i class="fa fa-twitter"></i></a></li>
              <li data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="1000"><a title="instagram" target="_blank" href="https://www.instagram.com/i_koniks/?hl=de"><i class="fa fa-instagram"></i></a></li>
              <li data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1000"><a title="youtube" target="_blank" href="https://www.youtube.com/channel/UC-ggTO1LtzSKyUIsHBgr0pQ"><i class="fa fa-youtube"></i></a></li>
              <li data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="1000" ><a title="pinterest" target="_blank" href="https://www.pinterest.de/ikoniks2020/_saved/"><i class="fa fa-pinterest"></i></a>
              </li>
            </ul>
          </div>
          <div data-relative-input="true"
            className='paralaxClass'
          >
            <div data-depth="0.3" class="copy-right mt-50">© IKONIKS 2021</div>
          </div>

        </div>

        <a onClick={() => { scroll('top') }} class="scroll scroll-to-top"

        >
          <i class="fa fa-angle-up"></i></a>

      </footer>
    </>
  )
}

export default Footer
