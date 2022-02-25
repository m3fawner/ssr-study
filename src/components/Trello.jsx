import Trello from './Trello.sso';
import ServerSideOnly from './ServerSideOnly';

const SSOTrello = (props) => (
  <ServerSideOnly>
    <Trello {...props} />
  </ServerSideOnly>
);
export default SSOTrello;
