import { toast } from "react-toastify";
export const toastService = {
  success: (message?: string) => {
    toast.success(message || "Success");
  },
  error: (message?: string) => {
    toast.error(message || "Failed");
  },
  warning: (message?: string) => {
    toast.warning(message || "An error happened");
  },
};
