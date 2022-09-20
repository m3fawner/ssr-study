import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('diversification', 'DIVERSIFICATION');
export const getStaticProps = _getStaticProps;
export default Component;
