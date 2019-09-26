declare interface RouterButtonProps extends Partial<AppButtonProps>, WithRouterProps {
  to: AppRoutes;
  icon?: boolean;
}