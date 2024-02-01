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
import Slider from "react-slick";
import { Helmet } from 'react-helmet';
import preschool1 from '.././images/programs/preschool/preschool1.jpg';
import preschool2 from '.././images/programs/preschool/preschool2.jpg';
import preschool3 from '.././images/programs/preschool/preschool3.jpg';
import preschool4 from '.././images/programs/preschool/preschool4.jpg';
import preschool5 from '.././images/programs/preschool/preschool5.jpg';
import preschool6 from '.././images/programs/preschool/preschool6.jpg';
import preschool7 from '.././images/programs/preschool/preschool7.jpg';
import preschool8 from '.././images/programs/preschool/preschool8.jpg';
import preschool9 from '.././images/programs/preschool/preschool9.jpg';
import preschool10 from '.././images/programs/preschool/preschool10.jpg';
import preschool11 from '.././images/programs/preschool/preschool11.jpg';
import { sliderImg } from '.././components/styles/layout.module.scss'

const PPage = () => {
    
  const pageTitle = "Preschool";
  const metaDesc = "Our goal is to provide a fun, safe, positive environment; emphasizing on confidence building and self-esteem for children 3 years to 4 years.";
  const ageRange = "3 years to 4 years";
  
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
        <StaticImage src=".././images/home/preschool.jpg" width={500} className={introImage}/>
        <h2 id="age"  style={{marginTop: "0"}}>{ageRange}</h2>
        <p>Our goal is to provide a fun, safe, positive environment; emphasizing on confidence building and self-esteem. The Preschool Program concentrates on listening and basic cognitive skills such as colors, shapes and alphabet and number recognition.</p>
        <p>Our daily schedule includes circle time, which promotes social development, sharing, cooperation and participation as a group. Math and Science activities reinforce practice counting, recognizing numbers, colors, sizes and shapes, as well as scissor practice. Story time and a language arts activity promote language development, alphabet and name recognition, individual expression and creativity. We have music and movement to develop skills of expression, rhythm, listening, coordination, as well as large motor skills.</p>
        <p>Our classroom has centers such as Science, Reading, Dramatic Play, Manipulative, and Art. These centers encourage your child's learning experience. Our maximum teacher to child ratio is 1:12.</p>
        {/* <ProgramSlider programImages="preschool"/> */}
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

        <Slider {...settings}>
          <img className={sliderImg} src={preschool1} alt="Preschool" />
          <img className={sliderImg} src={preschool2} alt="Preschool" />
          <img className={sliderImg} src={preschool3} alt="Preschool" />
          <img className={sliderImg} src={preschool4} alt="Preschool" />
          <img className={sliderImg} src={preschool5} alt="Preschool" />
          <img className={sliderImg} src={preschool6} alt="Preschool" />
          <img className={sliderImg} src={preschool7} alt="Preschool" />
          <img className={sliderImg} src={preschool8} alt="Preschool" />
          <img className={sliderImg} src={preschool9} alt="Preschool" />
          <img className={sliderImg} src={preschool10} alt="Preschool" />
          <img className={sliderImg} src={preschool11} alt="Preschool" />
        </Slider>     

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
            halfDayFive="$220.00" 
            fullDayFive="$290.00" 
            halfDayFour="$190.00" 
            fullDayFour="$245.00" 
            halfDayThree="$155.00" 
            fullDayThree="$200.00" 
            halfDayTwo="$125.00" 
            fullDayTwo="$155.00">
            Single extra days may be arranged with the director at a rate of half day: $70.00, full day: $85.00.
        </TuitionRates>
        <div className={employeesWrap}>
            <Employee employeeName="Sam Wise" employeeTitle="Preschool Lead Teacher" employeeImg="Sam"/>
            <Employee 
                employeeName="Litzey Dominguez" 
                employeeTitle="Preschool Teacher" 
                employeeImg="Litzey"
            />
            <Employee 
                employeeName="Michelle Mora" 
                employeeTitle="Preschool Teacher Assistant" 
                employeeImg="Michelle"
            />
            <Employee 
                employeeName="Lexie Martinez" 
                employeeTitle="Preschool Teacher Assistant" 
                employeeImg="Lexie"
            />
            <Employee 
                employeeName="Brigitte Ortiz-Tello" 
                employeeTitle="Outdoor Classroom Teacher" 
                employeeImg="Brigitte"
            />
            <Employee 
                employeeName="Veronica Trejo" 
                employeeTitle="Outdoor Classroom Teacher Assistant" 
                employeeImg="Veronica"
            />
        </div>

      </Layout>
    )
  }
  
  export default PPage