import { ReactNode } from 'react';

type ServerSideOnlyProps = {
  children: ReactNode
};
const ServerSideOnly = ({ children }: ServerSideOnlyProps) => {
  if (typeof window === 'undefined') {
    return (
      <section>
        {children}
      </section>
    );
  }
  // eslint-disable-next-line react/no-danger
  return <section dangerouslySetInnerHTML={{ __html: '' }} suppressHydrationWarning />;
};
export default ServerSideOnly;
