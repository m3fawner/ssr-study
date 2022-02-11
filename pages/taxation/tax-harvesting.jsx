import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('tax-harvesting', 'Tax harvesting', 'An article detailing the act of selling investments to capture losses or gains at advantageous times to lower tax liabilities.', 'taxation/tax-harvesting');
export const getStaticProps = _getStaticProps;
export default Component;
