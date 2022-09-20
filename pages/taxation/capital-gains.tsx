import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('capital-gains', 'CAPITAL_GAINS');
export const getStaticProps = _getStaticProps;
export default Component;
