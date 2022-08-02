import MarkdownConverter, { MarkdownConverterProps } from './MarkdownConverter.sso';
import ServerSideOnly from './ServerSideOnly';

const SSOMarkdownConverter = (props: MarkdownConverterProps) => (
  <ServerSideOnly>
    <MarkdownConverter {...props} />
  </ServerSideOnly>
);

export default SSOMarkdownConverter;
