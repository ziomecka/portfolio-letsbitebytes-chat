import { FORM_HELPER_TEXT_MAX_WIDTH } from './constants';
import { Overrides } from '@material-ui/core/styles/overrides';

const FormHelperText = (): Overrides => {
  return {
    MuiFormHelperText: {
      root: {
        maxWidth: FORM_HELPER_TEXT_MAX_WIDTH,
      },
    },
  } as Overrides;
};

export { FormHelperText };
