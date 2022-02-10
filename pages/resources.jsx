import PropTypes from 'prop-types';
import getMarkdown from '../markdown/getMarkdown';
import Head from '../src/components/Head';
import MarkdownConverter from '../src/components/MarkdownConverter';

const Resources = ({ resources }) => (
  <>
    <Head title="Resources" description="A brief list of resources collected over the years." url="resources" />
    <MarkdownConverter py="5" markdown={resources} />
  </>
);
Resources.propTypes = {
  resources: PropTypes.string.isRequired,
};
export const getStaticProps = async () => ({
  props: {
    resources: await getMarkdown('resources'),
  },
});
export default Resources;
