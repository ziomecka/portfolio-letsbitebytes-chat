declare const enum ContactsActionTypes {
  setContacts = '@APP/Contacts/set contacts',
  addContact = '@APP/Contacts/add contacts',
}

declare type ContactsState = string[];

declare interface SetContactsActionProps {
  contacts: string[];
  loggedUser?: string;
}

declare interface AddContactActionProps {
  login: string;
}

declare interface SetContactsAction extends ReduxAction, SetContactsActionProps {}
declare interface AddContactAction extends ReduxAction, AddContactActionProps {}

declare type ContactsActions = |
  SetContactsAction |
  AddContactAction;
