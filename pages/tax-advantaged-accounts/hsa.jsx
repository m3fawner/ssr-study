import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('hsa', 'Health Savings Account', 'Health savings accounts are a great method of saving for medical expenses, providing pre-tax funds to reimburse medical expenses incurred while on an HDHP. This article also covers how it is a potentially great retirement vehicle, as well!', 'tax-advantaged-accounts/hsa', ['health savings account', 'hsa', 'medical expenses']);
export const getStaticProps = _getStaticProps;
export default Component;
