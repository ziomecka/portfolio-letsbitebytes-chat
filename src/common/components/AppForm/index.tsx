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
  homeButton = true,
  formHelperProps,
  formHelperProps: {
    error,
    errorMessage,
    connectionError,
  } = {},
  onKeyDown,
}) => {

  return (
    <React.Fragment>
      <Grid
        container
        component="form"
        direction="column"
        alignItems="center"
        justify="center"
        onSubmit={(event: React.FormEvent): void => event.preventDefault()}
        onKeyDown={onKeyDown}
        wrap="wrap"
        style={{ width: '100%' }}
      >
        { heading &&
          <Typography variant="h2">
            {heading}
          </Typography>
        }

        {children}

        {homeButton &&
          <RouterButton
            to={AppRoutes.publicRoute}
            variant={AppButtonVariant.transparent}
          >
            { texts.homeLabel }
          </RouterButton>
        }
      </Grid>
      <div>
        { formHelperProps &&
          <FormHelperText
            error
            component={Paper}
          >
            { error && errorMessage }
            { connectionError && texts.connectionError }
          </FormHelperText>
        }
      </div>
    </React.Fragment>
  );
};

export { AppForm };
