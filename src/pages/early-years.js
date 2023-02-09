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
import Slider from "react-slick";
import { Helmet } from 'react-helmet';
import earlyYears1 from '.././images/programs/early-years/early-years1.jpg';
import earlyYears2 from '.././images/programs/early-years/early-years2.jpg';
import earlyYears3 from '.././images/programs/early-years/early-years3.jpeg';
import earlyYears4 from '.././images/programs/early-years/early-years4.jpeg';
import earlyYears5 from '.././images/programs/early-years/early-years5.jpeg';
import earlyYears6 from '.././images/programs/early-years/early-years6.jpeg';
import earlyYears7 from '.././images/programs/early-years/early-years7.jpeg';
import earlyYears8 from '.././images/programs/early-years/early-years8.jpeg';
import earlyYears9 from '.././images/programs/early-years/early-years9.jpeg';


const EYPage = () => {
  

  const pageTitle = "Early Years";
  const metaDesc = "Our classroom promotes independence through play, art expression and teacher directed activities for kids 2 years to 3 years.";
  const ageRange = "2 years to 3 years";

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500
  };

  return (
  <Layout pageTitle={pageTitle} metaDesc={metaDesc}>
    <Helmet>
        <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Helmet>
        <StaticImage src=".././images/home/early-years.jpg" width={500} className={introImage}/>
        <h2 id="age">{ageRange}</h2>
        <p>Our classroom promotes independence through play, art expression and teacher directed activities, self-help skills such as eating skills, potty training, hand washing, and independently cleaning up. Each child is sent a daily note through our communication software that explains your child's daily activity, toilet times, eating, and rest time.</p>
        <p>We introduce students to circle time activities including, alphabets, colors, counting, songs, and story time. The age appropriate activities in this classroom promote socialization, taking turns, sharing, and expressing feelings in appropriate manner.</p>
        <p>Our maximum care giver to child ratio is one 1:9. The maximum group size in this program is 18 children.</p>

        {/* {JSONDat && <ProgramSlider programImages="early-years"/>} */}

        <Slider {...settings}>
          <img src={earlyYears1} alt="Early Years" />
          <img src={earlyYears2} alt="Early Years" />
          <img src={earlyYears3} alt="Early Years" />
          <img src={earlyYears4} alt="Early Years" />
          <img src={earlyYears5} alt="Early Years" />
          <img src={earlyYears6} alt="Early Years" />
          <img src={earlyYears7} alt="Early Years" />
          <img src={earlyYears8} alt="Early Years" />
          <img src={earlyYears9} alt="Early Years" />
        </Slider>

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