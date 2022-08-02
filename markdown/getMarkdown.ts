type MarkdownModule = {
  default: string
};
export default async (doc: string): Promise<string> => {
  const { default: markdown }: MarkdownModule = await import(`./${doc}.md`);
  return markdown;
};
