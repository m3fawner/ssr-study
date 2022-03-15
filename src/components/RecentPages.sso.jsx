import { Box, Heading } from '@chakra-ui/react';
import { PAGE_METADATA, ROUTE_KEYS } from '../routing';
import PageList from './PageList';

const EXCLUDE = new Set([PAGE_METADATA[ROUTE_KEYS.HOME].url]);
const RECENT = Object.values(PAGE_METADATA)
  .filter(({ url }) => !EXCLUDE.has(url))
  .sort(({ lastUpdated: a }, { lastUpdated: b }) => (new Date(a).getTime() < new Date(b).getTime() ? 1 : -1));

const RecentPages = (props) => (
  <Box {...props}>
    <Heading level="2">Recent articles</Heading>
    <PageList dateProp="lastUpdated" mt={2} pages={RECENT.slice(0, 4)} />
  </Box>
);

export default RecentPages;
