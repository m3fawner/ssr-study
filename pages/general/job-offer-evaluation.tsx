import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('job-offer-evaluation', 'JOB_OFFER_EVALUATION');
export const getStaticProps = _getStaticProps;
export default Component;
