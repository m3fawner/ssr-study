import PropTypes from 'prop-types';
import Head from '../src/components/Head';
import MarkdownConverter from '../src/components/MarkdownConverter';
import getMarkdown from '../markdown/getMarkdown';

const EquityCompensation = ({ equityComp }) => (
  <>
    <Head title="Equity compensation" description="A calculator for determining how much your net proceeds should be for an RSU grant. Simply enter your company stock ticker, fill out the subsequent share form, and find out how much to expect after taxes are paid!" url="net-proceeds" />
    <MarkdownConverter pt="5" markdown={equityComp} />
  </>
);
EquityCompensation.propTypes = {
  equityComp: PropTypes.string.isRequired,
};

export const getStaticProps = async () => ({
  props: {
    equityComp: await getMarkdown('equity-compensation'),
  },
});
export default EquityCompensation;
