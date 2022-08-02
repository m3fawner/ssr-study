import createMarkdownPage from '../../src/util/createMarkdownPage';
import { ROUTE_KEYS, PAGE_METADATA } from '../../src/routing';

const { Component, _getStaticProps } = createMarkdownPage('equity-compensation', PAGE_METADATA[ROUTE_KEYS.EQUITY_COMPENSATION]);
export const getStaticProps = _getStaticProps;
export default Component;
