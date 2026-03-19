import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import { footerContent, socialIconsWrap, socialIcons } from './styles/footer.module.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

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


  return (
    <footer>
      <div className={footerContent}>
        <div>
        <p>840 E. Stowell Road<br/>
        Santa Maria, CA 93454<br/>
        <a href="tel:1-805-922-5437" className="phone">805-922-KIDS (5437)</a><br/>
        Monday - Friday: 7:00 a.m. - 5:30 p.m.</p>
        <p>
          <Link to="/preschool-santa-maria/">Santa Maria Preschool</Link><br/>
          <Link to="/preschool/">Preschool Program</Link>
        </p>
        </div>
        <div className={socialIconsWrap}>
          <div className={socialIcons}>
            <a href={data.site.siteMetadata.socialMedia.facebook} target="_blank" rel="noreferrer"><FacebookIcon fontSize="large"/></a>
            <a href={data.site.siteMetadata.socialMedia.instagram} target="_blank" rel="noreferrer"><InstagramIcon fontSize="large"/></a>
          </div>
          <p>&copy; {new Date().getFullYear()} Columbia Children's Center. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
