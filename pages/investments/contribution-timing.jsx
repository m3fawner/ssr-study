import createMarkdownPage from '../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('contribution-timing', 'Contribution timing', "Timing when a lump sum of cash is added to investments can be very stressful decision. I'm here to help! This article outlines dollar cost averaging, lump sum, and front loading concepts.", 'investments/contribution-timing', ['dollar cost averaging', 'lump sum', 'front loading']);
export const getStaticProps = _getStaticProps;
export default Component;
