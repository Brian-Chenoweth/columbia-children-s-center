import * as React from 'react'
import Layout from '../components/layout'
import HomepageSlider from '../components/homepageSlider'
// import { StaticImage } from 'gatsby-plugin-image'
import './styles/index.module.scss'
var kidsRaisingHands = require ('../images/home/kids-raising-hands.png');
var kidsSmiling = require ('../images/home/kids-smiling.png');
var cccFront = require ('../images/home/columbia-childrens-center-front.png');

const IndexPage = () => {
  return (
    <Layout pageTitle="">
      <HomepageSlider>
        <div style={{ backgroundImage: `url(${kidsRaisingHands.default})`}}></div>
        <div style={{ backgroundImage: `url(${cccFront.default})`}}></div>
        <div style={{ backgroundImage: `url(${kidsSmiling.default})`}}></div>
        <div style={{ backgroundImage: `url(${kidsRaisingHands.default})`}}></div>
        <div style={{ backgroundImage: `url(${cccFront.default})`}}></div>
        <div style={{ backgroundImage: `url(${kidsSmiling.default})`}}></div>
      </HomepageSlider>
    </Layout>
  )
}

export default IndexPage