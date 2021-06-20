export interface User {
  rsn: string;
}

export interface Winterface {
  timeInSeconds: number;
  players: {
    user: User;
    playerNumber: number;
  }[];
}
