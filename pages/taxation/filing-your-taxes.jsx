import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('filing-your-taxes', 'Filing your taxes', 'I pontificate with regards to tax filing software.', 'taxation/filing-your-taxes', ['H&R block', 'turbotax', 'congress', 'taxes', 'filing']);
export const getStaticProps = _getStaticProps;
export default Component;
