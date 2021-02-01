import PropTypes from 'prop-types';
import getMarkdown from '../markdown/getMarkdown';
import Head from '../src/components/Head';
import MarkdownConverter from '../src/components/MarkdownConverter';

const Home = ({ content }) => (
  <>
    <Head title="Home" description="Welcome to FIcarious! This is a site dedicated to teaching about financial independence with helpful tools and articles about the subject." url="" />
    <MarkdownConverter py="5" markdown={content} />
  </>
);
Home.propTypes = {
  content: PropTypes.string.isRequired,
};
export const getStaticProps = async () => ({
  props: {
    content: await getMarkdown('home-content'),
  },
});
export default Home;
