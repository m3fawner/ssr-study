import {
  Heading, Link, OrderedList, UnorderedList, ListItem, Text, Table, Tbody, Tr, Th, Td, Thead, Code, Box,
} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import gfm from 'remark-gfm';
import { createElement } from 'react';

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
const renderers = {
  code: ({ value }) => <Code>{value}</Code>,
  em: ({ value }) => <Text as="em">{value}</Text>,
  heading: ({ level, children }) => <Heading {...HEADING_LEVELS[level]}>{children}</Heading>,
  link: ({ children, ...props }) => <Link color="brand.600" {...props}>{children}</Link>,
  linkReference: ({ children, ...props }) => <Link color="brand.600" {...props}>{children}</Link>,
  list: ({ ordered, children }) => createElement(
    ordered ? OrderedList : UnorderedList,
    { children },
  ),
  listItem: ({ children }) => <ListItem>{children}</ListItem>,
  p: Text,
  table: ({ children }) => <Table variant="simple">{children}</Table>,
  tableBody: ({ children }) => <Tbody>{children}</Tbody>,
  tableCell: ({ isHeader, children }) => createElement(isHeader ? Th : Td, { children }),
  tableHead: ({ children }) => <Thead>{children}</Thead>,
  tableRow: ({ children }) => <Tr>{children}</Tr>,
  text: ({ value }) => <Text as="span">{value}</Text>,
};
/* eslint-enable react/prop-types */
const MarkdownConverter = ({ markdown, ...props }) => (markdown
  ? (
    <Box {...props}>
      <ReactMarkdown renderers={renderers} plugins={[gfm]} allowDangerousHtml>
        {markdown}
      </ReactMarkdown>
    </Box>
  ) : null);
MarkdownConverter.propTypes = {
  markdown: PropTypes.string.isRequired,
};
export default MarkdownConverter;
