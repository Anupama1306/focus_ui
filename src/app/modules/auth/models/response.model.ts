import { Customer } from "./customer.model";

export class ApiResponse{
  data:any[];
  sort: string;
  page: number;
  perPage: number;
  totalRows: number;
}
