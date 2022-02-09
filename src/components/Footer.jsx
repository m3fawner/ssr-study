import { Text, Box, Link } from '@chakra-ui/react';

const Footer = () => (
  <Box as="footer" px="4" mt="4">
    <Text fontSize="sm">
      I am not a certified financial advisor or tax preparer. The information on this site is purely
      for informative purposes and you should further investigate any information you may find here.
    </Text>
    <Text fontSize="sm">
      Additionally, by using this site you agree to be tracked in every way possible...
    </Text>
    <Text fontSize="sm">
      Just kidding, it&apos;s only Google Analytics and I don&apos;t collect personally identifiable information.
      It is only here so I can see what is popular with my users.
    </Text>
    <Text fontSize="sm">
      Also, this is open source. Please check out
      {' '}
      <Link color="brand.800" isExternal href="https://github.com/m3fawner/ssr-study">the github repository.</Link>
    </Text>
  </Box>
);
export default Footer;
