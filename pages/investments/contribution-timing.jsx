import PropTypes from 'prop-types';
import Head from '../../src/components/Head';
import MarkdownConverter from '../../src/components/MarkdownConverter';
import getMarkdown from '../../markdown/getMarkdown';

const ContributionTiming = ({ contributionTiming }) => (
  <>
    <Head title="Contribution timing" description="Timing when a lump sum of cash is added to investments can be very stressful decision. I'm here to help! This article outlines dollar cost averaging, lump sum, and front loading concepts." url="investments/contribution-timing" />
    <MarkdownConverter pt="5" markdown={contributionTiming} />
  </>
);
ContributionTiming.propTypes = {
  contributionTiming: PropTypes.string.isRequired,
};

export const getStaticProps = async () => ({
  props: {
    contributionTiming: await getMarkdown('contribution-timing'),
  },
});
export default ContributionTiming;
