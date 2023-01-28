import * as React from 'react'
import Layout from '.././components/layout'
import Employee from '.././components/employee'
import AdayIn from '.././components/aDayin'
import TuitionRates from '.././components/tuitionRates'
import ProgramSlider from '.././components/programSlider'
import JSONDat from ".././data/adayin/preschool-yellow.json"
import { StaticImage } from 'gatsby-plugin-image'
import { introImage } from '.././components/styles/page.module.scss'
import { employeesWrap } from '.././components/styles/employee.module.scss'


const PPage = () => {
    
  const pageTitle = "Preschool";
  const metaDesc = "Our goal is to provide a fun, safe, positive environment; emphasizing on confidence building and self-esteem for children 3 years to 4 years.";
  const ageRange = "3 years to 4 years";
  

    return (
      <Layout pageTitle={pageTitle} metaDesc={metaDesc}>
        <StaticImage src=".././images/home/preschool.jpg" width={500} className={introImage}/>
        <h2 id="age">{ageRange}</h2>
        <p>Our goal is to provide a fun, safe, positive environment; emphasizing on confidence building and self-esteem. The Preschool Program concentrates on listening and basic cognitive skills such as colors, shapes and alphabet and number recognition.</p>
        <p>Our daily schedule includes circle time, which promotes social development, sharing, cooperation and participation as a group. Math and Science activities reinforce practice counting, recognizing numbers, colors, sizes and shapes, as well as scissor practice. Story time and a language arts activity promote language development, alphabet and name recognition, individual expression and creativity. We have music and movement to develop skills of expression, rhythm, listening, coordination, as well as large motor skills.</p>
        <p>Our classroom has centers such as Science, Reading, Dramatic Play, Manipulative, and Art. These centers encourage your child's learning experience. Our maximum teacher to child ratio is 1:12.</p>
        <ProgramSlider programImages="preschool"/>
        <AdayIn pageTitle="Preschool">
          <div>
            <h3>Yellow Group</h3>
            <ul>
              {JSONDat.days.map((data, index) => (
                <li key={index}>
                  <strong>{data.time}</strong> {data.day}
                </li>
              ))} 
            </ul>
          </div> 
        </AdayIn>
        <AdayIn pageTitle="Preschool" group="red">
          <div>
            <h3>Red Group</h3>
            <ul>
              {JSONDat.days.map((data, index) => (
                <li key={index}>
                  <strong>{data.time}</strong> {data.day}
                </li>
              ))} 
            </ul>
          </div> 
        </AdayIn>

        <TuitionRates 
            pageTitle={pageTitle} 
            halfDayFive="$210.00" 
            fullDayFive="$275.00" 
            halfDayFour="$180.00" 
            fullDayFour="$230.00" 
            halfDayThree="$145.00" 
            fullDayThree="$190.00" 
            halfDayTwo="$115.00" 
            fullDayTwo="$145.00">
            Single extra days may be arranged with the director at a rate of half day: $63.00, full day: $79.00.
        </TuitionRates>
        <div className={employeesWrap}>
            <Employee 
                employeeName="Brittney Willoughby" 
                employeeTitle="Preschool Lead Teacher" 
                employeeImg="Brittney"
            />
            <Employee 
                employeeName="Emily Cavin" 
                employeeTitle="Preschool Teacher" 
                employeeImg="Emily"
            />
            <Employee 
                employeeName="Litzey Dominguez" 
                employeeTitle="Preschool Teacher Assistant" 
                employeeImg="Litzey"
            />
            <Employee 
                employeeName="Brigitte Ortiz-Tello" 
                employeeTitle="Outdoor Classroom Teacher" 
                employeeImg="Brigitte"
            />
        </div>

      </Layout>
    )
  }
  
  export default PPage