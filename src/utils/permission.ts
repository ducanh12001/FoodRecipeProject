import { Roles, Route } from '../type/type.privateRoute';

export function checkPermissionForComponent(roles: Roles, route: Route) {
  if (!roles || !roles.permission) return false;
  if (route.defaultPermission) return true;
  return true;
}
