import PropTypes from 'prop-types';
import getMarkdown from '../markdown/getMarkdown';
import Head from '../src/components/Head';
import MarkdownConverter from '../src/components/MarkdownConverter';
import FeaturedPages from '../src/components/FeaturedPages';
import { PAGE_METADATA, ROUTE_KEYS } from '../src/routing';

const Home = ({
  content, title, description, url, keywords,
}) => (
  <>
    <Head title={title} description={description} url={url} keywords={keywords} />
    <MarkdownConverter pt="5" markdown={content} />
    <FeaturedPages mt="5" />
  </>
);
Home.propTypes = {
  content: PropTypes.string.isRequired,
  ...Head.propTypes,
};
export const getStaticProps = async () => ({
  props: {
    content: await getMarkdown('home-content'),
    ...PAGE_METADATA[ROUTE_KEYS.HOME],
  },
});

export default Home;
