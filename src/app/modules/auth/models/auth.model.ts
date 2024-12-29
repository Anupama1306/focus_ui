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


  setAuth(auth: any) {
    this.authToken  = auth.authToken ;
    this.refreshToken = auth.refreshToken;
    this.expiresIn = auth.expiresIn;
  }
}
