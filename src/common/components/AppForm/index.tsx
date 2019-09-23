import * as React from 'react';
import {
  FormHelperText,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core/';
import { RouterButton } from '../';
import texts from './texts';

const AppForm: React.FunctionComponent<AppFormProps> = ({
  children,
  heading,
  formHelperProps: {
    error,
    errorMessage,
    connectionError,
  } = {},
  onKeyDown,
}) => {

  return (
    <Grid
      container
      component="form"
      direction="column"
      alignItems="center"
      onSubmit={(event: React.FormEvent): void => event.preventDefault()}
      onKeyDown={onKeyDown}
      wrap="nowrap"
    >
      <Typography variant="h2">
        {heading}
      </Typography>

      {children}

      <RouterButton
        to={AppRoutes.publicRoute}
        variant={AppButtonVariant.transparent}
      >
        { texts.homeLabel }
      </RouterButton>

      <FormHelperText
        error
        component={Paper}
      >
        { error && errorMessage }
        { connectionError && texts.connectionError }
      </FormHelperText>
    </Grid>
  );
};

export { AppForm };
