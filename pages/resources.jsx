import createMarkdownPage from '../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('resources', 'Resources', 'A brief list of resources collected over the years.', 'resources', ['financial resources', 'personal finance', 'financial independence', 'savings']);
export const getStaticProps = _getStaticProps;
export default Component;
