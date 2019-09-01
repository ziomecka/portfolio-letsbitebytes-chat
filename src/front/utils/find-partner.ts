// TODO - temporary solution
export const findPartner = (role: UserRole): UserRole => {
  return role === UserRole.trainee ? UserRole.trainer : UserRole.trainee;
};
