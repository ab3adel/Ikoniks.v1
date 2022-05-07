import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Parallax from 'parallax-js'
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';
import Fade from 'react-reveal/Fade';
import { Helmet } from "react-helmet";
import "../../globalVar"
import './DynamicSection.css'
import { useTranslation } from 'react-i18next';

const DynamicSection = ({ textBylang }) => {
  const [t, i18n] = useTranslation();
  const [fetchedData, setfetchedData] = useState('')
  useEffect(async () => {
    const fetchServices = async (e) => {
      try {
        const responsee = await fetch(
          `${global.apiUrl}api/website/nodes?category=2`,
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

    await fetchServices()
  }, [i18n.language])



  return (


    <>


      <div className='section   ourServices  ' id='OurSevices'>
        <div className='container'>
          <div className='row text-center'>
            <div className=" col-sm-12 col-md-12  text-center" data-aos="zoom-in">
              <h2 className='sectionTitle colorBlue boldRelawy'> {t('test')}</h2>

            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row text-center' data-aos="zoom-in"
            data-aos-duration="1500">
            <div className='col-md-12 text-center'   >


              <div data-relative-input="true"
                // id="scene4"
                className='paralaxClass' >
                <div data-depth="0.4" >

                  <img className='slideImg' />


                </div>
              </div>

              <div data-relative-input="true"
                // id="scene4"
                className='paralaxClass'
              >
                <div data-depth="0.2" >

                  <h1 className='colorWhite  text-center boldRelawy'>

                    {/* {textBylang(fetchedData, index, 'title')} */}
                    test test

                  </h1>


                </div>

              </div>
              <div data-relative-input="true"
                // id="scene4"  delay={1000}
                className='paralaxClass'
              >
                <div data-depth="0.1" >
                  <h5 className='colorWhite text-center Sectiontext'>

                    {/* {textBylang(fetchedData, index, 'body')} */}
                    test test test test test test test test test test test test test test test test test test test test test  test test test

                  </h5>



                </div>

              </div>

            </div>




          </div>
        </div>
      </div>


    </>
  )
}

export default DynamicSection
