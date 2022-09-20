import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('short-v-long-term-savings', 'SHORT_V_LONG_TERM_SAVINGS');
export const getStaticProps = _getStaticProps;
export default Component;
