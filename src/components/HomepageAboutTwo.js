import * as React from 'react'
import { homepageAboutWrap, homepageAboutContent, one } from './styles/homepageAbout.module.scss'

const homepageAboutTwo = ({ children }) => {
  return (
    <div className={homepageAboutWrap + ' ' + 'one'}>
        <div className={homepageAboutContent}>
          <h2>Built around communication, safety, and early learning</h2>
          <p>Choosing a preschool in Santa Maria is a major decision. Our goal is to help families feel informed and confident from the first tour through each stage of enrollment.</p>
          <p>Communication between parents and teachers is central to a successful early education experience, and we work hard to build lasting partnerships with families.</p>
          <p>We believe it takes a village to raise a child, and we are proud to be part of that village for families throughout Santa Maria and the surrounding community.</p>
        </div>
    </div>
  )
}

export default homepageAboutTwo
