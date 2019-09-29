import { initialState } from './initial-state';
import update from 'immutability-helper';

const contactsReducer: ReduxReducer<ContactsState, ContactsActions>
= (state = update(null as ContactsState, { $set: initialState }), action) => {
  const { type, ...actionPayload } = action;

  switch (type) {
    case (ContactsActionTypes.setContacts): {
      const { contacts, loggedUser } = actionPayload as SetContactsAction;

      const newContacts = new Set(contacts);
      newContacts.delete(loggedUser);

      return update([], { $set: Array.from(newContacts) });
    }

    case (ContactsActionTypes.addContact): {
      return update(state, { $push: [(actionPayload as AddContactAction).login] });
    }

    default: {
      return update(state, { $set: state });
    }
  }
};

export { contactsReducer };
