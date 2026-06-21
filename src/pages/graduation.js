import * as React from 'react';
import { Helmet } from 'react-helmet';
import {
  flyerPage,
  flyerStage,
  flyerCard,
  confetti,
  masthead,
  mastheadControls,
  logoMark,
  dateTag,
  headline,
  subhead,
  flyerGrid,
  detailsCol,
  detailBox,
  detailTitle,
  ceremonySubhead,
  infoSection,
  infoBlock,
  infoHeading,
  programTableWrap,
  programTable,
  graduateGrid,
  closingNote,
  featureCol,
  illustrationCard,
  illustrationImage,
  bottomSoloImage,
  countdownPill,
  actionRow,
  calendarWrap,
  calendarButton,
  calendarMenu,
  calendarOption,
  callButton,
} from './styles/graduation.module.scss';

import logo from '../images/logo.png';
import orangeGuyBalloons from '../images/icons/balloon-shaved-ice-guy.png';
import orangeGuyBalloonIcon from '../images/icons/orangeguyballoon.svg';
import gradKids from '../images/icons/kids-grad-right-half.svg';

const siteOrigin = 'https://columbiachildrenscenter.com';
const canonicalUrl = `${siteOrigin}/graduation/`;
const graduationOgImageUrl = `${siteOrigin}/kids-grad-right-half.svg.png`;
const graduationDate = new Date('2026-06-10T14:00:00-07:00');
const graduationEndDate = new Date('2026-06-10T15:30:00-07:00');
const eventTitle = 'Columbia Children\'s Center Transitional Kindergarten Graduation 2026';
const eventLocation = 'Rotary Centennial Park Gazebo, 2625 S. College Dr., Santa Maria, CA 93455';
const eventDescription = 'Thirty-Fourth Commencement Ceremony for CCC Transitional Kindergarten graduates.';
const eventTimeZone = 'America/Los_Angeles';
const mapUrl = 'https://maps.google.com/?q=Rotary+Centennial+Park+Gazebo+2625+S+College+Dr+Santa+Maria+CA+93455';

const ceremonyProgram = [
  ['Welcome', 'Teacher Amanda'],
  ['Flag Salute', 'Teacher Amanda'],
  ['Good Afternoon Song', 'Children'],
  ['Days of the Week Song', 'Children'],
  ['Months of the Year Song', 'Children'],
  ['Whole World Song', 'Children'],
  ['ABC Song', 'Children'],
  ['Tap, Tap, Tap Song', 'Children'],
  ['Wiggle Song', 'Children'],
  ['Time to Graduate', 'Children'],
  ['Dynamite', 'Children'],
  ['Graduate Presentation (Medals)', 'Director Scott'],
];

const graduatingClass = [
  'Diego Aguilar',
  'Luna Borjon',
  'Julian Bravo',
  'Bonnie Bryant',
  'Sophia Chenoweth',
  'Ava Cruz Ramirez',
  'Freya Daily',
  'Malani Fair Arredondo',
  'Liam Goulet',
  'Amora Hall Baker',
  'Cash Kelly',
  'Cooper Le',
  'Malakai Leos',
  'Elia Prada Cooper',
  'Aiden Ramirez',
  'Lucia Rigsby',
  'Madisyn Roy',
  'Cody Schofield',
  'Adrian Trejo',
];

const formatCalendarDateUTC = (date) => date.toISOString().replace(/[-:]/g, '').replace('.000', '');

const createGoogleCalendarUrl = () => {
  const start = formatCalendarDateUTC(graduationDate);
  const end = formatCalendarDateUTC(graduationEndDate);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${start}/${end}&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(eventLocation)}`;
};

const createOutlookCalendarUrl = () => {
  const start = graduationDate.toISOString();
  const end = graduationEndDate.toISOString();

  return `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${encodeURIComponent(eventTitle)}&startdt=${encodeURIComponent(start)}&enddt=${encodeURIComponent(end)}&body=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(eventLocation)}`;
};

const downloadAppleCalendarFile = () => {
  const start = formatCalendarDateUTC(graduationDate);
  const end = formatCalendarDateUTC(graduationEndDate);

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'CALSCALE:GREGORIAN',
    'PRODID:-//Columbia Childrens Center//Graduation//EN',
    'BEGIN:VEVENT',
    `UID:ccc-graduation-2026@columbiachildrenscenter.com`,
    `DTSTAMP:${formatCalendarDateUTC(new Date())}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${eventTitle}`,
    `DESCRIPTION:${eventDescription}`,
    `LOCATION:${eventLocation}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'ccc-preschool-graduation-2026.ics';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

