import PropTypes from 'prop-types';
import Head from '../src/components/Head';
import MarkdownConverter from '../src/components/MarkdownConverter';
import getMarkdown from '../markdown/getMarkdown';

const Rebalancing = ({ rebalancing }) => (
  <>
    <Head title="Rebalancing" description="A brief article describing the act of rebalancing investments." url="/rebalancing" />
    <MarkdownConverter pt="5" markdown={rebalancing} />
  </>
);
Rebalancing.propTypes = {
  rebalancing: PropTypes.string.isRequired,
};

export const getStaticProps = async () => ({
  props: {
    rebalancing: await getMarkdown('rebalancing'),
  },
});
export default Rebalancing;
