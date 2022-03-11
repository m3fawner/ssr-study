import { PAGE_METADATA, ROUTE_KEYS } from '../../src/routing';
import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('job-offer-evaluation', PAGE_METADATA[ROUTE_KEYS.JOB_OFFER_EVALUATION]);
export const getStaticProps = _getStaticProps;
export default Component;
