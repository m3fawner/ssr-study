import { PAGE_METADATA, ROUTE_KEYS } from '../../src/routing';
import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('filing-your-taxes', PAGE_METADATA[ROUTE_KEYS.FILING_YOUR_TAXES]);
export const getStaticProps = _getStaticProps;
export default Component;
