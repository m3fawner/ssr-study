import PropTypes from 'prop-types';
import getMarkdown from '../../markdown/getMarkdown';
import Head from '../../src/components/Head';
import MarkdownConverter from '../../src/components/MarkdownConverter';

const FiveTwentyNines = ({ fiveTwentyNines }) => (
  <>
    <Head title="529" description="A 529 is a tax advantaged account that can be leveraged for current or future education expenses. They are largely seen as an investment vehicle for children's education." url="tax-advantaged-accounts/529" />
    <MarkdownConverter pt="5" markdown={fiveTwentyNines} />
  </>
);
FiveTwentyNines.propTypes = {
  fiveTwentyNines: PropTypes.string.isRequired,
};
export const getStaticProps = async () => ({
  props: {
    fiveTwentyNines: await getMarkdown('529'),
  },
});
export default FiveTwentyNines;
