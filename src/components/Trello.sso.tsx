import {
  Text, Link, Icon, Box, StyleProps,
} from '@chakra-ui/react';
import ExternalIcon from '../svgs/external-link.svg';

const Trello = (props: StyleProps) => (
  <Box {...props}>
    <Text mt={2}>
      Would you like to be notified of new articles?
      {' '}
      <Link color="brand.800" href="https://trello.com/invite/b/J75MEX7K/447b82ff7d2c0850029a277a60f6d2e8/ficarious" isExternal>
        Join the Trello board.
        <Icon fill="brand.800" ml={2} as={ExternalIcon} />
      </Link>
      . It is set up to email whenever an article ticket is moved into the done column!
      The invite link will also allow you to file a bug or feature request if you&apos;d like!
    </Text>
  </Box>
);

export default Trello;
