export interface Board {
  id: string;
  title: string;
  description: string;
  // public 혹은 private 중에 하나만 온다.
  status: BoardStatus;
}

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
