import getMarkdown from '../markdown/getMarkdown';
import Head, { HeadProps } from '../src/components/Head';
import MarkdownConverter from '../src/components/MarkdownConverter';
import FeaturedPages from '../src/components/FeaturedPages';
import { PAGE_METADATA, ROUTE_KEYS } from '../src/routing';
import RecentPages from '../src/components/RecentPages';

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
    ...PAGE_METADATA[ROUTE_KEYS.HOME],
  },
});

export default Home;
