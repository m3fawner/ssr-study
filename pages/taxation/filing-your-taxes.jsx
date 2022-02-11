import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('filing-your-taxes', 'Filing your taxes', 'I pontificate with regards to tax filing software.', 'taxation/filing-your-taxes');
export const getStaticProps = _getStaticProps;
export default Component;
