import * as React from 'react';
import {
  Grid,
  TextField,
} from '@material-ui/core';
import { AppButton } from '../../';
import { styles } from './styles';
import texts from './texts';
import { withStyles } from '@material-ui/styles';

const MessageBox: React.FunctionComponent<MessageBoxProps> = ({
  classes,
  ButtonProps: {
    onClick,
  },
  TextFieldProps: {
    onChange,
    onKeyDown,
    value,
  },
}) => {
  return (
    <Grid
      container
      alignItems="flex-end"
      className={classes.box}
      wrap="nowrap"
    >
      <Grid
        item
        className={`${ classes.inputBox } ${ classes.scrollBar } `}
      >
        <TextField
          autoFocus
          multiline
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={texts.inputLabel}
          value={value}
          FormHelperTextProps={{
            style: { position: 'absolute' },
          }}
          InputProps={{
            className: `${ classes.inputBox }${ classes.scrollBar }`,
          }}
          fullWidth={true}
        />
      </Grid>
      <Grid
        item
      >
        <AppButton
          buttonProps={{
            onClick,
            className: classes.button,
            color: 'secondary',
          }}
        >
          {texts.button}
        </AppButton>
      </Grid>
    </Grid>
  );
};

const WrappedComponent = withStyles(styles)(MessageBox);

export { WrappedComponent as MessageBox };