const getCountdownLabel = () => {
  const getDatePartsInTimeZone = (date, timeZone) => {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    const parts = formatter.formatToParts(date);
    const year = Number(parts.find((part) => part.type === 'year')?.value);
    const month = Number(parts.find((part) => part.type === 'month')?.value);
    const day = Number(parts.find((part) => part.type === 'day')?.value);

    return { year, month, day };
  };

  const now = new Date();
  const todayInLA = getDatePartsInTimeZone(now, eventTimeZone);
  const gradInLA = getDatePartsInTimeZone(graduationDate, eventTimeZone);

  const todayUtcMidnight = Date.UTC(todayInLA.year, todayInLA.month - 1, todayInLA.day);
  const gradUtcMidnight = Date.UTC(gradInLA.year, gradInLA.month - 1, gradInLA.day);
  const days = Math.floor((gradUtcMidnight - todayUtcMidnight) / (1000 * 60 * 60 * 24));

  if (days <= 0) {
    return 'It is Graduation Day!';
  }

  return `${days} day${days === 1 ? '' : 's'} until graduation`;
};

const GraduationPage = () => {
  const countdownLabel = getCountdownLabel();
  const [showCalendarMenu, setShowCalendarMenu] = React.useState(false);

  return (
    <main className={flyerPage}>
      <Helmet>
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>TK Graduation 2026 | Columbia Children's Center</title>
        <link rel="icon" href={orangeGuyBalloonIcon} type="image/svg+xml" />
        <link rel="shortcut icon" href={orangeGuyBalloonIcon} type="image/svg+xml" />
        <meta
          name="description"
          content="Columbia Children's Center Transitional Kindergarten Graduation landing page for June 10, 2026 with ceremony details, schedule, and program."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content="TK Graduation 2026 | Columbia Children's Center" />
        <meta
          property="og:description"
          content="Join us for the Thirty-Fourth Commencement Ceremony on June 10, 2026 at Rotary Centennial Park."
        />
        <meta property="og:image" content={graduationOgImageUrl} />
        <meta property="og:image:secure_url" content={graduationOgImageUrl} />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TK Graduation 2026 | Columbia Children's Center" />
        <meta
          name="twitter:description"
          content="Join us for the Thirty-Fourth Commencement Ceremony on June 10, 2026 at Rotary Centennial Park."
        />
        <meta name="twitter:image" content={graduationOgImageUrl} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <div className={flyerStage}>
        <section className={flyerCard}>
          <div className={confetti} aria-hidden="true" />

          <header className={masthead}>
            <img src={logo} alt="Columbia Children's Center" className={logoMark} />

            <div className={mastheadControls}>
              <div className={dateTag}>WEDNESDAY, JUNE 10, 2026 - 2:00 P.M.</div>
              <div className={countdownPill}>{countdownLabel}</div>

              <div className={calendarWrap}>
                <button
                  type="button"
                  className={calendarButton}
                  onClick={() => setShowCalendarMenu((prev) => !prev)}
                  aria-expanded={showCalendarMenu}
                  aria-controls="calendar-menu"
                >
                  Add to Calendar
                </button>

                {showCalendarMenu && (
                  <div className={calendarMenu} id="calendar-menu">
                    <a
                      href={createGoogleCalendarUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className={calendarOption}
                    >
                      Google Calendar
                    </a>
                    <a
                      href={createOutlookCalendarUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className={calendarOption}
                    >
                      Outlook Calendar
                    </a>
                    <button type="button" onClick={downloadAppleCalendarFile} className={calendarOption}>
                      Apple Calendar
                    </button>
                  </div>
                )}
              </div>

              <a href="tel:1-805-922-5437" className={callButton}>Call 805-922-KIDS</a>
            </div>
          </header>

          <h1 className={headline}>TRANSITIONAL KINDERGARTEN GRADUATION</h1>
          <a href="https://app.tryplayground.com/X7tvoDUHwazFjm1hgbal/book/j2qKHKe4akbD4Cv9DED7" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginBottom: '1rem', marginTop: '1rem', padding: '0.75rem 1.5rem', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '0.375rem', fontWeight: 'bold' }}>Book a Tour</a>
          <div className={ceremonySubhead}>Thirty-Fourth Commencement Ceremony</div>
          <p className={subhead}>
            We are excited to celebrate the accomplishments of our graduating TK class at our Thirty-Fourth Commencement Ceremony. This special day marks an important milestone as our graduates prepare for kindergarten and the adventures ahead.
          </p>

          <section className={flyerGrid}>
            <div className={detailsCol}>
              <article className={detailBox}>
                <h2 className={detailTitle}>Ceremony Details</h2>
                <p>
                  <strong>Date:</strong> Wednesday, June 10, 2026
                  <br />
                  <strong>Time:</strong> 2:00 p.m.
                  <br />
                  <strong>Location:</strong> Rotary Centennial Park Gazebo
                  <br />
                  2625 S. College Dr., Santa Maria, CA 93455
                  <br />
                  <a href={mapUrl} target="_blank" rel="noreferrer">Open in Google Maps</a>
                </p>
              </article>

              <article className={detailBox}>
                <h2 className={detailTitle}>Graduation Day Schedule</h2>
                <p>
                  <strong>12:15 p.m.:</strong> Child pick-up from CCC
                  <br />
                  <strong>1:45 p.m.:</strong> Family arrival at park
                  <br />
                  <strong>1:55 p.m.:</strong> Bring your child behind the gazebo and check in with their teacher.
                </p>
              </article>

              <article className={detailBox}>
                <h2 className={detailTitle}>Special Notes</h2>
                <p>
                  Graduates are invited to dress up for this special day.
                  <br />
                  Families are welcome to bring lawn chairs or blankets for seating on the grass.
                  <br />
                  Nicolle will be taking pictures of the graduates as they get their medals and sending them to you.
                  <br />
                  After the ceremony, please stay for pictures, mingling, and dessert by <a href="https://hanohanoice.com/" target="_blank" rel="noreferrer">Hanohano Shave Ice</a>.
                </p>
              </article>
            </div>

            <div className={featureCol}>
              <article className={detailBox}>
                <h2 className={detailTitle}>Family Setup</h2>
                <p>
                  Please establish your seating area on the grass facing the gazebo.
                  <br />
                  Bring lawn chairs or blankets for comfort.
                  <br />
                  Families are warmly invited to attend and cheer on our graduates.
                </p>
              </article>

              <article className={detailBox}>
                <h2 className={detailTitle}>After Ceremony</h2>
                <p>
                  Please stay for photos and celebration after the ceremony.
                  <br />
                  Dessert will be provided by <a href="https://hanohanoice.com/" target="_blank" rel="noreferrer">Hanohano Shave Ice</a>.
                </p>
              </article>

              <div className={illustrationCard}>
                <img
                  src={orangeGuyBalloons}
                  alt="Graduate character with balloons"
                  className={illustrationImage}
                />
              </div>

            </div>
          </section>

          <section className={infoSection}>
            <article className={infoBlock}>
              <h2 className={infoHeading}>Ceremony Program</h2>
              <div className={programTableWrap}>
                <table className={programTable}>
                  <thead>
                    <tr>
                      <th scope="col">Program Item</th>
                      <th scope="col">Presented By</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ceremonyProgram.map(([item, presenter]) => (
                      <tr key={item}>
                        <td>{item}</td>
                        <td>{presenter}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <article className={infoBlock}>
              <h2 className={infoHeading}>Graduating Class of 2026</h2>
              <ul className={graduateGrid}>
                {graduatingClass.map((graduate) => (
                  <li key={graduate}>{graduate}</li>
                ))}
              </ul>
              <p className={closingNote}>
                Congratulations to our graduates. We are so proud of each and every one of you.
              </p>
            </article>
          </section>

          <img
            src={gradKids}
            alt="Graduating class celebration artwork"
            className={bottomSoloImage}
          />
        </section>
      </div>
    </main>
  );
};

export default GraduationPage;
