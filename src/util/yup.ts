import * as yup from 'yup';

yup.setLocale({
  mixed: {
    notType: ({ label }) => `${label} does not match the expected type of data.`,
  },
});

export default yup;
