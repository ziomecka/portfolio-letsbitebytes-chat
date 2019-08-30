import { Conversations } from './component';
import { connect } from 'react-redux';

const mapStateToProps = (state: AppState): MapStateToConversations => ({
  conversations: state.conversations,
})

const Container = connect(mapStateToProps)(Conversations);

export { Container as Conversations };