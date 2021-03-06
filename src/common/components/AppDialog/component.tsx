import * as React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@material-ui/core';
import { OkButton } from './buttons/';
import { styles } from './styles';
import { withStyles } from '@material-ui/core/styles';

const buttonsVariants = new Map([
  [ ButtonsVariants.ok, OkButton ],
]);

const AppDialog: React.FunctionComponent<AppDialogProps> = ({
  DialogProps = { classes: {} },
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

    return content.reduce((str: string, [ line, lineTag ]: DialogLine): string => {
      return str += line
        ? '' +
        `${ lineTag ? `<${ lineTag }>` : openingTag }` +
        `${ line }` +
        `${ lineTag ? `</${ lineTag }>` : closingTag }`
        : '';
    }, '');
  };

  const Component = buttonsVariants.get(buttonsVariant);

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key.toLowerCase() === 'enter' && buttonsVariant === ButtonsVariants.ok) {
      closeDialog();
    }
  };

  return (
    <Dialog
      {...DialogProps}
      open={open}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      classes={DialogProps.classes
        ? { ...DialogProps.classes, root: `${ DialogProps.classes.root } ${ classes.root }` }
        : { root: classes.root }
      }
      onKeyDown={onKeyDown}
    >
      { !!title.length && (
        <DialogTitle>
          {/* rendered within span because dangerouslySetInnerHTML cannot be set on DialogTitle
              passing array of DialogLines to DialogTitle is too complicated, todo: simplify
           */}
          <Typography
            id={ariaLabelledBy}
            dangerouslySetInnerHTML={{ __html: buildString(title) }}
            component="span"
          />
        </DialogTitle>
      ) }
      { !!content.length && (
        <DialogContent classes={{ root: title.length ? '' : classes.noBorders }}>
          <DialogContentText
            component="div"
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
