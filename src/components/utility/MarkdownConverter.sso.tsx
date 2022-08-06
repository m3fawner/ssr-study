import {
  Heading, Link, OrderedList, UnorderedList, ListItem, Text, Table, Tbody, Tr, Th, Td, Thead, Code, Box, Container, StyleProps, HeadingProps, As,
} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import {
  Children, isValidElement, ReactNode,
} from 'react';

const HEADING_LEVELS: HeadingProps[] = [
  '2xl',
  'xl',
  'lg',
  'md',
  'md',
  'sm',
  'xs',
].map((size, level: number) => ({
  size,
  as: (`h${level}` as unknown) as As<string>, // Apparently doing h1-h6 isn't viable in TS
}));
const flatten = (text: string, child: string | ReactNode | ReactNode[]): string => (typeof child === 'string'
  ? text + child
  : Children.toArray(isValidElement<{children: ReactNode}>(child) ? child.props.children : null).reduce(flatten, text));
const slugGenerator = (children: ReactNode) => {
  const arr = Children.toArray(children);
  const text = arr.reduce(flatten, '');
  return text.toLowerCase()
    .replace(/\W/g, '-')
    .replace(/-{2,}/g, '')
    .replace(/^-+/g, '')
    .replace(/-+$/g, '');
};

type MarkdownHeadingProps = { level: number, children: ReactNode };
const HEADING_COMPONENTS = new Array(6).fill(null).map((_, i) => `h${i + 1}`).reduce((acc, ele) => ({
  ...acc,
  [ele]: ({ level, children }: MarkdownHeadingProps) => (
    <Heading {...HEADING_LEVELS[level]}>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
      <a id={slugGenerator(children)} />
      {children}
    </Heading>
  ),
}), {});
type MarkdownComponentBaseProps = {
  node?: unknown,
  children?: ReactNode
};
type ListComponentProps = MarkdownComponentBaseProps & {
  ordered?: boolean
};
type TableComponentProps = MarkdownComponentBaseProps & {
  isHeader?: boolean
}
/* eslint-disable @typescript-eslint/no-unused-vars */
const components = {
  code: ({ node, ...props }: MarkdownComponentBaseProps) => <Code whiteSpace="pre-wrap" {...props} />,
  em: ({ node, ...props }: MarkdownComponentBaseProps) => <Text as="em" {...props} />,
  ...HEADING_COMPONENTS,
  a: ({ node, ...props }: MarkdownComponentBaseProps) => <Link color="brand.800" {...props} />,
  ol: ({ ordered, node, ...props }: ListComponentProps) => <OrderedList {...props} />,
  ul: ({ ordered, node, ...props }: ListComponentProps) => <UnorderedList {...props} />,
  li: ({ ordered, node, ...props }: ListComponentProps) => <ListItem paddingY={2} {...props} />,
  p: ({ node, ...props }: MarkdownComponentBaseProps) => {
    const children = Children.toArray(props.children);
    if (children.length === 1 && children[0] === ' ') {
      return <br />;
    }
    return <Text {...props} />;
  },
  table: ({ children }: MarkdownComponentBaseProps) => <Table variant="simple">{children}</Table>,
  tbody: ({ children }: MarkdownComponentBaseProps) => <Tbody>{children}</Tbody>,
  td: ({ node, isHeader, ...props }: TableComponentProps) => <Td {...props} />,
  th: ({ node, isHeader, ...props }: TableComponentProps) => <Th {...props} />,
  thead: ({ children }: TableComponentProps) => <Thead>{children}</Thead>,
  tr: ({ children }: TableComponentProps) => <Tr>{children}</Tr>,
  blockquote: ({ children }: MarkdownComponentBaseProps) => (
    <Container maxW="85%" backgroundColor="gray.200" p={6} borderRadius={8}>
      <Box ml={4}>
        {children}

      </Box>
    </Container>
  ),
};
// eslint-enable @typescript-eslint/no-unused-vars

export type MarkdownConverterProps = {
  markdown: string
} & StyleProps;
const MarkdownConverter = ({ markdown, ...props }: MarkdownConverterProps) => (
  <Box {...props}>
    <ReactMarkdown components={components} remarkPlugins={[gfm]}>
      {markdown}
    </ReactMarkdown>
  </Box>
);
export default MarkdownConverter;
