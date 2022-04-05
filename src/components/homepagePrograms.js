import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"
import {hero, imgWrap, heroDescriptionBk, heroDescription, heroDate, homepageProgramWrap, homepageProgramWrapWrap } from './styles/homepagePrograms.module.scss'
import { button } from '../components/styles/layout.module.scss'

const homepagePrograms = ({ children }) => {
    

  return (
    <div className={homepageProgramWrapWrap}>
      <h1>Columbia Children's Center</h1><span>Programs</span>
      <div className={homepageProgramWrap}>

      <Link to="/programs/young-toddler/">
        <div className={hero}>
          <div className={imgWrap}>
            <StaticImage src="../images/home/young-toddler.jpg" alt="Young Toddler" />
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
        </Link>

        <Link to="/programs/early-years/">
        <div className={hero}>
          <div className={imgWrap}>
            <StaticImage src="../images/home/early-years.jpg" alt="Early Years" />
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
        </Link>
      
        
        <Link to="/programs/preschool/">
        <div className={hero}>
          <div className={imgWrap}>
            <StaticImage src="../images/home/preschool.jpg" alt="Preschool" />
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
        </Link>


        <Link to="/programs/kindergarten-readiness/">
        <div className={hero}>
          <div className={imgWrap}>
            <StaticImage src="../images/home/kindergartenReadiness.jpg" alt="Kindergarten Readiness<" />
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
        </Link>

  </div>
</div>

  )
}

export default homepagePrograms