import PropTypes from 'prop-types';
import getMarkdown from '../../../markdown/getMarkdown';
import Head from '../../../src/components/Head';
import MarkdownConverter from '../../../src/components/MarkdownConverter';
import MegaBackdoorRoth from '../../../src/components/MegaBackdoorRoth';

const MegaBackdoorRothPage = ({ intro }) => (
  <>
    <Head title="Megabackdoor Roth" description="Learn about the advantages of a megabackdoor Roth, calculate how much more Roth you can get out of your 401k per year, and calculate what your paycheck withholdings should look like to maximize it." url="tax-advantaged-accounts/401k/mega-backdoor-roth" />
    <MarkdownConverter pt="5" markdown={intro} />
    <MegaBackdoorRoth />
  </>
);
MegaBackdoorRothPage.propTypes = {
  intro: PropTypes.string.isRequired,
};
export const getStaticProps = async () => ({
  props: {
    intro: await getMarkdown('megabackdoor-roth-intro'),
  },
});
export default MegaBackdoorRothPage;
