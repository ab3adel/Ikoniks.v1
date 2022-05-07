import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import "../../globalVar"
import { Helmet } from "react-helmet";
import './MobileNav.css'
import { useTranslation } from 'react-i18next';

const NavBar = ({ langChange, scroll }) => {
  const [t, i18n] = useTranslation();
  const [sticky, setSticky] = useState(false);
  const [click, setClick] = React.useState(false);

  const handleClick = (id) => {
    setClick(!click);
    scroll(id)
  }
  const handleClickClose = () => { setClick(!click); }
  const handleClickLang = (lng) => {
    setClick(false)
    langChange(lng)

  }
  const Close = () => setClick(false);
  useEffect(() => {
    const logoFunc = () => {
      window.addEventListener("scroll", () => {
        // Close()
        if (window.scrollY < 50) { setSticky(false) }
        else { setSticky(true) }
        if (window.innerWidth < 800) {
          document.getElementById('banner').style.backgroundPositionY = window.scrollY * 0.5 + 'px';
        }

      });
    }
    logoFunc()
  }, []);
  return (


    <>


      <div className={click ? "main-container mobile" : "mobile "} onClick={() => Close()} />
      <nav className={sticky ? "navbar navbar-sticky mobile" : "mobile navbar"} onClick={(e) => e.stopPropagation()}>
        {/* <div className="nav-container"> */}
        <div className="navbar--logo-holder">
          {sticky ? <div className="navbar--logo animateSpan">IK<span>O</span><span>N</span>IKS</div>
            :
            <div className="navbar--logo ">IK<span>O</span><span>N</span>IKS</div>}

        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              exact
              to="/"
              // activeClassName="active"
              className="nav-links"
              onClick={() => click ? handleClick('OurSevices') : null}
            >
              {t('Our Sevices')}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              exact
              to="/"
              // activeClassName="active"
              className="nav-links"
              onClick={() => click ? handleClick('ContactUs') : null}
            >
              {t('Contact Us')}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              exact
              to="/"
              // activeClassName="active"
              className="nav-links"
              onClick={() => click ? handleClickLang('en') : null}
            >
              English
            </Link>
          </li>
          <li className="nav-item">
            <Link
              exact
              to="/"
              // activeClassName="active"
              className="nav-links"
              onClick={() => click ? handleClickLang('de') : null}
            >
              Deutch
            </Link>
          </li>
          <li className="nav-item">
            <Link
              exact
              to="/"
              // activeClassName="active"
              className="nav-links"
              onClick={() => click ? handleClickLang('ar') : null}
            >
              Arabic
            </Link>
          </li>

        </ul>
        <div className="nav-icon" onClick={handleClickClose}>
          <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
        {/* </div> */}
      </nav>

    </>
  )
}

export default NavBar
