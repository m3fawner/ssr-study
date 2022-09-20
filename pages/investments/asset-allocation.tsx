import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('asset-allocation', 'ASSET_ALLOCATION');
export const getStaticProps = _getStaticProps;
export default Component;
