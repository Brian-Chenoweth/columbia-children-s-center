import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import {
  localSeoSection,
  localFeatureImage,
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
  faqList,
  faqItem,
  tourBanner,
  ctaRow,
  ctaButton,
  ctaButtonAlt,
} from './styles/index.module.scss';

const ChildcareSantaMariaPage = () => {
  const faqSchema = {
    '@type': 'FAQPage',
    '@id': 'https://columbiachildrenscenter.com/childcare-santa-maria/#faq',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you offer child care in Santa Maria, California?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Columbia Children\'s Center provides child care and early education in Santa Maria, California for children ages 18 months through 5 years.',
        },
      },
      {
        '@type': 'Question',
        name: 'What ages do you accept for child care?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We serve children from 18 months to 5 years old in age-based programs designed for toddlers, early learners, preschoolers, and pre-kindergarten students.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer full-day child care in Santa Maria?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Most classrooms offer half-day and full-day schedule options for local families who need dependable weekly care.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I schedule a child care tour?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can schedule a tour online or call 805-922-KIDS to speak with our team about availability and the right program for your child.',
        },
      },
    ],
  };

  return (
    <Layout
      pageTitle="Santa Maria Child Care"
      titleOverride="Child Care in Santa Maria, CA | Columbia Children's Center"
      pathname="/childcare-santa-maria/"
      metaDesc="Looking for child care in Santa Maria, CA? Columbia Children's Center offers trusted daycare and early education for children ages 18 months to 5 years with caring teachers and flexible schedules."
      metaKeywords="child care santa maria, childcare santa maria, daycare santa maria ca, child care in santa maria ca, childcare near me, daycare near me santa maria"
      schemaData={[faqSchema]}
    >
      <section className={localSeoSection}>
        <div className={localHero}>
          <div className={localHeroGrid}>
            <div>
              <span className={eyebrow}>Child Care Santa Maria, CA</span>
              <h2 className={heroTitle}>Dependable child care for Santa Maria families</h2>
              <p className={heroLead}>
                Columbia Children&apos;s Center provides child care and early learning for families who
                want a safe, nurturing place where children can grow, play, and build readiness for
                the next stage of school.
              </p>
              <p>
                If you are comparing child care in Santa Maria, our center offers age-based classrooms,
                caring teachers, structured routines, and flexible schedule options that support working
                parents.
              </p>
              <div className={heroStats}>
                <div className={heroStat}>
                  <strong>30+</strong>
                  <span>Years serving Santa Maria</span>
                </div>
                <div className={heroStat}>
                  <strong>18 mo-5 yrs</strong>
                  <span>Programs by age</span>
                </div>
                <div className={heroStat}>
                  <strong>Mon-Fri</strong>
                  <span>Open 7:00 a.m. to 5:30 p.m.</span>
                </div>
              </div>
              <div className={ctaRow}>
                <a
                  href="/contact/"
                  className={ctaButton}
                  rel="noreferrer"
                >
                  Schedule a Tour
                </a>
                <Link to="/young-toddler/" className={`${ctaButton} ${ctaButtonAlt}`}>View Programs by Age</Link>
              </div>
            </div>

            <aside className={heroPanel}>
              <h2>Visit our Santa Maria child care center</h2>
              <p>
                840 E. Stowell Road
                <br />
                Santa Maria, CA 93454
                <br />
                <a href="tel:1-805-922-5437">805-922-KIDS (5437)</a>
              </p>
              <ul>
                <li>Convenient for families near Highway 101 and Allan Hancock College</li>
                <li>Secure entry and classrooms designed for young children</li>
                <li>Half-day and full-day scheduling in most programs</li>
                <li>Play-based learning with consistent routines</li>
                <li>Year-round child care for working families</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className={localSeoSection}>
        <StaticImage
          src="../images/home/young-toddler.jpg"
          className={localFeatureImage}
          alt="Child care classroom at Columbia Children's Center in Santa Maria, California"
        />
      </section>

      <section className={localSeoSection}>
        <div className={localSeoGrid}>
          <div className={localSeoCard}>
            <h2>Why families looking for child care in Santa Maria choose us</h2>
            <p>
              Parents need more than coverage for the day. They need child care that feels reliable,
              warm, and developmentally appropriate. Our center combines nurturing care with early
              learning, social development, and strong communication with families.
            </p>
            <ul className={checkList}>
              <li>Locally owned child care center serving Santa Maria since 1992</li>
              <li>Age-based classrooms for toddlers through pre-kindergarten</li>
              <li>Daily routines that support confidence, independence, and language growth</li>
              <li>Play-based learning in a safe, child-focused setting</li>
              <li>Convenient location for commuting and working parents</li>
            </ul>
          </div>

          <div className={`${localSeoCard} ${accentCard}`}>
            <h2>Families we serve</h2>
            <p>
              Many families searching for daycare or child care near Santa Maria choose us because our
              campus is easy to reach from neighborhoods across the Santa Maria Valley.
            </p>
            <ul className={checkList}>
              <li>Santa Maria</li>
              <li>Orcutt</li>
              <li>Nipomo</li>
              <li>Mission Highlands</li>
              <li>Rice Ranch</li>
              <li>North Broadway area</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={localSeoSection}>
        <div className={localSeoGrid}>
          <div className={localSeoCard}>
            <h2>Programs for toddlers, preschool, and pre-kindergarten</h2>
            <p>
              Our child care programs are organized by age so each classroom can match the routines,
              teacher support, and activities children need at that stage of development.
            </p>
            <ul className={checkList}>
              <li><Link to="/young-toddler/">Young Toddler: 18 months to 2 1/2 years</Link></li>
              <li><Link to="/early-years/">Early Years: 2 to 3 years</Link></li>
              <li><Link to="/preschool/">Preschool: 3 to 4 years</Link></li>
              <li><Link to="/kindergarten-readiness/">Kindergarten Readiness: 4 to 5 years</Link></li>
            </ul>
          </div>

          <div className={localSeoCard}>
            <h2>What to expect from our Santa Maria daycare and child care center</h2>
            <p>
              Children spend their day in structured routines that include play, art, language
              development, group activities, outdoor time, and teacher-guided learning experiences.
            </p>
            <p>
              Our goal is to give families dependable care while helping children develop socially,
              emotionally, and academically in ways that match their age and readiness.
            </p>
          </div>
        </div>
      </section>

      <section className={localSeoSection}>
        <div className={faqList}>
          <div className={faqItem}>
            <h2>FAQs about child care in Santa Maria</h2>
          </div>
          <div className={faqItem}>
            <h3>Do you offer child care in Santa Maria, California?</h3>
            <p>Yes. We provide child care and early education at 840 E. Stowell Road, Santa Maria, CA 93454.</p>
          </div>
          <div className={faqItem}>
            <h3>What ages do you accept for child care?</h3>
            <p>We serve children ages 18 months through 5 years old across four age-based programs.</p>
          </div>
          <div className={faqItem}>
            <h3>Do you offer full-day child care in Santa Maria?</h3>
            <p>Yes. Most classrooms offer flexible half-day and full-day scheduling options.</p>
          </div>
          <div className={faqItem}>
            <h3>How do I schedule a tour?</h3>
            <p>Schedule online or call <a href="tel:1-805-922-5437">805-922-KIDS</a> to speak with our team.</p>
          </div>
        </div>

        <div className={tourBanner}>
          <h2>Looking for child care in Santa Maria that fits your routine?</h2>
          <p>
            Visiting the center is the fastest way to compare classrooms, ask about schedules, and see
            whether our teachers and daily routines feel like the right fit for your family.
          </p>
          <div className={ctaRow}>
            <a
              href="/contact/"
              className={ctaButton}
              target="_blank"
              rel="noreferrer"
            >
              Book a Tour
            </a>
            <Link to="/about/" className={`${ctaButton} ${ctaButtonAlt}`}>Learn More About Us</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ChildcareSantaMariaPage;
