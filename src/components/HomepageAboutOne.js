import * as React from 'react'
import { homepageAboutWrap, homepageAboutContent, one } from './styles/homepageAbout.module.scss'

const homepageAboutOne = ({ children }) => {
  return (
    <div className={homepageAboutWrap + ' ' + 'one'}>
        <div className={homepageAboutContent}>
          <a href="https://app.tryplayground.com/X7tvoDUHwazFjm1hgbal/book/j2qKHKe4akbD4Cv9DED7" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginBottom: '1rem', padding: '0.75rem 1.5rem', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '0.375rem', fontWeight: 'bold' }}>Book a Tour</a>
          <h2>Trusted preschool and child care in Santa Maria since 1992</h2>
          <p>Welcome to Columbia Children&apos;s Center, a locally owned preschool in Santa Maria where families have found nurturing early childhood education for more than 30 years.</p>
          <p>Every child is unique. Our teachers create a safe, engaging environment where children can build confidence, friendships, independence, and a love of learning.</p>
        </div>
    </div>
  )
}

export default homepageAboutOne
