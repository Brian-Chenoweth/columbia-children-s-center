import * as React from 'react'
import { homepageAboutWrap, homepageAboutContent, one } from './styles/homepageAbout.module.scss'

const homepageAboutTwo = ({ children }) => {
  return (
    <div className={homepageAboutWrap + ' ' + 'one'}>
        <div className={homepageAboutContent}>
          <p>We understand that choosing a child development program for your child can be a difficult decision.</p>
          <p>We hope that our 30 years of experience will help you to feel comfortable with your decision.</p>
          <p>We believe that communication between parents and teachers is essential to the success of your child's education.</p>
          <p>We believe that it takes a village to raise a child and we look forward to being a part of your family's village.</p>
        </div>
    </div>
  )
}

export default homepageAboutTwo