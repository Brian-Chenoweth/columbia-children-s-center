import * as React from 'react'
import Layout from '.././components/layout'
import Employee from '.././components/employee'
import AdayIn from '.././components/aDayin'
import TuitionRates from '.././components/tuitionRates'
import ProgramSlider from '.././components/programSlider'
import JSONDat from ".././data/adayin/kindergarten-readiness.json"
import { StaticImage } from 'gatsby-plugin-image'
import { introImage } from '.././components/styles/page.module.scss'
import { employeesWrap } from '.././components/styles/employee.module.scss'

const KRPage = () => {
    
    const pageTitle = "Kindergarten Readiness";
    const metaDesc = "We provide a nurturing, caring and safe environment for your child to learn and grow through age-appropriate experiences for children 4 years to 5 years.";
    const ageRange = "4 years to 5 years";



    return (
      <Layout pageTitle={pageTitle} metaDesc={metaDesc}>
        <StaticImage src=".././images/home/kindergartenReadiness.jpg" width={500} className={introImage}/>
        <h2 id="age"  style={{marginTop: "0"}}>{ageRange}</h2>
        <p>Here at Columbia Children's Center we provide a nurturing, caring and safe environment for your child to learn and grow through age-appropriate experiences. We are very proud of our Kindergarten Readiness Program. Our goal is to enhance your child's confidence and prepare them for a successful school experience. We believe that warmth is a vital element for a growing child. Our curriculum is designed so that your child will discover that learning is fun while making new friends and building strong relationships with their teachers who deeply care about their happiness and education.</p>
        <p>We have a variety of Centers in our classroom. Your child will be involved in hands-on and interactive activities to develop their emotional, social, and academic skills. They will be provided many opportunities to explore, communicate and create in a warm and loving atmosphere.</p>
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
        <TuitionRates pageTitle={pageTitle} halfDayFive="$210.00" fullDayFive="$275.00" halfDayFour="$180.00" fullDayFour="$230.00" halfDayThree="$145.00" fullDayThree="$190.00" halfDayTwo="$115.00" fullDayTwo="$145.00">Single extra days may be arranged with the director at a rate of half day: $63.00, full day: $79.00.</TuitionRates>
        <div className={employeesWrap}>
          <Employee employeeName="Nicolle Rogers" employeeTitle="Kindergarten Readiness Lead Teacher" employeeImg="Nicolle"/>
          <Employee employeeName="Sam Wise" employeeTitle="Kindergarten Readiness Lead Teacher" employeeImg="Sam"/>
          <Employee employeeName="Brigitte Ortiz-Tello" employeeTitle="Outdoor Classroom Teacher" employeeImg="Brigitte"/>
        </div>
      </Layout>
    )
  }
  
  export default KRPage