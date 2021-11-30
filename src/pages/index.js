import * as React from 'react'
import Layout from '../components/layout'
import HomepageSlider from '../components/homepageSlider'
// import { StaticImage } from 'gatsby-plugin-image'
import './styles/index.module.scss'
var kidsRaisingHands = require ('../images/home/kids-raising-hands.webp');
var kidsSmiling = require ('../images/home/kids-smiling.webp');
var cccFront = require ('../images/home/columbia-childrens-center-front.webp');

const IndexPage = () => {
  return (
    <Layout pageTitle="Columbia Children's Center" metaDesc="As soon as you enter Columbia Children&#039;s Center, you&#039;ll understand why families in Santa Maria have trusted us since 1992.">
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