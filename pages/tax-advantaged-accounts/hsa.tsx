import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('hsa', 'HSA');
export const getStaticProps = _getStaticProps;
export default Component;
