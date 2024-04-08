import * as React from 'react'
import { tuitionRates, tuitionRatesWrap } from './styles/tuitionRates.module.scss'

const TuitionRates = ({ halfDayFive, halfDayFour, halfDayThree, halfDayTwo, fullDayFive, fullDayFour, fullDayThree, fullDayTwo, pageTitle, children }) => {

  return (
    <div className={tuitionRatesWrap}>
        <h2>{pageTitle} Weekly Tuition Rates</h2>
        <div className={tuitionRates}>

            {(() => {
              if (halfDayTwo) {
                return (
                  <div>
                  <h3>Half Days (leave by 12:15)</h3>
      
                  {(() => {
                    if (halfDayTwo) {
                      return (
                        <p><strong>2 days per week: </strong>{halfDayTwo}</p>
                      )
                    }
                  })()}
      
                  {(() => {
                    if (halfDayThree) {
                      return (
                        <p><strong>3 days per week: </strong>{halfDayThree}</p>
                      )
                    }
                  })()}
      
                {(() => {
                  if (halfDayFour) {
                    return (
                      <p><strong>4 days per week: </strong>{halfDayFour}</p>
                    )
                  }
                })()}
      
                {(() => {
                  if (halfDayFive) {
                    return (
                      <p><strong>5 days per week: </strong>{halfDayFive}</p>
                    )
                  }
                })()}
      
              </div>
                )
              }
            })()}


        <div>

              {(() => {
                    if ((halfDayTwo)) {
                      return (
                    <h3>Full Days (attend after 12:15)</h3>
                      )
                    }
                  })()}

            
            {(() => {
              if (fullDayTwo) {
                return (
                  <p><strong>2 days per week: </strong>{fullDayTwo}</p>
                )
              }
            })()}

            {(() => {
              if (fullDayThree) {
                return (
                  <p><strong>3 days per week: </strong>{fullDayThree}</p>
                )
              }
            })()}

            {(() => {
              if (fullDayFour) {
                return (
                  <p><strong>4 days per week: </strong>{fullDayFour}</p>
                )
              }
            })()}

            <p><strong>5 days per week: </strong>{fullDayFive}</p>

            </div>

        </div>
        <div>
            <p>There is an annual registration fee of $150 per child. A 10% discount will be given for each additional child in a family.</p>
            <p>{children}</p>
        </div>
    </div>
  )
}

export default TuitionRates