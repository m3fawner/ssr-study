import PropTypes from 'prop-types';
import Head from '../../../src/components/Head';
import MarkdownConverter from '../../../src/components/MarkdownConverter';
import getMarkdown from '../../../markdown/getMarkdown';

const TrueUp = ({ trueUp }) => (
  <>
    <Head title="True up contributions" description="A true up contribution is an employer rectifying employer contributions that may have been earned." url="tax-advantaged-accounts/401k/true-up-contributions" />
    <MarkdownConverter pt="5" markdown={trueUp} />
  </>
);
TrueUp.propTypes = {
  trueUp: PropTypes.string.isRequired,
};

export const getStaticProps = async () => ({
  props: {
    trueUp: await getMarkdown('true-up-contributions'),
  },
});
export default TrueUp;
