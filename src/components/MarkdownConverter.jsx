import MarkdownConverter from './MarkdownConverter.sso';
import ServerSideOnly from './ServerSideOnly';

const SSOMarkdownConverter = (props) => (
  <ServerSideOnly>
    <MarkdownConverter {...props} />
  </ServerSideOnly>
);

export default SSOMarkdownConverter;
