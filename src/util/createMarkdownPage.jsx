import PropTypes from 'prop-types';
import getMarkdown from '../../markdown/getMarkdown';
import Head from '../components/Head';
import MarkdownConverter from '../components/MarkdownConverter';

const MarkdownPage = ({
  content, title, description, url,
}) => (
  <>
    <Head title={title} description={description} url={url} />
    <MarkdownConverter py="5" markdown={content} />
  </>
);
MarkdownPage.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
const createMarkdownPage = (markdown, title, description, url) => ({
  Component: (props) => <MarkdownPage {...props} title={title} description={description} url={url} />,
  _getStaticProps: async () => ({
    props: {
      content: await getMarkdown(markdown),
    },
  }),
});

export default createMarkdownPage;
