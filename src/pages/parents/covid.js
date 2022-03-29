import * as React from 'react'
import Layout from '../../components/layout'

const CovidPage = () => {
  const pageTitle = "Covid";
  return (
    <Layout pageTitle={pageTitle} metaDesc="Covid protocols at Columbia Children's Center.">
      <p>If your child tests positive or is exposed to someone who has tested positive, please keep them home and contact <a href="mailto:sean@columbiachildrenscenter.com">sean@columbiachildrenscenter.com</a> so he can determine when they can safely return to Columbia.</p>
      <p>If your child has any of the following symptoms; please keep them home and contact Lisa via text <a href="sms:+18054480375">(805) 448-0375</a> or <a href="mailto:lisa@columbiachildrenscenter.com">lisa@columbiachildrenscenter.com</a> so we can determine when they can attend.</p>
      <p>Symptoms include:</p>
      <ul>
        <li>fever</li>
        <li>chills</li>
        <li>cough</li>
        <li>shortness of breath</li>
        <li>fatigue</li>
        <li>body aches</li>
        <li>headache</li>
        <li>loss of taste or smell</li>
        <li>sore throat</li>
        <li>congestion</li>
        <li>runny nose</li>
        <li>nausea</li>
        <li>vomiting and diarrhea</li>
      </ul>
      <p>Please remember that we are having the children spend the majority of their day outside so please be sure to send them with jackets or sweaters!</p>
    </Layout>
  )
}

export default CovidPage