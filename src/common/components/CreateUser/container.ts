import {
  mapHelperToDispatch,
  mapWaitForServerToDispatch,
} from '../../dispatch-common-actions';
import { CreateUser } from './component';
import { connect } from 'react-redux';
import { createUser } from './duck/';

const mapStateToProps = ({ waitForServer }: AppState): MapStateToCreateUser => ({
  waitForServer,
});

const mapDispatchToProps = (dispatch: AppThunkDispatch<void>): MapDispatchToCreateUser => ({
  createUser: (props: CreateUserActionProps): Promise<CreateUserResponse> => (
    dispatch(createUser(props))
  ),
  ...mapWaitForServerToDispatch(dispatch),
  ...mapHelperToDispatch(dispatch),
});

const Container = connect<MapStateToCreateUser, MapDispatchToCreateUser, CreateUserProps>(
  mapStateToProps,
  mapDispatchToProps
)(CreateUser);

export { Container as CreateUser };
