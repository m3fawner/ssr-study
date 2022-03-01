import createMarkdownPage from '../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('tech', 'Tech', 'This project is was a tech playground for my continued learning and has evolved to become my blog post hosting platform!', 'tech', ['react', 'nextjs', 'vercel', 'chakra ui', 'react hook form']);
export const getStaticProps = _getStaticProps;
export default Component;
