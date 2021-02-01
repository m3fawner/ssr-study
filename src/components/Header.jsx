import PropTypes from 'prop-types';
import NextLink from 'next/link';
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
  Link,
} from '@chakra-ui/react';
import MenuIcon from '../svgs/menu.svg';

const ROUTES = {
  '/': 'Home',
  '/net-proceeds': 'Net Proceeds',
  '/rsu-vs-options': 'RSU vs Options',
  '/mega-backdoor-roth': 'Megabackdoor Roth',
};
const PageMenu = ({ isOpen, onClose }) => (
  <Drawer
    isOpen={isOpen}
    onClose={onClose}
    placement="left"
  >
    <DrawerOverlay>
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody as="nav">
          {Object.entries(ROUTES).map(([href, label]) => (
            <Box key={href} onClick={onClose}>
              <NextLink href={href} passHref>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <Link>{label}</Link>
              </NextLink>
            </Box>
          ))}
        </DrawerBody>
      </DrawerContent>
    </DrawerOverlay>
  </Drawer>
);
PageMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
const Header = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <Box p="4" bg="brand.200" as="header">
      <Icon as={MenuIcon} onClick={onOpen} fill="brand.900" _hover={{ cursor: 'pointer' }} />
      <PageMenu isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
Header.propTypes = {};

export default Header;
