export type Player = {
  id: number;
  name: string;
  age: number;
  createdAt: Date;
  updatedAt?: Date;
  teamId: number;
  team: {
    id: number;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
  };
};
