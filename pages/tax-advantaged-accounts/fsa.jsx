import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('fsa', 'Flexible Savings Account', 'Flexible savings accounts are use it or lose it accounts that give tax advantages to cover certain known costs like transportation and medical expenses.', 'tax-advantaged-accounts/fsa', ['flexible savings account', 'fsa', 'limited purpose', 'commuter', 'dependent care']);
export const getStaticProps = _getStaticProps;
export default Component;
