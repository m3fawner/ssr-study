import Head from 'next/head';
import PropTypes from 'prop-types';
import getMarkdown from '../markdown/getMarkdown';
import MarkdownConverter from '../src/components/MarkdownConverter';
import MegaBackdoorRoth from '../src/components/MegaBackdoorRoth';

const MegaBackdoorRothPage = ({ intro }) => (
  <>
    <Head>
      <title>FIcarious | Megabackdoor Roth</title>
      <link rel="icon" href="/favicon-32x32.png" />
    </Head>
    <MarkdownConverter markdown={intro} />
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
