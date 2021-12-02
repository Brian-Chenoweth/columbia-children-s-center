import * as React from 'react'
import {hero, heroProfileImg, heroDescriptionBk, heroLogo, heroDescription, heroDate, heroBtn } from './styles/homepagePrograms.module.scss'
var youngToddler = require ('../images/home/young-toddler.jpg');

const homepagePrograms = ({ children }) => {
    

  return (
<div className={hero}>

  <img className={heroProfileImg} src={youngToddler.default} alt="" />

  <div className={heroDescriptionBk}></div>

  {/* <div className={heroLogo}>
    <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557291375.3948_Dy2yZu_n.jpg" alt="" />
  </div> */}

  <div className={heroDescription}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>

  <div className={heroDate}>
    <p>20.02.2019</p>
  </div>

  <div className={heroBtn}>
    <a href="#">Learn More</a>
  </div>

</div>
  )
}

export default homepagePrograms