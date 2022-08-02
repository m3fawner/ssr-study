import { PAGE_METADATA, ROUTE_KEYS } from '../../src/routing';
import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('asset-allocation', PAGE_METADATA[ROUTE_KEYS.ASSET_ALLOCATION]);
export const getStaticProps = _getStaticProps;
export default Component;
