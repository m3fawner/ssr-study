import createMarkdownPage from '../../src/util/createMarkdownPage';
import { ROUTE_KEYS, PAGE_METADATA } from '../../src/routing';

const { Component, _getStaticProps } = createMarkdownPage('espp', PAGE_METADATA[ROUTE_KEYS.ESPP]);
export const getStaticProps = _getStaticProps;
export default Component;
