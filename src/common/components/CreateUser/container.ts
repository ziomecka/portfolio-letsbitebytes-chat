import { CreateUser } from './component';
import { connect } from 'react-redux';
import { createUser } from './duck/';
import { mapWaitForServerToDispatch } from '../../dispatch-common-actions';

const mapStateToProps = ({ waitForServer }: AppState): MapStateToCreateUser => ({
  waitForServer,
});

const mapDispatchToProps = (dispatch: AppThunkDispatch<void>): MapDispatchToCreateUser => ({
  createUser: (props: CreateUserActionProps): Promise<CreateUserResponse> => (
    dispatch(createUser(props))
  ),
  ...mapWaitForServerToDispatch(dispatch),
});

const Container = connect<MapStateToCreateUser, MapDispatchToCreateUser, CreateUserProps>(
  mapStateToProps,
  mapDispatchToProps
)(CreateUser);


export { Container as CreateUser };
