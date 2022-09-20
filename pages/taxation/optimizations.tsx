import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('tax-optimizations', 'TAX_OPTIMIZATIONS');
export const getStaticProps = _getStaticProps;
export default Component;
