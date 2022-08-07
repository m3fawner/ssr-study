import Head, { HeadProps } from '../src/components/page/Head';
import NavigateThisSite from '../src/components/pages/NavigateThisSite/NavigateThisSite';
import { PAGE_METADATA, ROUTE_KEYS } from '../src/routing';

type NavigateProps = HeadProps;

const Navigate = ({
  title, description, url, keywords,
}: NavigateProps) => (
  <>
    <Head title={title} description={description} url={url} keywords={keywords} />
    <NavigateThisSite />
  </>
);
export const getStaticProps = () => ({
  props: {
    ...PAGE_METADATA[ROUTE_KEYS.NAVIGATE],
  },
});
export default Navigate;
