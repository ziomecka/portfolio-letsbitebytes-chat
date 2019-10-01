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

export const changeContactIsActive: ReduxActionCreator<ChangeContactIsActiveAction> =
  ({ login, isActive }: ChangeContactIsActiveActionProps) => ({
    type: ContactsActionTypes.changeContactIsActive,
    login,
    isActive,
  });
