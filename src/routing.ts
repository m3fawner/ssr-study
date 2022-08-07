import { Page } from './components/page-lists/types';

export const ROUTE_KEYS = {
  '401K': '401K',
  ASSET_ALLOCATION: 'ASSET_ALLOCATION',
  BACKDOOR_ROTH_IRA: 'BACKDOOR_ROTH_IRA',
  CAPITAL_GAINS: 'CAPITAL_GAINS',
  CHANGING_JOBS_401K: 'CHANGING_JOBS_401_K',
  CONTRIBUTION_TIMING: 'CONTRIBUTION_TIMING',
  DONATIONS: 'DONATIONS',
  DIVERSIFICATION: 'DIVERSIFICATION',
  DRAWDOWN: 'DRAWDOWN',
  EMERGENCY_FUNDS: 'EMERGENCY_FUNDS',
  EQUITY_COMPENSATION: 'EQUITY_COMPENSATION',
  ESPP: 'ESPP',
  FILING_YOUR_TAXES: 'FILING_YOUR_TAXES',
  FIVE_TWENTY_NINE: 'FIVE_TWENTY_NINE',
  FSA: 'FSA',
  HOME: 'HOME',
  HSA: 'HSA',
  I_BONDS: 'I_BONDS',
  IRA: 'IRA',
  JOB_OFFER_EVALUATION: 'JOB_OFFER_EVALUATION',
  MEGABACKDOOR_ROTH: 'MEGABACKDOOR_ROTH',
  NAVIGATE: 'NAVIGATE',
  NET_PROCEEDS: 'NET_PROCEEDS',
  REBALANCING: 'REBALANCING',
  RESOURCES: 'RESOURCES',
  ROTH_TRAD_AT: 'ROTH_TRAD_AT',
  RSU_V_OPTIONS: 'RSU_V_OPTIONS',
  SHORT_V_LONG_TERM_SAVINGS: 'SHORT_V_LONG_TERM_SAVINGS',
  TAX_HARVESTING: 'TAX_HARVESTING',
  TAX_OPTIMIZATIONS: 'TAX_OPTIMIZATIONS',
  TECH: 'TECH',
  TRUE_UP_CONTRIBUTIONS: 'TRUE_UP_CONTRIBUTIONS',
};

