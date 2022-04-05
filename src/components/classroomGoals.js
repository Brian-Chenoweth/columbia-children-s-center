import * as React from 'react'
import { classroomGoalsWrap, classroomGoals } from './styles/classroomGoals.module.scss'

const ClassroomGoals = ({ pageTitle, children }) => {
  return (
        <div className={classroomGoalsWrap}>
            <h2>{pageTitle} Classroom Goals</h2>
            <div className={classroomGoals}>
                {children}   
            </div>
        </div>
  )
}

export default ClassroomGoals