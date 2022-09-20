import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('donations', 'DONATIONS');
export const getStaticProps = _getStaticProps;
export default Component;
