import createMarkdownPage from '../../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('backdoor-roth-ira', 'Backdoor Roth IRA', 'Performing a backdoor Roth IRA is a way for those who cannot directly contribute to a Roth IRA due to income limits to still get all the tax benefits of a Roth IRA contribution, but with a few extra steps/considerations.', 'tax-advantaged-accounts/ira/backdoor-roth-ira', ['Roth', 'IRA', 'backdoor Roth', 'backdoor Roth IRA', 'pro-rata taxation']);
export const getStaticProps = _getStaticProps;
export default Component;
