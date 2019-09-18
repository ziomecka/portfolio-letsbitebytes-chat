declare interface MapStateToCreateUser {
}

declare interface MapDispatchToCreateUser {
  createUser(props: CreateUserActionProps): Promise<CreateUserResponse>;
}

declare interface CreateUserProps extends MapStateToCreateUser, MapDispatchToCreateUser, WithPublisherProps {
  subscribe(e: string, eventCallback: EventCallback<React.KeyboardEvent<HTMLFormElement>>): () => void
}

declare interface CreateUserWithRouterProps extends CreateUserProps, WithRouterProps {}