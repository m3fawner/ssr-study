import { PAGE_METADATA, ROUTE_KEYS } from '../../src/routing';
import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('drawdown', PAGE_METADATA[ROUTE_KEYS.DRAWDOWN]);
export const getStaticProps = _getStaticProps;

export default Component;
