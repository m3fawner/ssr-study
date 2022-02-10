import PropTypes from 'prop-types';
import getMarkdown from '../../markdown/getMarkdown';
import Head from '../../src/components/Head';
import MarkdownConverter from '../../src/components/MarkdownConverter';

const EmergencyFunds = ({ emergencyFunds }) => (
  <>
    <Head title="Emergency funds" description="Life is unpredictable, an emergency fund can help prevent life's financial unpredictability." url="general/emergency-funds" />
    <MarkdownConverter py="5" markdown={emergencyFunds} />
  </>
);
EmergencyFunds.propTypes = {
  emergencyFunds: PropTypes.string.isRequired,
};
export const getStaticProps = async () => ({
  props: {
    emergencyFunds: await getMarkdown('emergency-funds'),
  },
});
export default EmergencyFunds;
