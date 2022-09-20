import getMarkdown from '../../markdown/getMarkdown';
import RSUvOptions from '../../src/components/pages/RSUvOptions/RSUvOptions';
import MarkdownConverter from '../../src/components/utility/MarkdownConverter';
import Head, { HeadProps } from '../../src/components/page/Head';
import { AlphaVantageData, getDataFromSymbol } from '../api/alphaVantage/[symbol]';
import { PAGE_METADATA } from '../../src/routing';

type RSUvsOptionsProps = {
  intro: string,
  initialSharePrice: number,
  extraInfo: string
}
const RSUvsOptionsPage = ({
  intro, extraInfo, initialSharePrice, title, description, url, keywords,
}: HeadProps & RSUvsOptionsProps) => (
  <>
    <Head title={title} description={description} url={url} keywords={keywords} />
    <MarkdownConverter pt="5" markdown={intro} />
    <RSUvOptions initialSharePrice={initialSharePrice} />
    <MarkdownConverter pt="5" markdown={extraInfo} />
  </>
);
export const getStaticProps = async () => {
  const exampleQuote: AlphaVantageData | null = await getDataFromSymbol('Z');
  return ({
    props: {
      initialSharePrice: exampleQuote ? parseFloat(exampleQuote.data.price) : 50,
      intro: await getMarkdown('rsu-vs-options/how-to-use'),
      extraInfo: await getMarkdown('rsu-vs-options/extra-info'),
      ...PAGE_METADATA.RSU_V_OPTIONS,
    },
  });
};
export default RSUvsOptionsPage;
