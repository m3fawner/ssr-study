import EstimatedNetGrant from '../../src/components/EstimatedNetGrant';
import Head, { HeadProps } from '../../src/components/Head';
import { ROUTE_KEYS, PAGE_METADATA } from '../../src/routing';

const NetProceeds = ({
  title, description, url, keywords,
}: HeadProps) => (
  <>
    <Head title={title} description={description} url={url} keywords={keywords} />
    <EstimatedNetGrant />
  </>
);

export const getStaticProps = async () => ({
  props: PAGE_METADATA[ROUTE_KEYS.NET_PROCEEDS],
});
export default NetProceeds;
