import * as React from 'react'
import {hero, heroProfileImg, imgWrap, heroDescriptionBk, heroDescription, heroDate, heroBtn } from './styles/homepagePrograms.module.scss'
import { button } from '../components/styles/layout.module.scss'
var youngToddler = require ('../images/home/young-toddler.jpg');

const homepagePrograms = ({ children }) => {
    

  return (
    <div className={hero}>

      <div className={imgWrap}>
        <img className={heroProfileImg} src={youngToddler.default} alt="" />
      </div>

      <div className={heroDescriptionBk}>

        <div className={heroDescription}>
          <h2>Young Toddler</h2>
        </div>

        <div className={heroDate}>
          <p>18 months to 2½ years</p>
        </div>

        <a href="#" className={button}>Learn More</a>

      </div>

    </div>
  )
}

export default homepagePrograms