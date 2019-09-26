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
  FormHelperProps,
  FormHelperProps: {
    error,
    errorMessage,
    connectionError,
  } = {},
  GridProps = {},
  onKeyDown,
}) => {

  return (
    <React.Fragment>
      <Grid
        component="form"
        direction="column"
        alignItems="center"
        justify="flex-start"
        wrap="wrap"
        { ...GridProps }
        container
        onSubmit={(event: React.FormEvent): void => event.preventDefault()}
        onKeyDown={onKeyDown}
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
            buttonProps={{ variant: 'outlined' }}
          >
            { texts.homeLabel }
          </RouterButton>
        }
      </Grid>
      <div>
        { FormHelperProps &&
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
