import { PAGE_METADATA, ROUTE_KEYS } from '../src/routing';
import createMarkdownPage from '../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('resources', PAGE_METADATA[ROUTE_KEYS.RESOURCES]);
export const getStaticProps = _getStaticProps;
export default Component;
