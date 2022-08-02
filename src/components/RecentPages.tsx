import RecentPages, { RecentPagesProps } from './RecentPages.sso';
import ServerSideOnly from './ServerSideOnly';

const SSORecentPages = (props: RecentPagesProps) => (
  <ServerSideOnly>
    <RecentPages {...props} />
  </ServerSideOnly>
);

export default SSORecentPages;
