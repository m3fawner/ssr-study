import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('i-bonds', 'I_BONDS');
export const getStaticProps = _getStaticProps;
export default Component;
