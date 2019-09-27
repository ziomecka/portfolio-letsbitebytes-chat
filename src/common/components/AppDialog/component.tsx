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

const iUnderstand = 'I understand';

const OkButton: React.FunctionComponent<Partial<AppDialogProps>> = ({
  closeDialog,
}) => (
  <AppButton
    buttonProps={{
      onClick: closeDialog,
      variant: 'text',
      color: 'primary',
    }}
  >
    { iUnderstand }
  </AppButton>
);

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

  const buttonsVariants = new Map([
    [ ButtonsVariants.ok, OkButton ],
  ]);

  function buildString (content: DialogContent | DialogTitle, tag?: HtmlTag): string {
    let openingTag = '';
    let closingTag = '';

    if (tag) {
      openingTag = `<${ tag }>`;
      closingTag = `</${ tag }>`;
    }

    return content
      .reduce((str: string, [ paragraph, tag ]: DialogLine): string => {
        str += `${ openingTag }${ paragraph }${ closingTag }`;
        return str;
      }, '');
  };

  function renderDialogTitle (): JSX.Element {
    return (
      <DialogTitle
        id={ariaLabelledBy}
        classes = {{ root: classes.title }}
        color="primary"
      >
        <span dangerouslySetInnerHTML={{ __html: buildString(title) }}></span>
      </DialogTitle>
    );
  };

  function renderBottomActions (): JSX.Element {
    const Component = buttonsVariants.get(buttonsVariant);

    return (
      <DialogActions>
        <Component { ...{ closeDialog, classes } }/>
      </DialogActions>
    );
  };

  function renderDialogContent (): JSX.Element {
    return (
      <DialogContent>
        <DialogContentText
          id={ariaDescribedBy}
          style={{ whiteSpace: 'pre-wrap' }}
          dangerouslySetInnerHTML={{ __html: buildString(content, 'p') }}
        />
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
    <Dialog
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
    </Dialog>
  );
};

const WrappedComponent = withStyles(styles)(AppDialog);

export { WrappedComponent as AppDialog };
