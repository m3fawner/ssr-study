import { PAGE_METADATA, ROUTE_KEYS } from '../../../src/routing';
import createMarkdownPage from '../../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('backdoor-roth-ira', PAGE_METADATA[ROUTE_KEYS.BACKDOOR_ROTH_IRA]);
export const getStaticProps = _getStaticProps;
export default Component;
