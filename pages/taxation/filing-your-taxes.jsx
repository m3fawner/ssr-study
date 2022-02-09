import PropTypes from 'prop-types';
import Head from '../../src/components/Head';
import MarkdownConverter from '../../src/components/MarkdownConverter';
import getMarkdown from '../../markdown/getMarkdown';

const FilingYourTaxes = ({ filingYourTaxes }) => (
  <>
    <Head title="Filing your taxes" description="I pontificate with regards to tax filing software." url="taxation/filing-your-taxes" />
    <MarkdownConverter pt="5" markdown={filingYourTaxes} />
  </>
);
FilingYourTaxes.propTypes = {
  filingYourTaxes: PropTypes.string.isRequired,
};

export const getStaticProps = async () => ({
  props: {
    filingYourTaxes: await getMarkdown('filing-your-taxes'),
  },
});
export default FilingYourTaxes;
