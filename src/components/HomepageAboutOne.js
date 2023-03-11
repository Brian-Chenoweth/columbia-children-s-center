import * as React from 'react'
import { homepageAboutWrap, homepageAboutContent, one } from './styles/homepageAbout.module.scss'

const homepageAboutOne = ({ children }) => {
  return (
    <div className={homepageAboutWrap + ' ' + 'one'}>
        <div className={homepageAboutContent}>
          <p>Welcome to Columbia Children's Center, where we have been providing high-quality early childhood education since 1992.</p>
          <p>At Columbia Children's Center, we believe that every child is unique and special.</p>
        </div>
    </div>
  )
}

export default homepageAboutOne