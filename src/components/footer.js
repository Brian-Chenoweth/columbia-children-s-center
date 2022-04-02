import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
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
        <p>840 E. Stowell Road<br/>
        Santa Maria, CA 93454<br/>
        <a href="tel:1-805-922-5437" className="phone">805-922-KIDS (5437)</a><br/>
        Monday - Friday: 7:00 a.m. - 5:30 p.m.</p>
        </div>
        <div className={socialIconsWrap}>
          <div className={socialIcons}>
            <Link to={data.site.siteMetadata.socialMedia.facebook} className={facebook} target="_blank">facebook</Link>
            <Link to={data.site.siteMetadata.socialMedia.instagram} className={instagram} target="_blank">instagram</Link>
            <Link to={data.site.siteMetadata.socialMedia.youtube} className={youtube} target="_blank">youtube</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} Columbia Children's Center. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 