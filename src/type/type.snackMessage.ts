export type SnackSingle = {
  type: string;
  message: string;
  translate?: boolean;
  id: string;
};


export type InitialStateType = {
  type: string;
  message: string;
  translate?: boolean;
  id: string;
  duration?: number
}
