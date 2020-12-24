import PropTypes from 'prop-types';
import useGlobalState, { context } from '../hooks/useGlobalState';

const GlobalStateManager = ({ children }) => (
  <context.Provider value={useGlobalState()}>{children}</context.Provider>
);
GlobalStateManager.propTypes = {
  children: PropTypes.node.isRequired,
};
export default GlobalStateManager;
