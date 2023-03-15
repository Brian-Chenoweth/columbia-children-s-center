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
import { sliderImg } from '.././components/styles/layout.module.scss'
import Slider from "react-slick";
import { Helmet } from 'react-helmet';
import earlyYears1 from '.././images/programs/early-years/early-years1.jpg';
import earlyYears2 from '.././images/programs/early-years/early-years2.jpg';
import earlyYears3 from '.././images/programs/early-years/early-years3.jpg';
import earlyYears4 from '.././images/programs/early-years/early-years4.jpg';
import earlyYears5 from '.././images/programs/early-years/early-years5.jpg';
import earlyYears6 from '.././images/programs/early-years/early-years6.jpg';
import earlyYears7 from '.././images/programs/early-years/early-years7.jpg';
import earlyYears8 from '.././images/programs/early-years/early-years8.jpg';
import earlyYears9 from '.././images/programs/early-years/early-years9.jpg';


const EYPage = () => {
  

  const pageTitle = "Early Years";
  const metaDesc = "Our classroom promotes independence through play, art expression and teacher directed activities for kids 2 years to 3 years.";
  const ageRange = "2 years to 3 years";

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
        <h2 id="age"  style={{marginTop: "0"}}>{ageRange}</h2>

        <p>Our Early Years Program serves children between the ages of 18 months and 3 years. Our teacher to child ratio is 1:9 to ensure that each child receives individual attention and support. Our program is designed to provide a safe and nurturing environment that allows children to learn and grow in a confident way. </p>
        <p>To ensure that each child receives the attention they need, we keep our group size at a maximum of 18 children. Our structured, yet flexible approach, allows children to thrive and reach their full potential.</p>
        <p>Our Early Years classroom is designed to be both stimulating and age-appropriate, with a variety of activities and toys that encourage exploration and learning.</p>
        <p>Children are encouraged to communicate their wants and needs. We focus on creating learning and social experiences through play. We introduce children to circle time activities including alphabet, colors, counting, songs and story time. The age appropriate activities promote socialization, taking turns, sharing and expressing feelings in an appropriate manner.</p>
        <p>We believe that play-based learning is the best way for young children to learn and we strive to provide an environment that is both fun and educational. Our experienced staff is dedicated to providing the best care and education for your child.</p>


        {/* {JSONDat && <ProgramSlider programImages="early-years"/>} */}

        <AdayIn pageTitle={pageTitle} >
          <div>
            <ul>
              {JSONDat && JSONDat.days.map((data, index) => {
                return<li key={index}><strong>{data.time}</strong> {data.day}</li>  
              })} 
            </ul>
          </div> 
        </AdayIn>

        <Slider {...settings}>
          <img className={sliderImg} src={earlyYears1} alt="Early Years" />
          <img className={sliderImg} src={earlyYears2} alt="Early Years" />
          <img className={sliderImg} src={earlyYears3} alt="Early Years" />
          <img className={sliderImg} src={earlyYears4} alt="Early Years" />
          <img className={sliderImg} src={earlyYears5} alt="Early Years" />
          <img className={sliderImg} src={earlyYears6} alt="Early Years" />
          <img className={sliderImg} src={earlyYears7} alt="Early Years" />
          <img className={sliderImg} src={earlyYears8} alt="Early Years" />
          <img className={sliderImg} src={earlyYears9} alt="Early Years" />
        </Slider>

        <TuitionRates 
          pageTitle={pageTitle} 
          halfDayFive="$280.00" 
          fullDayFive="$365.00" 
          halfDayFour="$250.00" 
          fullDayFour="$310.00" 
          halfDayThree="$215.00" 
          fullDayThree="$265.00" 
          halfDayTwo="$165.00" 
          fullDayTwo="$215.00"
        >
          Single extra days may be arranged with the director at a rate of half day: $90.00, full day: $110.00.
          </TuitionRates>
        <div className={employeesWrap}>
          <Employee employeeName="Vanessa Cabatan" employeeTitle="Early Year's Lead Teacher" employeeImg="Vanessa"/>
          <Employee employeeName="Jackie Rubalcava" employeeTitle="Early Year's Teacher Assistant" employeeImg="Jackie"/>
        </div>
    </Layout>

  )
}

export default EYPage