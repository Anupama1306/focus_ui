import { BaseModel } from "./base.model";
import { MilesPercent } from "./miles-percent.model";
import { PoDetail } from "./po-detail.model";
import { Project } from "./project.model";

export class RoadType implements BaseModel  {
  id: any;
  miles: string;
  benchMark: string;
  roadId: string;
  roadName: string;
  project: Project;
  multiType: boolean;
  milesPercentSet: MilesPercent[];
  multiRoadNames: string;
  poDetail: PoDetail;
  displayOrder:number;
  roadTypeList:any[];

}
