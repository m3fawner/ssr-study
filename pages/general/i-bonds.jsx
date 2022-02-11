import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('i-bonds', 'I-Bonds', 'I-Bonds are a government issued & backed bond that offers inflation protection.', 'general/i-bonds', ['i-bonds', 'treasury', 'inflation', 'savings']);
export const getStaticProps = _getStaticProps;
export default Component;
