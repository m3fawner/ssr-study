import { PAGE_METADATA, ROUTE_KEYS } from '../../src/routing';
import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('tax-harvesting', PAGE_METADATA[ROUTE_KEYS.TAX_HARVESTING]);
export const getStaticProps = _getStaticProps;
export default Component;
