import PropTypes from 'prop-types';
import Head from '../src/components/Head';
import MarkdownConverter from '../src/components/MarkdownConverter';
import getMarkdown from '../markdown/getMarkdown';

const AssetAllocation = ({ assetAllocation }) => (
  <>
    <Head title="Asset allocation" description="A brief article describing asset allocation with regards to investments." url="/asset-allocation" />
    <MarkdownConverter pt="5" markdown={assetAllocation} />
  </>
);
AssetAllocation.propTypes = {
  assetAllocation: PropTypes.string.isRequired,
};

export const getStaticProps = async () => ({
  props: {
    assetAllocation: await getMarkdown('asset-allocation'),
  },
});
export default AssetAllocation;
