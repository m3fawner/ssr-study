import createMarkdownPage from '../../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('ira', 'Individual Retirement Account', 'Individual retirement accounts are one of the most accessible tax advantaged accounts made available to us. They offer substantial flexibility and tax benefits', 'tax-advantaged-accounts/ira', ['IRA', 'Roth IRA', 'Traditional IRA', 'Individual Retirement Account']);
export const getStaticProps = _getStaticProps;
export default Component;
