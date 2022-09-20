import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('where-should-my-money-go', 'WHERE_SHOULD_MY_MONEY_GO');
export const getStaticProps = _getStaticProps;

export default Component;
