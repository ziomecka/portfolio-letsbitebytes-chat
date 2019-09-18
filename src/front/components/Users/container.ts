import { Users } from './component';
import { changeActiveConversation } from '../../duck';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch: ReduxDispatch): MapDispatchToUsers => ({
  changeActiveConversation: (login: string): ChangeConversationAction => (
    dispatch(changeActiveConversation(login))
  ),
});

const mapStateToProps = (state: AppState): MapStateToUsers => ({
  users: state.users,
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Users);

export { Container as Users };
