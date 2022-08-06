import RecentPages, { RecentPagesProps } from './RecentPages.sso';
import ServerSideOnly from '../utility/ServerSideOnly';

const SSORecentPages = (props: RecentPagesProps) => (
  <ServerSideOnly>
    <RecentPages {...props} />
  </ServerSideOnly>
);

export default SSORecentPages;
