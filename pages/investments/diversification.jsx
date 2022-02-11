import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('diversification', 'Diversification', 'A brief article describing diversification with regards to investments.', 'investments/diversification', ['diversification', 'investing', 'risk', 'returns']);
export const getStaticProps = _getStaticProps;
export default Component;
