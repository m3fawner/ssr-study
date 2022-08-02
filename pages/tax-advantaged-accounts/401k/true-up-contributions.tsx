import { PAGE_METADATA, ROUTE_KEYS } from '../../../src/routing';
import createMarkdownPage from '../../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('true-up-contributions', PAGE_METADATA[ROUTE_KEYS.TRUE_UP_CONTRIBUTIONS]);
export const getStaticProps = _getStaticProps;
export default Component;
