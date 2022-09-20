import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('espp', 'ESPP');
export const getStaticProps = _getStaticProps;
export default Component;
