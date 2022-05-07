import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

import "../../globalVar"
import "./Loader.scss"
import './ContactUs.css'
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
const ContactUs = () => {
  const [t, i18n] = useTranslation();
  const [errorMessage, setErrorMessage] = useState();
  const [succesAdd, setSuccessAdd] = useState()
  const [loading, setLoading] = useState('')
  const [animat, setAnimat] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }, reset
  } = useForm();
  const onSubmit = async (data) => {
    console.log(JSON.stringify({ data }))
    setLoading(true)

    setErrorMessage('')
    setSuccessAdd('')

    try {
      const responsee = await fetch(
        `${global.apiUrl}api/website/contacts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': 'https://localhost:3000',
            'Access-Control-Allow-Credentials': 'true',
            Accept: "application/json",
          },
          body: JSON.stringify(data),

        }
      );
      const response = await responsee.json();
      console.log('response', response);
      console.log(response);

      if (response.success) {
        setSuccessAdd(t('succes'))
        setAnimat(!animat)
        const timer = setTimeout(() => {
          setSuccessAdd('')
        }, 8000);
        setLoading(false)
        reset({})
        return () => clearTimeout(timer);
      }
      else {
        setErrorMessage(response.messages)
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false)
    // reset({})
  };
  const contact = useRef(null);
  return (


    <>
      <div className='section' id='ContactUs' ref={contact}>
        <div className='container'>
          <div className='row text-center'>
            <div className=" col-sm-12 col-md-12  text-center" data-aos="fade-down"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <h2 className='sectionTitle colorBlue'> {t('Contact Us')}</h2>
            </div>
          </div>
        </div>

        <div className='container'>
          <div class="row mt-20 text-center"
          >
            <div class="col-md-8 col-md-offset-1 text-center" data-relative-input="true"
              className='paralaxClass'>
              <p data-depth="0.2" data-relative-input="true" className="desc paralaxClass">
                {t('msg1')}
                <img data-depth="0.6" draggable="false" role="img" className="emoji" alt="🙂" src="https://s.w.org/images/core/emoji/13.1.0/svg/1f642.svg" />
              </p>
            </div>
            <div class="col-12 col-sm-12 col-md-8 col-md-offset-1 text-center formCont">
              <form className='col-12 col-sm-12 col-md-12 text-center' onSubmit={handleSubmit(onSubmit)}>

                {loading && <div className='loaderCont'>
                  <div class="loader">
                    <div class="box"></div>
                    <div class="box"></div>
                  </div>
                </div>}
                <div className='col-12 col-sm-12 col-md-12 p-2 inputCont'
                  data-aos="fade-down"
                  data-aos-duration="200"
                  data-aos-easing="ease-in-sine"
                >
                  <input type='text' className='formInput' autoComplete='off'
                    {...register("name", { required: true })} placeholder={t('Name')} />
                  {errors.name && <> <p className='errorMsg'>{t('Name is required.')}</p></>}
                </div>
                <div className='col-12 col-sm-12 col-md-6 p-2 inputCont'
                  data-aos="fade-down"
                  data-aos-duration="300"
                  data-aos-easing="ease-in-sine"
                >
                  <input type='email' className='formInput'
                    {...register("email", { required: true })} placeholder={t('Email')} />
                  {errors.email && <> <p className='errorMsg'>{t('Email is required.')}</p></>}
                </div>
                <div className='col-12 col-sm-12 col-md-6 p-2 inputCont'
                  data-aos="fade-down"
                  data-aos-duration="400"
                  data-aos-easing="ease-in-sine"
                >
                  <input type='text' className='formInput' autoComplete='off'
                    {...register("company", { required: true })} placeholder={t('Company')} />
                </div>
                <div className='col-12 col-sm-12 col-md-12 p-2 inputCont'
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-easing="ease-in-sine"
                >
                  <input type='text' className='formInput' autoComplete='off'
                    {...register("subject", { required: true })} placeholder={t('Subject')} />
                  {errors.subject && <> <p className='errorMsg'>{t('Subject is required.')}</p></>}
                </div>
                <div className='col-12 col-sm-12 col-md-12 p-2 inputCont'
                  data-aos="fade-down"
                  // data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <textarea type='text' className='formInput' autoComplete='off'
                    {...register("message", { required: true })}
                    rows='6' placeholder={t('Message')} />
                  {errors.message && <> <p className='errorMsg'>{t('Message is required.')}</p></>}
                </div>
                {succesAdd && <>  <div className='col-12 col-sm-12 col-md-12 p-2 inputCont animatemsg'>
                  <Fade left spy={animat} duration={2000} >
                    <p className='successMsg'>{t('succes')}</p>
                  </Fade>
                </div></>}
                <div className='submitCont p-2'
                  data-aos="fade-up"
                  data-aos-offset="-300"
                // data-aos-easing="ease-in-sine"
                ><button className='submitBtn'>{t('Send Message')}</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
