import PropTypes from 'prop-types';
// eslint-disable-next-line import/prefer-default-export
export const dataRowsPropTypes = PropTypes.arrayOf(PropTypes.shape({
  rowPrice: PropTypes.number.isRequired,
  rsuValue: PropTypes.number.isRequired,
  optionValue: PropTypes.number.isRequired,
  difference: PropTypes.number.isRequired,
}));
