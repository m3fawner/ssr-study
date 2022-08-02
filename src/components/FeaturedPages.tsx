import FeaturedPages, { FeaturedPagesProps } from './FeaturedPages.sso';
import ServerSideOnly from './ServerSideOnly';

const SSOFeaturedPages = (props: FeaturedPagesProps) => (
  <ServerSideOnly>
    <FeaturedPages {...props} />
  </ServerSideOnly>
);

export default SSOFeaturedPages;
