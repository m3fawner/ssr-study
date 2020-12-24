import { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Box,
  Icon,
  Button,
} from '@chakra-ui/react';
import { context } from '../hooks/useGlobalState';
import MenuIcon from '../svgs/menu.svg';

const PageMenu = ({ isOpen, onClose }) => {
  const { setAlphaVantageAPIKey } = useContext(context);
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement="left"
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Button onClick={() => setAlphaVantageAPIKey('')}>Clear API key</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
PageMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
const Header = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <Box p="4" bg="brand.200">
      <Icon as={MenuIcon} onClick={onOpen} fill="brand.900" _hover={{ cursor: 'pointer' }} />
      <PageMenu isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
Header.propTypes = {};

export default Header;
