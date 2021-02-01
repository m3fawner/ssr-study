import PropTypes from 'prop-types';
import getMarkdown from '../markdown/getMarkdown';
import RSUvOptions from '../src/components/RSUvOptions';
import MarkdownConverter from '../src/components/MarkdownConverter';
import Head from '../src/components/Head';
import { getDataFromSymbol } from './api/alphaVantage/[symbol]';

const RSUvsOptionsPage = ({ intro, initialSharePrice }) => (
  <>
    <Head title="RSUvOptions" description="A calculator to help determine if you should take options, RSUs, or both" url="rsu-vs-options" />
    <MarkdownConverter markdown={intro} />
    <RSUvOptions initialSharePrice={initialSharePrice} />
  </>
);
RSUvsOptionsPage.propTypes = {
  intro: PropTypes.string.isRequired,
  initialSharePrice: PropTypes.number.isRequired,
};

export const getStaticProps = async () => ({
  props: {
    initialSharePrice: parseFloat((await getDataFromSymbol('Z')).data.price),
    intro: await getMarkdown('rsu-vs-options'),
  },
});
export default RSUvsOptionsPage;
