import { Conversation } from './component';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { mapHelperToDispatch } from '../../dispatch-common-actions';
import { mapSocketToProps } from '../Socket/';

const mapStateToProps = ({
  activeConversation,
  connectionState,
  conversations,
  helper: { helperText },
}: AppState): MapStateToConversation => ({
  activeConversation,
  conversations,
  connectionState,
  helperText,
});

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToConversation => ({
  ...mapSocketToProps(dispatch),
  ...mapHelperToDispatch(dispatch),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Conversation);

export { Container as Conversation };
