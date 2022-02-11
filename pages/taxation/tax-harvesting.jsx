import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('tax-harvesting', 'Tax harvesting', 'An article detailing the act of selling investments to capture losses or gains at advantageous times to lower tax liabilities.', 'taxation/tax-harvesting', ['tax loss harvesting', 'tax gain harvesting', 'cost basis', 'wash sale']);
export const getStaticProps = _getStaticProps;
export default Component;
