import { Box, Flex, Text } from '@chakra-ui/react';
import { HeadProps } from './Head';

const MY_TWITTER = 'angular_evan';
const VIA_STRING = ` via @${MY_TWITTER}`;
const MAX_LEN = 280;
const getKeywordsArrayToFitTweet = (keywords: HeadProps['keywords'] = [], description: HeadProps['description'] = '', url: HeadProps['url'] = ''): string[] => {
  const cleansedKeywords = keywords.map((keyword) => keyword.replace(/\W/g, ''));
  const tweetLengthSansKeywords = (description.length + 1) + (VIA_STRING.length + 1) + (url.length + 1);
  if (tweetLengthSansKeywords >= MAX_LEN) {
    return [];
  }
  cleansedKeywords.sort((a, b) => a.length - b.length);
  let maxKeywordsLength = MAX_LEN - tweetLengthSansKeywords;
  const newKeywords = [];
  for (let i = 0; i < cleansedKeywords.length; i += 1) {
    const keyword = cleansedKeywords[i];
    const withHash = `#${keyword}${i > 0 ? ' ' : ''}`.length;
    maxKeywordsLength -= withHash;
    if (maxKeywordsLength > 0) {
      newKeywords.push(keyword);
    } else {
      break;
    }
  }
  return newKeywords;
};
export type SocialShareProps = HeadProps;
const SocialShare = ({ keywords = [], description, url }: SocialShareProps) => (
  <>
    <Text mb={2}>Did you like what you read? Was it helpful? Help spread the information! I don&apos;t advertise and I surely can&apos;t compete on SEO alone.</Text>
    <Flex alignItems="center">
      <div id="fb-root" />
      <a suppressHydrationWarning className="twitter-share-button" href="https://twitter.com/intent/tweet" data-hashtags={getKeywordsArrayToFitTweet(keywords, description, `${process.env.NEXT_PUBLIC_BASE_URL}/${url}`).join(',')} data-text={description} data-via={MY_TWITTER}>Tweet</a>
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

export default SocialShare;
