import getMarkdown from '../markdown/getMarkdown';
import Head, { HeadProps } from '../src/components/page/Head';
import MarkdownConverter from '../src/components/utility/MarkdownConverter';
import FeaturedPages from '../src/components/page-lists/FeaturedPages';
import RecentPages from '../src/components/page-lists/RecentPages';
import { PAGE_METADATA } from '../src/routing';

type HomeProps = {
  content: string
} & HeadProps;

const Home = ({
  content, title, description, url, keywords,
}: HomeProps) => (
  <>
    <Head title={title} description={description} url={url} keywords={keywords} />
    <MarkdownConverter pt="5" markdown={content} />
    <FeaturedPages mt={[5]} />
    <RecentPages mt="5" />
  </>
);
export const getStaticProps = async () => ({
  props: {
    content: await getMarkdown('home-content'),
    ...PAGE_METADATA.HOME,
  },
});

export default Home;
