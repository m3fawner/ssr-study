import createMarkdownPage from '../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('resources', 'RESOURCES');
export const getStaticProps = _getStaticProps;
export default Component;
