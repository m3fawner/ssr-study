import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('donations', 'Donations', 'Donations can help your tax liability beyond just the deduction of the donation amount.', 'taxation/donations', ['donations', 'deductions', 'appreciated stock']);
export const getStaticProps = _getStaticProps;
export default Component;
