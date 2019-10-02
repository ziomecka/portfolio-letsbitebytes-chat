import * as React from 'react';
import {
  Grid,
  Typography,
} from '@material-ui/core/';
import { RouterButton } from '../';
import texts from './texts';

const AppForm: React.FunctionComponent<AppFormProps> = ({
  children,
  heading,
  homeButton = true,
  GridProps = {},
  onKeyDown,
}) => {

  return (
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
          // @ts-ignore
          buttonProps={{ variant: 'outlined' }}
        >
          { texts.homeLabel }
        </RouterButton>
      }
      {/* <FormHelperText error={true}>dupa</FormHelperText> */}
    </Grid>
  );
};

export { AppForm };
