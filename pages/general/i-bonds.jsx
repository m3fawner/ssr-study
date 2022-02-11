import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('i-bonds', 'I-Bonds', 'I-Bonds are a government issued & backed bond that offers inflation protection.', 'general/i-bonds');
export const getStaticProps = _getStaticProps;
export default Component;