export const PAGE_METADATA:Record<string, Page> = {
  [ROUTE_KEYS['401K']]: {
    title: '401k',
    description: 'An introduction to 401(k)s, a tax-advantaged account.',
    url: '/tax-advantaged-accounts/401k',
    keywords: ['401k', 'retirement', 'employee sponsored plan', 'investing'],
    authored: '2022-02-09T00:00:00.000Z',
    lastUpdated: '2022-02-09T00:00:00.000Z',
  },
  [ROUTE_KEYS.ASSET_ALLOCATION]: {
    title: 'Asset allocation',
    description: 'A brief article describing asset allocation with regards to investments.',
    url: '/investments/asset-allocation',
    keywords: ['asset allocation'],
    authored: '2022-02-05T00:00:00.000Z',
    lastUpdated: '2022-02-05T00:00:00.000Z',
  },
  [ROUTE_KEYS.BACKDOOR_ROTH_IRA]: {
    title: 'Backdoor Roth IRA',
    description: 'Performing a backdoor Roth IRA is a way for those who cannot directly contribute to a Roth IRA due to income limits to still get all the tax benefits of a Roth IRA contribution, but with a few extra steps/considerations.',
    url: '/tax-advantaged-accounts/ira/backdoor-roth-ira',
    keywords: ['Roth', 'IRA', 'backdoor Roth', 'backdoor Roth IRA', 'pro-rata taxation'],
    authored: '2022-02-11T00:00:00.000Z',
    lastUpdated: '2022-02-11T00:00:00.000Z',
  },
  [ROUTE_KEYS.CAPITAL_GAINS]: {
    title: 'Capital gains taxes',
    description: 'A very brief article describing capital gains taxes.',
    url: '/taxation/capital-gains',
    keywords: ['capital gains', 'taxes', 'long term capital gains', 'ltcg', 'short term capital gains', 'stcg', 'income'],
    authored: '2022-02-08T00:00:00.000Z',
    lastUpdated: '2022-02-08T00:00:00.000Z',
  },
  [ROUTE_KEYS.CHANGING_JOBS_401K]: {
    title: 'Changing jobs? 401k must-knows',
    description: 'Changing jobs and your tax picture is...well, a nightmare. Your 401k is among the most annoying aspect of job changes. This article will cover things to know about job changes and how it affects your 401ks',
    url: '/tax-advantaged-accounts/401k/changing-jobs',
    keywords: ['401k', 'changing jobs', 'roll over'],
    authored: '2022-04-15T00:00:00.000Z',
    lastUpdated: '2022-04-15T00:00:00.000Z',
  },
  [ROUTE_KEYS.CONTRIBUTION_TIMING]: {
    title: 'Contribution timing',
    description: "Timing when a lump sum of cash is added to investments can be very stressful decision. I'm here to help! This article outlines dollar cost averaging, lump sum, and front loading concepts.",
    url: '/investments/contribution-timing',
    keywords: ['dollar cost averaging', 'lump sum', 'front loading'],
    authored: '2022-02-09T00:00:00.000Z',
    lastUpdated: '2022-02-09T00:00:00.000Z',
  },
  [ROUTE_KEYS.DONATIONS]: {
    title: 'Donations',
    description: 'Donations can help your tax liability beyond just the deduction of the donation amount.',
    url: '/taxation/donations',
    keywords: ['donations', 'deductions', 'appreciated stock'],
    authored: '2022-02-09T00:00:00.000Z',
    lastUpdated: '2022-02-09T00:00:00.000Z',
  },
  [ROUTE_KEYS.DIVERSIFICATION]: {
    title: 'Diversification',
    description: 'A brief article describing diversification with regards to investments.',
    url: '/investments/diversification',
    keywords: ['diversification', 'investing', 'risk', 'returns'],
    authored: '2022-02-05T00:00:00.000Z',
    lastUpdated: '2022-02-05T00:00:00.000Z',
  },
  [ROUTE_KEYS.DRAWDOWN]: {
    title: 'Retirement drawdown strategy',
    description: 'Saving for retirement is pretty easy...deciding how to use those savings is not. In this article, I try to point out why it is complicated, and provide some generalizations of how to withdraw from said accounts.',
    url: '/general/drawdown',
    keywords: ['retirement', 'drawdown', 'spending', 'Roth', 'traditional', 'savings'],
    authored: '2022-07-31T00:00:00.000Z',
    lastUpdated: '2022-07-31T00:00:00.000Z',
  },
  [ROUTE_KEYS.EMERGENCY_FUNDS]: {
    title: 'Emergency funds',
    description: "Life is unpredictable, an emergency fund can help prevent life's financial unpredictability.",
    url: '/general/emergency-funds',
    keywords: ['emergency', 'preparedness', 'emergency fund', 'unexpected costs'],
    authored: '2022-02-11T00:00:00.000Z',
    lastUpdated: '2022-02-11T00:00:00.000Z',
  },
  [ROUTE_KEYS.EQUITY_COMPENSATION]: {
    title: 'Equity compensation',
    description: 'A short read with regards to being compensated via equity, such as RSUs or options.',
    url: '/equity-compensation',
    keywords: ['equity compensation', 'equity', 'rsus', 'options', 'compensation'],
    authored: '2022-02-05T00:00:00.000Z',
    lastUpdated: '2022-02-05T00:00:00.000Z',
  },
  [ROUTE_KEYS.ESPP]: {
    title: 'Employee Stock Purchasing Plan (ESPP)',
    description: 'Employers may offer employee stock purchasing programs as a means of incentivizing employees. These plans are generally ridiculously beneficial!',
    url: '/equity-compensation/espp',
    keywords: ['employee stock purchasing plan', 'equity', 'espp'],
    authored: '2022-02-22T00:00:00.000Z',
    lastUpdated: '2022-02-22T00:00:00.000Z',
  },
  [ROUTE_KEYS.FILING_YOUR_TAXES]: {
    title: 'Filing your taxes',
    description: 'I pontificate with regards to tax filing software.',
    url: '/taxation/filing-your-taxes',
    keywords: ['H&R block', 'turbotax', 'congress', 'taxes', 'filing'],
    authored: '2022-02-09T00:00:00.000Z',
    lastUpdated: '2022-02-09T00:00:00.000Z',
  },
  [ROUTE_KEYS.FIVE_TWENTY_NINE]: {
    title: '529',
    description: "A 529 is a tax advantaged account that can be leveraged for current or future education expenses. They are largely seen as an investment vehicle for children's education.",
    url: '/tax-advantaged-accounts/529',
    keywords: ['529', 'education', 'college', 'expenses', 'tax savings'],
    authored: '2022-02-10T00:00:00.000Z',
    lastUpdated: '2022-02-10T00:00:00.000Z',
  },
  [ROUTE_KEYS.FSA]: {
    title: 'Flexible Savings Account',
    description: 'Flexible savings accounts are use it or lose it accounts that give tax advantages to cover certain known costs like transportation and medical expenses.',
    url: '/tax-advantaged-accounts/fsa',
    keywords: ['flexible savings account', 'fsa', 'limited purpose', 'commuter', 'dependent care'],
    authored: '2022-02-10T00:00:00.000Z',
    lastUpdated: '2022-02-10T00:00:00.000Z',
  },
  [ROUTE_KEYS.HOME]: {
    title: 'Home',
    description: 'Welcome to FIcarious! This is a site dedicated to teaching about financial independence with helpful tools and articles about the subject.',
    url: '/',
    keywords: ['Finances', 'Financial Independence', 'FIRE', 'retirement', 'investing'],
    authored: '2020-12-20T00:00:00.000Z',
    lastUpdated: '2022-03-06T00:00:00.000Z',
  },
  [ROUTE_KEYS.HSA]: {
    title: 'Health Savings Account',
    description: 'Health savings accounts are a great method of saving for medical expenses, providing pre-tax funds to reimburse medical expenses incurred while on an HDHP. This article also covers how it is a potentially great retirement vehicle, as well!',
    url: '/tax-advantaged-accounts/hsa',
    keywords: ['health savings account', 'hsa', 'medical expenses'],
    authored: '2022-02-11T00:00:00.000Z',
    lastUpdated: '2022-02-11T00:00:00.000Z',
  },
  [ROUTE_KEYS.I_BONDS]: {
    title: 'I-Bonds',
    description: 'I-Bonds are a government issued & backed bond that offers inflation protection.',
    url: '/general/i-bonds',
    keywords: ['i-bonds', 'treasury', 'inflation', 'savings'],
    authored: '2022-02-11T00:00:00.000Z',
    lastUpdated: '2022-06-16T00:00:00.000Z',
  },
  [ROUTE_KEYS.IRA]: {
    title: 'Individual Retirement Account',
    description: 'Individual retirement accounts are one of the most accessible tax advantaged accounts made available to us. They offer substantial flexibility and tax benefits',
    url: '/tax-advantaged-accounts/ira',
    keywords: ['IRA', 'Roth IRA', 'Traditional IRA', 'Individual Retirement Account'],
    authored: '2022-02-11T00:00:00.000Z',
    lastUpdated: '2022-02-11T00:00:00.000Z',
  },
  [ROUTE_KEYS.JOB_OFFER_EVALUATION]: {
    title: 'Evaluating a job offer',
    description: 'Congratulations on your offer! Let me help you think about how to evaluate one (or many!) offers. There are a lot of factors involved, so it is important to consider how to value each!',
    url: '/general/job-offer-evaluation',
    keywords: ['Job offers', 'evaluating', 'total compensation', 'equity compensation'],
    authored: '2022-03-06T00:00:00.000Z',
    lastUpdated: '2022-03-06T00:00:00.000Z',
  },
  [ROUTE_KEYS.MEGABACKDOOR_ROTH]: {
    title: 'Megabackdoor Roth',
    description: 'Learn about the advantages of a megabackdoor Roth, calculate how much more Roth you can get out of your 401k per year, and calculate what your paycheck withholdings should look like to maximize it.',
    url: '/tax-advantaged-accounts/401k/megabackdoor-roth',
    keywords: ['Megabackdoor Roth', 'Roth', '401k', 'IRA', 'Tax advantaged'],
    authored: '2020-12-28T00:00:00.000Z',
    lastUpdated: '2022-02-09T00:00:00.000Z',
  },
  [ROUTE_KEYS.NAVIGATE]: {
    title: 'Navigate this site',
    description: 'There is a lot of information on this site and people in different stages of their finances. This page may help finding the right info at the right time easier!',
    url: '/navigate',
    authored: '2022-08-07T00:00.000Z',
    lastUpdated: '2022-08-07T00:00.000Z',
  },
  [ROUTE_KEYS.NET_PROCEEDS]: {
    title: 'Net RSU grant proceeds',
    description: 'A calculator for determining how much your net proceeds should be for an RSU grant. Simply enter your company stock ticker, fill out the subsequent share form, and find out how much to expect after taxes are paid!',
    url: '/equity-compensation/net-proceeds',
    keywords: ['rsus', 'equity', 'grant', 'taxes', 'net proceeds'],
    authored: '2020-12-26T00:00:00.000Z',
    lastUpdated: '2020-12-26T00:00:00.000Z',
  },
  [ROUTE_KEYS.REBALANCING]: {
    title: 'Rebalancing',
    description: 'A brief article describing the act of rebalancing investments.',
    url: '/investments/rebalancing',
    keywords: ['rebalancing', 'diversification', 'rebalance'],
    authored: '2022-02-05T00:00:00.000Z',
    lastUpdated: '2022-02-05T00:00:00.000Z',
  },
  [ROUTE_KEYS.RESOURCES]: {
    title: 'Resources',
    description: 'A brief list of resources collected over the years.',
    url: '/resources',
    keywords: ['financial resources', 'personal finance', 'financial independence', 'savings'],
    authored: '2022-02-10T00:00:00.000Z',
    lastUpdated: '2022-02-10T00:00:00.000Z',
  },
  [ROUTE_KEYS.ROTH_TRAD_AT]: {
    title: 'Roth, traditional, after tax?',
    description: 'An article discussing tax optimizations for investments, highlighting how to leverage tax treatments and investment vehicles to minimize taxation.',
    url: '/taxation/roth-trad-after-tax',
    keywords: ['roth', 'traditional', 'after tax', '401k', 'IRA'],
    authored: '2022-02-05T00:00:00.000Z',
    lastUpdated: '2022-02-05T00:00:00.000Z',
  },
  [ROUTE_KEYS.RSU_V_OPTIONS]: {
    title: 'RSUs vs Options',
    description: 'A calculator to help determine if you should take options, RSUs, or both',
    url: '/equity-compensation/rsu-vs-options',
    keywords: ['rsus', 'options', 'compensation', 'stock', 'equity'],
    authored: '2020-12-28T00:00:00.000Z',
    lastUpdated: '2022-02-05T00:00:00.000Z',
  },
  [ROUTE_KEYS.TAX_HARVESTING]: {
    title: 'Tax harvesting',
    description: 'An article detailing the act of selling investments to capture losses or gains at advantageous times to lower tax liabilities.',
    url: '/taxation/tax-harvesting',
    keywords: ['tax loss harvesting', 'tax gain harvesting', 'cost basis', 'wash sale'],
    authored: '2022-02-08T00:00:00.000Z',
    lastUpdated: '2022-02-09T00:00:00.000Z',
  },
  [ROUTE_KEYS.TAX_OPTIMIZATIONS]: {
    title: 'Tax optimizations',
    description: 'An article discussing tax optimizations for investments, highlighting how to leverage tax treatments and investment vehicles to minimize taxation.',
    url: '/taxation/optimizations',
    keywords: ['tax optimization', 'decrease taxes'],
    authored: '2022-02-05T00:00:00.000Z',
    lastUpdated: '2022-02-05T00:00:00.000Z',
  },
  [ROUTE_KEYS.TECH]: {
    title: 'Tech',
    description: 'This project is was a tech playground for my continued learning and has evolved to become my blog post hosting platform!',
    url: '/tech',
    keywords: ['react', 'nextjs', 'vercel', 'chakra ui', 'react hook form'],
    authored: '2022-02-28T00:00:00.000Z',
    lastUpdated: '2022-02-28T00:00:00.000Z',
  },
  [ROUTE_KEYS.TRUE_UP_CONTRIBUTIONS]: {
    title: 'True up contributions',
    description: 'A true up contribution is an employer rectifying employer contributions that may have been earned.',
    url: '/tax-advantaged-accounts/401k/true-up-contributions',
    keywords: ['true-up', 'employee match', 'front loading', '401k'],
    authored: '2022-02-09T00:00:00.000Z',
    lastUpdated: '2022-02-09T00:00:00.000Z',
  },
  [ROUTE_KEYS.SHORT_V_LONG_TERM_SAVINGS]: {
    title: 'Short vs long term savings',
    description: 'Do you have savings goals? How long is the timeline? What is your risk tolerance? What should you do!? This article will help provide some pointers!',
    url: '/general/short-v-long-term-savings',
    keywords: ['savings', 'goals', 'home buying', 'short term', 'long term'],
    authored: '2022-02-10T00:00:00.000Z',
    lastUpdated: '2022-02-10T00:00:00.000Z',
  },
};
type MappedRoutes = { ROUTES: Record<string, string>, ROUTE_NAMES: Record<string, string>};
const { ROUTES, ROUTE_NAMES } = <MappedRoutes>Object.values(ROUTE_KEYS).reduce((acc, key) => ({
  ROUTES: {
    ...acc.ROUTES,
    [key]: PAGE_METADATA[key].url,
  },
  ROUTE_NAMES: {
    ...acc.ROUTE_NAMES,
    [key]: PAGE_METADATA[key].title,
  },
}), {
  ROUTES: {},
  ROUTE_NAMES: {},
});
export { ROUTES, ROUTE_NAMES };
export const CATEGORY_LOOKUP = {
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
type Category = {
  label: string,
  routes: string[],
  topLevel?: string
  categories?: string[]
}
const TAXATION: Category = {
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
const FOUR_OH_ONE_K: Category = {
  label: '401(k)',
  topLevel: ROUTE_KEYS['401K'],
  routes: [
    ROUTE_KEYS.CHANGING_JOBS_401K,
    ROUTE_KEYS.MEGABACKDOOR_ROTH,
    ROUTE_KEYS.TRUE_UP_CONTRIBUTIONS,
  ],
};
const IRA: Category = {
  label: 'Individual Retirement Account',
  topLevel: ROUTE_KEYS.IRA,
  routes: [
    ROUTE_KEYS.BACKDOOR_ROTH_IRA,
  ],
};
const EQUITY_COMPENSATION: Category = {
  label: 'Equity compensation',
  topLevel: ROUTE_KEYS.EQUITY_COMPENSATION,
  routes: [
    ROUTE_KEYS.RSU_V_OPTIONS,
    ROUTE_KEYS.NET_PROCEEDS,
    ROUTE_KEYS.ESPP,
  ],
};
const INVESTMENTS: Category = {
  label: 'Investments',
  routes: [
    ROUTE_KEYS.ASSET_ALLOCATION,
    ROUTE_KEYS.DIVERSIFICATION,
    ROUTE_KEYS.REBALANCING,
    ROUTE_KEYS.CONTRIBUTION_TIMING,
  ],
};
const GENERAL_FINANCE: Category = {
  label: 'General finance',
  routes: [
    ROUTE_KEYS.JOB_OFFER_EVALUATION,
    ROUTE_KEYS.EMERGENCY_FUNDS,
    ROUTE_KEYS.SHORT_V_LONG_TERM_SAVINGS,
    ROUTE_KEYS.I_BONDS,
    ROUTE_KEYS.FIVE_TWENTY_NINE,
    ROUTE_KEYS.DRAWDOWN,
  ],
};
const TAX_ADVANTAGED_ACCOUNTS: Category = {
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

export const CATEGORIES: Record<string, Category> = {
  [CATEGORY_LOOKUP['401_K']]: FOUR_OH_ONE_K,
  [CATEGORY_LOOKUP.EQUITY_COMPENSATION]: EQUITY_COMPENSATION,
  [CATEGORY_LOOKUP.GENERAL_FINANCE]: GENERAL_FINANCE,
  [CATEGORY_LOOKUP.INVESTMENTS]: INVESTMENTS,
  [CATEGORY_LOOKUP.IRA]: IRA,
  [CATEGORY_LOOKUP.TAX_ADVANTAGED_ACCOUNTS]: TAX_ADVANTAGED_ACCOUNTS,
  [CATEGORY_LOOKUP.TAXATION]: TAXATION,
};
export const NAVIGATION_HIERARCHY = {
  [CATEGORY_LOOKUP.EQUITY_COMPENSATION]: CATEGORIES[CATEGORY_LOOKUP.EQUITY_COMPENSATION],
  [CATEGORY_LOOKUP.TAX_ADVANTAGED_ACCOUNTS]: CATEGORIES[CATEGORY_LOOKUP.TAX_ADVANTAGED_ACCOUNTS],
  [CATEGORY_LOOKUP.GENERAL_FINANCE]: CATEGORIES[CATEGORY_LOOKUP.GENERAL_FINANCE],
  [CATEGORY_LOOKUP.TAXATION]: CATEGORIES[CATEGORY_LOOKUP.TAXATION],
  [CATEGORY_LOOKUP.INVESTMENTS]: CATEGORIES[CATEGORY_LOOKUP.INVESTMENTS],
};

const EXCLUDE = new Set([PAGE_METADATA[ROUTE_KEYS.HOME].url, PAGE_METADATA[ROUTE_KEYS.NAVIGATE].url]);
const getRecentByKey = (key: 'lastUpdated' | 'authored'): Page[] => Object.values(PAGE_METADATA)
  .filter(({ url }) => !EXCLUDE.has(url))
  .sort((a, b) => (new Date(a[key]).getTime() < new Date(b[key]).getTime() ? 1 : -1));
export const RECENT_BY_LAST_UPDATED = getRecentByKey('lastUpdated');
export const RECENT_BY_LAST_AUTHORED = getRecentByKey('authored');
