import PropTypes from 'prop-types';
import getMarkdown from '../../markdown/getMarkdown';
import Head from '../../src/components/Head';
import MarkdownConverter from '../../src/components/MarkdownConverter';

const ShortVLongTermSavings = ({ shortVLongTermSavings }) => (
  <>
    <Head title="Short vs Long term savings" description="Do you have savings goals? How long is the timeline? What is your risk tolerance? What should you do!? This article will help provide some pointers!" url="general/short-v-long-term-savings" />
    <MarkdownConverter py="5" markdown={shortVLongTermSavings} />
  </>
);
ShortVLongTermSavings.propTypes = {
  shortVLongTermSavings: PropTypes.string.isRequired,
};
export const getStaticProps = async () => ({
  props: {
    shortVLongTermSavings: await getMarkdown('short-v-long-term-savings'),
  },
});
export default ShortVLongTermSavings;
