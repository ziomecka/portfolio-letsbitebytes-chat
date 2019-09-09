declare interface AppRouterProps extends WithPublisherProps {
  subscribe?: (e: string, eventCallback: EventCallback<React.SyntheticEvent>) => () => void
}
