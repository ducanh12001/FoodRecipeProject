import { Roles, Route } from '../type/type.privateRoute';

export function checkPermissionForComponent(roles: Roles, route: Route) {
  if (!roles || !roles.permission) return false;
  if (route.defaultPermission) return true;
  return true;
  return roles.permission.some(
    (role) =>
      role.resource === route.resource &&
      role.path === route.path &&
      role.method === route.method,
  );
}
