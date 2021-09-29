import * as React from 'react'
import { footerContent, socialIcons } from './styles/footer.module.scss'

const Footer = () => {
  return (
    <footer>
      <div className={footerContent}>
        <div>
          <p>Hours of operation</p>
          <p>Monday-Friday: 7:00 a.m. - 5:30 p.m.</p>
        </div>
        <div className={socialIcons}>
          <p>Social Icon 1 | Social Icon 2 | Social Icon 3</p>
          <p>&copy; {new Date().getFullYear()} Columbia Children's Center. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 