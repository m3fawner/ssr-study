import { Box, Flex, Text } from '@chakra-ui/react';
import useMetadata from '../hooks/useMetadata';

const SocialShare = () => {
  const { description, keywords = [], url } = useMetadata() ?? {};
  return typeof window === 'undefined' ? null : (
    <>
      <Text mb={2}>Did you like what you read? Was it helpful? Help spread the information! I don&apos;t advertise and I surely can&apos;t compete on SEO alone.</Text>
      <Flex alignItems="center">
        <a className="twitter-share-button" href="https://twitter.com/intent/tweet" data-hashtags={keywords.map((keyword) => keyword.replace(/\W/g, '')).join(',')} data-text={description} data-via="angular_evan">Tweet</a>
        <Box
          ml={4}
          lineHeight="20px"
          className="fb-share-button"
          data-href={url}
          data-layout="button_count"
        />
      </Flex>
    </>
  );
};

export default SocialShare;
