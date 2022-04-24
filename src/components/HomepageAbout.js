import * as React from 'react'
import { homepageAboutWrap, homepageAboutContent } from './styles/homepageAbout.module.scss'

const homepageAbout = ({ children }) => {
  return (
    <div className={homepageAboutWrap}>
        <div className={homepageAboutContent}>
            <h2>About Us</h2>
            <p>Since 1992, Columbia Children's Center has been serving children 18 months thru 6 years, operating Monday - Friday: 7:00 am - 5:30 pm.</p>
            <p>We are conveniently located on Stowell Road close to the 101 freeway and Allan Hancock College. Our state of the art building was designed to be a childcare program offering many unique features including: fire sprinklers throughout, open and bright classrooms, child sized toilets, secure entry and plenty of parking for parents to drop off and pick up.</p>
        </div>
    </div>
  )
}

export default homepageAbout