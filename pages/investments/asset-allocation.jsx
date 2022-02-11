import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('asset-allocation', 'Asset allocation', 'A brief article describing asset allocation with regards to investments.', 'investments/asset-allocation', ['asset allocation']);
export const getStaticProps = _getStaticProps;
export default Component;
