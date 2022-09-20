import Head, { HeadProps } from '../src/components/page/Head';
import NavigateThisSite from '../src/components/pages/NavigateThisSite/NavigateThisSite';
import { PAGE_METADATA } from '../src/routing';

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
    ...PAGE_METADATA.NAVIGATE,
  },
});
export default Navigate;
