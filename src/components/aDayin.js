import * as React from 'react'
import {
    a_day_in_wrap,
    a_day_in,
  } from './aDayin.module.scss'



const AdayIn = ({ pageTitle, children }) => {

  return (
        <div className={a_day_in_wrap}>
            <h2>A Day in Our {pageTitle} Program</h2>
            <div className={a_day_in}>
                {children}
                <h2>RANDOM CHILD ICON HERE</h2>
            </div>
        </div>
  )
}

export default AdayIn