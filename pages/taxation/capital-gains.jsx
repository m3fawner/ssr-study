import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('capital-gains', 'Capital gains taxes', 'A very brief article describing capital gains taxes.', 'taxation/capital-gains');
export const getStaticProps = _getStaticProps;
export default Component;
