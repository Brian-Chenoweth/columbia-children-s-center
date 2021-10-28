import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { footerContent, socialIconsWrap, socialIcons, facebook, instagram, youtube} from './styles/footer.module.scss'

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
          <p>Hours of operation</p>
          <p>Monday-Friday: 7:00 a.m. - 5:30 p.m.</p>
        </div>
        <div className={socialIconsWrap}>
          <div className={socialIcons}>
            <a href={data.site.siteMetadata.socialMedia.facebook} className={facebook}>facebook</a>
            <a href={data.site.siteMetadata.socialMedia.instagram} className={instagram}>instagram</a>
            <a href={data.site.siteMetadata.socialMedia.youtube} className={youtube}>youtube</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Columbia Children's Center. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 