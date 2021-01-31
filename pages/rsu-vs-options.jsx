import PropTypes from 'prop-types';
import getMarkdown from '../markdown/getMarkdown';
import AlphaVantageAPIKeyEntry from '../src/components/AlphaVantageAPIKeyEntry';
import RSUvOptions from '../src/components/RSUvOptions';
import MarkdownConverter from '../src/components/MarkdownConverter';
import Head from '../src/components/Head';

const RSUvsOptionsPage = ({ intro }) => (
  <>
    <Head title="RSUvOptions" description="A calculator to help determine if you should take options, RSUs, or both" url="rsu-vs-options" />
    <MarkdownConverter markdown={intro} />
    <AlphaVantageAPIKeyEntry />
    <RSUvOptions />
  </>
);
RSUvsOptionsPage.propTypes = {
  intro: PropTypes.string.isRequired,
};
export const getStaticProps = async () => ({
  props: {
    intro: await getMarkdown('rsu-vs-options'),
  },
});
export default RSUvsOptionsPage;
