import {
  LinkBox, LinkOverlay, Text, Box, Heading, StyleProps,
} from '@chakra-ui/react';
import { Page } from '../types';

export type DateProp = 'authored' | 'lastUpdated';
type PageCardProps = {
  dateProp?: DateProp
  pageMetaData: Page
} & StyleProps;
const PageCard = ({ pageMetaData, dateProp = 'authored', ...props }: PageCardProps) => (
  <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md" {...props}>
    <Box as="time" dateTime={new Date(pageMetaData[dateProp]).toLocaleString()}>
      {Math.ceil((new Date().getTime() - new Date(pageMetaData[dateProp]).getTime()) / 1000 / 3600 / 24)}
      {' '}
      days ago
    </Box>
    <Heading size="md" my="2">
      <LinkOverlay href={pageMetaData.url}>
        {pageMetaData.title}
      </LinkOverlay>
    </Heading>
    <Text>
      {pageMetaData.description}
    </Text>
  </LinkBox>
);

export default PageCard;
