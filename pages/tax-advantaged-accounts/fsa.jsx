import PropTypes from 'prop-types';
import getMarkdown from '../../markdown/getMarkdown';
import Head from '../../src/components/Head';
import MarkdownConverter from '../../src/components/MarkdownConverter';

const FlexibleSavingsAccounts = ({ fsa }) => (
  <>
    <Head title="Flexible Savings Account" description="Flexible savings accounts are use it or lose it accounts that give tax advantages to cover certain known costs like transportation and medical expenses." url="tax-advantaged-accounts/fsa" />
    <MarkdownConverter pt="5" markdown={fsa} />
  </>
);
FlexibleSavingsAccounts.propTypes = {
  fsa: PropTypes.string.isRequired,
};
export const getStaticProps = async () => ({
  props: {
    fsa: await getMarkdown('fsa'),
  },
});
export default FlexibleSavingsAccounts;
