import { BaseModel } from "./base.model";


export class SkillSetModel implements BaseModel {
  id: any;
  skillMapList: SkillSetMaps[];

}

export class SkillSetMaps {
  skillId:string;
}
