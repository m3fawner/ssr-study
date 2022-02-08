import PropTypes from 'prop-types';
import Head from '../../src/components/Head';
import MarkdownConverter from '../../src/components/MarkdownConverter';
import getMarkdown from '../../markdown/getMarkdown';

const Diversification = ({ diversification }) => (
  <>
    <Head title="Diversification" description="A brief article describing diversification with regards to investments." url="investments/diversification" />
    <MarkdownConverter pt="5" markdown={diversification} />
  </>
);
Diversification.propTypes = {
  diversification: PropTypes.string.isRequired,
};

export const getStaticProps = async () => ({
  props: {
    diversification: await getMarkdown('diversification'),
  },
});
export default Diversification;
