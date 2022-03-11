import { PAGE_METADATA, ROUTE_KEYS } from '../../src/routing';
import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('tax-optimizations', PAGE_METADATA[ROUTE_KEYS.TAX_OPTIMIZATIONS]);
export const getStaticProps = _getStaticProps;
export default Component;
