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
  Heading,
} from '@chakra-ui/react';
import MenuIcon from '../svgs/menu.svg';

const ROUTE_KEYS = {
  '401K': '401K',
  ASSET_ALLOCATION: 'ASSET_ALLOCATION',
  DIVERSIFICATION: 'DIVERSIFICATION',
  EQUITY_COMPENSATION: 'EQUITY_COMPENSATION',
  FSA: 'FSA',
  MEGABACKDOOR_ROTH: 'MEGABACKDOOR_ROTH',
  NET_PROCEEDS: 'NET_PROCEEDS',
  REBALANCING: 'REBALANCING',
  ROTH_TRAD_AT: 'ROTH_TRAD_AT',
  RSU_V_OPTIONS: 'RSU_V_OPTIONS',
  TAX_OPTIMIZATIONS: 'TAX_OPTIMIZATIONS',
};
const ROUTES = {
  [ROUTE_KEYS['401K']]: '/401k',
  [ROUTE_KEYS.ASSET_ALLOCATION]: '/investments/asset-allocation',
  [ROUTE_KEYS.DIVERSIFICATION]: '/investments/diversification',
  [ROUTE_KEYS.EQUITY_COMPENSATION]: '/equity-compensation',
  [ROUTE_KEYS.MEGABACKDOOR_ROTH]: '/401k/megabackdoor-roth',
  [ROUTE_KEYS.NET_PROCEEDS]: '/equity-compensation/net-proceeds',
  [ROUTE_KEYS.REBALANCING]: '/investments/rebalancing',
  [ROUTE_KEYS.ROTH_TRAD_AT]: '/taxation/roth-trad-after-tax',
  [ROUTE_KEYS.RSU_V_OPTIONS]: '/equity-compensation/rsu-vs-options',
  [ROUTE_KEYS.TAX_OPTIMIZATIONS]: '/taxation/optimizations',
};
const ROUTE_NAMES = {
  [ROUTE_KEYS['401K']]: '401(k)',
  [ROUTE_KEYS.ASSET_ALLOCATION]: 'Asset allocation',
  [ROUTE_KEYS.DIVERSIFICATION]: 'Diversification',
  [ROUTE_KEYS.EQUITY_COMPENSATION]: 'Equity compensation',
  [ROUTE_KEYS.MEGABACKDOOR_ROTH]: 'Megabackdoor Roth',
  [ROUTE_KEYS.NET_PROCEEDS]: 'Net proceeds',
  [ROUTE_KEYS.REBALANCING]: 'Rebalancing',
  [ROUTE_KEYS.ROTH_TRAD_AT]: 'Roth, traditional, after tax treatments',
  [ROUTE_KEYS.RSU_V_OPTIONS]: 'RSUs vs options',
  [ROUTE_KEYS.TAX_OPTIMIZATIONS]: 'Tax optimizations',
};
const CATEGORY_LOOKUP = {
  TAXATION: 'TAXATION',
  INVESTMENTS: 'INVESTMENTS',
  EQUITY_COMPENSATION: 'EQUITY_COMPENSATION',
  TAX_ADVANTAGED_ACCOUNTS: 'TAX_ADVANTAGED_ACCOUNTS',
  '401_K': '401_K',
  HSA: 'HSA',
  IRA: 'IRA',
  FSA: 'FSA',
};
const TAXATION = {
  label: 'Taxation',
  routes: [
    ROUTE_KEYS.TAX_OPTIMIZATIONS,
    ROUTE_KEYS.ROTH_TRAD_AT,
  ],
};
const FOUR_OH_ONE_K = {
  label: '401(k)',
  topLevel: ROUTE_KEYS['401K'],
  routes: [
    ROUTE_KEYS.MEGABACKDOOR_ROTH,
  ],
};
const EQUITY_COMPENSATION = {
  label: 'Equity compensation',
  topLevel: ROUTE_KEYS.EQUITY_COMPENSATION,
  routes: [
    ROUTE_KEYS.RSU_V_OPTIONS,
    ROUTE_KEYS.NET_PROCEEDS,
  ],
};
const INVESTMENTS = {
  label: 'Investments',
  routes: [
    ROUTE_KEYS.ASSET_ALLOCATION,
    ROUTE_KEYS.DIVERSIFICATION,
    ROUTE_KEYS.REBALANCING,
  ],
};
const CATEGORIES = {
  [CATEGORY_LOOKUP.TAXATION]: TAXATION,
  [CATEGORY_LOOKUP.INVESTMENTS]: INVESTMENTS,
  [CATEGORY_LOOKUP.EQUITY_COMPENSATION]: EQUITY_COMPENSATION,
  [CATEGORY_LOOKUP.TAX_ADVANTAGED_ACCOUNTS]: {},
  [CATEGORY_LOOKUP['401_K']]: FOUR_OH_ONE_K,
  [CATEGORY_LOOKUP.HSA]: {},
  [CATEGORY_LOOKUP.IRA]: {},
  [CATEGORY_LOOKUP.FSA]: {},
};
const NAVIGATION_HIERARCHY = {
  [CATEGORY_LOOKUP.TAXATION]: CATEGORIES[CATEGORY_LOOKUP.TAXATION],
  [CATEGORY_LOOKUP.INVESTMENTS]: CATEGORIES[CATEGORY_LOOKUP.INVESTMENTS],
  [CATEGORY_LOOKUP.EQUITY_COMPENSATION]: CATEGORIES[CATEGORY_LOOKUP.EQUITY_COMPENSATION],
  [CATEGORY_LOOKUP.TAX_ADVANTAGED_ACCOUNTS]: {
    label: 'Tax advantaged accounts',
    categories: [
      CATEGORY_LOOKUP['401_K'],
    ],
    routes: [
      ROUTE_KEYS.FSA,
    ],
  },
};

const NavigationLink = ({ label, href, ...props }) => (
  <Box {...props}>
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link color="brand.600">{label}</Link>
    </NextLink>
  </Box>
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
        <DrawerBody as="nav" onClick={onClose}>
          <NavigationLink href="/" label={<Heading size="lg">Home</Heading>} />
          {Object.entries(NAVIGATION_HIERARCHY).map(([key, category]) => (
            <Category key={key} {...category} mt={4} />
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
