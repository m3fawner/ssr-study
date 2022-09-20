import createMarkdownPage from '../../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('401k-changing-jobs', 'CHANGING_JOBS_401K');
export const getStaticProps = _getStaticProps;
export default Component;
