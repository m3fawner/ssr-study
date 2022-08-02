import { PAGE_METADATA, ROUTE_KEYS } from '../../src/routing';
import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('529', PAGE_METADATA[ROUTE_KEYS.FIVE_TWENTY_NINE]);
export const getStaticProps = _getStaticProps;
export default Component;
