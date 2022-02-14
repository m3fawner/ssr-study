import { Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const SocialShare = ({ description, keywords }) => (
  <>
    <Text mb={2}>Did you like what you read? Was it helpful? Help spread the information! I don&apos;t advertise and I surely can&apos;t compete on SEO alone.</Text>
    <a className="twitter-share-button" href="https://twitter.com/intent/tweet" data-hashtags={keywords.map((keyword) => keyword.replace(/\W/g, '')).join(',')} data-text={description} data-via="angular_evan">Tweet</a>
  </>
);
SocialShare.propTypes = {
  description: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SocialShare;
