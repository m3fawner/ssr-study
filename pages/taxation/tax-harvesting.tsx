import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('tax-harvesting', 'TAX_HARVESTING');
export const getStaticProps = _getStaticProps;
export default Component;
