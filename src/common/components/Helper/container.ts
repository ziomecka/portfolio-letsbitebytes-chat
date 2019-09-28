import { Helper } from './component';
import { connect } from 'react-redux';

const mapStateToProps = ({
  helper: { helperText, helperType },
}: AppState): MapStateToHelper => ({
  helperText,
  helperType,
});

const Container = connect(mapStateToProps)(Helper);

export { Container as Helper };
