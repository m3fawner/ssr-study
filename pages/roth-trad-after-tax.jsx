import PropTypes from 'prop-types';
import Head from '../src/components/Head';
import MarkdownConverter from '../src/components/MarkdownConverter';
import getMarkdown from '../markdown/getMarkdown';

const RothTradAfterTax = ({ rothTradAfterTax }) => (
  <>
    <Head title="Roth, traditional, after tax?" description="An introduction to the various types of tax treatments and how they can impact your present and future tax situation." url="roth-trad-after-tax" />
    <MarkdownConverter pt="5" markdown={rothTradAfterTax} />
  </>
);
RothTradAfterTax.propTypes = {
  rothTradAfterTax: PropTypes.string.isRequired,
};

export const getStaticProps = async () => ({
  props: {
    rothTradAfterTax: await getMarkdown('roth-trad-after-tax'),
  },
});
export default RothTradAfterTax;
