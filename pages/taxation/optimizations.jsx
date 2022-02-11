import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('tax-optimizations', 'Tax optimizations', 'An article discussing tax optimizations for investments, highlighting how to leverage tax treatments and investment vehicles to minimize taxation.', 'taxation/optimizations', ['tax optimization', 'decrease taxes']);
export const getStaticProps = _getStaticProps;
export default Component;
