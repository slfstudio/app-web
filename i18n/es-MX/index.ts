import general from './general.json';
import common from './common.json';
import errors from './errors.json';
const language = {
  translation: {
    ...general,
    ...common,
    ...errors,
  },
};

export default language;
