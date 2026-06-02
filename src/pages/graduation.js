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
import orangeGuyBalloons from '../images/icons/orangeguyballoon.svg';
import gradKids from '../images/icons/kids-grad-right-half.svg';

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
  ['Graduate Presentation (Medals)', 'Children'],
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
        <meta
          name="description"
          content="Columbia Children's Center Transitional Kindergarten Graduation landing page for June 10, 2026 with ceremony details, schedule, and program."
        />
        <meta property="og:title" content="TK Graduation 2026 | Columbia Children's Center" />
        <meta
          property="og:description"
          content="Join us for the Thirty-Fourth Commencement Ceremony on June 10, 2026 at Rotary Centennial Park."
        />
        <meta property="og:image" content="https://columbiachildrenscenter.com/columbia-childrens-center-front.png" />
        <link rel="canonical" href="https://columbiachildrenscenter.com/graduation/" />
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
            </div>
          </header>

          <h1 className={headline}>TRANSITIONAL KINDERGARTEN GRADUATION</h1>
          <p className={subhead}>
            Thirty-Fourth Commencement Ceremony. We are excited to celebrate our graduating TK class as they prepare for kindergarten.
          </p>

          <section className={flyerGrid}>
            <div className={detailsCol}>
              <article className={detailBox}>
                <h2 className={detailTitle}>Ceremony Details</h2>
                <p>
                  Date: Wednesday, June 10, 2026
                  <br />
                  Time: 2:00 p.m.
                  <br />
                  Location: Rotary Centennial Park Gazebo
                  <br />
                  2625 S. College Dr., Santa Maria, CA 93455
                  <br />
                  <a href={mapUrl} target="_blank" rel="noreferrer">Open in Google Maps</a>
                </p>
              </article>

              <article className={detailBox}>
                <h2 className={detailTitle}>Graduation Day Schedule</h2>
                <p>
                  Child pick-up from CCC: 12:15 p.m.
                  <br />
                  Family arrival at park: 1:45 p.m.
                  <br />
                  1:55 p.m.: Bring your child behind the gazebo and check in with their teacher.
                </p>
              </article>

              <article className={detailBox}>
                <h2 className={detailTitle}>Special Notes</h2>
                <p>
                  Graduates are invited to dress up for this special day.
                  <br />
                  Families are welcome to bring lawn chairs or blankets for seating on the grass.
                  <br />
                  After the ceremony, please stay for pictures, mingling, and dessert by <a href="https://hanohanoice.com/" target="_blank" rel="noreferrer">Hanohano Shave Ice</a>.
                </p>
              </article>
            </div>

            <div className={featureCol}>
              <article className={detailBox}>
                <h2 className={detailTitle}>Ceremony At A Glance</h2>
                <p>
                  Event: Thirty-Fourth Commencement Ceremony
                  <br />
                  Hosted by: Columbia Children&apos;s Center
                  <br />
                  Class: Transitional Kindergarten Graduates of 2026
                </p>
              </article>

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

              <div className={illustrationCard}>
                <img
                  src={orangeGuyBalloons}
                  alt="Graduate character with balloons"
                  className={illustrationImage}
                />
              </div>

              <article className={detailBox}>
                <h2 className={detailTitle}>After Ceremony</h2>
                <p>
                  Please stay for photos and celebration after the ceremony.
                  <br />
                  Dessert will be provided by <a href="https://hanohanoice.com/" target="_blank" rel="noreferrer">Hanohano Shave Ice</a>.
                </p>
              </article>
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

          <div className={actionRow}>
            <a href="tel:1-805-922-5437" className={callButton}>Call 805-922-KIDS</a>
          </div>

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
