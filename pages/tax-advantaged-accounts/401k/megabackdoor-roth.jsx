import PropTypes from 'prop-types';
import getMarkdown from '../../../markdown/getMarkdown';
import Head from '../../../src/components/Head';
import MarkdownConverter from '../../../src/components/MarkdownConverter';
import MegaBackdoorRoth from '../../../src/components/MegaBackdoorRoth';
import { PAGE_METADATA, ROUTE_KEYS } from '../../../src/routing';

const MegaBackdoorRothPage = ({
  intro, title, description, url, keywords,
}) => (
  <>
    <Head title={title} description={description} url={url} keywords={keywords} />
    <MarkdownConverter pt="5" markdown={intro} />
    <MegaBackdoorRoth />
  </>
);
MegaBackdoorRothPage.propTypes = {
  intro: PropTypes.string.isRequired,
  ...Head.propTypes,
};
export const getStaticProps = async () => ({
  props: {
    intro: await getMarkdown('megabackdoor-roth-intro'),
    ...PAGE_METADATA[ROUTE_KEYS.MEGABACKDOOR_ROTH],
  },
});
export default MegaBackdoorRothPage;
