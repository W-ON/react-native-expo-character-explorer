import { CharacterType } from "./character";

type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type ApiResponse = {
  info: Info;
  results: CharacterType[];
};
