import SocialShare from './SocialShare.sso';
import ServerSideOnly from './ServerSideOnly';

const SSOSocialShare = (props) => (
  <ServerSideOnly>
    <SocialShare {...props} />
  </ServerSideOnly>
);

export default SSOSocialShare;
