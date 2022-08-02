import { PAGE_METADATA, ROUTE_KEYS } from '../../src/routing';
import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('contribution-timing', PAGE_METADATA[ROUTE_KEYS.CONTRIBUTION_TIMING]);
export const getStaticProps = _getStaticProps;
export default Component;
