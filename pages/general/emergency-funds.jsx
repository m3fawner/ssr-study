import { PAGE_METADATA, ROUTE_KEYS } from '../../src/routing';
import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('emergency-funds', PAGE_METADATA[ROUTE_KEYS.EMERGENCY_FUNDS]);
export const getStaticProps = _getStaticProps;

export default Component;
