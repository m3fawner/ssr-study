import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('emergency-funds', 'EMERGENCY_FUNDS');
export const getStaticProps = _getStaticProps;

export default Component;
