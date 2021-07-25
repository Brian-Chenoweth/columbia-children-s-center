import * as React from 'react'
import {
    tuition_rates,
  } from './tuitionRates.module.scss'



const TuitionRates = ({ halfDay, fullDay, pageTitle, children }) => {

  return (
    <div className={tuition_rates}>
        <h2>{pageTitle} Tuition Rates</h2>
        <h3>{children}</h3>
        <div>
            <h3>Half Days (leave by 12:15)</h3>
            <p><strong>5 days per week: </strong>{halfDay}</p>
        </div>
        <div>
            <h3>Full Days (attend after 12:15)</h3>
            <p><strong>5 days per week: </strong>{fullDay}</p>
        </div>
        <div>
            <p>There is an annual registration fee of $100.00 per child. A 10% discount will be given for each additional child in a family.</p>
        </div>
    </div>
  )
}

export default TuitionRates