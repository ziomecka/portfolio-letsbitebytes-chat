import { AppDialog } from './component';
import { closeDialog } from './duck';
import { connect } from 'react-redux';

const mapStateToProps = (state: AppState): MapStateToDialog => ({
  ...state.dialog,
});

const mapDispatchToProps = (dispatch: ReduxDispatch): MapDispatchToDialog => ({
  closeDialog: (): CloseDialogAction => dispatch(closeDialog()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(AppDialog);

export { Container as AppDialog };
