import {
  Link, StyleProps, Text, UnorderedList, ListItem,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { PAGE_METADATA, Route } from '../../../routing';

type PageLinkProps = { pageKey: Route } & StyleProps;
const PageLink = ({ pageKey, ...props }: PageLinkProps) => <Link {...props} href={PAGE_METADATA[pageKey].url} color="brand.800">{PAGE_METADATA[pageKey].title}</Link>;

type PageLinkWithDescriptionProps = { description: ReactNode } & PageLinkProps;
const PageLinkWithDescription = ({ description, pageKey }: PageLinkWithDescriptionProps) => (
  <>
    <PageLink pageKey={pageKey} />
    <Text display="inline">
      {' '}
      -
      {' '}
    </Text>
    <Text display="inline">{description}</Text>
  </>
);

type TopicList = Partial<Record<Route, ReactNode>>;
const BEGINNER_TOPICS: TopicList = {
  EMERGENCY_FUNDS: 'Start here! Emergency funds help avoid high interest loans necessary to cover unforeseen circumstances. They are an important part of savings!',
  SHORT_V_LONG_TERM_SAVINGS: "It is important to know where to put your money, but before you can do that, you should also think about when you'll need that money!",
  WHERE_SHOULD_MY_MONEY_GO: 'This borders advanced & introductory. I would recommend looking at the prime directive section, get an understanding of that, apply it to your situation, and move on to other topics here; returning later when the rest of the article may be applicable!',
  IRA: 'IRAs are accessible to all folks, and it is a great savings vehicle to start with!',
  ROTH_TRAD_AT: 'When looking into IRAs, you will want to know about the tax treatments and what they mean in order to make the right decision.',
  '401K': 'A 401k is an example of a company sponsored tax advantaged account. This will be similar for other accounts like 457, 403, TSP, and others. It is a pretty common retirement account.',
  HSA: 'Health savings accounts may be accessible and help offset medical expenses if applicable to your health plan.',
  FSA: 'Flex savings accounts are another type of account that can decrease taxes for common expenses (dependent care, health expenses, and travel expenses)',
  I_BONDS: 'I-bonds are a type of government backed investment that are inflation adjusted and can be useful for savings goals.',
  FIVE_TWENTY_NINE: '529s are education expense accounts, useful both for you and others you may want to help fund educational pursuits for!',
};
const INVESTMENT_ROUTES: Route[] = ['ASSET_ALLOCATION',
  'REBALANCING',
  'DIVERSIFICATION',
  'CAPITAL_GAINS',
  'CONTRIBUTION_TIMING'];
const INVESTMENT_TOPICS: TopicList = INVESTMENT_ROUTES.reduce((acc, key) => ({
  ...acc,
  [key]: PAGE_METADATA[key].description,
}), {});
const TECH_TOPICS: TopicList = {
  EQUITY_COMPENSATION: 'Start here! This is your basic introduction to equity compensation.',
  RSU_V_OPTIONS: 'Some companies offer the choice for options or RSUs, this page can help visualize what that may look like for your situation.',
  NET_PROCEEDS: 'The net proceeds calculator helps get an idea of what a grant may look like in terms of tax picture and take home pay',
  ESPP: 'Employee stock purchase programs are a benefit offered to some allowing employees to purchase more equity at a discount',
};
const ADVANCED_TAXES_ROUTES: Route[] = [
  'TAX_OPTIMIZATIONS',
  'TAX_HARVESTING',
  'BACKDOOR_ROTH_IRA',
  'MEGABACKDOOR_ROTH',
  'DRAWDOWN',
  'DONATIONS',
  'CHANGING_JOBS_401K',
];
const ADVANCED_TAXES: TopicList = ADVANCED_TAXES_ROUTES.reduce((acc, key) => ({
  ...acc,
  [key]: PAGE_METADATA[key].description,
}), {});

type TopicListProps = {
  articles: TopicList
};
const TopicList = ({ articles }: TopicListProps) => (
  <UnorderedList>
    {(Object.entries(articles) as Array<[Route, string]>).map(([key, description]) => (
      <ListItem key={key}><PageLinkWithDescription pageKey={key} description={description} /></ListItem>))}
  </UnorderedList>
);
const CuratedArticles = () => (
  <>
    <Text>First of all, welcome and I hope I can help provide some financial information that&apos;s useful for you!</Text>
    <Text>The purpose of this section is to help provide a little bit of a more guided experience.</Text>
    <Text>
      As you&apos;ll note, there is a distinct lack of &apos;beginner&apos; information. That type of information is pretty well covered
      by other resources. There is a good section in the
      <PageLink pageKey="RESOURCES" mx={1} />
      {' '}
      page that is a great start!
    </Text>
    <Text my={2}>As for this content, let&apos;s get started with the most accessible topics:</Text>
    <TopicList articles={BEGINNER_TOPICS} />
    <Text my={2}>The following get into investment topics that are more optimizing and go beyond &quot;just save more&quot; type conversations.</Text>
    <TopicList articles={INVESTMENT_TOPICS} />
    <Text my={2} as="strong" display="block">This next section is likely only applicable to tech employees where equity compensation is a factor.</Text>
    <TopicList articles={TECH_TOPICS} />
    <Text my={2}>If you have made it this far, you are likely ahead of most folks out there. Congratulations. From here, we get into advanced tax topics.</Text>
    <TopicList articles={ADVANCED_TAXES} />
    <Text mt={2}>Congratulations! You know everything I know...or at least have hosted on this site. Ok, that is not entirely true, there are a few more topics that did not fit neatly into the above categories. They can always be found in the menu, though!</Text>
  </>
);

export default CuratedArticles;
