import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('fsa', 'FSA');
export const getStaticProps = _getStaticProps;
export default Component;
