import PropTypes from 'prop-types';
import Head from '../../src/components/Head';
import MarkdownConverter from '../../src/components/MarkdownConverter';
import getMarkdown from '../../markdown/getMarkdown';

const TaxOptimizations = ({ taxOptimizations }) => (
  <>
    <Head title="Tax optimizations" description="An article discussing tax optimizations for investments, highlighting how to leverage tax treatments and investment vehicles to minimize taxation." url="taxation/optimizations" />
    <MarkdownConverter pt="5" markdown={taxOptimizations} />
  </>
);
TaxOptimizations.propTypes = {
  taxOptimizations: PropTypes.string.isRequired,
};

export const getStaticProps = async () => ({
  props: {
    taxOptimizations: await getMarkdown('tax-optimizations'),
  },
});
export default TaxOptimizations;
