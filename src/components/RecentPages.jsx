import RecentPages from './RecentPages.sso';
import ServerSideOnly from './ServerSideOnly';

const SSORecentPages = (props) => (
  <ServerSideOnly>
    <RecentPages {...props} />
  </ServerSideOnly>
);

export default SSORecentPages;
