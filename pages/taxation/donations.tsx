import { PAGE_METADATA, ROUTE_KEYS } from '../../src/routing';
import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('donations', PAGE_METADATA[ROUTE_KEYS.DONATIONS]);
export const getStaticProps = _getStaticProps;
export default Component;
