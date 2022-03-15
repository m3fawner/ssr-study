import FeaturedPages from './FeaturedPages.sso';
import ServerSideOnly from './ServerSideOnly';

const SSOFeaturedPages = (props) => (
  <ServerSideOnly>
    <FeaturedPages {...props} />
  </ServerSideOnly>
);

export default SSOFeaturedPages;
