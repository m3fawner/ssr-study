import {
  LinkBox, LinkOverlay, Text, Box, Heading,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

const PageCard = ({ pageMetaData, dateProp, ...props }) => (
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
PageCard.propTypes = {
  pageMetaData: PropTypes.shape({
    authored: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  dateProp: PropTypes.oneOf(['authored', 'lastUpdated']),
};
PageCard.defaultProps = {
  dateProp: 'authored',
};

export default PageCard;
