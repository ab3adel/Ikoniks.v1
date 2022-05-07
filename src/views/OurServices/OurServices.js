import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import "../../globalVar"
import './OurServices.css'
import { useTranslation } from 'react-i18next';

const OurServices = ({ textBylang }) => {
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
              <h2 className='sectionTitle'> {t('Our Services')}</h2>

            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row text-center' data-aos="zoom-in"
            data-aos-duration="1500">
            {fetchedData && fetchedData.map((service, index) => {
              return (

                <div className=" col-sm-6 col-md-4  text-center" key={service.id} >
                  <div className="service-item">
                    {/* <i className="fa fas fa-cube"></i> */}
                    <img src={`${global.apiUrl}${service.attachment}`} className='slideImg' />
                    <h5 className="alt-font">
                      {textBylang(fetchedData, index, 'title')}
                    </h5>
                    <div className="service-desc">
                      <p></p>
                      <p>
                        {textBylang(fetchedData, index, 'body')}
                      </p>
                      <p></p>
                    </div>
                  </div>
                </div>

              )



            })}



          </div>
        </div>
      </div>


    </>
  )
}

export default OurServices
