import {
  Text, Link, Icon, Box,
} from '@chakra-ui/react';
import ExternalIcon from '../svgs/external-link.svg';

const Trello = (props) => (
  <Box {...props}>
    <Text>
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
    <Text mt={2}>
      Would you like to be notified of new articles?
      {' '}
      <Link color="brand.800" href="https://trello.com/invite/b/J75MEX7K/447b82ff7d2c0850029a277a60f6d2e8/ficarious" isExternal>
        Join the Trello board.
        <Icon fill="brand.800" ml={2} as={ExternalIcon} />
      </Link>
      . It is set up to email whenever an article ticket is moved into the done column!
    </Text>
  </Box>
);

export default Trello;
