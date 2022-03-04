import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"
import {hero, heroProfileImg, imgWrap, heroDescriptionBk, heroDescription, heroDate, heroBtn, homepageProgramWrap, homepageProgramWrapWrap } from './styles/homepagePrograms.module.scss'
import { button } from '../components/styles/layout.module.scss'

const homepagePrograms = ({ children }) => {
    

  return (
    <div className={homepageProgramWrapWrap}>
      <h1>Columbia Children's Center</h1><span>Programs</span>
      <div className={homepageProgramWrap}>

        <div className={hero}>
          <div className={imgWrap}>
            <StaticImage src="../images/home/young-toddler.jpg" className={heroProfileImg} alt="Young Toddler" />
          </div>
          <div className={heroDescriptionBk}>
            <div className={heroDescription}>
              <h2>Young Toddler</h2>
            </div>
            <div className={heroDate}>
              <p>18 months - 2½ years</p>
            </div>
            <Link to="/programs/young-toddler/" className={button}>Learn More</Link>
          </div>
        </div>

        <div className={hero}>
          <div className={imgWrap}>
            <StaticImage src="../images/home/early-years.jpg" className={heroProfileImg} alt="Early Years" />
          </div>
          <div className={heroDescriptionBk}>
            <div className={heroDescription}>
              <h2>Early Years</h2>
            </div>
            <div className={heroDate}>
              <p>2 years - 3 years</p>
            </div>
            <Link to="/programs/early-years/" className={button}>Learn More</Link>
          </div>
        </div>

        <div className={hero}>
          <div className={imgWrap}>
            <StaticImage src="../images/home/preschool.jpg" className={heroProfileImg} alt="Preschool" />
          </div>
          <div className={heroDescriptionBk}>
            <div className={heroDescription}>
              <h2>Preschool</h2>
            </div>
            <div className={heroDate}>
              <p>3 years - 4 years</p>
            </div>
            <Link to="/programs/preschool/" className={button}>Learn More</Link>
          </div>
        </div>


        <div className={hero}>
          <div className={imgWrap}>
            <StaticImage src="../images/home/kindergartenReadiness.jpg" className={heroProfileImg} alt="Kindergarten Readiness<" />
          </div>
          <div className={heroDescriptionBk}>
            <div className={heroDescription}>
              <h2>Kindergarten Readiness</h2>
            </div>
            <div className={heroDate}>
              <p>4 years - 5 years</p>
            </div>
            <Link to="/programs/kindergarten-readiness/" className={button}>Learn More</Link>
          </div>
        </div>

  </div>
</div>

  )
}

export default homepagePrograms