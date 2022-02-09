import {
  Heading, Link, OrderedList, UnorderedList, ListItem, Text, Table, Tbody, Tr, Th, Td, Thead, Code, Box,
} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import gfm from 'remark-gfm';
import { Children } from 'react';

const HEADING_LEVELS = [
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
const flatten = (text, child) => (typeof child === 'string'
  ? text + child
  : Children.toArray(child.props.children).reduce(flatten, text));
const slugGenerator = (children) => {
  const arr = Children.toArray(children);
  const text = arr.reduce(flatten, '');
  return text.toLowerCase()
    .replace(/\W/g, '-')
    .replace(/-{2,}/g, '')
    .replace(/^-+/g, '')
    .replace(/-+$/g, '');
};
const HEADING_COMPONENTS = new Array(6).fill(null).map((_, i) => `h${i + 1}`).reduce((acc, ele) => ({
  ...acc,
  [ele]: ({ level, children }) => (
    <Heading {...HEADING_LEVELS[level]}>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
      <a name={slugGenerator(children)} />
      {children}
    </Heading>
  ),
}), {});
const components = {
  code: ({ value }) => <Code>{value}</Code>,
  em: ({ value }) => <Text as="em">{value}</Text>,
  ...HEADING_COMPONENTS,
  a: ({ children, ...props }) => <Link color="brand.800" {...props}>{children}</Link>,
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

const MarkdownConverter = ({ markdown, ...props }) => (markdown
  ? (
    <Box {...props}>
      <ReactMarkdown components={components} remarkPlugins={[gfm]}>
        {markdown}
      </ReactMarkdown>
    </Box>
  ) : null);
MarkdownConverter.propTypes = {
  markdown: PropTypes.string.isRequired,
};
export default MarkdownConverter;
