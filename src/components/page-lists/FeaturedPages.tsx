import FeaturedPages, { FeaturedPagesProps } from './FeaturedPages.sso';
import ServerSideOnly from '../utility/ServerSideOnly';

const SSOFeaturedPages = (props: FeaturedPagesProps) => (
  <ServerSideOnly>
    <FeaturedPages {...props} />
  </ServerSideOnly>
);

export default SSOFeaturedPages;
