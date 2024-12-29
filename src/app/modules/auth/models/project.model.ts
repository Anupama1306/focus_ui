import { BaseModel } from "./base.model";
import { ProjectDetails } from "./project-details.model";

export class Project implements BaseModel{
      id: any;
      projectId: string;
      projectName!:string;
      projectDetail!:ProjectDetails;
      divisionId:string;
      clientName:string;
      projectManagerId:string;
      templateUploadDate:string;
    }
