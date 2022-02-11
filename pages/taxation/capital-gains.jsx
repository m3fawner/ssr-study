import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('capital-gains', 'Capital gains taxes', 'A very brief article describing capital gains taxes.', 'taxation/capital-gains', ['capital gains', 'taxes', 'long term capital gains', 'ltcg', 'short term capital gains', 'stcg', 'income']);
export const getStaticProps = _getStaticProps;
export default Component;
