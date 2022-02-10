import PropTypes from 'prop-types';
import Head from '../../../src/components/Head';
import MarkdownConverter from '../../../src/components/MarkdownConverter';
import getMarkdown from '../../../markdown/getMarkdown';

const FourOhOneK = ({ fourOhOneK }) => (
  <>
    <Head title="401k" description="An introduction to 401(k)s, a tax-advantaged account." url="tax-advantaged-accounts/401k" />
    <MarkdownConverter pt="5" markdown={fourOhOneK} />
  </>
);
FourOhOneK.propTypes = {
  fourOhOneK: PropTypes.string.isRequired,
};

export const getStaticProps = async () => ({
  props: {
    fourOhOneK: await getMarkdown('401k'),
  },
});
export default FourOhOneK;
