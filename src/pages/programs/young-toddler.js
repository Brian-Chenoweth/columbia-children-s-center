import * as React from 'react'
import Layout from '../../components/layout'
import Employee from '../../components/employee'
import AdayIn from '../../components/aDayin'
import TuitionRates from '../../components/tuitionRates'
import ProgramSlider from '../../components/programSlider'
import ClassroomGoals from '../../components/classroomGoals'

const YTPage = () => {
  const pageTitle = "Young Toddler";
  return (
    <Layout pageTitle={pageTitle}>
        <p>About page child of layout component.</p>
        <ClassroomGoals pageTitle={pageTitle}>
          <h1>****Put info below into a data file*****</h1>
          <h3>Cognitive Goals:</h3>
          <ul>
            <li>Locate object or person that disappear</li>
            <li>Use simple actions on toys (banging, shaking)</li>
            <li>Activate cause and effect toys</li>
            <li>Imitate actions</li>
            <li>Imitate sounds or words</li>
            <li>Use objects or toys in a pretend way</li>
            <li>Group or sort objects in basis categories</li>
          </ul>
          <h3>Expressive Communication Goals:</h3>
          <ul>
            <li>Use gestures to communicate</li>
            <li>Ask for help and gain and direct an adult’s attention</li>
            <li>Use single words to communicate</li>
            <li>Use two-word phrases or sentences</li>
          </ul>
          <h3>Adaptive or Self-care Goals:</h3>
          <ul>
            <li>Drink from cup or glass</li>
            <li>Eat with fork and spoon</li>
            <li>Unfasten fasteners on clothes</li>
          </ul>
          <h3>Small Motor Skills:</h3>
          <ul>
            <li>Roll from stomach to back and from back to stomach</li>
            <li>Creep on hands and knees with tummy off the floor</li>
            <li>Walk independently</li>
            <li>Jump forward</li>
            <li>Kick, throw and roll a ball</li>
            <li>Move up and down steps on a slide or play structure</li>
          </ul>
          <h3>Social Goals:</h3>
          <ul>
            <li>Initiate and maintain social play with adults</li>
            <li>Initiate and maintain interactions with another child</li>
            <li>Display affection toward familiar adult</li>
            <li>Take turns during activities</li>
            <li>Separate comfortably from parents for routine activities</li>
            <li>Play with others as play partners</li>
            <li>Play independently</li>
            <li>Calm self when stressed or anxious</li>
            <li>Transition smoothly between activities</li>
          </ul>
          <h3>Fine Motor Goals:</h3>
          <ul>
            <li>Reach and grasp objects</li>
            <li>Bring two objects together to bang</li>
            <li>Transfer object from one hand to the other</li>
            <li>Release objects into containers</li>
            <li>Stack same size objects</li>
            <li>Imitate drawing lines on paper</li>
            <li>Assemble toys or objects that require putting pieces together</li>
            <li>Fit shapes into a shape sorter or puzzle</li>
            <li>Turn paper pages of books one at a time</li>
          </ul>
          <h3>Receptive Communication Goals:</h3>
          <ul>
            <li>Turn and look towards person speaking</li>
            <li>Respond to own name when called</li>
            <li>Follow a person’s pointing gesture</li>
            <li>Identify familiar objects or people</li>
            <li>Identify pictures in familiar books</li>
            <li>Identify pictures in unfamiliar books</li>
            <li>Follow one-step directions</li>
            <li>Follow person’s gaze to establish joint attention</li>
            <li>Listen to a simple story and pays attention</li>
          </ul>
        </ClassroomGoals>


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