import * as React from 'react'
import Layout from '../components/layout'
import Employee from '../components/employee'
import AdayIn from '../components/aDayin'
import TuitionRates from '../components/tuitionRates'
import ProgramSlider from '../components/programSlider'
import JSONDat from "../data/adayin/early-years.json"
import { StaticImage } from 'gatsby-plugin-image'
import { introImage } from '.././components/styles/page.module.scss'
import { employeesWrap } from '.././components/styles/employee.module.scss'

const EYPage = () => {
  const pageTitle = "Early Years";
  const metaDesc = "Our classroom promotes independence through play, art expression and teacher directed activities for kids 2 years to 3 years.";
  const ageRange = "2 years to 3 years";

  return (
  <Layout pageTitle={pageTitle} metaDesc={metaDesc}>
        <StaticImage src=".././images/home/early-years.jpg" width={500} className={introImage}/>
        <h2 id="age">{ageRange}</h2>
        <p>Our classroom promotes independence through play, art expression and teacher directed activities, self-help skills such as eating skills, potty training, hand washing, and independently cleaning up. Each child is sent a daily note through our communication software that explains your child's daily activity, toilet times, eating, and rest time.</p>
        <p>We introduce students to circle time activities including, alphabets, colors, counting, songs, and story time. The age appropriate activities in this classroom promote socialization, taking turns, sharing, and expressing feelings in appropriate manner.</p>
        <p>Our maximum care giver to child ratio is one 1:9. The maximum group size in this program is 18 children.</p>
        {JSONDat && <ProgramSlider programImages="early-years"/>}
        <AdayIn pageTitle={pageTitle} >
          <div>
            <ul>
              {JSONDat && JSONDat.days.map((data, index) => {
                return<li key={index}><strong>{data.time}</strong> {data.day}</li>  
              })} 
            </ul>
          </div> 
        </AdayIn>
        <TuitionRates pageTitle={pageTitle} halfDayFive="$265.00" fullDayFive="$345.00" halfDayFour="$235.00" fullDayFour="$295.00" halfDayThree="$205.00" fullDayThree="$250.00" halfDayTwo="$155.00" fullDayTwo="$205.00">Single extra days may be arranged with the director at a rate of half day: $74.00, full day: $89.00.</TuitionRates>
        <div className={employeesWrap}>
          <Employee employeeName="Vanessa Cabatan" employeeTitle="Early Year's Lead Teacher" employeeImg="Vanessa"/>
          <Employee employeeName="Jackie Rubalcava" employeeTitle="Early Year's Teacher Assistant" employeeImg="Jackie"/>
        </div>
    </Layout>

  )
}

export default EYPage