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
import Slider from "react-slick";
import { Helmet } from 'react-helmet';
import kindergartenReadiness1 from '.././images/programs/kindergarten-readiness/kindergarten-readiness1.jpg';
import kindergartenReadiness2 from '.././images/programs/kindergarten-readiness/kindergarten-readiness2.jpg';
import kindergartenReadiness3 from '.././images/programs/kindergarten-readiness/kindergarten-readiness3.jpg';
import kindergartenReadiness4 from '.././images/programs/kindergarten-readiness/kindergarten-readiness4.jpg';
import kindergartenReadiness5 from '.././images/programs/kindergarten-readiness/kindergarten-readiness5.jpg';
import kindergartenReadiness6 from '.././images/programs/kindergarten-readiness/kindergarten-readiness6.jpg';
import kindergartenReadiness7 from '.././images/programs/kindergarten-readiness/kindergarten-readiness7.jpg';
import kindergartenReadiness8 from '.././images/programs/kindergarten-readiness/kindergarten-readiness8.jpg';
import kindergartenReadiness9 from '.././images/programs/kindergarten-readiness/kindergarten-readiness9.jpg';
import kindergartenReadiness10 from '.././images/programs/kindergarten-readiness/kindergarten-readiness10.jpg';
import { sliderImg } from '.././components/styles/layout.module.scss'


const KRPage = () => {
    
    const pageTitle = "Kindergarten Readiness";
    const metaDesc = "We provide a nurturing, caring and safe environment for your child to learn and grow through age-appropriate experiences for children 4 years to 5 years.";
    const ageRange = "4 years to 5 years";

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
        <StaticImage src=".././images/home/kindergartenReadiness.jpg" width={500} className={introImage}/>
        <h2 id="age"  style={{marginTop: "0"}}>{ageRange}</h2>
        <p>Here at Columbia Children's Center we provide a nurturing, caring and safe environment for your child to learn and grow through age-appropriate experiences. We are very proud of our Kindergarten Readiness Program. Our goal is to enhance your child's confidence and prepare them for a successful school experience. We believe that warmth is a vital element for a growing child. Our curriculum is designed so that your child will discover that learning is fun while making new friends and building strong relationships with their teachers who deeply care about their happiness and education.</p>
        <p>We have a variety of Centers in our classroom. Your child will be involved in hands-on and interactive activities to develop their emotional, social, and academic skills. They will be provided many opportunities to explore, communicate and create in a warm and loving atmosphere.</p>
        {/* <ProgramSlider programImages="kindergarten-readiness"/> */}

        <Slider {...settings}>
          <img className={sliderImg} src={kindergartenReadiness1} alt="Kindergarten Readiness" />
          <img className={sliderImg} src={kindergartenReadiness2} alt="Kindergarten Readiness" />
          <img className={sliderImg} src={kindergartenReadiness3} alt="Kindergarten Readiness" />
          <img className={sliderImg} src={kindergartenReadiness4} alt="Kindergarten Readiness" />
          <img className={sliderImg} src={kindergartenReadiness5} alt="Kindergarten Readiness" />
          <img className={sliderImg} src={kindergartenReadiness6} alt="Kindergarten Readiness" />
          <img className={sliderImg} src={kindergartenReadiness7} alt="Kindergarten Readiness" />
          <img className={sliderImg} src={kindergartenReadiness8} alt="Kindergarten Readiness" />
          <img className={sliderImg} src={kindergartenReadiness9} alt="Kindergarten Readiness" />
          <img className={sliderImg} src={kindergartenReadiness10} alt="Kindergarten Readiness" />
        </Slider>    

        <AdayIn pageTitle={pageTitle} >
          <div>
            <ul>
              {JSONDat.days.map((data, index) => {
                return<li><strong>{data.time}</strong> {data.day}</li>  
              })} 
            </ul>
          </div> 
        </AdayIn>

        <TuitionRates 
            pageTitle={pageTitle} 
            halfDayFive="$230" 
            fullDayFive="$310" 
            halfDayFour="$200" 
            fullDayFour="$260" 
            halfDayThree="$165" 
            fullDayThree="$210" 
            halfDayTwo="$135" 
            fullDayTwo="$165">
            Single extra days may be arranged with the director at a rate of half day: $75, full day: $90.
        </TuitionRates>
        
        <div className={employeesWrap}>
          <Employee employeeName="Nicolle Rogers" employeeTitle="Kindergarten Readiness Lead Teacher" employeeImg="Nicolle"/>
          <Employee 
            employeeName="Amanda D'hoedt" 
            employeeTitle="Kindergarten Readiness Teacher" 
            employeeImg="Amanda"
          />
          <Employee employeeName="Brigitte Ortiz-Tello" employeeTitle="Outdoor Lead Teacher" employeeImg="Brigitte"/>
        </div>
      </Layout>
    )
  }
  
  export default KRPage