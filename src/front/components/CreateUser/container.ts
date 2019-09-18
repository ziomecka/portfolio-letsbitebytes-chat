import { CreateUser } from './component';
import { connect } from 'react-redux';
import { createUser } from './duck/';
import { withRouter } from 'react-router';

const mapStateToProps = (): MapStateToCreateUser => ({});

const mapDispatchToProps = (dispatch: AppThunkDispatch<void>): MapDispatchToCreateUser => ({
  createUser: (props: CreateUserActionProps): Promise<CreateUserResponse> => (
    dispatch(createUser(props))
  ),
});

const Container = withRouter(
  connect<MapStateToCreateUser, MapDispatchToCreateUser, CreateUserProps>(
    mapStateToProps,
    mapDispatchToProps
  )(CreateUser)
);

export { Container as CreateUser };
