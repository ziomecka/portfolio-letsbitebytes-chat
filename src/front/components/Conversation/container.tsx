import { Conversation } from './component';
import { connect } from 'react-redux';

const mapStateToProps = (state: AppState): MapStateToConversation => ({
  conversations: state.conversations,
  activeConversation: state.activeConversation,
})

const Container = connect(mapStateToProps)(Conversation);

export { Container as Conversation };