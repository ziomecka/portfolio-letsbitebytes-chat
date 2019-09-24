import * as React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
} from '@material-ui/core';
import { AppButton } from '../AppButton/';
import { Close } from '@material-ui/icons';
import { styles } from './styles';
import withStyles from '@material-ui/core/styles/withStyles';

const AppDialog: React.FunctionComponent<AppDialogProps> = ({
  closeDialog,
  closeButton,
  clearDialog,
  title,
  content,
  buttonsVariant,
  open,
  classes,
}) => {

  const ariaLabelledBy = 'app-dialog-title';
  const ariaDescribedBy = 'app-dialog-content';

  const OkButton: React.FunctionComponent<Partial<AppButtonProps>> = () => (
    <AppButton buttonProps={{ onClick: closeDialog }}>
      ok
    </AppButton>
  );

  const buttonsVariants = new Map([
    [ ButtonsVariants.ok, OkButton ],
  ]);

  function renderDialogTitle (): JSX.Element {
    return (
      <DialogTitle
        id={ariaLabelledBy}
        classes = {{ root: classes.title }}
      >
        { title }
      </DialogTitle>
    );
  };

  function renderBottomActions (): JSX.Element {
    const Component = buttonsVariants.get(buttonsVariant);

    return (
      <DialogActions>
        <Component />
      </DialogActions>
    );
  };

  function renderDialogContent (): JSX.Element {
    return (
      <DialogContent>
        <DialogContentText
          id={ariaDescribedBy}
        >
          { content }
        </DialogContentText>
      </DialogContent>
    );
  };

  function renderClose (): JSX.Element {
    const onClick = (): void => {
      closeDialog();
      clearDialog();
    };

    return (
      <IconButton
        onClick={onClick}
        classes={{
          root: classes.actionButton,
        }}
      >
        <Close />
      </IconButton>
    );
  };

  function renderTopActions (): JSX.Element {
    return (
      <DialogActions
        classes={{ root: classes.topActions }}
      >
        { closeButton && renderClose() }
      </DialogActions>
    );
  };

  return (
    // @ts-ignore
    <Grid
      component={Dialog}
      open={open}
      PaperProps={{ component: Grid }}
      hideBackdrop={true}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
    >
      { (closeButton) && renderTopActions() }
      { title && renderDialogTitle() }
      { content && renderDialogContent() }
      { (buttonsVariant !== ButtonsVariants.none) && renderBottomActions() }
    </Grid>
  );
};

const WrappedComponent = withStyles(styles)(AppDialog);

export { WrappedComponent as AppDialog };
