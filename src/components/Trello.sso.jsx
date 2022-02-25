import { Text, Link, Icon } from '@chakra-ui/react';
import ExternalIcon from '../svgs/external-link.svg';

const Trello = (props) => (
  <Text {...props}>
    Did you find a bug
    {' '}
    <Text as="em">*gasp*</Text>
    ? Want a feature added or topic covered? Feel free to drop a ticket in my
    {' '}
    <Link color="brand.800" href="https://trello.com/b/J75MEX7K/ficarious" isExternal>
      Trello board
      <Icon fill="brand.800" ml={2} as={ExternalIcon} />
    </Link>
    !
  </Text>
);

export default Trello;
