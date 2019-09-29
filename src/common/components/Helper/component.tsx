import * as React from 'react';
import { FormHelperText } from '@material-ui/core/';

const Helper: React.FunctionComponent<HelperProps> = ({
  helperText,
  helperType = 'error',
}) => {
  return (
    <FormHelperText error={helperType === 'error'}>
      { helperText }
    </FormHelperText>
  );
};

export { Helper };
