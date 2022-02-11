import createMarkdownPage from '../../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('401k', '401k', 'An introduction to 401(k)s, a tax-advantaged account.', 'tax-advantaged-accounts/401k');
export const getStaticProps = _getStaticProps;
export default Component;
