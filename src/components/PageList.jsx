import { Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import PageCard from './PageCard';

const PageList = ({ pages, ...props }) => (
  <Flex flexWrap="wrap" {...props}>
    {pages.map((page) => <PageCard key={page.url} pageMetaData={page} flexBasis={['100%', '49%', , '24%']} mr={[0, '1%']} mt={[4, , , 0]} />)}
  </Flex>
);
PageList.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default PageList;
