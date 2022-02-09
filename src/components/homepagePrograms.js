import * as React from 'react'
import {hero, heroProfileImg, imgWrap, heroDescriptionBk, heroDescription, heroDate, heroBtn, homepageProgramWrap } from './styles/homepagePrograms.module.scss'
import { button } from '../components/styles/layout.module.scss'
var youngToddler = require ('../images/home/young-toddler.jpg');
var earlyYears = require ('../images/home/early-years.jpg');
var preschool = require ('../images/home/preschool.jpg');
var kindergartenReadiness = require ('../images/home/kindergartenReadiness.jpg');

const homepagePrograms = ({ children }) => {
    

  return (
    <div className={homepageProgramWrap}>

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

          <a href="/programs/young-toddler/" className={button}>Learn More</a>

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

          <a href="/programs/early-years/" className={button}>Learn More</a>

        </div>

      </div>


      <div className={hero}>

        <div className={imgWrap}>
          <img className={heroProfileImg} src={preschool.default} alt="" />
        </div>

        <div className={heroDescriptionBk}>

          <div className={heroDescription}>
            <h2>Preschool</h2>
          </div>

          <div className={heroDate}>
            <p>3 years - 4 years</p>
          </div>

          <a href="/programs/preschool/" className={button}>Learn More</a>

        </div>

      </div>


      <div className={hero}>

        <div className={imgWrap}>
          <img className={heroProfileImg} src={kindergartenReadiness.default} alt="" />
        </div>

        <div className={heroDescriptionBk}>

          <div className={heroDescription}>
            <h2>Kindergarten Readiness</h2>
          </div>

          <div className={heroDate}>
            <p>4 years - 5 years</p>
          </div>

          <a href="/programs/kindergarten-readiness/" className={button}>Learn More</a>

        </div>

      </div>

</div>

  )
}

export default homepagePrograms