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

const PreschoolSantaMariaPage = () => {
  const faqSchema = {
    '@type': 'FAQPage',
    '@id': 'https://columbiachildrenscenter.com/preschool-santa-maria/#faq',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Are you a preschool in Santa Maria, California?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Columbia Children\'s Center is a preschool and child care center located at 840 E. Stowell Road, Santa Maria, CA 93454.',
        },
      },
      {
        '@type': 'Question',
        name: 'What ages do you accept?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We serve children ages 18 months through 5 years old across four age-based programs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer full-day preschool in Santa Maria?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Most classrooms offer half-day and full-day schedule options for local families.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I schedule a preschool tour?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can schedule a tour online or call 805-922-KIDS to speak with our team.',
        },
      },
    ],
  };

  return (
    <Layout
      pageTitle="Santa Maria Preschool"
      titleOverride="Preschool Santa Maria, CA | Columbia Children's Center"
      pathname="/preschool-santa-maria/"
      metaDesc="Looking for a preschool in Santa Maria, CA? Columbia Children's Center offers trusted early education, caring teachers, and flexible schedules for children ages 18 months to 5 years."
      metaKeywords="preschool santa maria, santa maria preschool, best preschool santa maria, preschool near me, child care santa maria, daycare santa maria ca"
      schemaData={[faqSchema]}
    >
      <section className={localSeoSection}>
        <div className={localHero}>
          <div className={localHeroGrid}>
            <div>
              <span className={eyebrow}>Preschool Santa Maria, CA</span>
              <h2 className={heroTitle}>A trusted Santa Maria preschool for local families</h2>
              <p className={heroLead}>
                Columbia Children&apos;s Center helps children build confidence, early academic skills,
                and strong social development in a safe, caring preschool environment in Santa Maria.
              </p>
              <p>
                Families looking for a preschool near home, work, or school routes choose us for our
                long local history, age-based classrooms, secure campus, and flexible schedule options.
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
                  href="https://schools.procareconnect.com/form/fa223adc-c95c-436e-b0bc-b2f252f5f9d9"
                  className={ctaButton}
                  target="_blank"
                  rel="noreferrer"
                >
                  Schedule a Tour
                </a>
                <Link to="/preschool/" className={`${ctaButton} ${ctaButtonAlt}`}>View Preschool Program</Link>
              </div>
            </div>

            <aside className={heroPanel}>
              <h2>Visit our Santa Maria preschool</h2>
              <p>
                840 E. Stowell Road
                <br />
                Santa Maria, CA 93454
                <br />
                <a href="tel:1-805-922-5437">805-922-KIDS (5437)</a>
              </p>
              <ul>
                <li>Near Highway 101 and Allan Hancock College</li>
                <li>Secure entry and bright classrooms</li>
                <li>Half-day and full-day options in most programs</li>
                <li>Play-based learning with caring teachers</li>
                <li>Year-round care for working families</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className={localSeoSection}>
        <StaticImage
          src="../images/home/preschool.jpg"
          className={localFeatureImage}
          alt="Children learning in a preschool classroom in Santa Maria, California"
        />
      </section>

      <section className={localSeoSection}>
        <div className={localSeoGrid}>
          <div className={localSeoCard}>
            <h2>Why families searching for the best preschool in Santa Maria choose us</h2>
            <p>
              Choosing a preschool is personal. Parents want a place where children feel safe, known,
              and encouraged to learn every day. Columbia Children&apos;s Center was built around those
              priorities, with classrooms designed specifically for young children and staff focused on
              social, emotional, and school-readiness growth.
            </p>
            <ul className={checkList}>
              <li>Locally owned preschool and child care center since 1992</li>
              <li>Programs for toddlers, preschool, and pre-kindergarten</li>
              <li>Consistent daily routines that support confidence and independence</li>
              <li>Strong communication with families</li>
              <li>Convenient Santa Maria location for commuting parents</li>
            </ul>
          </div>

          <div className={`${localSeoCard} ${accentCard}`}>
            <h2>Who we serve</h2>
            <p>
              We welcome families from across Santa Maria and nearby communities who want dependable
              early education and child care close to daily routines.
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
            <h2>Programs for each stage of early learning</h2>
            <p>
              Our classrooms are grouped by age so children can learn with activities, routines, and
              expectations that fit their stage of development.
            </p>
            <ul className={checkList}>
              <li><Link to="/young-toddler/">Young Toddler: 18 months to 2 1/2 years</Link></li>
              <li><Link to="/early-years/">Early Years: 2 to 3 years</Link></li>
              <li><Link to="/preschool/">Preschool: 3 to 4 years</Link></li>
              <li><Link to="/kindergarten-readiness/">Kindergarten Readiness: 4 to 5 years</Link></li>
            </ul>
          </div>

          <div className={localSeoCard}>
            <h2>What to expect from our Santa Maria preschool</h2>
            <p>
              Our preschool program for ages 3 to 4 emphasizes confidence building, early literacy and
              numeracy, listening skills, cooperation, language development, and hands-on learning.
            </p>
            <p>
              Children participate in circle time, art, science, dramatic play, music, movement, and
              other center-based activities that prepare them for kindergarten while keeping learning
              engaging and age appropriate.
            </p>
          </div>
        </div>
      </section>

      <section className={localSeoSection}>
        <div className={faqList}>
          <div className={faqItem}>
            <h2>FAQs about finding a preschool in Santa Maria</h2>
          </div>
          <div className={faqItem}>
            <h3>Are you a preschool in Santa Maria, California?</h3>
            <p>Yes. We are located at 840 E. Stowell Road, Santa Maria, CA 93454.</p>
          </div>
          <div className={faqItem}>
            <h3>What ages do you accept?</h3>
            <p>We serve children ages 18 months through 5 years old across four programs.</p>
          </div>
          <div className={faqItem}>
            <h3>Do you offer full-day preschool in Santa Maria?</h3>
            <p>Yes. Most classrooms offer flexible half-day and full-day scheduling options.</p>
          </div>
          <div className={faqItem}>
            <h3>How do I schedule a tour?</h3>
            <p>Schedule online or call <a href="tel:1-805-922-5437">805-922-KIDS</a> to speak with our team.</p>
          </div>
        </div>

        <div className={tourBanner}>
          <h2>Compare preschools in Santa Maria by visiting in person</h2>
          <p>
            Touring the campus is the fastest way to see whether our classrooms, teachers, and daily
            routines feel like the right fit for your child.
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
            <Link to="/about/" className={`${ctaButton} ${ctaButtonAlt}`}>Learn More About Us</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PreschoolSantaMariaPage;
