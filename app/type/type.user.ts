import moment from "moment-timezone";

export type User = {
  name: string | null;
  profile_image: string | null;
  phone: string | null;
  email: string | null;
  updated_at?: string | null;
};