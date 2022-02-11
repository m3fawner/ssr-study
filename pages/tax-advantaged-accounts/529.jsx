import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('529', '529', "A 529 is a tax advantaged account that can be leveraged for current or future education expenses. They are largely seen as an investment vehicle for children's education.", 'tax-advantaged-accounts/529');
export const getStaticProps = _getStaticProps;
export default Component;
