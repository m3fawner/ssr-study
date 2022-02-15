import { useMemo } from 'react';

const getMetaContent = (name) => document.querySelector(`meta[name="${name}"]`)?.content;
const useMetadata = () => {
  const metadata = useMemo(() => (typeof window === 'undefined' ? null : ({
    title: document.title,
    keywords: getMetaContent('keywords').split(/,\s?/),
    description: getMetaContent('description'),
    url: getMetaContent('og:url'),
  })), []);
  return metadata;
};

export default useMetadata;
