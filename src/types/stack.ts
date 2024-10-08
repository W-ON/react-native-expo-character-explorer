import { CharacterType } from "./character";

export type RootStackParamList = {
  Home: undefined;
  Character: { character: CharacterType };
};
