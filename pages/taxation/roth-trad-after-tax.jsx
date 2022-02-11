import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('roth-trad-after-tax', 'Roth, traditional, after tax?', 'An article discussing tax optimizations for investments, highlighting how to leverage tax treatments and investment vehicles to minimize taxation.', 'taxation/roth-trad-after-tax');
export const getStaticProps = _getStaticProps;
export default Component;
