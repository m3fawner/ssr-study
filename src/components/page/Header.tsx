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
  StyleProps,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import {
  ROUTES, CATEGORIES, ROUTE_NAMES, NAVIGATION_HIERARCHY,
} from '../../routing';
import MenuIcon from '../../svgs/menu.svg';

type NavigationLinkProps = {
  label: ReactNode,
  href: string
} & StyleProps;
const NavigationLink = ({ label, href, ...props }: NavigationLinkProps) => (
  <Link href={href} color="brand.800" display="block" {...props}>{label}</Link>
);

const LEVEL_TO_SIZE_MAP = ['lg', 'md', 'sm'];
const LEFT_MARGIN_MULTIPLIER = 4;

type CategoryProps = {
  topLevel?: string,
  level?: number,
  routes?: string[],
  categories?: string[],
  label: ReactNode
} & StyleProps;
const Category = ({
  routes = [], categories = [], label, topLevel, level = 0, ...props
}: CategoryProps) => {
  const title = <Heading size={LEVEL_TO_SIZE_MAP[level]}>{label}</Heading>;
  const indentedLevel = level + 1;
  return (
    <Box {...props} ml={level * LEFT_MARGIN_MULTIPLIER}>
      {topLevel ? <NavigationLink href={ROUTES[topLevel]} label={title} /> : title}
      {categories.map((categoryKey) => (
        <Category key={categoryKey} level={indentedLevel} {...CATEGORIES[categoryKey]} />
      ))}
      {routes.map((routeKey) => (
        <NavigationLink ml={(indentedLevel) * LEFT_MARGIN_MULTIPLIER} key={routeKey} href={ROUTES[routeKey] ?? ''} label={ROUTE_NAMES[routeKey]} />
      ))}
    </Box>
  );
};
type PageMenuProps = {
  isOpen: boolean,
  onClose: () => void
}
const PageMenu = ({ isOpen, onClose }: PageMenuProps) => (
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
            <Category key={key} {...category} />
          ))}
          <NavigationLink href="/resources" label={<Heading size="lg">Resources</Heading>} />
          <NavigationLink href="/tech" label={<Heading size="lg">Tech</Heading>} />
        </DrawerBody>
      </DrawerContent>
    </DrawerOverlay>
  </Drawer>
);

const Header = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <Box p="4" bg="brand.200" as="header">
      <Icon w={6} h={6} as={MenuIcon} onClick={onOpen} fill="brand.900" _hover={{ cursor: 'pointer' }} />
      <PageMenu isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Header;
