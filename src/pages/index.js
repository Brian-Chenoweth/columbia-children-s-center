import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Layout from '../components/layout';
import HomepageSlider from '../components/homepageSlider';
import HomepagePrograms from '../components/homepagePrograms';
import HomepageAboutOne from '../components/HomepageAboutOne';
import HomepageAboutTwo from '../components/HomepageAboutTwo';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import {
  localSeoSection,
  localHero,
  localHeroGrid,
  eyebrow,
  heroTitle,
  heroLead,
  heroStats,
  heroStat,
  heroPanel,
  localSeoGrid,
  localSeoCard,
  accentCard,
  checkList,
  neighborhoodGrid,
  neighborhoodPill,
  faqList,
  faqItem,
  tourBanner,
  ctaRow,
  ctaButton,
  ctaButtonAlt,
  enrollmentHero,
  enrollmentHeroImage,
  enrollmentHeroContent,
  enrollmentHeroCard,
  enrollmentHeroActions,
  enrollmentHeroButton,
  enrollmentHeroQuestion,
  assistanceOffer,
  assistanceIcon,
  assistanceCopy,
  assistanceAction,
  assistanceButton,
  nextStep,
  nextStepContent,
  nextStepActions,
} from './styles/index.module.scss';
import {
  homepageSliderWrapTwo,
  homepageSliderWrapThree,
} from '../components/styles/homepageSlider.module.scss';
import home2WebP from '../images/home/home2.webp';
import home2Fallback from '../images/home/home2.jpg';
import cccFrontWebP from '../images/home/outside.webp';
import cccFrontFallback from '../images/home/outside.jpg';

function supportsWebP() {
  if (typeof window !== 'undefined') {
    const elem = document.createElement('canvas');

    if (elem.getContext && elem.getContext('2d')) {
      return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
  }

  return false;
}

const IndexPage = () => {
  const useWebP = supportsWebP();
  const faqSchema = {
    '@type': 'FAQPage',
    '@id': 'https://columbiachildrenscenter.com/#faq',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where is Columbia Children\'s Center located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Columbia Children\'s Center is located at 840 E. Stowell Road, Santa Maria, CA 93454.',
        },
      },
      {
        '@type': 'Question',
        name: 'What ages do you serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We serve children from 18 months through 5 years old across three age-based programs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer full-day and half-day preschool?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Schedule options vary by program, and most classrooms offer flexible half-day and full-day enrollment options.',
        },
      },
    ],
  };

  return (
    <ParallaxProvider>
      <Layout
        pageTitle="Columbia Children's Center"
        titleOverride="Preschool & Child Care in Santa Maria, CA | Columbia Children's Center"
        pathname="/"
        metaDesc="Columbia Children's Center is a trusted preschool and child care center in Santa Maria, CA serving children ages 18 months to 5 years with play-based learning, caring teachers, and flexible schedules since 1992."
        metaKeywords="preschool santa maria, child care santa maria, childcare santa maria, daycare santa maria ca, preschool and child care santa maria, daycare near me santa maria"
        schemaData={[faqSchema]}
        showPageHeading={false}
      >
        <section className={enrollmentHero} aria-labelledby="enrollment-heading">
          <StaticImage
            src="../images/home/home1.jpg"
            alt="Bright Columbia Children's Center classroom with play areas, books, and child-sized furniture"
            className={enrollmentHeroImage}
            layout="fullWidth"
            loading="eager"
            placeholder="blurred"
            objectPosition="center 65%"
          />
          <div className={enrollmentHeroContent}>
            <div className={enrollmentHeroCard}>
              <h1 id="enrollment-heading">
                Now Enrolling at<br /> Columbia Children&apos;s Center!
              </h1>
              <p>
                Quality childcare, preschool, and kindergarten readiness programs for children
                ages 18 months through 5 years.
              </p>
              <p>Proudly serving Santa Maria families since 1992.</p>
              <div className={enrollmentHeroActions}>
                <a
                  href="https://app.tryplayground.com/X7tvoDUHwazFjm1hgbal/book/j2qKHKe4akbD4Cv9DED7"
                  className={enrollmentHeroButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CalendarMonthIcon aria-hidden="true" />
                  Schedule a Tour
                </a>
                <Link
                  to="/contact/"
                  className={`${enrollmentHeroButton} ${enrollmentHeroQuestion}`}
                >
                  <ChatBubbleOutlineIcon aria-hidden="true" />
                  Ask a Question
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={assistanceOffer} aria-labelledby="assistance-heading">
          <FavoriteBorderIcon className={assistanceIcon} aria-hidden="true" />
          <div className={assistanceCopy}>
            <h2 id="assistance-heading">
              Approved for Childcare Assistance but Waiting for Funding?
            </h2>
            <p>
              Columbia Children&apos;s Center is offering special temporary tuition discounts to
              families who have been approved for childcare subsidy assistance but are waiting for
              funding to become available. <strong>You don&apos;t have to wait to get started!</strong>
            </p>
          </div>
          <div className={assistanceAction}>
            <Link to="/contact/" className={assistanceButton}>
              Learn More About This Offer
            </Link>
            <p>
              For qualifying families with approved subsidy eligibility and pending funding.
              Enrollment subject to availability. Discount terms apply.
            </p>
          </div>
        </section>

        <HomepagePrograms />

        <section className={nextStep} aria-labelledby="next-step-heading">
          <div className={nextStepContent}>
            <h2 id="next-step-heading">Ready to Take the Next Step?</h2>
            <p>
              We would love to welcome your family to Columbia Children&apos;s Center.
            </p>
            <div className={nextStepActions}>
              <a
                href="https://app.tryplayground.com/X7tvoDUHwazFjm1hgbal/book/j2qKHKe4akbD4Cv9DED7"
                className={enrollmentHeroButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CalendarMonthIcon aria-hidden="true" />
                Schedule a Tour
              </a>
              <Link
                to="/contact/"
                className={`${enrollmentHeroButton} ${enrollmentHeroQuestion}`}
              >
                <ChatBubbleOutlineIcon aria-hidden="true" />
                Ask a Question
              </Link>
            </div>
          </div>
        </section>


      </Layout>
    </ParallaxProvider>
  );
};

export default IndexPage;
