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
import MenuIcon from '../svgs/menu.svg';

const ROUTE_KEYS = {
  '401K': '401K',
  529: '529',
  ASSET_ALLOCATION: 'ASSET_ALLOCATION',
  BACKDOOR_ROTH_IRA: 'BACKDOOR_ROTH_IRA',
  CAPITAL_GAINS: 'CAPITAL_GAINS',
  CONTRIBUTION_TIMING: 'CONTRIBUTION_TIMING',
  DONATIONS: 'DONATIONS',
  DIVERSIFICATION: 'DIVERSIFICATION',
  EMERGENCY_FUNDS: 'EMERGENCY_FUNDS',
  EQUITY_COMPENSATION: 'EQUITY_COMPENSATION',
  ESPP: 'ESPP',
  FILING_YOUR_TAXES: 'FILING_YOUR_TAXES',
  FSA: 'FSA',
  HSA: 'HSA',
  I_BONDS: 'I_BONDS',
  IRA: 'IRA',
  MEGABACKDOOR_ROTH: 'MEGABACKDOOR_ROTH',
  NET_PROCEEDS: 'NET_PROCEEDS',
  REBALANCING: 'REBALANCING',
  ROTH_TRAD_AT: 'ROTH_TRAD_AT',
  RSU_V_OPTIONS: 'RSU_V_OPTIONS',
  SHORT_V_LONG_TERM_SAVINGS: 'SHORT_V_LONG_TERM_SAVINGS',
  TAX_HARVESTING: 'TAX_HARVESTING',
  TAX_OPTIMIZATIONS: 'TAX_OPTIMIZATIONS',
  TECH: 'TECH',
  TRUE_UP_CONTRIBUTIONS: 'TRUE_UP_CONTRIBUTIONS',
};
const ROUTES = {
  [ROUTE_KEYS['401K']]: '/tax-advantaged-accounts/401k',
  [ROUTE_KEYS['529']]: '/tax-advantaged-accounts/529',
  [ROUTE_KEYS.ASSET_ALLOCATION]: '/investments/asset-allocation',
  [ROUTE_KEYS.BACKDOOR_ROTH_IRA]: '/tax-advantaged-accounts/ira/backdoor-roth-ira',
  [ROUTE_KEYS.CAPITAL_GAINS]: '/taxation/capital-gains',
  [ROUTE_KEYS.CONTRIBUTION_TIMING]: '/investments/contribution-timing',
  [ROUTE_KEYS.DONATIONS]: '/taxation/donations',
  [ROUTE_KEYS.DIVERSIFICATION]: '/investments/diversification',
  [ROUTE_KEYS.EMERGENCY_FUNDS]: '/general/emergency-funds',
  [ROUTE_KEYS.EQUITY_COMPENSATION]: '/equity-compensation',
  [ROUTE_KEYS.ESPP]: '/equity-compensation/espp',
  [ROUTE_KEYS.FILING_YOUR_TAXES]: '/taxation/filing-your-taxes',
  [ROUTE_KEYS.FSA]: '/tax-advantaged-accounts/fsa',
  [ROUTE_KEYS.HSA]: '/tax-advantaged-accounts/hsa',
  [ROUTE_KEYS.I_BONDS]: '/general/i-bonds',
  [ROUTE_KEYS.IRA]: '/tax-advantaged-accounts/ira',
  [ROUTE_KEYS.MEGABACKDOOR_ROTH]: '/tax-advantaged-accounts/401k/megabackdoor-roth',
  [ROUTE_KEYS.NET_PROCEEDS]: '/equity-compensation/net-proceeds',
  [ROUTE_KEYS.REBALANCING]: '/investments/rebalancing',
  [ROUTE_KEYS.ROTH_TRAD_AT]: '/taxation/roth-trad-after-tax',
  [ROUTE_KEYS.RSU_V_OPTIONS]: '/equity-compensation/rsu-vs-options',
  [ROUTE_KEYS.SHORT_V_LONG_TERM_SAVINGS]: '/general/short-v-long-term-savings',
  [ROUTE_KEYS.TAX_HARVESTING]: '/taxation/tax-harvesting',
  [ROUTE_KEYS.TAX_OPTIMIZATIONS]: '/taxation/optimizations',
  [ROUTE_KEYS.TECH]: '/tech',
  [ROUTE_KEYS.TRUE_UP_CONTRIBUTIONS]: '/tax-advantaged-accounts/401k/true-up-contributions',
};
const ROUTE_NAMES = {
  [ROUTE_KEYS['401K']]: '401(k)',
  [ROUTE_KEYS['529']]: '529',
  [ROUTE_KEYS.ASSET_ALLOCATION]: 'Asset allocation',
  [ROUTE_KEYS.BACKDOOR_ROTH_IRA]: 'Backdoor Roth IRA',
  [ROUTE_KEYS.CAPITAL_GAINS]: 'Capital gains',
  [ROUTE_KEYS.CONTRIBUTION_TIMING]: 'Contribution timing',
  [ROUTE_KEYS.DONATIONS]: 'Donations',
  [ROUTE_KEYS.DIVERSIFICATION]: 'Diversification',
  [ROUTE_KEYS.EMERGENCY_FUNDS]: 'Emergency funds',
  [ROUTE_KEYS.EQUITY_COMPENSATION]: 'Equity compensation',
  [ROUTE_KEYS.ESPP]: 'Employee Stock Purchasing Program (ESPP)',
  [ROUTE_KEYS.FILING_YOUR_TAXES]: 'Filing your taxes',
  [ROUTE_KEYS.FSA]: 'Flexible Savings Accounts (FSA)',
  [ROUTE_KEYS.HSA]: 'Health Savings Account (HSA)',
  [ROUTE_KEYS.I_BONDS]: 'I-Bonds',
  [ROUTE_KEYS.IRA]: 'Individual Retirement Account (IRA)',
  [ROUTE_KEYS.MEGABACKDOOR_ROTH]: 'Megabackdoor Roth',
  [ROUTE_KEYS.NET_PROCEEDS]: 'Net proceeds',
  [ROUTE_KEYS.REBALANCING]: 'Rebalancing',
  [ROUTE_KEYS.ROTH_TRAD_AT]: 'Roth, traditional, after tax treatments',
  [ROUTE_KEYS.RSU_V_OPTIONS]: 'RSUs vs options',
  [ROUTE_KEYS.SHORT_V_LONG_TERM_SAVINGS]: 'Short vs long term savings',
  [ROUTE_KEYS.TAX_HARVESTING]: 'Tax harvesting',
  [ROUTE_KEYS.TAX_OPTIMIZATIONS]: 'Tax optimizations',
  [ROUTE_KEYS.TECH]: 'Tech',
  [ROUTE_KEYS.TRUE_UP_CONTRIBUTIONS]: 'True-up contributions',
};
const CATEGORY_LOOKUP = {
  '401_K': '401_K',
  EQUITY_COMPENSATION: 'EQUITY_COMPENSATION',
  FSA: 'FSA',
  GENERAL_FINANCE: 'GENERAL_FINANCE',
  HSA: 'HSA',
  INVESTMENTS: 'INVESTMENTS',
  IRA: 'IRA',
  TAX_ADVANTAGED_ACCOUNTS: 'TAX_ADVANTAGED_ACCOUNTS',
  TAXATION: 'TAXATION',
};
const TAXATION = {
  label: 'Taxation',
  routes: [
    ROUTE_KEYS.CAPITAL_GAINS,
    ROUTE_KEYS.TAX_OPTIMIZATIONS,
    ROUTE_KEYS.ROTH_TRAD_AT,
    ROUTE_KEYS.TAX_HARVESTING,
    ROUTE_KEYS.DONATIONS,
    ROUTE_KEYS.FILING_YOUR_TAXES,
  ],
};
const FOUR_OH_ONE_K = {
  label: '401(k)',
  topLevel: ROUTE_KEYS['401K'],
  routes: [
    ROUTE_KEYS.MEGABACKDOOR_ROTH,
    ROUTE_KEYS.TRUE_UP_CONTRIBUTIONS,
  ],
};
const IRA = {
  label: 'Individual Retirement Account',
  topLevel: ROUTE_KEYS.IRA,
  routes: [
    ROUTE_KEYS.BACKDOOR_ROTH_IRA,
  ],
};
const EQUITY_COMPENSATION = {
  label: 'Equity compensation',
  topLevel: ROUTE_KEYS.EQUITY_COMPENSATION,
  routes: [
    ROUTE_KEYS.RSU_V_OPTIONS,
    ROUTE_KEYS.NET_PROCEEDS,
    ROUTE_KEYS.ESPP,
  ],
};
const INVESTMENTS = {
  label: 'Investments',
  routes: [
    ROUTE_KEYS.ASSET_ALLOCATION,
    ROUTE_KEYS.DIVERSIFICATION,
    ROUTE_KEYS.REBALANCING,
    ROUTE_KEYS.CONTRIBUTION_TIMING,
  ],
};
const GENERAL_FINANCE = {
  label: 'General finance',
  routes: [
    ROUTE_KEYS.EMERGENCY_FUNDS,
    ROUTE_KEYS.SHORT_V_LONG_TERM_SAVINGS,
    ROUTE_KEYS.I_BONDS,
    ROUTE_KEYS['529'],
  ],
};
const TAX_ADVANTAGED_ACCOUNTS = {
  label: 'Tax advantaged accounts',
  categories: [
    CATEGORY_LOOKUP['401_K'],
    CATEGORY_LOOKUP.IRA,
  ],
  routes: [
    ROUTE_KEYS.HSA,
    ROUTE_KEYS.FSA,
  ],
};
const CATEGORIES = {
  [CATEGORY_LOOKUP['401_K']]: FOUR_OH_ONE_K,
  [CATEGORY_LOOKUP.EQUITY_COMPENSATION]: EQUITY_COMPENSATION,
  [CATEGORY_LOOKUP.GENERAL_FINANCE]: GENERAL_FINANCE,
  [CATEGORY_LOOKUP.INVESTMENTS]: INVESTMENTS,
  [CATEGORY_LOOKUP.IRA]: IRA,
  [CATEGORY_LOOKUP.TAX_ADVANTAGED_ACCOUNTS]: TAX_ADVANTAGED_ACCOUNTS,
  [CATEGORY_LOOKUP.TAXATION]: TAXATION,
};
const NAVIGATION_HIERARCHY = {
  [CATEGORY_LOOKUP.TAXATION]: CATEGORIES[CATEGORY_LOOKUP.TAXATION],
  [CATEGORY_LOOKUP.INVESTMENTS]: CATEGORIES[CATEGORY_LOOKUP.INVESTMENTS],
  [CATEGORY_LOOKUP.EQUITY_COMPENSATION]: CATEGORIES[CATEGORY_LOOKUP.EQUITY_COMPENSATION],
  [CATEGORY_LOOKUP.TAX_ADVANTAGED_ACCOUNTS]: CATEGORIES[CATEGORY_LOOKUP.TAX_ADVANTAGED_ACCOUNTS],
  [CATEGORY_LOOKUP.GENERAL_FINANCE]: CATEGORIES[CATEGORY_LOOKUP.GENERAL_FINANCE],
};

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
