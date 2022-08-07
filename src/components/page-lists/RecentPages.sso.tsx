import { Box, Heading, StyleProps } from '@chakra-ui/react';
import { RECENT_BY_LAST_UPDATED } from '../../routing';
import PageList from './PageList';

export type RecentPagesProps = StyleProps;
const RecentPages = (props: RecentPagesProps) => (
  <Box {...props}>
    <Heading as="h2" size="xl">Recent articles</Heading>
    <PageList dateProp="lastUpdated" mt={2} pages={RECENT_BY_LAST_UPDATED.slice(0, 4)} />
  </Box>
);

export default RecentPages;
