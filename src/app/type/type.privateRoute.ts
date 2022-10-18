export type Route = {
  path?: string;
  resource: any;
  method: any;
  defaultPermission?: boolean;
};

export type Role = {
  resource: any;
  path: string;
  method: any;
};

export type Roles = {
  permission: Role[];
};
