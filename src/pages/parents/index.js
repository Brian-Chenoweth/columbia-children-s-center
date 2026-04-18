import * as React from 'react';
import Layout from '../../components/layout';

const ParentsPage = () => {
  const pageTitle = 'Parents';

  return (
    <Layout
      pageTitle={pageTitle}
      titleOverride="Parent Resources | Columbia Children's Center"
      metaDesc="Parent resources for families enrolled at Columbia Children's Center in Santa Maria, CA."
      pathname="/parents/"
      schemaType="CollectionPage"
    >
      <p>
        This page collects quick resources for current and prospective Columbia Children&apos;s Center
        families in Santa Maria. If you need enrollment help, scheduling information, or program
        guidance, please contact our team directly.
      </p>
      <h2>Parent handbook</h2>
      <p>
        Review the current handbook here:{' '}
        <a
          href="https://docs.google.com/document/d/1lHmOCMmep3syn0HJR3P69kk7cSwGme1HGHe8MjYr7H4/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Parent Handbook
        </a>
      </p>
      <h2>Center hours</h2>
      <p>Monday through Friday, 7:00 a.m. to 5:30 p.m.</p>
      <h2>Questions about enrollment?</h2>
      <p>
        Start with our{' '}
        <a
          href="/contact/"
          target="_blank"
          rel="noreferrer"
        >
          contact form
        </a>{' '}
        or call us at <a href="tel:1-805-922-5437">805-922-KIDS (5437)</a>.
      </p>
    </Layout>
  );
};

export default ParentsPage;
