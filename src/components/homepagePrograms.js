import * as React from 'react'
import {hero, heroProfileImg, imgWrap, heroDescriptionBk, heroDescription, heroDate, heroBtn } from './styles/homepagePrograms.module.scss'
import { button } from '../components/styles/layout.module.scss'
var youngToddler = require ('../images/home/young-toddler.jpg');
var earlyYears = require ('../images/home/early-years.jpg');

const homepagePrograms = ({ children }) => {
    

  return (
    <div>

    <div className={hero}>

      <div className={imgWrap}>
        <img className={heroProfileImg} src={youngToddler.default} alt="" />
      </div>

      <div className={heroDescriptionBk}>

        <div className={heroDescription}>
          <h2>Young Toddler</h2>
        </div>

        <div className={heroDate}>
          <p>18 months - 2½ years</p>
        </div>

        <a href="#" className={button}>Learn More</a>

      </div>

    </div>

    <div className={hero}>

    <div className={imgWrap}>
      <img className={heroProfileImg} src={earlyYears.default} alt="" />
    </div>

    <div className={heroDescriptionBk}>

      <div className={heroDescription}>
        <h2>Early Years</h2>
      </div>

      <div className={heroDate}>
        <p>2 years - 3 years</p>
      </div>

      <a href="#" className={button}>Learn More</a>

    </div>

</div>

</div>

  )
}

export default homepagePrograms