import EstimatedNetGrant from '../../src/components/EstimatedNetGrant';
import Head from '../../src/components/Head';
import { ROUTE_KEYS, PAGE_METADATA } from '../../src/routing';

const NetProceeds = ({
  title, description, url, keywords,
}) => (
  <>
    <Head title={title} description={description} url={url} keywords={keywords} />
    <EstimatedNetGrant />
  </>
);
NetProceeds.propTypes = Head.propTypes;

export const getStaticProps = async () => ({
  props: PAGE_METADATA[ROUTE_KEYS.NET_PROCEEDS],
});
export default NetProceeds;
