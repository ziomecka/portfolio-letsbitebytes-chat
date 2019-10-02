import * as React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { OkButton } from './buttons/';
import { styles } from './styles';
import { withStyles } from '@material-ui/core/styles';

const buttonsVariants = new Map([
  [ ButtonsVariants.ok, OkButton ],
]);

const AppDialog: React.FunctionComponent<AppDialogProps> = ({
  closeDialog,
  title,
  content,
  buttonsVariant,
  open,
  classes,
}) => {
  const ariaLabelledBy = 'app-dialog-title';
  const ariaDescribedBy = 'app-dialog-content';

  const buildString = (content: DialogContent | DialogTitle, tag?: HtmlTag): string => {
    let openingTag = '';
    let closingTag = '';

    if (tag) {
      openingTag = `<${ tag }>`;
      closingTag = `</${ tag }>`;
    }

    return content
      .reduce((str: string, [ paragraph, tag ]: DialogLine): string => {
        str +=
        `${ tag ? `<${ tag }>` : openingTag }${ paragraph }${ tag ? `<\\${ tag }>` : closingTag }`;

        return str;
      }, '');
  };

  const Component = buttonsVariants.get(buttonsVariant);

  return (
    <Dialog
      open={open}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      classes={{ root: classes.root }}
    >
      { !!title.length && (
        <DialogTitle
          id={ariaLabelledBy}
          color="primary"
        >
          <span dangerouslySetInnerHTML={{ __html: buildString(title) }}></span>
        </DialogTitle>
      ) }
      { !!content.length && (
        <DialogContent classes={{ root: title.length ? '' : classes.noBorders }}>
          <DialogContentText
            id={ariaDescribedBy}
            style={{ whiteSpace: 'pre-wrap' }}
            dangerouslySetInnerHTML={{ __html: buildString(content, 'p') }}
          />
        </DialogContent>
      ) }
      { (buttonsVariant !== ButtonsVariants.none) && (
        <DialogActions>
          <Component { ...{ closeDialog, classes } }/>
        </DialogActions>
      ) }
    </Dialog>
  );
};

const WrappedComponent = withStyles(styles)(AppDialog);

export { WrappedComponent as AppDialog };
