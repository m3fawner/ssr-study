import PropTypes from 'prop-types';
import getMarkdown from '../../markdown/getMarkdown';
import RSUvOptions from '../../src/components/RSUvOptions/RSUvOptions';
import MarkdownConverter from '../../src/components/MarkdownConverter';
import Head from '../../src/components/Head';
import { getDataFromSymbol } from '../api/alphaVantage/[symbol]';
import { PAGE_METADATA, ROUTE_KEYS } from '../../src/routing';

const RSUvsOptionsPage = ({
  intro, extraInfo, initialSharePrice, title, description, url, keywords,
}) => (
  <>
    <Head title={title} description={description} url={url} keywords={keywords} />
    <MarkdownConverter pt="5" markdown={intro} />
    <RSUvOptions initialSharePrice={initialSharePrice} />
    <MarkdownConverter pt="5" markdown={extraInfo} />
  </>
);
RSUvsOptionsPage.propTypes = {
  intro: PropTypes.string.isRequired,
  initialSharePrice: PropTypes.number.isRequired,
  extraInfo: PropTypes.string.isRequired,
  ...Head.propTypes,
};
export const getStaticProps = async () => ({
  props: {
    initialSharePrice: parseFloat((await getDataFromSymbol('Z')).data.price),
    intro: await getMarkdown('rsu-vs-options/how-to-use'),
    extraInfo: await getMarkdown('rsu-vs-options/extra-info'),
    ...PAGE_METADATA[ROUTE_KEYS.RSU_V_OPTIONS],
  },
});
export default RSUvsOptionsPage;
