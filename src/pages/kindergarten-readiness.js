import * as React from 'react'
import Layout from '.././components/layout'
import Employee from '.././components/employee'
import AdayIn from '.././components/aDayin'
import TuitionRates from '.././components/tuitionRates'
import ProgramSlider from '.././components/programSlider'
import ClassroomGoals from '.././components/classroomGoals'
import JSONData from ".././data/classroomgoals/kindergarten-readiness.json"
import JSONDat from ".././data/adayin/kindergarten-readiness.json"
import { StaticImage } from 'gatsby-plugin-image'
import { introImage } from '.././components/styles/page.module.scss'
import { employeesWrap } from '.././components/styles/employee.module.scss'

const KRPage = () => {
    const pageTitle = "Kindergarten Readiness";
    return (
      <Layout pageTitle={pageTitle} metaDesc="We provide a nurturing, caring and safe environment for your child to learn and grow through age-appropriate experiences for children 4 years to 5 years.">
        <StaticImage src=".././images/home/kindergartenReadiness.jpg" width={500} className={introImage}/>
        <h2 id="age">4 years to 5 years</h2>
        <p>Here at Columbia Children's Center we provide a nurturing, caring and safe environment for your child to learn and grow through age-appropriate experiences. We are very proud of our Kindergarten Readiness Program. Our goal is to enhance your child's confidence and prepare them for a successful school experience. We believe that warmth is a vital element for a growing child. Our curriculum is designed so that your child will discover that learning is fun while making new friends and building strong relationships with their teachers who deeply care about their happiness and education.</p>
        <p>We have a variety of Centers in our classroom. Your child will be involved in hands-on and interactive activities to develop their emotional, social, and academic skills. They will be provided many opportunities to explore, communicate and create in a warm and loving atmosphere.</p>
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
        <ProgramSlider programImages="kindergarten-readiness"/>
        <AdayIn pageTitle={pageTitle} >
          <div>
            <ul>
              {JSONDat.days.map((data, index) => {
                return<li><strong>{data.time}</strong> {data.day}</li>  
              })} 
            </ul>
          </div> 
        </AdayIn>
        <TuitionRates pageTitle={pageTitle} halfDayFive="$182.00" fullDayFive="$237.00" halfDayFour="$156.00" fullDayFour="$200.00" halfDayThree="$126.00" fullDayThree="$163.00" halfDayTwo="$97.00" fullDayTwo="$126.00">Single extra days may be arranged with the director at a rate of half day: $63.00, full day: $79.00.</TuitionRates>
        <div className={employeesWrap}>
          <Employee employeeName="Nicolle Rogers" employeeTitle="Blue Group Teacher" employeeImg="Nicolle"/>
          <Employee employeeName="Samantha Wise" employeeTitle="Green Group Teacher" employeeImg="Samantha"/>
          <Employee employeeName="Litzey Dominguez" employeeTitle="Assistant" employeeImg="Litzey"/>
          <Employee employeeName="Brigette Ortiz-Tello" employeeTitle="Assistant" employeeImg="Brigette"/>
        </div>
      </Layout>
    )
  }
  
  export default KRPage