import PropTypes from 'prop-types';
import getMarkdown from '../../markdown/getMarkdown';
import Head from '../components/Head';
import MarkdownConverter from '../components/MarkdownConverter';

const MarkdownPage = ({
  content, title, description, url, keywords,
}) => (
  <>
    <Head title={title} description={description} url={url} keywords={keywords} />
    <MarkdownConverter py="5" markdown={content} />
  </>
);
MarkdownPage.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
};
MarkdownPage.defaultProps = {
  keywords: [],
};
const createMarkdownPage = (markdown, title, description, url, keywords) => ({
  Component: (props) => <MarkdownPage {...props} title={title} description={description} url={url} keywords={keywords} />,
  _getStaticProps: async () => ({
    props: {
      content: await getMarkdown(markdown),
    },
  }),
});

export default createMarkdownPage;