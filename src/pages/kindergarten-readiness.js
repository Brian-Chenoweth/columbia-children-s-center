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
    const metaDesc = "Kindergarten readiness program in Santa Maria for children ages 4 to 5 years. Columbia Children's Center helps children build confidence, classroom skills, and school readiness through caring instruction.";
    const ageRange = "4 years to 5 years";
    const faqSchema = {
      '@type': 'FAQPage',
      '@id': 'https://columbiachildrenscenter.com/kindergarten-readiness/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What age is the Kindergarten Readiness program for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our Kindergarten Readiness program is for children ages 4 to 5 years.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does this program prepare children for kindergarten?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We help children build confidence, classroom routines, social-emotional skills, and early academic readiness through hands-on activities, guided learning, and interactive classroom experiences.',
          },
        },
        {
          '@type': 'Question',
          name: 'What kinds of activities are included in the Kindergarten Readiness classroom?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Children take part in hands-on and interactive activities that support emotional, social, and academic growth, along with opportunities to explore, communicate, and create.',
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
        titleOverride="Kindergarten Readiness in Santa Maria, CA | Columbia Children's Center"
        metaDesc={metaDesc}
        pathname="/kindergarten-readiness/"
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
        <StaticImage src=".././images/home/kindergartenReadiness.jpg" width={500} className={introImage} alt="Kindergarten readiness classroom at Columbia Children's Center in Santa Maria" />
        <h2 id="age"  style={{marginTop: "0"}}>{ageRange}</h2>
        <p>Here at Columbia Children&apos;s Center, our Santa Maria kindergarten readiness program provides a nurturing, caring, and safe environment for your child to learn and grow through age-appropriate experiences. Our goal is to build confidence and prepare children for a successful school experience.</p>
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
                return<li key={index}><strong>{data.time}</strong> {data.day}</li>  
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
        <h2>Kindergarten Readiness FAQs</h2>
        <h3>What age is the Kindergarten Readiness program for?</h3>
        <p>Our Kindergarten Readiness program is for children ages 4 to 5 years.</p>
        <h3>How does this program prepare children for kindergarten?</h3>
        <p>We help children build confidence, classroom routines, social-emotional skills, and early academic readiness through hands-on activities, guided learning, and interactive classroom experiences.</p>
        <h3>What kinds of activities are included in the Kindergarten Readiness classroom?</h3>
        <p>Children take part in hands-on and interactive activities that support emotional, social, and academic growth, along with opportunities to explore, communicate, and create.</p>
        
        <div className={employeesWrap}>
          <Employee employeeName="Nicolle Rogers" employeeTitle="Kindergarten Readiness Lead Teacher" employeeImg="Nicolle"/>
          <Employee 
            employeeName="Amanda D'hoedt" 
            employeeTitle="Kindergarten Readiness Teacher" 
            employeeImg="Amanda"
          />
        </div>
      </Layout>
    )
  }
  
  export default KRPage
