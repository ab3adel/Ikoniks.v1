import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import "../../globalVar"


import './Portfolio.css'
import { useTranslation } from 'react-i18next';
import Isotope from 'isotope-layout'
const Portfolio = ({ textBylang }) => {
  const [t, i18n] = useTranslation();
  const [fetchedData, setfetchedData] = useState('')
  const [fetchedCats, setfetchedCats] = useState('')
  useEffect(async () => {
    const fetchCategories = async (e) => {
      try {
        const responsee = await fetch(
          `${global.apiUrl}api/website/categories?section=3`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );
        console.log(responsee.status);
        if (responsee.status == '204') { setfetchedCats([]) }
        const response = await responsee.json();
        console.log(response)
        if (response.payload) { setfetchedCats(response.payload) }
      }
      catch (err) { console.log(err); }
    }

    await fetchCategories()
  }, [i18n.language])

  useEffect(async () => {
    const fetchNodes = async (e) => {
      try {
        const responsee = await fetch(
          `${global.apiUrl}api/website/nodes?section=3`,
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

    await fetchNodes()
  }, [])

  const IsotopeReact = ({ textBylang, fetchedCats, fetchedData }) => {
    // init one ref to store the future isotope object
    const isotope = React.useRef()
    // store the filter keyword in a state
    const [filterKey, setFilterKey] = React.useState('*')

    // initialize an Isotope object with configs
    React.useEffect(() => {
      isotope.current = new Isotope('.filter-container', {
        itemSelector: '.filter-item',
        layoutMode: 'fitRows',
      })
      // cleanup
      return () => isotope.current.destroy()
    }, [])

    // handling filter key change
    React.useEffect(() => {
      filterKey === '*'
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` })
    }, [filterKey])

    const handleFilterKeyChange = key => () => setFilterKey(key)

    return (
      <>
        <ul class="filter text-center mb-0 mt-60 mt-xs-30" data-aos="fade-up"
          data-aos-duration="1200">
          <li><a onClick={handleFilterKeyChange('*')} className={filterKey == '*' && "activeFilter"}>
            {t('All works')}</a></li>
          {fetchedCats && fetchedCats.map((category, index) => {
            return (
              <li key={category.id}>
                <a onClick={handleFilterKeyChange(`cat${category.id}`)}
                  className={filterKey == `cat${category.id}` && "activeFilter"}>
                  {textBylang(fetchedCats, index, 'name')}
                </a>
              </li>
            )
          })}

        </ul>

        <hr />
        <div className='container'>
          <div className=" row filter-container">
            {fetchedData && fetchedData.map((item, index) => {
              return (
                <div key={item.id} className={`col-md-3 work-item  filter-item cat${item.category_id.toString()}`}>
                  <div className="figure effect-hover">
                    <img src={`${global.apiUrl}${item.attachment}`}
                      className="img-responsive wp-post-image lazyloaded" alt=""
                    /><div className="figcaption"><h5 className="alt-font">ndd</h5><p></p></div>
                  </div>
                </div>
              )
            })}





          </div>
        </div>

      </>
    )
  }
  return (

    <>

      <div className='section' id='Portfolio'  >
        <div className='container'>
          <div className='row text-center'>
            <div className=" col-sm-12 col-md-12  text-center">
              <h2 className='sectionTitle colorBlue boldRelawy' data-aos="flip-left"

                data-aos-easing="ease-out-cubic"
                data-aos-offset="300"

                data-aos-duration="1000"
              > {t('Portfolio')}</h2>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className="row text-center">
            <div class="col-md-8 col-md-offset-2 text-center mt-30 mt-xs-10">
              <p data-aos="fade-down"
                // data-aos-delay="500"
                data-aos-duration="800"
                class="desc">{t('some projects we did and we proud of , have a look..')}
              </p>
            </div>
          </div>
        </div>

        <IsotopeReact textBylang={textBylang} fetchedCats={fetchedCats} fetchedData={fetchedData} />
      </div>

    </>
  )
}

export default Portfolio
