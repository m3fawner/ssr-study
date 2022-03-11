import { PAGE_METADATA, ROUTE_KEYS } from '../../src/routing';
import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('rebalancing', PAGE_METADATA[ROUTE_KEYS.REBALANCING]);
export const getStaticProps = _getStaticProps;
export default Component;
