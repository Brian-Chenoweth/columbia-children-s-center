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
  featureCol,
  heroArt,
  bottomBand,
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
import classPhotoThree from '../images/home/kids-raising-hands.png';

const graduationDate = new Date('2026-06-10T17:30:00-07:00');
const graduationEndDate = new Date('2026-06-10T19:00:00-07:00');
const eventTitle = 'Columbia Children\'s Center Preschool Graduation 2026';
const eventLocation = '840 E. Stowell Road, Santa Maria, CA 93454';
const eventDescription = 'Join us for songs, smiles, and a proud milestone moment for our little graduates.';

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
  const now = new Date();
  const diff = graduationDate.getTime() - now.getTime();

  if (diff <= 0) {
    return 'It is Graduation Day!';
  }

  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
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
        <title>Preschool Graduation 2026 | Columbia Children's Center</title>
        <meta
          name="description"
          content="Columbia Children's Center Preschool Graduation flyer for June 10, 2026. Celebrate our little graduates and get event details."
        />
        <meta property="og:title" content="Preschool Graduation 2026 | Columbia Children's Center" />
        <meta
          property="og:description"
          content="Join us for Preschool Graduation on June 10, 2026. A joyful celebration for our little graduates."
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
              <div className={dateTag}>WEDNESDAY, JUNE 10, 2026</div>
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

          <h1 className={headline}>PRESCHOOL GRADUATION CELEBRATION</h1>
          <p className={subhead}>
            Welcome, Graduates! Join us for songs, smiles, and a proud milestone moment for our class.
          </p>

          <section className={flyerGrid}>
            <div className={detailsCol}>
              <article className={detailBox}>
                <h2 className={detailTitle}>Event Snapshot</h2>
                <p>
                  Date: Wednesday, June 10, 2026
                  <br />
                  Hosted by: Columbia Children&apos;s Center
                  <br />
                  Theme: Welcome Graduates
                </p>
              </article>

              <article className={detailBox}>
                <h2 className={detailTitle}>Family Notes</h2>
                <p>
                  Please check your classroom notice for line-up and arrival timing.
                  Bring your camera and your loudest cheers.
                </p>
              </article>

              <article className={detailBox}>
                <h2 className={detailTitle}>Location</h2>
                <p>
                  840 E. Stowell Road, Santa Maria, CA
                  <br />
                  <a href="tel:1-805-922-5437">805-922-KIDS (5437)</a>
                </p>
              </article>
            </div>

            <div className={featureCol}>
              <img src={classPhotoThree} alt="Children celebrating together" className={heroArt} />
            </div>
          </section>

          <section className={bottomBand}>
            <img
              src={gradKids}
              alt="Graduation character with balloons"
            />
            <img
              src={orangeGuyBalloons}
              alt="Graduation character with balloons"
            />
          </section>

          <div className={actionRow}>
            <a href="tel:1-805-922-5437" className={callButton}>Call 805-922-KIDS</a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default GraduationPage;
