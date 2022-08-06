import getMarkdown from '../../markdown/getMarkdown';
import Head, { HeadProps } from '../components/page/Head';
import MarkdownConverter from '../components/utility/MarkdownConverter';

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
const createMarkdownPage = (markdown: string, pageMetaData: HeadProps) => ({
  Component: (props: MarkdownPageProps) => <MarkdownPage {...props} {...pageMetaData} />,
  _getStaticProps: async () => ({
    props: {
      content: await getMarkdown(markdown),
      ...pageMetaData,
    },
  }),
});

export default createMarkdownPage;
