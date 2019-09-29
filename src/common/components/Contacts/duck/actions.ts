export const setContacts: ReduxActionCreator<SetContactsAction> =
  ({ contacts, loggedUser }: SetContactsActionProps) => ({
    type: ContactsActionTypes.setContacts,
    contacts,
    loggedUser,
  });

export const addContact: ReduxActionCreator<AddContactAction> =
  ({ login }: AddContactActionProps) => ({
    type: ContactsActionTypes.addContact,
    login,
  });
