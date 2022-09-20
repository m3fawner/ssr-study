import createMarkdownPage from '../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('tech', 'TECH');
export const getStaticProps = _getStaticProps;
export default Component;
