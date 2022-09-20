import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('rebalancing', 'REBALANCING');
export const getStaticProps = _getStaticProps;
export default Component;
