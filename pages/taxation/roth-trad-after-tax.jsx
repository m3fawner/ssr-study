import { PAGE_METADATA, ROUTE_KEYS } from '../../src/routing';
import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('roth-trad-after-tax', PAGE_METADATA[ROUTE_KEYS.ROTH_TRAD_AT]);
export const getStaticProps = _getStaticProps;
export default Component;
