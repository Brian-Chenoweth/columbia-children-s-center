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
import Slider from "react-slick";
import { Helmet } from 'react-helmet';
import youngToddler1 from '.././images/programs/young-toddler/young-toddler1.jpg';
import youngToddler2 from '.././images/programs/young-toddler/young-toddler2.jpg';
import youngToddler3 from '.././images/programs/young-toddler/young-toddler3.jpg';
import youngToddler4 from '.././images/programs/young-toddler/young-toddler4.jpg';
import youngToddler5 from '.././images/programs/young-toddler/young-toddler5.jpg';
import youngToddler6 from '.././images/programs/young-toddler/young-toddler6.jpg';
import youngToddler7 from '.././images/programs/young-toddler/young-toddler7.jpg';
import youngToddler8 from '.././images/programs/young-toddler/young-toddler8.jpg';
import youngToddler9 from '.././images/programs/young-toddler/young-toddler9.jpg';
import youngToddler10 from '.././images/programs/young-toddler/young-toddler10.jpg';
import youngToddler11 from '.././images/programs/young-toddler/young-toddler11.jpg';
import youngToddler12 from '.././images/programs/young-toddler/young-toddler12.jpg';
import youngToddler13 from '.././images/programs/young-toddler/young-toddler13.jpg';
import youngToddler14 from '.././images/programs/young-toddler/young-toddler14.jpg';
import { sliderImg } from '.././components/styles/layout.module.scss'


const YTPage = () => {
  const pageTitle = "Young Toddler";
  const metaDesc = "Our Young Toddler Program serves children from 18 months - 30 months";
  const ageRange = "18 months to 2½ years";

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
    <Layout 
      pageTitle={pageTitle} 
      metaDesc={metaDesc}
    >
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
        <StaticImage 
          src=".././images/home/young-toddler.jpg" 
          width={500} 
          className={introImage}
        />
        <h2 id="age"  style={{marginTop: "0"}}>{ageRange}</h2>
        
        <p>Our Young Toddler Program serves children between the ages of 18 months and 30 months. Our teacher to child ratio is 1:6 to ensure that each child receives individual attention and support. Our program is designed to provide a safe and nurturing environment that allows children to learn and grow in a confident way.</p>
        
        <p>To ensure that each child receives the attention they need, we keep our group size at a maximum of 12 children. Our structured, yet flexible approach, allows children to thrive and reach their full potential.</p>
        
        <p>Our Young Toddler classroom is designed to be both stimulating and age-appropriate, with a variety of activities and toys that encourage exploration and learning. Children are encouraged to communicate their wants and needs. We focus on creating learning and social experiences through play.</p>
        
        <p>We believe that play-based learning is the best way for young children to learn and we strive to provide an environment that is both fun and educational. Our experienced staff is dedicated to providing the best care and education for your child.</p>

        {/* <ProgramSlider programImages="young-toddler" /> */}
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

        <Slider {...settings}>
          <img className={sliderImg} src={youngToddler1} alt="Young Toddler" />
          <img className={sliderImg} src={youngToddler2} alt="Young Toddler" />
          <img className={sliderImg} src={youngToddler3} alt="Young Toddler" />
          <img className={sliderImg} src={youngToddler4} alt="Young Toddler" />
          <img className={sliderImg} src={youngToddler5} alt="Young Toddler" />
          <img className={sliderImg} src={youngToddler6} alt="Young Toddler" />
          <img className={sliderImg} src={youngToddler7} alt="Young Toddler" />
          <img className={sliderImg} src={youngToddler8} alt="Young Toddler" />
          <img className={sliderImg} src={youngToddler9} alt="Young Toddler" />
          <img className={sliderImg} src={youngToddler10} alt="Young Toddler" />
          <img className={sliderImg} src={youngToddler11} alt="Young Toddler" />
          <img className={sliderImg} src={youngToddler12} alt="Young Toddler" />
          <img className={sliderImg} src={youngToddler13} alt="Young Toddler" />
          <img className={sliderImg} src={youngToddler14} alt="Young Toddler" />
        </Slider>        

        <TuitionRates 
          pageTitle={pageTitle} 
          fullDayFive="$365.00" 
          fullDayFour="$310.00" 
          fullDayThree="$265.00" 
          fullDayTwo="$215.00"
        >
          Single extra days may be arranged with the director at a rate of: $110.00.
          </TuitionRates>
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
          <Employee
           employeeName="Jackie Rubalcava"
           employeeTitle="Young Toddler Teacher Assistant"
           employeeImg="Jackie"
          />
        </div>
    </Layout>
  )
}


export default YTPage