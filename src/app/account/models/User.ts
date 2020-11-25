export interface User {
  name: string;
  last_name: string;
  country: string;
  province: string;
  mail: string;
  phone: number | string;
  password: string;
  token? : string;
}