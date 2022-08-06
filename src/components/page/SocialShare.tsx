import Script from 'next/script';
import SocialShare, { SocialShareProps } from './SocialShare.sso';
import ServerSideOnly from '../utility/ServerSideOnly';

export const SocialScripts = () => (
  <>
    <Script strategy="lazyOnload" src="https://platform.linkedin.com/in.js">lang: en_US</Script>
    <Script
      strategy="lazyOnload"
      onLoad={() => {
        window.twttr = window.twttr || {};
        // eslint-disable-next-line no-underscore-dangle
        window.twttr._e = [];
        // eslint-disable-next-line no-underscore-dangle
        window.twttr.ready = (f) => window.twttr._e.push(f);
      }}
      src="https://platform.twitter.com/widgets.js"
      id="twitter-wjs"
    />
    <Script
      strategy="lazyOnload"
      src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0"
      id="facebook-jssdk"
    />
  </>
);

const SSOSocialShare = (props: SocialShareProps) => (
  <ServerSideOnly>
    <SocialShare {...props} />
  </ServerSideOnly>
);
export default SSOSocialShare;
