import PropTypes from 'prop-types';
import Head from '../../src/components/Head';
import MarkdownConverter from '../../src/components/MarkdownConverter';
import getMarkdown from '../../markdown/getMarkdown';

const CapitalGains = ({ capitalGains }) => (
  <>
    <Head title="Capital gains taxes" description="A very brief article describing capital gains taxes." url="taxation/capital-gains" />
    <MarkdownConverter pt="5" markdown={capitalGains} />
  </>
);
CapitalGains.propTypes = {
  capitalGains: PropTypes.string.isRequired,
};

export const getStaticProps = async () => ({
  props: {
    capitalGains: await getMarkdown('capital-gains'),
  },
});
export default CapitalGains;
