import { BaseModel } from "./base.model";

export class RoleModel implements BaseModel {
  id: string;
  roleId:string;
  isAdminRole:boolean;
}
