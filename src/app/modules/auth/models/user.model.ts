import { AuthModel } from './auth.model';
import { AddressModel } from './address.model';
import { SocialNetworksModel } from './social-networks.model';
import { Media } from './media.model';
import { Producer } from './producer.model';
import { Country } from './country.model';
import { UserITModel } from './user-it.model';
import { UserHRModel } from './user-hr.model';
import { UserOperationalModel } from './user-operational.model';
import { UserRoles } from './user-roles.model';

export class UserModel extends AuthModel {
  password: string;
  fullname: string;
  email: string;
  pic: string;
  userRoles: UserRoles[];
  occupation: string;
  companyName: string;
  dateOfJoin:string;
  dob:any;
  phone: string;
  employeeId:string;
  fatherName:string;
  spouseName:string;
  sex:string;
  roles:string[];
  
  userImage:string;
  userStatus:string;
  userType:string;
  producerId:string;
  producerName:string;
  parentProducerId:string;
  parentProducerName:string;

  address?: AddressModel;
  socialNetworks?: SocialNetworksModel;
  // personal information
  firstName: string;
  lastName: string;
  mediaList:Media[];
  language: string;
  timeZone: string;
  uniqueId:string;
  producer: Producer;
  country: Country;

  // email settings

  roleId:string;
  status :string;
  bloodGroup:string;
  martial:string;
  itRecord:UserITModel;
  hrRecord:UserHRModel;
  operationalRecord:UserOperationalModel;

  

}

