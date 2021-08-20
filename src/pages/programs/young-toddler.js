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
        <h2>18 months to 2&frac12; years</h2>
        <p>Our Young Toddler Program serves children from 18 months – 36 months. Our maximum care giver to child ratio is one 1:6. The maximum group size in this program is 12 children. We provide a nurturing environment that is structured enough to allow our students to learn and grow in a safe and confident way. Here at CCC your child can explore and learn through age appropriate activities and toys. Children are encouraged to use their words to express their wants and needs. In our Young Toddler classroom, we focus on activities developed on creating learning and social experiences through play.</p>
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
        <TuitionRates pageTitle={pageTitle} halfDayFive="$229.00" fullDayFive="$297.00"/>
        <Employee employeeName="Young Toddler teacher 1" employeeImg="teacher-1.jpg"/>
        <Employee employeeName="Young Toddler teacher 2" employeeImg="teacher-2.jpg"/>
        <Employee employeeName="Young Toddler teacher 3" employeeImg="teacher-3.jpg"/>
    </Layout>
  )
}

export default YTPage