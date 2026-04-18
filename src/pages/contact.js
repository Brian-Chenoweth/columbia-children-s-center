import * as React from 'react'
import Layout from '../components/layout'

const ContactPage = () => {
  const pageTitle = 'Contact'
  const metaDesc = 'Contact Columbia Children\'s Center in Santa Maria, CA to schedule a preschool tour, ask enrollment questions, and get child care program information.'
  const faqSchema = {
    '@type': 'FAQPage',
    '@id': 'https://columbiachildrenscenter.com/contact/#faq',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where is Columbia Children\'s Center located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Columbia Children\'s Center is located at 840 E. Stowell Road, Santa Maria, CA 93454.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are your hours?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are open Monday through Friday from 7:00 a.m. to 5:30 p.m.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I contact Columbia Children\'s Center?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can call us at 805-922-5437 or submit the contact form on this page.',
        },
      },
    ],
  }

  return (
    <Layout
      pageTitle={pageTitle}
      titleOverride="Contact Columbia Children's Center | Preschool & Child Care in Santa Maria"
      metaDesc={metaDesc}
      pathname="/contact/"
      schemaType="ContactPage"
      schemaData={[faqSchema]}
    >
      <h2>Contact Columbia Children&apos;s Center</h2>
      <p>
        Looking for a trusted preschool and child care center in Santa Maria? We are here to help.
        Use the form below to ask questions, request enrollment information, or schedule a tour.
      </p>
      <p>
        <strong>Phone:</strong> <a href="tel:1-805-922-5437">805-922-KIDS (5437)</a>
        <br />
        <strong>Address:</strong> 840 E. Stowell Road, Santa Maria, CA 93454
        <br />
        <strong>Hours:</strong> Monday - Friday, 7:00 a.m. - 5:30 p.m.
      </p>

      {/* <h3>Send Us a Message</h3> */}
      <div style={{ width: '100%' }}>
        <iframe
          src="https://app.tryplayground.com/form/X7tvoDUHwazFjm1hgbal/j4EfND9h4CrfpP94QS2w"
          style={{ width: '100%', border: 'none', height: '1100px' }}
          frameBorder="0"
          allowFullScreen
          tabIndex="-1"
          title="Columbia Children's Center contact form"
        ></iframe>
      </div>

      <h3>Why Families Contact Us</h3>
      <p>
        Families in Santa Maria and nearby communities contact us to learn about preschool options,
        child care availability, age groups, daily schedules, and enrollment timelines. We aim to
        respond quickly and make the process simple.
      </p>
<br />
      <h3>Contact FAQs</h3>
      <br />
      <h4>Where is your preschool located in Santa Maria?</h4>
      <p>We are located at 840 E. Stowell Road, Santa Maria, CA 93454.</p>
      <br />
      <h4>What is the best way to reach your team?</h4>
      <p>
        The fastest options are calling our office at 805-922-5437 or submitting the contact form
        above.
      </p>
      <br />
      <h4>Can I request a tour through this page?</h4>
      <p>Yes. Submit the form and our team will follow up to coordinate next steps.</p>
    </Layout>
  )
}

export default ContactPage