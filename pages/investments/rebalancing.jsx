import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('rebalancing', 'Rebalancing', 'A brief article describing the act of rebalancing investments.', 'investments/rebalancing');
export const getStaticProps = _getStaticProps;
export default Component;
