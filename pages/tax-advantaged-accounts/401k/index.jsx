import { PAGE_METADATA, ROUTE_KEYS } from '../../../src/routing';
import createMarkdownPage from '../../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('401k', PAGE_METADATA[ROUTE_KEYS['401K']]);
export const getStaticProps = _getStaticProps;
export default Component;
