import createMarkdownPage from '../../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('ira', 'IRA');
export const getStaticProps = _getStaticProps;
export default Component;
