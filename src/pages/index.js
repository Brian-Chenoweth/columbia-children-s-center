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
          text: 'We serve children from 18 months through 5 years old across four age-based programs.',
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
        titleOverride="Preschool in Santa Maria, CA | Columbia Children's Center"
        pathname="/"
        metaDesc="Columbia Children's Center is a trusted preschool in Santa Maria, CA serving children ages 18 months to 5 years with play-based learning, caring teachers, and flexible schedules since 1992."
        schemaData={[faqSchema]}
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
          <div className={localHero}>
            <div className={localHeroGrid}>
              <div>
                <span className={eyebrow}>Santa Maria Preschool</span>
                <h2 className={heroTitle}>A local preschool families have trusted for more than 30 years</h2>
                <p className={heroLead}>
                  Columbia Children&apos;s Center is a Santa Maria preschool and child care center built
                  for families who want caring teachers, clear communication, safe classrooms, and a
                  strong early-learning foundation before kindergarten.
                </p>
                <p>
                  We serve children ages 18 months to 5 years with age-based programs, play-based
                  learning, and flexible schedules that work for local families.
                </p>
                <div className={heroStats}>
                  <div className={heroStat}>
                    <strong>1992</strong>
                    <span>Locally owned since</span>
                  </div>
                  <div className={heroStat}>
                    <strong>4</strong>
                    <span>Age-based programs</span>
                  </div>
                  <div className={heroStat}>
                    <strong>5 days</strong>
                    <span>Open Monday through Friday</span>
                  </div>
                </div>
                <div className={ctaRow}>
                  <a
                    href="https://schools.procareconnect.com/form/fa223adc-c95c-436e-b0bc-b2f252f5f9d9"
                    className={ctaButton}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Schedule a Tour
                  </a>
                  <Link to="/preschool/" className={`${ctaButton} ${ctaButtonAlt}`}>See Our Preschool Program</Link>
                </div>
              </div>

              <aside className={heroPanel}>
                <h2>Why local parents shortlist us</h2>
                <ul>
                  <li>Convenient Stowell Road location near Highway 101 and Allan Hancock College</li>
                  <li>Secure entry, bright classrooms, and child-focused spaces</li>
                  <li>Programs designed around social, emotional, and academic readiness</li>
                  <li>Flexible half-day and full-day enrollment options in most programs</li>
                  <li>Year-round care for working families in Santa Maria</li>
                </ul>
                <h3 style={{ marginTop: '1.5rem' }}>Visit us</h3>
                <p>
                  840 E. Stowell Road
                  <br />
                  Santa Maria, CA 93454
                  <br />
                  <a href="tel:1-805-922-5437">805-922-KIDS (5437)</a>
                </p>
              </aside>
            </div>
          </div>
        </section>

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

            <div className={`${localSeoCard} ${accentCard}`}>
              <h2>Areas we serve around Santa Maria</h2>
              <p>
                Many of our families come from neighborhoods and nearby communities throughout the Santa
                Maria Valley. If you want a preschool close to work, home, or school pick-up routes,
                our location is easy to reach.
              </p>
              <div className={neighborhoodGrid}>
                <div className={neighborhoodPill}>Santa Maria</div>
                <div className={neighborhoodPill}>Orcutt</div>
                <div className={neighborhoodPill}>Nipomo</div>
                <div className={neighborhoodPill}>Mission Highlands</div>
                <div className={neighborhoodPill}>Rice Ranch</div>
                <div className={neighborhoodPill}>North Broadway Area</div>
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
              <h2>What parents usually ask before touring</h2>
              <div className={faqList}>
                <div className={faqItem}>
                  <h3>Where is Columbia Children&apos;s Center located?</h3>
                  <p>We are located at 840 E. Stowell Road in Santa Maria, CA 93454.</p>
                </div>
                <div className={faqItem}>
                  <h3>What ages do you serve?</h3>
                  <p>We serve children from 18 months through 5 years old across four age-based programs.</p>
                </div>
                <div className={faqItem}>
                  <h3>Do you offer full-day and half-day preschool?</h3>
                  <p>Yes. Schedule options vary by program, and most classrooms offer flexible enrollment options.</p>
                </div>
                <div className={faqItem}>
                  <h3>How do I start the enrollment process?</h3>
                  <p>Start by scheduling a tour or contacting our team. We can help you choose the best classroom and schedule for your child.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={tourBanner}>
            <h2>Ready to compare preschools in Santa Maria in person?</h2>
            <p>
              The fastest way to decide if Columbia Children&apos;s Center is the right fit is to visit
              the campus, meet the teachers, and see the classrooms your child would actually use.
            </p>
            <div className={ctaRow}>
              <a
                href="https://schools.procareconnect.com/form/fa223adc-c95c-436e-b0bc-b2f252f5f9d9"
                className={ctaButton}
                target="_blank"
                rel="noreferrer"
              >
                Book a Tour
              </a>
              <a href="tel:1-805-922-5437" className={`${ctaButton} ${ctaButtonAlt}`}>Call 805-922-KIDS</a>
            </div>
          </div>
        </section>
      </Layout>
    </ParallaxProvider>
  );
};

export default IndexPage;
