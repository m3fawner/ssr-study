import EstimatedNetGrant from '../../src/components/pages/EstimatedNetGrant';
import Head, { HeadProps } from '../../src/components/page/Head';
import { PAGE_METADATA } from '../../src/routing';

const NetProceeds = ({
  title, description, url, keywords,
}: HeadProps) => (
  <>
    <Head title={title} description={description} url={url} keywords={keywords} />
    <EstimatedNetGrant />
  </>
);

export const getStaticProps = async () => ({
  props: PAGE_METADATA.NET_PROCEEDS,
});
export default NetProceeds;
