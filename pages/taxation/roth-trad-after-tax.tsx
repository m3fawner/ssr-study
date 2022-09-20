import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('roth-trad-after-tax', 'ROTH_TRAD_AT');
export const getStaticProps = _getStaticProps;
export default Component;
