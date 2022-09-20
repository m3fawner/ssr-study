import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('filing-your-taxes', 'FILING_YOUR_TAXES');
export const getStaticProps = _getStaticProps;
export default Component;
