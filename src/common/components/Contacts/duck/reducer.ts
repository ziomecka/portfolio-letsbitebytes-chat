import { initialState } from './initial-state';
import update from 'immutability-helper';

const contactsReducer: ReduxReducer<ContactsState, ContactsActions>
= (state = update(null as ContactsState, { $set: initialState }), action) => {
  const { type, ...actionPayload } = action;

  switch (type) {
    case (ContactsActionTypes.setContacts): {
      const { activeContacts, loggedUser } = actionPayload as SetContactsAction;
      const contacts = [...(actionPayload as SetContactsAction).contacts];
      const newState = new Map([]) as ContactsState;

      if (contacts.length) {
        contacts.splice(contacts.findIndex(contact => contact === loggedUser), 1);

        contacts.reduce((state: ContactsState, login) => {
          state.set(login, { isActive: activeContacts.includes(login) });
          return state;
        }, newState);
      }

      return update(state, { $set: newState });
    }

    case (ContactsActionTypes.addContact): {
      const { login, ...other } = actionPayload as AddContactActionProps;

      return update(state, {
        $add: [[ login, other ]],
      });
    }

    default: {
      return update(state, { $set: state });
    }
  }
};

export { contactsReducer };
