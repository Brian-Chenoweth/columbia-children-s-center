import * as React from 'react'
import Layout from '.././components/layout'
import Employee from '.././components/employee'
import AdayIn from '.././components/aDayin'
import TuitionRates from '.././components/tuitionRates'
import ProgramSlider from '.././components/programSlider'
import JSONDat from ".././data/adayin/young-toddler.json"
import { StaticImage } from 'gatsby-plugin-image'
import { introImage } from '.././components/styles/page.module.scss'
import { employeesWrap } from '.././components/styles/employee.module.scss'


const YTPage = () => {
  const pageTitle = "Young Toddler";
  const metaDesc = "Our Young Toddler Program serves children from 18 months - 36 months";
  const ageRange = "18 months to 2½ years";

  return (
    <Layout 
      pageTitle={pageTitle} 
      metaDesc={metaDesc}
    >
        <StaticImage 
          src=".././images/home/young-toddler.jpg" 
          width={500} 
          className={introImage}
        />
        <h2 id="age">{ageRange}</h2>
        <p>
          Our Young Toddler Program serves children from {ageRange}. Our maximum care giver to child ratio is 1:6. The maximum group size in this program is 12 children. We provide a nurturing environment that is structured enough to allow our students to learn and grow in a safe and confident way. Here at CCC your child can explore and learn through age appropriate activities and toys. Children are encouraged to use their words to express their wants and needs. In our Young Toddler classroom, we focus on activities developed on creating learning and social experiences through play.
        </p>
        <ProgramSlider programImages="young-toddler" />
        <AdayIn pageTitle={pageTitle} >
          <div>
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
          halfDayFive="$265.00" 
          fullDayFive="$345.00" 
          halfDayFour="$235.00" 
          fullDayFour="$295.00" 
          halfDayThree="$205.00" 
          fullDayThree="$250.00" 
          halfDayTwo="$155.00" 
          fullDayTwo="$205.00"
        />
        <div className={employeesWrap}>
          <Employee 
            employeeName="Amanda D'hoedt" 
            employeeTitle="Young Toddler Teacher" 
            employeeImg="Amanda"
          />
          <Employee 
            employeeName="Tiffany Schofield" 
            employeeTitle="Young Toddler Teacher" 
            employeeImg="Tiffany"
          />
          <Employee 
            employeeName="Shirley Adelhelm" 
            employeeTitle="Young Toddler Teacher / Breaker" 
            employeeImg="Shirley"
          />
        </div>
    </Layout>
  )
}


export default YTPage