import { AppDialog } from './component';
import { connect } from 'react-redux';
import { mapDispatchToDialog } from './dispatch-dialog';

const mapStateToProps = (state: AppState): MapStateToDialog => ({
  ...state.dialog,
});

const Container = connect(mapStateToProps, mapDispatchToDialog)(AppDialog);

export { Container as AppDialog };
