import createMarkdownPage from '../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('resources', 'Resources', 'A brief list of resources collected over the years.', 'resources');
export const getStaticProps = _getStaticProps;
export default Component;
