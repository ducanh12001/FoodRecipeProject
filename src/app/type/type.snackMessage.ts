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
  message: string;
  translate: boolean;
  id: string;
  duration: number
}
