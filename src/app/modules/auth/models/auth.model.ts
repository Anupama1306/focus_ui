export class AuthModel {
  authToken : string;
  refreshToken: string;
  expiresIn: Date;
  builderId:string;
  countryId:string;
  divisionId:string;
  id:string;
  userId:string;
  userName:string;
  isAdminRole:string;

  user: {
    userId: string;
    userName: string;
    emailId: string;
    leadBy: string;
    producerName: string;
    isAdmin: boolean;
    roles: string[];
  };
  message: {
    type: string;
    info: string;
  };

  setAuth(auth: any) {
    this.authToken  = auth.authToken ;
    this.refreshToken = auth.refreshToken;
    this.expiresIn = auth.expiresIn;
  }
}
