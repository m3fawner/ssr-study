export default async (doc) => {
  const { default: markdown } = await import(`./${doc}.md`);
  return markdown;
};
