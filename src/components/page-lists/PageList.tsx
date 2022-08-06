import { Flex, StyleProps } from '@chakra-ui/react';
import PageCard, { DateProp } from './PageCard';
import { Page } from './types';

type PageListProps = {
  pages: Page[],
  dateProp?: DateProp
} & StyleProps;
const PageList = ({ pages, dateProp, ...props }: PageListProps) => (
  <Flex flexWrap="wrap" {...props}>
    {pages.map((page) => <PageCard dateProp={dateProp} key={page.url} pageMetaData={page} flexBasis={['100%', '49%', null, '24%']} mr={[0, '1%']} mt={[4, null, null, 0]} />)}
  </Flex>
);
export default PageList;
