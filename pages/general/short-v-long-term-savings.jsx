import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('short-v-long-term-savings', 'Short vs Long term savings', 'Do you have savings goals? How long is the timeline? What is your risk tolerance? What should you do!? This article will help provide some pointers!', 'general/short-v-long-term-savings');
export const getStaticProps = _getStaticProps;
export default Component;
