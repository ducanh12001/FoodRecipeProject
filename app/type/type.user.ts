import moment from "moment-timezone";

export type User = {
  name: string | null;
  avartar: string | null;
  image?: string;
  username: string | null;
  fullName: string | null;
  isActive: boolean | null;
  address: string | null;
  birthday: any;
  genderType: string | null;
  phone: string | null;
  email: string | null;
};