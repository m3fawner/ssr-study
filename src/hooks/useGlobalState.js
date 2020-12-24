import { useReducer, createContext } from 'react';

export const context = createContext(null);
const init = () => ({

});
const SET_ALPHA_VANTAGE_API_KEY = 'SET_ALPHA_VANTAGE_API_KEY';
const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_ALPHA_VANTAGE_API_KEY:
      return {
        ...state,
        alphaVantageAPIKey: payload,
      };
    default:
      return state;
  }
};
const useGlobalState = () => {
  const [state, dispatch] = useReducer(reducer, undefined, init);
  return {
    // Value
    alphaVantageAPIKey: state.alphaVantageAPIKey,

    // Actions
    setAlphaVantageAPIKey: (key) => dispatch({ type: SET_ALPHA_VANTAGE_API_KEY, payload: key }),
  };
};
export default useGlobalState;
