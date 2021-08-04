import * as React from 'react'
import Layout from '../../components/layout'
import Employee from '../../components/employee'
import AdayIn from '../../components/aDayin'
import TuitionRates from '../../components/tuitionRates'
import ProgramSlider from '../../components/programSlider'

const YTPage = () => {
  const pageTitle = "Young Toddler";
  return (
    <Layout pageTitle={pageTitle}>
        <p>About page child of layout component.</p>
        <h2>{pageTitle} Classroom Goals</h2>
        <ProgramSlider programImages="young-toddler"/>
        <AdayIn pageTitle={pageTitle} >
            <ul>
              <li><strong>7:00 - 8:00 </strong>Arrival, Free Choice Activities, Early Morning Snack</li>
              <li><strong>8:00 - 9:30 </strong>Free Choice, Songs, Puzzles, Clean Up, Snack, Diapering</li>
              <li><strong>9:30 - 10:15 </strong>Rotation of Story, Sensory Exploration, Art</li>
              <li><strong>10:15 - 10:45 </strong>Outside Play (Gross Motor Activites)</li>
              <li><strong>10:45 - 12:15 </strong>Free Choice, Diapering, Hand Washing, Lunch, Outside Play</li>
              <li><strong>12:15 - 2:30 </strong>Nap</li>
              <li><strong>2:30 - 3:15 </strong>Diapering, Shoes On, Hand Washing, Snack</li>
              <li><strong>3:15 - 4:00 </strong>Rotation of Music, Language Arts, Art</li>
              <li><strong>4:00 - 4:30 </strong>Outside Play (Gross Motor Activites)</li>
              <li><strong>4:30 - 5:30 </strong>Puzzles, Manipulatives, Diapering, Late Snack, Free Choice</li>
            </ul>
        </AdayIn>
        <TuitionRates pageTitle={pageTitle} halfDay="$229.00" fullDay="$297.00"/>
        <Employee employeeName="Young Toddler teacher 1" employeeImg="teacher-1.jpg"/>
        <Employee employeeName="Young Toddler teacher 2" employeeImg="teacher-2.jpg"/>
        <Employee employeeName="Young Toddler teacher 3" employeeImg="teacher-3.jpg"/>
    </Layout>
  )
}

export default YTPage