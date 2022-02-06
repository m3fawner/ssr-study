import PropTypes from 'prop-types';
import Head from '../src/components/Head';
import MarkdownConverter from '../src/components/MarkdownConverter';
import getMarkdown from '../markdown/getMarkdown';

const EquityCompensation = ({ equityComp }) => (
  <>
    <Head title="Equity compensation" description="A short read with regards to being compensated via equity, such as RSUs or options." url="equity-compensation" />
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
