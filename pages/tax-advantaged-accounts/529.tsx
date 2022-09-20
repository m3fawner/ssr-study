import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('529', 'FIVE_TWENTY_NINE');
export const getStaticProps = _getStaticProps;
export default Component;
