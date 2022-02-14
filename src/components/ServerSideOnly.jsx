import PropTypes from 'prop-types';

const ServerSideOnly = ({ children }) => {
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
ServerSideOnly.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ServerSideOnly;
