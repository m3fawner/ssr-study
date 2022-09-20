import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('contribution-timing', 'CONTRIBUTION_TIMING');
export const getStaticProps = _getStaticProps;
export default Component;
