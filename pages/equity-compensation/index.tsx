import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('equity-compensation', 'EQUITY_COMPENSATION');
export const getStaticProps = _getStaticProps;
export default Component;
