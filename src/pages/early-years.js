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
  const metaDesc = "Early childhood program in Santa Maria for children ages 2 to 3 years. Columbia Children's Center promotes independence, language growth, and social development through play-based learning.";
  const ageRange = "2 years to 3 years";
  const faqSchema = {
    '@type': 'FAQPage',
    '@id': 'https://columbiachildrenscenter.com/early-years/#faq',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What age is the Early Years program for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our Early Years program is for children ages 2 to 3 years.',
        },
      },
      {
        '@type': 'Question',
        name: 'What skills do children practice in the Early Years classroom?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Children practice communication, independence, early circle time participation, socialization, taking turns, sharing, and early learning concepts such as colors, counting, songs, and story time.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you support social development in Early Years?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We support social development through play, guided group activities, communication practice, and age-appropriate routines that help children express feelings and interact with others in positive ways.',
        },
      },
    ],
  };

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
    titleOverride="Early Childhood Program in Santa Maria, CA | Columbia Children's Center"
    metaDesc={metaDesc}
    pathname="/early-years/"
    schemaData={[faqSchema]}
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
        <StaticImage src=".././images/home/early-years.jpg" width={500} className={introImage} alt="Early Years classroom at Columbia Children's Center in Santa Maria" />
        <h2 id="age"  style={{marginTop: "0"}}>{ageRange}</h2>

        <p>Our Early Years program in Santa Maria serves children between the ages of 2 and 3 years. Our teacher to child ratio is 1:9 to ensure that each child receives individual attention and support in a safe, nurturing classroom. </p>
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
          halfDayFive="$295" 
          fullDayFive="$385" 
          halfDayFour="$265" 
          fullDayFour="$325" 
          halfDayThree="$225" 
          fullDayThree="$280" 
          halfDayTwo="$175" 
          fullDayTwo="$225"
        >
          Single extra days may be arranged with the director at a rate of half day: $95, full day: $115.
        </TuitionRates>
        <h2>Early Years FAQs</h2>
        <h3>What age is the Early Years program for?</h3>
        <p>Our Early Years program is for children ages 2 to 3 years.</p>
        <h3>What skills do children practice in the Early Years classroom?</h3>
        <p>Children practice communication, independence, early circle time participation, socialization, taking turns, sharing, and early learning concepts such as colors, counting, songs, and story time.</p>
        <h3>How do you support social development in Early Years?</h3>
        <p>We support social development through play, guided group activities, communication practice, and age-appropriate routines that help children express feelings and interact with others in positive ways.</p>
        <div className={employeesWrap}>
          <Employee 
            employeeName="Vanessa Cabatan"
            employeeTitle="Early Year's Lead Teacher"
            employeeImg="Vanessa"
          />
          <Employee
           employeeName="Jackie Rubalcava"
           employeeTitle="Early Year's Teacher"
           employeeImg="Jackie"
          />
        </div>
    </Layout>

  )
}

export default EYPage
