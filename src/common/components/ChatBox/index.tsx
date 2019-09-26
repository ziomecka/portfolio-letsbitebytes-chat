import * as React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import { styles } from './styles';
import { withStyles } from '@material-ui/styles';

const ChatBox: React.FunctionComponent<ChatBoxProps> = ({
  children,
  classes,
  heading,
  elevation = 1,
  containedHeading = false,
  boldHeading = false,
  GridProps = {},
  TypographyProps = {},
}) => {

  const { className: GridClassName } = GridProps;
  const { className: TypographyClassName } = TypographyProps;

  const headingBoxClassName =
    `${ classes.headingBox } ${ containedHeading ? classes.headingBoxContained : '' }`;

  const headingClassName =
    `${ TypographyClassName ? TypographyClassName : '' } ${ classes.heading }` +
    ` ${ containedHeading ? classes.headingContained : '' }` +
    ` ${ boldHeading ? classes.headingBold : '' }`;

  return (
    <Grid
      container
      {...GridProps}
      item
      component={Paper}
      elevation={elevation}
      className={`${ classes.box } ${ GridClassName ? GridClassName : '' }`}
    >
      <Box className={headingBoxClassName}>
        <Typography
          variant="h2"
          { ...TypographyProps }
          className={headingClassName}
          // dangerouslySetInnerHTML for span elements that are styled as highlighted
          dangerouslySetInnerHTML={{ __html: heading }}
        >
        </Typography>
      </Box>
      { children }
    </Grid>
  );
};

const WrappedComponent = withStyles(styles)(ChatBox);

export { WrappedComponent as ChatBox };
