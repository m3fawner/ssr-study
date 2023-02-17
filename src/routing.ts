import { Page } from './components/page-lists/types';

export type Route = '401K' | 'ASSET_ALLOCATION' | 'BACKDOOR_ROTH_IRA' | 'CAPITAL_GAINS' | 'CHANGING_JOBS_401K' | 'CONTRIBUTION_TIMING' | 'DONATIONS' | 'DIVERSIFICATION' | 'DRAWDOWN' | 'EMERGENCY_FUNDS' | 'EQUITY_COMPENSATION' | 'ESPP' | 'FILING_YOUR_TAXES' | 'FIVE_TWENTY_NINE' | 'FSA' | 'HOME' | 'HSA' | 'I_BONDS' | 'IRA' | 'JOB_OFFER_EVALUATION' | 'MEGABACKDOOR_ROTH' | 'NAVIGATE' | 'NET_PROCEEDS' | 'REBALANCING' | 'RESOURCES' | 'ROTH_TRAD_AT' | 'RSU_V_OPTIONS' | 'TAX_HARVESTING' | 'TAX_OPTIMIZATIONS' | 'TECH' | 'TRUE_UP_CONTRIBUTIONS' | 'SHORT_V_LONG_TERM_SAVINGS' | 'WHERE_SHOULD_MY_MONEY_GO';
export const PAGE_METADATA: Record<Route, Page> = {
  '401K': {
    title: '401k',
    description: 'An introduction to 401(k)s, a tax-advantaged account.',
    url: '/tax-advantaged-accounts/401k',
    keywords: ['401k', 'retirement', 'employee sponsored plan', 'investing'],
    authored: '2022-02-09T00:00:00.000Z',
    lastUpdated: '2023-02-16T00:00:00.000Z',
  },
  ASSET_ALLOCATION: {
    title: 'Asset allocation',
    description: 'A brief article describing asset allocation with regards to investments.',
    url: '/investments/asset-allocation',
    keywords: ['asset allocation'],
    authored: '2022-02-05T00:00:00.000Z',
    lastUpdated: '2022-02-05T00:00:00.000Z',
  },
  BACKDOOR_ROTH_IRA: {
    title: 'Backdoor Roth IRA',
    description: 'Performing a backdoor Roth IRA is a way for those who cannot directly contribute to a Roth IRA due to income limits to still get all the tax benefits of a Roth IRA contribution, but with a few extra steps/considerations.',
    url: '/tax-advantaged-accounts/ira/backdoor-roth-ira',
    keywords: ['Roth', 'IRA', 'backdoor Roth', 'backdoor Roth IRA', 'pro-rata taxation'],
    authored: '2022-02-11T00:00:00.000Z',
    lastUpdated: '2022-02-11T00:00:00.000Z',
  },
  CAPITAL_GAINS: {
    title: 'Capital gains taxes',
    description: 'A very brief article describing capital gains taxes.',
    url: '/taxation/capital-gains',
    keywords: ['capital gains', 'taxes', 'long term capital gains', 'ltcg', 'short term capital gains', 'stcg', 'income'],
    authored: '2022-02-08T00:00:00.000Z',
    lastUpdated: '2023-02-16T00:00:00.000Z',
  },
  CHANGING_JOBS_401K: {
    title: 'Changing jobs? 401k must-knows',
    description: 'Changing jobs and your tax picture is...well, a nightmare. Your 401k is among the most annoying aspect of job changes. This article will cover things to know about job changes and how it affects your 401ks',
    url: '/tax-advantaged-accounts/401k/changing-jobs',
    keywords: ['401k', 'changing jobs', 'roll over'],
    authored: '2022-04-15T00:00:00.000Z',
    lastUpdated: '2022-04-15T00:00:00.000Z',
  },
  CONTRIBUTION_TIMING: {
    title: 'Contribution timing',
    description: "Timing when a lump sum of cash is added to investments can be very stressful decision. I'm here to help! This article outlines dollar cost averaging, lump sum, and front loading concepts.",
    url: '/investments/contribution-timing',
    keywords: ['dollar cost averaging', 'lump sum', 'front loading'],
    authored: '2022-02-09T00:00:00.000Z',
    lastUpdated: '2022-02-09T00:00:00.000Z',
  },
  DONATIONS: {
    title: 'Donations',
    description: 'Donations can help your tax liability beyond just the deduction of the donation amount.',
    url: '/taxation/donations',
    keywords: ['donations', 'deductions', 'appreciated stock'],
    authored: '2022-02-09T00:00:00.000Z',
    lastUpdated: '2022-02-09T00:00:00.000Z',
  },
  DIVERSIFICATION: {
    title: 'Diversification',
    description: 'A brief article describing diversification with regards to investments.',
    url: '/investments/diversification',
    keywords: ['diversification', 'investing', 'risk', 'returns'],
    authored: '2022-02-05T00:00:00.000Z',
    lastUpdated: '2022-02-05T00:00:00.000Z',
  },
  DRAWDOWN: {
    title: 'Retirement drawdown strategy',
    description: 'Saving for retirement is pretty easy...deciding how to use those savings is not. In this article, I try to point out why it is complicated, and provide some generalizations of how to withdraw from said accounts.',
    url: '/general/drawdown',
    keywords: ['retirement', 'drawdown', 'spending', 'Roth', 'traditional', 'savings'],
    authored: '2022-07-31T00:00:00.000Z',
    lastUpdated: '2023-02-16T00:00:00.000Z',
  },
  EMERGENCY_FUNDS: {
    title: 'Emergency funds',
    description: "Life is unpredictable, an emergency fund can help prevent life's financial unpredictability.",
    url: '/general/emergency-funds',
    keywords: ['emergency', 'preparedness', 'emergency fund', 'unexpected costs'],
    authored: '2022-02-11T00:00:00.000Z',
    lastUpdated: '2022-02-11T00:00:00.000Z',
  },
  EQUITY_COMPENSATION: {
    title: 'Equity compensation',
    description: 'A short read with regards to being compensated via equity, such as RSUs or options.',
    url: '/equity-compensation',
    keywords: ['equity compensation', 'equity', 'rsus', 'options', 'compensation'],
    authored: '2022-02-05T00:00:00.000Z',
    lastUpdated: '2022-02-05T00:00:00.000Z',
  },
  ESPP: {
    title: 'Employee Stock Purchasing Plan (ESPP)',
    description: 'Employers may offer employee stock purchasing programs as a means of incentivizing employees. These plans are generally ridiculously beneficial!',
    url: '/equity-compensation/espp',
    keywords: ['employee stock purchasing plan', 'equity', 'espp'],
    authored: '2022-02-22T00:00:00.000Z',
    lastUpdated: '2022-02-22T00:00:00.000Z',
  },
  FILING_YOUR_TAXES: {
    title: 'Filing your taxes',
    description: 'I pontificate with regards to tax filing software.',
    url: '/taxation/filing-your-taxes',
    keywords: ['H&R block', 'turbotax', 'congress', 'taxes', 'filing'],
    authored: '2022-02-09T00:00:00.000Z',
    lastUpdated: '2022-02-09T00:00:00.000Z',
  },
  FIVE_TWENTY_NINE: {
    title: '529',
    description: "A 529 is a tax advantaged account that can be leveraged for current or future education expenses. They are largely seen as an investment vehicle for children's education.",
    url: '/tax-advantaged-accounts/529',
    keywords: ['529', 'education', 'college', 'expenses', 'tax savings'],
    authored: '2022-02-10T00:00:00.000Z',
    lastUpdated: '2022-02-10T00:00:00.000Z',
  },
  FSA: {
    title: 'Flexible Savings Account',
    description: 'Flexible savings accounts are use it or lose it accounts that give tax advantages to cover certain known costs like transportation and medical expenses.',
    url: '/tax-advantaged-accounts/fsa',
    keywords: ['flexible savings account', 'fsa', 'limited purpose', 'commuter', 'dependent care'],
    authored: '2022-02-10T00:00:00.000Z',
    lastUpdated: '2023-02-16T00:00:00.000Z',
  },
  HOME: {
    title: 'Home',
    description: 'Welcome to FIcarious! This is a site dedicated to teaching about financial independence with helpful tools and articles about the subject.',
    url: '/',
    keywords: ['Finances', 'Financial Independence', 'FIRE', 'retirement', 'investing'],
    authored: '2020-12-20T00:00:00.000Z',
    lastUpdated: '2022-03-06T00:00:00.000Z',
  },
  HSA: {
    title: 'Health Savings Account',
    description: 'Health savings accounts are a great method of saving for medical expenses, providing pre-tax funds to reimburse medical expenses incurred while on an HDHP. This article also covers how it is a potentially great retirement vehicle, as well!',
    url: '/tax-advantaged-accounts/hsa',
    keywords: ['health savings account', 'hsa', 'medical expenses'],
    authored: '2022-02-11T00:00:00.000Z',
    lastUpdated: '2023-02-16T00:00:00.000Z',
  },
  I_BONDS: {
    title: 'I-Bonds',
    description: 'I-Bonds are a government issued & backed bond that offers inflation protection.',
    url: '/general/i-bonds',
    keywords: ['i-bonds', 'treasury', 'inflation', 'savings'],
    authored: '2022-02-11T00:00:00.000Z',
    lastUpdated: '2023-02-16T00:00:00.000Z',
  },
  IRA: {
    title: 'Individual Retirement Account',
    description: 'Individual retirement accounts are one of the most accessible tax advantaged accounts made available to us. They offer substantial flexibility and tax benefits',
    url: '/tax-advantaged-accounts/ira',
    keywords: ['IRA', 'Roth IRA', 'Traditional IRA', 'Individual Retirement Account'],
    authored: '2022-02-11T00:00:00.000Z',
    lastUpdated: '2023-02-16T00:00:00.000Z',
  },
  JOB_OFFER_EVALUATION: {
    title: 'Evaluating a job offer',
    description: 'Congratulations on your offer! Let me help you think about how to evaluate one (or many!) offers. There are a lot of factors involved, so it is important to consider how to value each!',
    url: '/general/job-offer-evaluation',
    keywords: ['Job offers', 'evaluating', 'total compensation', 'equity compensation'],
    authored: '2022-03-06T00:00:00.000Z',
    lastUpdated: '2022-03-06T00:00:00.000Z',
  },
  MEGABACKDOOR_ROTH: {
    title: 'Megabackdoor Roth',
    description: 'Learn about the advantages of a megabackdoor Roth, calculate how much more Roth you can get out of your 401k per year, and calculate what your paycheck withholdings should look like to maximize it.',
    url: '/tax-advantaged-accounts/401k/megabackdoor-roth',
    keywords: ['Megabackdoor Roth', 'Roth', '401k', 'IRA', 'Tax advantaged'],
    authored: '2020-12-28T00:00:00.000Z',
    lastUpdated: '2023-02-16T00:00:00.000Z',
  },
  NAVIGATE: {
    title: 'Navigate this site',
    description: 'There is a lot of information on this site and people in different stages of their finances. This page may help finding the right info at the right time easier!',
    url: '/navigate',
    authored: '2022-08-07T00:00.000Z',
    lastUpdated: '2022-08-07T00:00.000Z',
  },
  NET_PROCEEDS: {
    title: 'Net RSU grant proceeds',
    description: 'A calculator for determining how much your net proceeds should be for an RSU grant. Simply enter your company stock ticker, fill out the subsequent share form, and find out how much to expect after taxes are paid!',
    url: '/equity-compensation/net-proceeds',
    keywords: ['rsus', 'equity', 'grant', 'taxes', 'net proceeds'],
    authored: '2020-12-26T00:00:00.000Z',
    lastUpdated: '2023-02-16T00:00:00.000Z',
  },
  REBALANCING: {
    title: 'Rebalancing',
    description: 'A brief article describing the act of rebalancing investments.',
    url: '/investments/rebalancing',
    keywords: ['rebalancing', 'diversification', 'rebalance'],
    authored: '2022-02-05T00:00:00.000Z',
    lastUpdated: '2022-02-05T00:00:00.000Z',
  },
  RESOURCES: {
    title: 'Resources',
    description: 'A brief list of resources collected over the years.',
    url: '/resources',
    keywords: ['financial resources', 'personal finance', 'financial independence', 'savings'],
    authored: '2022-02-10T00:00:00.000Z',
    lastUpdated: '2022-02-10T00:00:00.000Z',
  },
  ROTH_TRAD_AT: {
    title: 'Roth, traditional, after tax?',
    description: 'An article discussing tax optimizations for investments, highlighting how to leverage tax treatments and investment vehicles to minimize taxation.',
    url: '/taxation/roth-trad-after-tax',
    keywords: ['roth', 'traditional', 'after tax', '401k', 'IRA'],
    authored: '2022-02-05T00:00:00.000Z',
    lastUpdated: '2022-02-05T00:00:00.000Z',
  },
  RSU_V_OPTIONS: {
    title: 'RSUs vs Options',
    description: 'A calculator to help determine if you should take options, RSUs, or both',
    url: '/equity-compensation/rsu-vs-options',
    keywords: ['rsus', 'options', 'compensation', 'stock', 'equity'],
    authored: '2020-12-28T00:00:00.000Z',
    lastUpdated: '2022-02-05T00:00:00.000Z',
  },
  TAX_HARVESTING: {
    title: 'Tax harvesting',
    description: 'An article detailing the act of selling investments to capture losses or gains at advantageous times to lower tax liabilities.',
    url: '/taxation/tax-harvesting',
    keywords: ['tax loss harvesting', 'tax gain harvesting', 'cost basis', 'wash sale'],
    authored: '2022-02-08T00:00:00.000Z',
    lastUpdated: '2022-02-09T00:00:00.000Z',
  },
  TAX_OPTIMIZATIONS: {
    title: 'Tax optimizations',
    description: 'An article discussing tax optimizations for investments, highlighting how to leverage tax treatments and investment vehicles to minimize taxation.',
    url: '/taxation/optimizations',
    keywords: ['tax optimization', 'decrease taxes'],
    authored: '2022-02-05T00:00:00.000Z',
    lastUpdated: '2022-02-05T00:00:00.000Z',
  },
  TECH: {
    title: 'Tech',
    description: 'This project is was a tech playground for my continued learning and has evolved to become my blog post hosting platform!',
    url: '/tech',
    keywords: ['react', 'nextjs', 'vercel', 'chakra ui', 'react hook form'],
    authored: '2022-02-28T00:00:00.000Z',
    lastUpdated: '2022-02-28T00:00:00.000Z',
  },
  TRUE_UP_CONTRIBUTIONS: {
    title: 'True up contributions',
    description: 'A true up contribution is an employer rectifying employer contributions that may have been earned.',
    url: '/tax-advantaged-accounts/401k/true-up-contributions',
    keywords: ['true-up', 'employee match', 'front loading', '401k'],
    authored: '2022-02-09T00:00:00.000Z',
    lastUpdated: '2022-02-09T00:00:00.000Z',
  },
  SHORT_V_LONG_TERM_SAVINGS: {
    title: 'Short vs long term savings',
    description: 'Do you have savings goals? How long is the timeline? What is your risk tolerance? What should you do!? This article will help provide some pointers!',
    url: '/general/short-v-long-term-savings',
    keywords: ['savings', 'goals', 'home buying', 'short term', 'long term'],
    authored: '2022-02-10T00:00:00.000Z',
    lastUpdated: '2022-02-10T00:00:00.000Z',
  },
  WHERE_SHOULD_MY_MONEY_GO: {
    title: 'Where should my money go?',
    description: 'Learning how to be optimal in your finances is a long journey. One of the basic questions is "where should I save my money?" It is a windy road of options, some better than others. This article introduces a great external resource, then adds some nuance to it & advanced directives at the end!',
    url: '/general/where-should-my-money-go',
    keywords: ['savings', 'home buying', 'prime directive'],
    authored: '2022-08-10T00:00:00.000Z',
    lastUpdated: '2022-08-10T00:00:00.000Z',
  },
} as const;
type MappedRoutes = { ROUTES: Record<Route, string>, ROUTE_NAMES: Record<Route, string>};
const { ROUTES, ROUTE_NAMES } = <MappedRoutes>(Object.keys(PAGE_METADATA) as Route[]).reduce((acc, key) => ({
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

export type CategoryKey = '401K' | 'EQUITY_COMPENSATION' | 'FSA' | 'GENERAL_FINANCE' | 'HSA' | 'INVESTMENTS' | 'IRA' | 'TAX_ADVANTAGED_ACCOUNTS' | 'TAXATION';
export interface Category {
  label: string,
  routes: Route[],
  topLevel?: Route,
  categories?: CategoryKey[]
}
const TAXATION: Category = {
  label: 'Taxation',
  routes: [
    'CAPITAL_GAINS',
    'TAX_OPTIMIZATIONS',
    'ROTH_TRAD_AT',
    'TAX_HARVESTING',
    'DONATIONS',
    'FILING_YOUR_TAXES',
  ],
};
const FOUR_OH_ONE_K: Category = {
  label: '401(k)',
  topLevel: '401K',
  routes: [
    'CHANGING_JOBS_401K',
    'MEGABACKDOOR_ROTH',
    'TRUE_UP_CONTRIBUTIONS',
  ],
};
const IRA: Category = {
  label: 'Individual Retirement Account',
  topLevel: 'IRA',
  routes: [
    'BACKDOOR_ROTH_IRA',
  ],
};
const EQUITY_COMPENSATION: Category = {
  label: 'Equity compensation',
  topLevel: 'EQUITY_COMPENSATION',
  routes: [
    'RSU_V_OPTIONS',
    'NET_PROCEEDS',
    'ESPP',
  ],
};
const INVESTMENTS: Category = {
  label: 'Investments',
  routes: [
    'ASSET_ALLOCATION',
    'DIVERSIFICATION',
    'REBALANCING',
    'CONTRIBUTION_TIMING',
  ],
};
const GENERAL_FINANCE: Category = {
  label: 'General finance',
  routes: [
    'WHERE_SHOULD_MY_MONEY_GO',
    'JOB_OFFER_EVALUATION',
    'EMERGENCY_FUNDS',
    'SHORT_V_LONG_TERM_SAVINGS',
    'I_BONDS',
    'FIVE_TWENTY_NINE',
    'DRAWDOWN',
  ],
};
const TAX_ADVANTAGED_ACCOUNTS: Category = {
  label: 'Tax advantaged accounts',
  categories: [
    '401K',
    'IRA',
  ],
  routes: [
    'HSA',
    'FSA',
  ],
};

export const CATEGORIES: Partial<Record<CategoryKey, Category>> = {
  '401K': FOUR_OH_ONE_K,
  EQUITY_COMPENSATION,
  GENERAL_FINANCE,
  INVESTMENTS,
  IRA,
  TAX_ADVANTAGED_ACCOUNTS,
  TAXATION,
};
export const NAVIGATION_HIERARCHY: Partial<Record<CategoryKey, Category>> = {
  EQUITY_COMPENSATION: CATEGORIES.EQUITY_COMPENSATION,
  TAX_ADVANTAGED_ACCOUNTS: CATEGORIES.TAX_ADVANTAGED_ACCOUNTS,
  GENERAL_FINANCE: CATEGORIES.GENERAL_FINANCE,
  TAXATION: CATEGORIES.TAXATION,
  INVESTMENTS: CATEGORIES.INVESTMENTS,
};

const EXCLUDE: Set<string> = new Set([PAGE_METADATA.HOME.url, PAGE_METADATA.NAVIGATE.url]);
const getRecentByKey = (key: 'lastUpdated' | 'authored'): Page[] => Object.values(PAGE_METADATA)
  .filter(({ url }) => !EXCLUDE.has(url))
  .sort((a, b) => (new Date(a[key]).getTime() < new Date(b[key]).getTime() ? 1 : -1));
export const RECENT_BY_LAST_UPDATED = getRecentByKey('lastUpdated');
export const RECENT_BY_LAST_AUTHORED = getRecentByKey('authored');
