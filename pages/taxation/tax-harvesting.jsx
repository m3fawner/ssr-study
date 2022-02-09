import PropTypes from 'prop-types';
import Head from '../../src/components/Head';
import MarkdownConverter from '../../src/components/MarkdownConverter';
import getMarkdown from '../../markdown/getMarkdown';

const TaxHarvesting = ({ taxHarvesting }) => (
  <>
    <Head title="Tax harvesting" description="An article detailing the act of selling investments to capture losses or gains at advantageous times to lower tax liabilities." url="taxation/tax-harvesting" />
    <MarkdownConverter pt="5" markdown={taxHarvesting} />
  </>
);
TaxHarvesting.propTypes = {
  taxHarvesting: PropTypes.string.isRequired,
};

export const getStaticProps = async () => ({
  props: {
    taxHarvesting: await getMarkdown('tax-harvesting'),
  },
});
export default TaxHarvesting;
