import { Contacts } from './component';
import { changeActiveConversation } from '../../duck';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch: ReduxDispatch): MapDispatchToContacts => ({
  changeActiveConversation: (login: string): ChangeConversationAction => (
    dispatch(changeActiveConversation(login))
  ),
});

const mapStateToProps = (state: AppState): MapStateToContacts => ({
  activeConversation: state.activeConversation,
  contacts: state.contacts,
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Contacts);

export { Container as Contacts };
