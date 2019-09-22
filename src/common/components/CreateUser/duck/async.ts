export const createUser =
(props: CreateUserActionProps): AppThunkAction<CreateUserResponse> => (async (
  dispatch: AppThunkDispatch<void>,
  getState: GetState,
  { api }: { api: Api }
): Promise<CreateUserResponse> => {
  try {
    const {
      result,
      error,
    } = await api.request(ServerRoutes.createUserRoute, { queryParams: props });
    return { result, error };
  } catch (error) {
    return Promise.reject({
      result: false,
      error,
    });
  }
});
