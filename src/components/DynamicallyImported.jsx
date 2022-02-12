import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

const DynamicallyImported = ({ loader, ...props }) => {
  const componentRef = useRef(null);
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const result = await loader();
        componentRef.current = result.default; // Components cannot be set in state
        setLoaded(true); // must force a re-render
      } catch (e) {
        // We don't care about failed dynamic modules yet
      }
    })();
  }, []);
  const Component = componentRef.current ?? 'div';
  return isLoaded ? <Component {...props} /> : <Component />;
};
DynamicallyImported.propTypes = {
  loader: PropTypes.func.isRequired,
};

export default DynamicallyImported;
