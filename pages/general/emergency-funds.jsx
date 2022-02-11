import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('emergency-funds', 'Emergency funds', "Life is unpredictable, an emergency fund can help prevent life's financial unpredictability.", 'general/emergency-funds');
export const getStaticProps = _getStaticProps;

export default Component;
