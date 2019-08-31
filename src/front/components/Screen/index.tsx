import * as React from 'react';
import { Grid } from '@material-ui/core';

const Screen: React.FunctionComponent = (props): JSX.Element => {
  return (
    <Grid>
      {props.children}
    </Grid>
  );
};

export { Screen };