import { Box, Heading, StyleProps } from '@chakra-ui/react';
import { PAGE_METADATA, Route } from '../../routing';
import PageList from './PageList';

const FEATURED: Route[] = ['RSU_V_OPTIONS', 'SHORT_V_LONG_TERM_SAVINGS', 'MEGABACKDOOR_ROTH', 'TAX_HARVESTING'];

export type FeaturedPagesProps = StyleProps;
const FeaturedPages = (props: FeaturedPagesProps) => (
  <Box {...props}>
    <Heading as="h2" size="xl">Featured articles</Heading>
    <PageList mt={2} pages={FEATURED.map((key) => PAGE_METADATA[key])} />
  </Box>
);

export default FeaturedPages;
