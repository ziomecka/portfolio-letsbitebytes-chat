import { commonInitialState } from './initial-state';
import { defaultInitialState } from '../../common/';
import update from 'immutability-helper';

const commonStateReducer: ReduxReducer<CommonState, CommonActions>
= (state = update({} as CommonState, { $set: commonInitialState }), action) => {
  const { type, ...actionPayload } = action;

  switch (type) {
    case (CommonActionTypes.changeActiveConversation): {
      return update(state, {
        activeConversation: {
          $set: (actionPayload as ChangeConversationAction).activeConversation,
        },
      });
    }

    case (CommonActionTypes.changeConnectionState): {
      return update(state, {
        connectionState: { $set: (actionPayload as ChangeSocketConnectionAction).connectionState },
      });
    }

    case (DialogActionTypes.open): {
      return {
        ...update({} as CommonState, { $set: state }),
        dialog: update(state.dialog,
          { $merge: { ...(actionPayload as OpenDialogAction), open: true } },
        ),
      };
    }

    case (DialogActionTypes.close): {
      return {
        ...update({} as CommonState, { $set: state }),
        dialog: update(state.dialog,
          { $merge: { ...(defaultInitialState.dialog), open: false } },
        ),
      };
    }

    case (CommonActionTypes.setNotifications): {
      return {
        ...update({} as CommonState, { $set: state }),
        notifications: {
          actual: update(state.notifications.actual, {
            $set: (actionPayload as SetNotificationsProps).notifications.actual,
          }),
          history: update(state.notifications.history, {
            $set: (actionPayload as SetNotificationsProps).notifications.history,
          }),
        },
      };
    }

    case (CommonActionTypes.addNotification): {
      return {
        ...update({} as CommonState, { $set: state }),
        notifications: {
          history: update([] as NotificationsList, { $set: state.notifications.history }),
          actual: update(state.notifications.actual, {
            $push: [(actionPayload as AddNotificationProps)],
          }),
        },
      };
    }

    case (CommonActionTypes.activateWaitForServer): {
      return {
        ...update({} as CommonState, { $set: state }),
        waitForServer: true,
      };
    }

    case (CommonActionTypes.deactivateWaitForServer): {
      return {
        ...update({} as CommonState, { $set: state }),
        waitForServer: false,
      };
    }

    case (CommonActionTypes.addHelper): {
      return update(state, {
        helper: {
          $set: update({} as HelperState, { $set: actionPayload as AddHelperProps }),
        },
      });
    }

    case (CommonActionTypes.removeHelper): {
      return {
        ...update(state, {
          helper: {
            $set: update({} as HelperState, { $set: defaultInitialState.helper }),
          },
        }),
      };
    }

    default: {
      return update({} as CommonState, { $set: state });
    }
  }
};

export { commonStateReducer };
