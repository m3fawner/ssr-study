import {
  Heading, Link, OrderedList, UnorderedList, ListItem, Text, Table, Tbody, Tr, Th, Td, Thead, Code, Box, Container,
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
  code: ({ node, ...props }) => <Code whiteSpace="pre-wrap" {...props} />,
  em: ({ node, ...props }) => <Text as="em" {...props} />,
  ...HEADING_COMPONENTS,
  a: ({ node, ...props }) => <Link color="brand.800" {...props} />,
  ol: ({ ordered, node, ...props }) => <OrderedList {...props} />,
  ul: ({ ordered, node, ...props }) => <UnorderedList {...props} />,
  li: ({ ordered, node, ...props }) => <ListItem paddingY={2} {...props} />,
  p: ({ node, ...props }) => {
    const children = Children.toArray(props.children);
    if (children.length === 1 && children[0] === ' ') {
      return <br />;
    }
    return <Text {...props} />;
  },
  table: ({ children }) => <Table variant="simple">{children}</Table>,
  tbody: ({ children }) => <Tbody>{children}</Tbody>,
  td: ({ node, ...props }) => <Td {...props} />,
  th: ({ node, isHeader, ...props }) => <Th {...props} />,
  thead: ({ children }) => <Thead>{children}</Thead>,
  tr: ({ children }) => <Tr>{children}</Tr>,
  blockquote: ({ children }) => (
    <Container maxW="85%" backgroundColor="gray.200" p={6} borderRadius={8}>
      <Box ml={4}>
        {children}

      </Box>
    </Container>
  ),
};
const MarkdownConverter = ({ markdown, ...props }) => (
  <Box {...props}>
    <ReactMarkdown components={components} remarkPlugins={[gfm]}>
      {markdown}
    </ReactMarkdown>
  </Box>
);
MarkdownConverter.propTypes = {
  markdown: PropTypes.string.isRequired,
};
export default MarkdownConverter;
