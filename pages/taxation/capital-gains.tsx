import { PAGE_METADATA, ROUTE_KEYS } from '../../src/routing';
import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('capital-gains', PAGE_METADATA[ROUTE_KEYS.CAPITAL_GAINS]);
export const getStaticProps = _getStaticProps;
export default Component;
