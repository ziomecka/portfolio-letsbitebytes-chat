import * as React from 'react';
import {
  Box,
  Grid,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import { HTML_CONVERSATION_ID } from '../../../constants';
import { convertHtmlEntitiesToUnicode } from '../../../utils/convert-html-entities-to-unicode';
import { styles } from './styles';
import { withStyles } from '@material-ui/styles';

const ConversationBox: React.FunctionComponent<ConversationBoxProps> = ({
  conversation,
  classes,
}) => {
  const htmlConversationId = HTML_CONVERSATION_ID;
  const contactTypography = `${ classes.typography } ${ classes.contactTypography }`;
  const userTypography = `${ classes.typography } ${ classes.userTypography }`;

  return (conversation &&
    <Grid
      item
      component={Box}
      className={classes.mainBox}
      container
      direction="column"
      justify="flex-end"
    >
      <Grid
        container
        item
        component={List}
        id={ htmlConversationId }
        alignItems="flex-end"
        className={`${ classes.conversationBox } ${ classes.scrollBar }`}
      >
        { conversation.map(([ messageId, message, isDelivered ]) => {
          const isUser = isDelivered !== undefined;

          let itemClass = '';

          if (isUser) {
            itemClass += ` ${ classes.userListItem } ${ userTypography }`;
          } else {
            itemClass += ` ${ classes.userListItem } ${ contactTypography }` +
              ` ${ isDelivered ? classes.delivered : classes.undelivered }`;
          }

          return (
            <ListItem
              key={ messageId }
              disableGutters
              classes={{ root: itemClass }}
              style={{ width: 'fit-content' }}
            >
              <Typography
                variant="body2"
                component="span"
              >
                { convertHtmlEntitiesToUnicode(message) }
              </Typography>
            </ListItem>
          );
        }) }
      </Grid>
    </Grid>
  || null);
};

const WrappedComponent = withStyles(styles)(ConversationBox);

export { WrappedComponent as ConversationBox };
