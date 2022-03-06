import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('job-offer-evaluation', 'Evaluating a job offer', 'Congratulations on your offer! Let me help you think about how to evaluate one (or many!) offers. There are a lot of factors involved, so it is important to consider how to value each!', 'general/job-offer-evaluation', ['Job offers', 'evaluating', 'total compensation', 'equity compensation']);
export const getStaticProps = _getStaticProps;
export default Component;
