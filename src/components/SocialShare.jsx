import { Box, Flex, Text } from '@chakra-ui/react';
import Head from './Head';

const SocialShare = ({ keywords, description, url }) => (
  <>
    <Text mb={2}>Did you like what you read? Was it helpful? Help spread the information! I don&apos;t advertise and I surely can&apos;t compete on SEO alone.</Text>
    <Flex alignItems="center">
      <a className="twitter-share-button" href="https://twitter.com/intent/tweet" data-hashtags={keywords.map((keyword) => keyword.replace(/\W/g, '')).join(',')} data-text={description} data-via="angular_evan">Tweet</a>
      <Box
        suppressHydrationWarning
        ml={4}
        lineHeight="20px"
        className="fb-share-button"
        data-layout="button_count"
        data-lazy="true"
        data-href={`${process.env.NEXT_PUBLIC_BASE_URL}/${url}`}
      />
      <Box suppressHydrationWarning ml={4} lineHeight="20px">
        <script suppressHydrationWarning type="IN/Share" data-url={`${process.env.NEXT_PUBLIC_BASE_URL}/${url}`} />
      </Box>
    </Flex>
  </>
);
SocialShare.propTypes = Head.propTypes;

export default SocialShare;
