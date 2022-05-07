import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import "../../globalVar"
import { Helmet } from "react-helmet";
import './NavBar.css'
import MobileNav from '../MobileNav/MobileNav'

import { useTranslation } from 'react-i18next';
import { useHistory } from "react-router-dom";




const NavBar = ({ scroll }) => {
  let history = useHistory();
  const [t, i18n] = useTranslation();
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const logoFunc = () => {
      window.addEventListener("scroll", () => {

        if (window.scrollY < 50) { setSticky(false) }
        else { setSticky(true) }
      });
    }
    logoFunc()
  }, []);

  const langChange = (langss) => {
    console.log(langss)
    i18n.changeLanguage(langss);
    // console.log(lang)
  }

  return (


    <>
      {/* desktop Nav */}
      <div style={{ visibility: 'hidden' }} id='top'></div>
      <nav className={sticky ? "navbar navbar-sticky desktop" : "  navbar desktop"}  >
        <div className="navbar--logo-holder" onClick={() => history.push('/')} >
          {sticky ? <div className="navbar--logo animateSpan">IK<span>O</span><span>N</span>IKS</div>
            :
            <div className="navbar--logo ">IK<span>O</span><span>N</span>IKS</div>}

        </div>
        <ul className="navbar--link">
          <li className="navbar--link-item" onClick={() => { scroll('Portfolio') }}  >{t('Portfolio')}</li>
          <li className="navbar--link-item" onClick={() => { scroll('OurSevices') }}  >{t('Our Sevices')}</li>
          <li className="navbar--link-item" onClick={() => { scroll('ContactUs') }}>{t('Contact Us')}</li>
          <li className={`navbar--link-item ${i18n.language == 'ar' && 'activLng'}`}
            onClick={() => { langChange('ar') }} >AR</li>
          <li className={`navbar--link-item ${i18n.language == 'de' && 'activLng'}`}
            onClick={() => { langChange('de') }}>DE</li>
          <li className={`navbar--link-item ${i18n.language == 'en' && 'activLng'}`}
            onClick={() => { langChange('en') }}>EN</li>
        </ul>
      </nav>
      {/* end desktop Nav */}

      <MobileNav langChange={langChange} scroll={scroll} />



    </>
  )
}

export default NavBar
