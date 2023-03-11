import * as React from 'react'
import Layout from '../components/layout'
import HomepageSlider from '../components/homepageSlider'
import HomepagePrograms from '../components/homepagePrograms'
import HomepageAboutOne from '../components/HomepageAboutOne'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import './styles/index.module.scss'
import { homepageSliderWrap, homepageSliderWrapTwo } from '.././components/styles/homepageSlider.module.scss'
import { StaticImage } from 'gatsby-plugin-image'

var kidsRaisingHands = require ('../images/home/kids-raising-hands.webp');
var kidsSmiling = require ('../images/home/kids-smiling.webp');
var cccFront = require ('../images/home/columbia-childrens-center-front.webp');
var logo = require ('../images/logo-small.png');

const IndexPage = () => {
  return (

    <ParallaxProvider>
    <Layout pageTitle="Columbia Children's Center" metaDesc="As soon as you enter Columbia Children&#039;s Center, you&#039;ll understand why families in Santa Maria have trusted us since 1992.">

      <div className={homepageSliderWrap}>

        <ParallaxBanner
          layers={[
            { image: kidsSmiling.default, speed: -60, style: {backgroundSize:'contain',} },
            { image: logo.default, speed: -20, style: {backgroundRepeat:'no-repeat', backgroundSize:'200px, auto'} },
          ]}
          className="aspect-[2/1]"
        />

      </div>

      
      <HomepageAboutOne />

      <div className={homepageSliderWrapTwo}>

      <ParallaxBanner
          layers={[
            { image: kidsRaisingHands.default, speed: -60, style: {inset:'-225px, 0px'} },
          ]}
          className="aspect-[2/1]"
        />

      </div>
      
      <HomepagePrograms />

    </Layout>

    </ParallaxProvider>
  )
}

export default IndexPage