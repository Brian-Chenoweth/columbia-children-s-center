import * as React from 'react'
import Layout from '../../components/layout'
import Employee from '../../components/employee'
import AdayIn from '../../components/aDayin'
import TuitionRates from '../../components/tuitionRates'
import ProgramSlider from '../../components/programSlider'
import ClassroomGoals from '../../components/classroomGoals'
import JSONData from "../../data/classroomgoals/young-toddler.json"
import JSONDat from "../../data/adayin/young-toddler.json"

const YTPage = () => {
  const pageTitle = "Young Toddler";
  return (
    <Layout pageTitle={pageTitle}>
        <ClassroomGoals pageTitle={pageTitle}> 
          {JSONData.goals.map((data, index) => {
            return <div>
                    <h3>{data.heading}</h3>
                    <ul>
                      {data.goal.map((k, i) => (
                        <li key={i}>{data.goal[i]}</li>
                      ))}
                    </ul>
                  </div>   
            })} 
        </ClassroomGoals>
        <ProgramSlider programImages="young-toddler"/>
        <AdayIn pageTitle={pageTitle} >
          <div>
            <ul>
              {JSONDat.days.map((data, index) => {
                return<li><strong>{data.time}</strong> {data.day}</li>  
              })} 
            </ul>
          </div> 
        </AdayIn>
        <TuitionRates pageTitle={pageTitle} halfDay="$229.00" fullDay="$297.00"/>
        <Employee employeeName="Young Toddler teacher 1" employeeImg="teacher-1.jpg"/>
        <Employee employeeName="Young Toddler teacher 2" employeeImg="teacher-2.jpg"/>
        <Employee employeeName="Young Toddler teacher 3" employeeImg="teacher-3.jpg"/>
    </Layout>
  )
}

export default YTPage