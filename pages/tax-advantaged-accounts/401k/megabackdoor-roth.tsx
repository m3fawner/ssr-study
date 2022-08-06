import getMarkdown from '../../../markdown/getMarkdown';
import Head, { HeadProps } from '../../../src/components/page/Head';
import MarkdownConverter from '../../../src/components/utility/MarkdownConverter';
import MegaBackdoorRoth from '../../../src/components/pages/MegaBackdoorRoth';
import { PAGE_METADATA, ROUTE_KEYS } from '../../../src/routing';

type MegabackdoorRothProps = {
  intro: string,
}
const MegaBackdoorRothPage = ({
  intro, title, description, url, keywords,
}: HeadProps & MegabackdoorRothProps) => (
  <>
    <Head title={title} description={description} url={url} keywords={keywords} />
    <MarkdownConverter pt="5" markdown={intro} />
    <MegaBackdoorRoth />
  </>
);
export const getStaticProps = async () => ({
  props: {
    intro: await getMarkdown('megabackdoor-roth-intro'),
    ...PAGE_METADATA[ROUTE_KEYS.MEGABACKDOOR_ROTH],
  },
});
export default MegaBackdoorRothPage;
