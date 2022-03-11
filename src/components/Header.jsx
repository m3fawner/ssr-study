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
  Link,
  Heading,
} from '@chakra-ui/react';
import {
  ROUTE_KEYS, ROUTES, CATEGORIES, CATEGORY_LOOKUP, ROUTE_NAMES, NAVIGATION_HIERARCHY,
} from '../routing';
import MenuIcon from '../svgs/menu.svg';

const NavigationLink = ({ label, href, ...props }) => (
  <Link href={href} color="brand.800" display="block" {...props}>{label}</Link>
);
NavigationLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
};

const LEVEL_TO_SIZE_MAP = ['lg', 'md', 'sm'];
const LEFT_MARGIN_MULTIPLIER = 4;
const Category = ({
  routes, categories, label, topLevel, level, ...props
}) => {
  const title = <Heading size={LEVEL_TO_SIZE_MAP[level]}>{label}</Heading>;
  const indentedLevel = level + 1;
  return (
    <Box {...props} ml={level * LEFT_MARGIN_MULTIPLIER}>
      {topLevel ? <NavigationLink href={ROUTES[topLevel]} label={title} /> : title}
      {categories.map((categoryKey) => (
        <Category mt={2} key={categoryKey} level={indentedLevel} {...CATEGORIES[categoryKey]} />
      ))}
      {routes.map((routeKey) => (
        <NavigationLink mt={2} ml={(indentedLevel) * LEFT_MARGIN_MULTIPLIER} key={routeKey} href={ROUTES[routeKey] ?? ''} label={ROUTE_NAMES[routeKey]} />
      ))}
    </Box>
  );
};
Category.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.oneOf(Object.values(ROUTE_KEYS))),
  categories: PropTypes.arrayOf(PropTypes.oneOf(Object.values(CATEGORY_LOOKUP))),
  label: PropTypes.node.isRequired,
  topLevel: PropTypes.string,
  level: PropTypes.number,
};
Category.defaultProps = {
  level: 0,
  routes: [],
  categories: [],
  topLevel: '',
};
const PageMenu = ({ isOpen, onClose }) => (
  <Drawer
    isOpen={isOpen}
    onClose={onClose}
    placement="left"
    size="md"
  >
    <DrawerOverlay>
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody as="nav">
          <NavigationLink href="/" label={<Heading size="lg">Home</Heading>} />
          {Object.entries(NAVIGATION_HIERARCHY).map(([key, category]) => (
            <Category key={key} {...category} mt={4} />
          ))}
          <NavigationLink href="/resources" label={<Heading size="lg">Resources</Heading>} />
          <NavigationLink href="/tech" label={<Heading size="lg">Tech</Heading>} />
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
      <Icon w={6} h={6} as={MenuIcon} onClick={onOpen} fill="brand.900" _hover={{ cursor: 'pointer' }} />
      <PageMenu isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
Header.propTypes = {};

export default Header;
