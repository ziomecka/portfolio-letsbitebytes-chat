import { Conversation } from './component';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { mapSocketToProps } from '../Socket/';

const mapStateToProps = ({
  activeConversation,
  connectionState,
  conversations,
}: AppState): MapStateToConversation => ({
  activeConversation,
  conversations,
  connectionState,
});

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToConversation => ({
  ...mapSocketToProps(dispatch),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Conversation);

export { Container as Conversation };
