import { PAGE_METADATA, ROUTE_KEYS } from '../../src/routing';
import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('i-bonds', PAGE_METADATA[ROUTE_KEYS.I_BONDS]);
export const getStaticProps = _getStaticProps;
export default Component;
