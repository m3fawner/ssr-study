import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('espp', 'Employee Stock Purchasing Plan (ESPP)', 'Employers may offer employee stock purchasing programs as a means of incentivizing employees. These plans are generally ridiculously beneficial!', 'espp', ['employee stock purchasing plan', 'equity', 'espp']);
export const getStaticProps = _getStaticProps;
export default Component;
