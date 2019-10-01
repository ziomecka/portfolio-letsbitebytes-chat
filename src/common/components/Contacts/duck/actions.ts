export const setContacts: ReduxActionCreator<SetContactsAction> =
  ({ contacts, activeContacts, loggedUser }: SetContactsActionProps) => ({
    type: ContactsActionTypes.setContacts,
    contacts,
    activeContacts,
    loggedUser,
  });

export const addContact: ReduxActionCreator<AddContactAction> =
  ({ login, isActive }: AddContactActionProps) => ({
    type: ContactsActionTypes.addContact,
    login,
    isActive,
  });
