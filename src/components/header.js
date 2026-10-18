import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import {
  cityPhone,
  enrollmentBanner,
  enrollmentContent,
  enrollmentDetails,
  enrollmentMessage,
  enrollmentTitle,
} from './styles/header.module.scss'

const Header = () => {
  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const banner = document.querySelector('[class*="enrollment-banner"]');
    if (!banner) {
      return undefined;
    }

    const setBannerOffset = () => {
      const height = Math.round(banner.getBoundingClientRect().height || 0);
      if (height > 0) {
        document.documentElement.style.setProperty('--enrollment-banner-offset', `${height}px`);
      }
    };

    setBannerOffset();
    window.addEventListener('resize', setBannerOffset);

    const observer = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(() => setBannerOffset())
      : null;

    if (observer) {
      observer.observe(banner);
    }

    return () => {
      window.removeEventListener('resize', setBannerOffset);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <>
      <div className={enrollmentBanner}>
        <div className={enrollmentContent}>
        <div className={enrollmentMessage}>
          <strong className={enrollmentTitle}>
            NOW ENROLLING — OPENINGS IN ALL PROGRAMS!
          </strong>
          <span className={enrollmentDetails}>
            <span>Ages 18 Months – 5 Years</span>
            <span>Full &amp; Part-Time Options</span>
            <span>Subsidies &amp; Private Pay Welcome</span>
          </span>
        </div>
        <a href="/contact/" rel="noreferrer">
          <CalendarMonthIcon aria-hidden="true" />
          Schedule a Tour
        </a>
        </div>
      </div>
      <header>
        <Link to="/">
          <StaticImage alt="Columbia Children's Center logo" src="../images/logo.png"/>
        </Link>
        <div className={cityPhone}>
          <p>Santa Maria, CA</p>
          <a href="tel:1-805-922-5437">805-922-KIDS (5437)</a>
        </div>
      </header>
    </>
  )
}

export default Header
