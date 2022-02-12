import PropTypes from 'prop-types';
import getMarkdown from '../../markdown/getMarkdown';
import RSUvOptions from '../../src/components/RSUvOptions/RSUvOptions';
import MarkdownConverter from '../../src/components/MarkdownConverter';
import Head from '../../src/components/Head';
import { getDataFromSymbol } from '../api/alphaVantage/[symbol]';

const RSUvsOptionsPage = ({ intro, extraInfo, initialSharePrice }) => (
  <>
    <Head title="RSUs vs Options" description="A calculator to help determine if you should take options, RSUs, or both" url="equity-compensation/rsu-vs-options" keywords={['rsus', 'options', 'compensation', 'stock', 'equity']} />
    <MarkdownConverter pt="5" markdown={intro} />
    <RSUvOptions initialSharePrice={initialSharePrice} />
    <MarkdownConverter pt="5" markdown={extraInfo} />
  </>
);
RSUvsOptionsPage.propTypes = {
  intro: PropTypes.string.isRequired,
  initialSharePrice: PropTypes.number.isRequired,
  extraInfo: PropTypes.string.isRequired,
};
export const getStaticProps = async () => ({
  props: {
    initialSharePrice: parseFloat((await getDataFromSymbol('Z')).data.price),
    intro: await getMarkdown('rsu-vs-options/how-to-use'),
    extraInfo: await getMarkdown('rsu-vs-options/extra-info'),
  },
});
export default RSUvsOptionsPage;
