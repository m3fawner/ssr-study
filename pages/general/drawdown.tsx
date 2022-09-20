import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('drawdown', 'DRAWDOWN');
export const getStaticProps = _getStaticProps;

export default Component;
