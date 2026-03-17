import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import HomepageSlider from '../components/homepageSlider';
import HomepagePrograms from '../components/homepagePrograms';
import HomepageAboutOne from '../components/HomepageAboutOne';
import HomepageAboutTwo from '../components/HomepageAboutTwo';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import {
  localSeoSection,
  localSeoGrid,
  localSeoCard,
  checkList,
  ctaRow,
  ctaButton,
  ctaButtonAlt,
} from './styles/index.module.scss';
import {
  homepageSliderWrap,
  homepageSliderWrapTwo,
  homepageSliderWrapThree,
} from '../components/styles/homepageSlider.module.scss';
import home1WebP from '../images/home/home1.webp';
import home1Fallback from '../images/home/home1.jpg';
import home2WebP from '../images/home/home2.webp';
import home2Fallback from '../images/home/home2.jpg';
import cccFrontWebP from '../images/home/outside.webp';
import cccFrontFallback from '../images/home/outside.jpg';
import logo from '../images/logo-small.png';

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

  return (
    <ParallaxProvider>
      <Layout
        pageTitle="Columbia Children's Center"
        titleOverride="Preschool in Santa Maria, CA | Columbia Children's Center"
        pathname="/"
        metaDesc="Columbia Children's Center is a trusted preschool in Santa Maria, CA serving children ages 18 months to 5 years with play-based learning, caring teachers, and flexible schedules since 1992."
      >
        <div className={homepageSliderWrap}>
          <ParallaxBanner
            layers={[
              {
                image: useWebP ? home1WebP : home1Fallback,
                speed: -60,
                style: { backgroundSize: 'contain' },
              },
              {
                image: logo,
                speed: -20,
                style: { backgroundRepeat: 'no-repeat', backgroundSize: '200px, auto' },
              },
            ]}
            className="aspect-[2/1]"
          />
        </div>

        <HomepageAboutOne />

        <div className={homepageSliderWrapTwo}>
          <ParallaxBanner
            layers={[
              {
                image: useWebP ? cccFrontWebP : cccFrontFallback,
                speed: -60,
                style: { inset: '-225px, 0px' },
              },
            ]}
            className="aspect-[2/1]"
          />
        </div>

        <HomepageAboutTwo />

        <section className={localSeoSection}>
          <div className={localSeoGrid}>
            <div className={localSeoCard}>
              <h2>Why Santa Maria families choose our preschool</h2>
              <p>
                Columbia Children&apos;s Center is a locally owned preschool and child care center in
                Santa Maria, California. Families choose us for consistent care, small-group learning,
                experienced teachers, and a warm environment designed for young children to feel safe,
                capable, and excited to learn.
              </p>
              <ul className={checkList}>
                <li>Serving Santa Maria families since 1992</li>
                <li>Programs for children ages 18 months to 5 years</li>
                <li>Flexible half-day and full-day schedules</li>
                <li>Convenient Stowell Road location near Highway 101 and Allan Hancock College</li>
                <li>Secure campus, bright classrooms, and strong parent communication</li>
              </ul>
            </div>

            <div className={localSeoCard}>
              <h2>Looking for preschool in Santa Maria?</h2>
              <p>
                If you are comparing preschools in Santa Maria, start with the program that fits your
                child&apos;s age and development. Our classrooms support social growth, early academics,
                confidence, creativity, and kindergarten preparation through play-based learning and
                teacher-guided activities.
              </p>
              <div className={ctaRow}>
                <Link to="/preschool/" className={ctaButton}>Explore Our Preschool Program</Link>
                <a
                  href="https://schools.procareconnect.com/form/fa223adc-c95c-436e-b0bc-b2f252f5f9d9"
                  className={`${ctaButton} ${ctaButtonAlt}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Schedule a Tour
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className={homepageSliderWrapThree}>
          <ParallaxBanner
            layers={[
              {
                image: useWebP ? home2WebP : home2Fallback,
                speed: -60,
                style: { inset: '-225px, 0px' },
              },
            ]}
            className="aspect-[2/1]"
          />
        </div>

        <HomepagePrograms />

        <section className={localSeoSection}>
          <div className={localSeoGrid}>
            <div className={localSeoCard}>
              <h2>Programs by age</h2>
              <p>
                We offer year-round early education and child care programs for toddlers, preschoolers,
                and pre-kindergarten students in Santa Maria.
              </p>
              <ul className={checkList}>
                <li><Link to="/young-toddler/">Young Toddler: 18 months to 2 1/2 years</Link></li>
                <li><Link to="/early-years/">Early Years: 2 to 3 years</Link></li>
                <li><Link to="/preschool/">Preschool: 3 to 4 years</Link></li>
                <li><Link to="/kindergarten-readiness/">Kindergarten Readiness: 4 to 5 years</Link></li>
              </ul>
            </div>

            <div className={localSeoCard}>
              <h2>Frequently asked by local families</h2>
              <h3>Where is Columbia Children&apos;s Center located?</h3>
              <p>We are located at 840 E. Stowell Road in Santa Maria, CA 93454.</p>
              <h3>What ages do you serve?</h3>
              <p>We serve children from 18 months through 5 years old across four age-based programs.</p>
              <h3>Do you offer full-day and half-day preschool?</h3>
              <p>Yes. Schedule options vary by program, and most classrooms offer flexible enrollment options.</p>
            </div>
          </div>
        </section>
      </Layout>
    </ParallaxProvider>
  );
};

export default IndexPage;
