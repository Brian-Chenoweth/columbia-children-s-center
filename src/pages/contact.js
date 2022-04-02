import * as React from 'react'
import Layout from '../components/layout'

const ContactPage = () => {
  return (
    <Layout pageTitle="Contact" metaDesc="Contact Columbia Children's Center">
      <div>
        <p><strong>Columbia Children's Center</strong><br/>
        840 E. Stowell Road<br/>
        Santa Maria, CA 93454<br/>
        <a href="tel:1-805-922-5437" className="phone">805-922-KIDS (5437)</a><br/>
        Monday - Friday: 7:00 a.m. - 5:30 p.m.</p>
      </div>
    </Layout>
  )
}

export default ContactPage