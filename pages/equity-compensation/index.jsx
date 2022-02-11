import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('equity-compensation', 'Equity compensation', 'A short read with regards to being compensated via equity, such as RSUs or options.', 'equity-compensation', ['equity compensation', 'equity', 'rsus', 'options', 'compensation']);
export const getStaticProps = _getStaticProps;
export default Component;
