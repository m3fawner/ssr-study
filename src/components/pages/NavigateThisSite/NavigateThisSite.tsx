import { useCallback, useEffect, useState } from 'react';
import {
  Box, TabList, Tabs, TabPanel, TabPanels, Tab,
} from '@chakra-ui/react';
import AllArticles from './AllArticles.sso';
import CuratedArticles from './CuratedArticles.sso';
import ServerSideOnly from '../../utility/ServerSideOnly';

const SSOLastUpdatedArticles = () => (
  <ServerSideOnly>
    <AllArticles listOrder="updated" />
  </ServerSideOnly>
);
const SSORecentlyAuthoredArticles = () => (
  <ServerSideOnly>
    <AllArticles listOrder="authored" />
  </ServerSideOnly>
);
const SSOCuratedArticles = () => (
  <ServerSideOnly>
    <CuratedArticles />
  </ServerSideOnly>
);

const NavigateThisSite = () => {
  const [selectedIndex, setSelectedIndex] = useState<string | null>(null);
  const selectedIndexInt = typeof selectedIndex === 'string' ? parseInt(selectedIndex, 10) : 0;
  useEffect(() => {
    setSelectedIndex(localStorage.getItem('navigateIndex'));
  }, []);
  const onTabSelect = useCallback((index: number) => {
    const indexAsString = index.toString();
    localStorage.setItem('navigateIndex', indexAsString);
    setSelectedIndex(indexAsString);
  }, []);
  return (
    <Box py={2}>
      <Tabs defaultIndex={selectedIndexInt} index={selectedIndexInt} onChange={onTabSelect}>
        <TabList>
          <Tab>Curated reading list</Tab>
          <Tab>Articles by authored date</Tab>
          <Tab>Articles by last updated</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SSOCuratedArticles />
          </TabPanel>
          <TabPanel>
            <SSORecentlyAuthoredArticles />
          </TabPanel>
          <TabPanel>
            <SSOLastUpdatedArticles />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default NavigateThisSite;
