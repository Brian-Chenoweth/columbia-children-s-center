import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { footerContent, socialIconsWrap, socialIcons, preferredContactMethod } from './styles/footer.module.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useState } from 'react';

const Footer = () => {

  const data = useStaticQuery(graphql`query { 
    site { 
      siteMetadata { 
        socialMedia {
          facebook instagram youtube
        }
      } 
    } 
  }`)


  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let isChecked = false;
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        isChecked = true;
      }
    });
    setIsChecked(isChecked);
  }


  

  return (
    <footer>
      <div className={footerContent}>
        <div>
        <p>840 E. Stowell Road<br/>
        Santa Maria, CA 93454<br/>
        <a href="tel:1-805-922-5437" className="phone">805-922-KIDS (5437)</a><br/>
        Monday - Friday: 7:00 a.m. - 5:30 p.m.</p>
        </div>
        <div className={socialIconsWrap}>
          <div className={socialIcons}>
            <Link to={data.site.siteMetadata.socialMedia.facebook} target="_blank"><FacebookIcon fontSize="large"/></Link>
            <Link to={data.site.siteMetadata.socialMedia.instagram} target="_blank"><InstagramIcon fontSize="large"/></Link>
            {/* <Link to={data.site.siteMetadata.socialMedia.youtube} target="_blank"><YouTubeIcon fontSize="large"/></Link> */}
          </div>
          <p>&copy; {new Date().getFullYear()} Columbia Children's Center. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 