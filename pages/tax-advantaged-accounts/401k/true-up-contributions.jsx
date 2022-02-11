import createMarkdownPage from '../../../src/util/createMarkdownPage';

const { Component, _getStaticProps } = createMarkdownPage('true-up-contributions', 'True up contributions', 'A true up contribution is an employer rectifying employer contributions that may have been earned.', 'tax-advantaged-accounts/401k/true-up-contributions');
export const getStaticProps = _getStaticProps;
export default Component;
