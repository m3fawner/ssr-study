import { PAGE_METADATA, ROUTE_KEYS } from '../../src/routing';
import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('529', PAGE_METADATA[ROUTE_KEYS[529]]);
export const getStaticProps = _getStaticProps;
export default Component;
