import { MessageDescriptor } from "react-intl";

export type SnackSingle = {
  type: string;
  message: MessSnack;
  translate: boolean;
  id: string;
};
export type MessSnack = {
  id: string;
  defaultMessage: string;
};

export type InitialStateType = {
  type: string;
  message: MessageDescriptor;
  translate: boolean;
  id: string;
  duration: number
}
