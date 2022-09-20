import getMarkdown from '../../markdown/getMarkdown';
import Head, { HeadProps } from '../components/page/Head';
import MarkdownConverter from '../components/utility/MarkdownConverter';
import { PAGE_METADATA, Route } from '../routing';

type BaseMarkdownPageProps = {
  content: string
};
type MarkdownPageProps = HeadProps & BaseMarkdownPageProps;

const MarkdownPage = ({
  content, title, description, url, keywords,
}: MarkdownPageProps) => (
  <>
    <Head title={title} description={description} url={url} keywords={keywords} />
    <MarkdownConverter py="5" markdown={content} />
  </>
);
const createMarkdownPage = (markdown: string, pageMetaData: Route) => ({
  Component: (props: MarkdownPageProps) => <MarkdownPage {...props} {...PAGE_METADATA[pageMetaData] as HeadProps} />,
  _getStaticProps: async () => ({
    props: {
      content: await getMarkdown(markdown),
      ...PAGE_METADATA[pageMetaData],
    },
  }),
});

export default createMarkdownPage;
