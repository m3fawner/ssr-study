import { Box, Heading, StyleProps } from '@chakra-ui/react';
import { ROUTE_KEYS, PAGE_METADATA } from '../../routing';
import PageList from './PageList';

const FEATURED = [ROUTE_KEYS.RSU_V_OPTIONS, ROUTE_KEYS.SHORT_V_LONG_TERM_SAVINGS, ROUTE_KEYS.MEGABACKDOOR_ROTH, ROUTE_KEYS.TAX_HARVESTING];

export type FeaturedPagesProps = StyleProps;
const FeaturedPages = (props: FeaturedPagesProps) => (
  <Box {...props}>
    <Heading as="h2" size="xl">Featured articles</Heading>
    <PageList mt={2} pages={FEATURED.map((key) => PAGE_METADATA[key])} />
  </Box>
);

export default FeaturedPages;
