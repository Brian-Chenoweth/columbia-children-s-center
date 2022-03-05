import * as React from 'react'
import Layout from '../../components/layout'
import Employee from '../../components/employee'
import AdayIn from '../../components/aDayin'
import TuitionRates from '../../components/tuitionRates'
import ProgramSlider from '../../components/programSlider'
import ClassroomGoals from '../../components/classroomGoals'
import JSONData from "../../data/classroomgoals/preschool.json"
import JSONDat from "../../data/adayin/preschool-yellow.json"
import JSONDa from "../../data/adayin/preschool-red.json"
import { employeesWrap } from '../../components/styles/employee.module.scss'

const PPage = () => {
    const pageTitle = "Preschool";
    return (
      <Layout pageTitle={pageTitle} metaDesc="Our goal is to provide a fun, safe, positive environment; emphasizing on confidence building and self-esteem for children 3 years to 4 years.">
        <h2>3 years to 4 years</h2>
        <p>Our goal is to provide a fun, safe, positive environment; emphasizing on confidence building and self-esteem. The Preschool Program concentrates on listening and basic cognitive skills such as colors, shapes and alphabet and number recognition.</p>
        <p>Our daily schedule includes circle time, which promotes social development, sharing, cooperation and participation as a group. Math and Science activities reinforce practice counting, recognizing numbers, colors, sizes and shapes, as well as scissor practice. Story time and a language arts activity promote language development, alphabet and name recognition, individual expression and creativity. We have music and movement to develop skills of expression, rhythm, listening, coordination, as well as large motor skills.</p>
        <p>Our classroom has centers such as Science, Reading, Dramatic Play, Manipulative, and Art. These centers encourage your child’s learning experience. Our maximum teacher to child ratio is 1:12.</p>
        <h1>*** ADD SINGLE IMAGE HERE ***</h1>
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
        <ProgramSlider programImages="preschool"/>
        <AdayIn pageTitle="preschool-yellow" >
        <div>
            <h3>Yellow Group</h3>
            <ul>
            {JSONDat.days.map((data, index) => {
                return<li><strong>{data.time}</strong> {data.day}</li>  
            })} 
            </ul>
        </div> 
        </AdayIn>
        <AdayIn pageTitle="preschool-red" >
          <div>
              <h3>Red Group</h3>
            <ul>
              {JSONDat.days.map((data, index) => {
                return<li><strong>{data.time}</strong> {data.day}</li>  
              })} 
            </ul>
          </div> 
        </AdayIn>
        <TuitionRates pageTitle={pageTitle} halfDayFive="$182.00" fullDayFive="$237.00" halfDayFour="$156.00" fullDayFour="$200.00" halfDayThree="$126.00" fullDayThree="$163.00" halfDayTwo="$97.00" fullDayTwo="$126.00">Single extra days may be arranged with the director at a rate of half day: $63.00, full day: $79.00.</TuitionRates>
        <div className={employeesWrap}>
          <Employee employeeName="Emily Cavin" employeeTitle="Red Group Teacher" employeeImg="Emily"/>
          <Employee employeeName="Kayla Matthews" employeeTitle="Yellow Group Teacher" employeeImg="Kayla"/>
          <Employee employeeName="Brittney Willoughby" employeeTitle="Assistant" employeeImg="Brittney"/>
          <Employee employeeName="Jessica Uribe" employeeTitle="Assistant" employeeImg="Jessica"/>
          <Employee employeeName="Luisa Guillen" employeeTitle="Assistant" employeeImg="Luisa"/>
        </div>
      </Layout>
    )
  }
  
  export default PPage