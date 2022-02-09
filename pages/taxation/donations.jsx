import PropTypes from 'prop-types';
import Head from '../../src/components/Head';
import MarkdownConverter from '../../src/components/MarkdownConverter';
import getMarkdown from '../../markdown/getMarkdown';

const Donations = ({ donations }) => (
  <>
    <Head title="Donations" description="Donations can help your tax liability beyond just the deduction of the donation amount." url="taxation/donations" />
    <MarkdownConverter pt="5" markdown={donations} />
  </>
);
Donations.propTypes = {
  donations: PropTypes.string.isRequired,
};

export const getStaticProps = async () => ({
  props: {
    donations: await getMarkdown('donations'),
  },
});
export default Donations;
