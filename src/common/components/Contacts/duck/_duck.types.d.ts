declare const enum ContactsActionTypes {
  setContacts = '@APP/Contacts/set contacts',
  addContact = '@APP/Contacts/add contacts',
  changeContactIsActive = '@APP/Contacts/change contact\'s isActive',
}

declare type ContactState = {
  isActive?: boolean;
}

declare type ContactsState = Map<string, ContactState>;

declare type SetContactsActionProps = {
  contacts: string[];
  activeContacts: string[];
  loggedUser?: string;
};
declare type AddContactActionProps = ContactState & { login: string };
declare type ChangeContactIsActiveActionProps = {
  login: string,
  isActive: boolean,
};

declare interface SetContactsAction extends ReduxAction, SetContactsActionProps {}
declare interface AddContactAction extends ReduxAction, AddContactActionProps {}
declare interface ChangeContactIsActiveAction extends ReduxAction, ChangeContactIsActiveActionProps {}

declare type ContactsActions = |
  SetContactsAction |
  AddContactAction |
  ChangeContactIsActiveAction;
