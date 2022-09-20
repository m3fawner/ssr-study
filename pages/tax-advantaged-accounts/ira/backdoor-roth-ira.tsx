import createMarkdownPage from '../../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('backdoor-roth-ira', 'BACKDOOR_ROTH_IRA');
export const getStaticProps = _getStaticProps;
export default Component;
