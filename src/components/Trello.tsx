import { StyleProps } from '@chakra-ui/react';
import Trello from './Trello.sso';
import ServerSideOnly from './ServerSideOnly';

const SSOTrello = (props: StyleProps) => (
  <ServerSideOnly>
    <Trello {...props} />
  </ServerSideOnly>
);
export default SSOTrello;
