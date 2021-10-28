import * as React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
// import { container, heading } from './styles/layout.module.scss'
import { homepageSliderWrap } from './styles/homepageSlider.module.scss'

const homepageSlider = ({ children }) => {

  return (
    <div className={homepageSliderWrap}>
        { children }
    </div>
  )
}

export default homepageSlider