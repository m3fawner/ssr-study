import createMarkdownPage from '../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('home-content', 'Home', 'Welcome to FIcarious! This is a site dedicated to teaching about financial independence with helpful tools and articles about the subject.', '');
export const getStaticProps = _getStaticProps;
export default Component;
