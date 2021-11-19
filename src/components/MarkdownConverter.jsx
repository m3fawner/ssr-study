import {
  Heading, Link, OrderedList, UnorderedList, ListItem, Text, Table, Tbody, Tr, Th, Td, Thead, Code, Box,
} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import gfm from 'remark-gfm';

const HEADING_LEVELS = [
  '4xl',
  '3xl',
  '2xl',
  'xl',
  'lg',
  'md',
  'md',
  'sm',
  'xs',
].map((size, level) => ({
  size,
  as: `h${level}`,
}));
/* eslint-disable react/prop-types */
const HEADING_COMPONENTS = new Array(6).fill(null).map((_, i) => `h${i + 1}`).reduce((acc, ele) => ({
  ...acc,
  [ele]: ({ level, children }) => <Heading {...HEADING_LEVELS[level]}>{children}</Heading>,
}), {});
const components = {
  code: ({ value }) => <Code>{value}</Code>,
  em: ({ value }) => <Text as="em">{value}</Text>,
  ...HEADING_COMPONENTS,
  link: ({ children, ...props }) => <Link color="brand.600" {...props}>{children}</Link>,
  ol: OrderedList,
  ul: UnorderedList,
  li: ({ children }) => <ListItem>{children}</ListItem>,
  p: Text,
  table: ({ children }) => <Table variant="simple">{children}</Table>,
  tbody: ({ children }) => <Tbody>{children}</Tbody>,
  td: Td,
  th: Th,
  thead: ({ children }) => <Thead>{children}</Thead>,
  tr: ({ children }) => <Tr>{children}</Tr>,
};
/* eslint-enable react/prop-types */
const MarkdownConverter = ({ markdown, ...props }) => (markdown
  ? (
    <Box {...props}>
      <ReactMarkdown components={components} plugins={[gfm]}>
        {markdown}
      </ReactMarkdown>
    </Box>
  ) : null);
MarkdownConverter.propTypes = {
  markdown: PropTypes.string.isRequired,
};
export default MarkdownConverter;
