import React from "react";
import {
  CharacterImage,
  CharacterInfo,
  CharacterName,
  Container,
} from "./styles";
import { CharacterType } from "../../types";

interface RouteParams {
  params: {
    character: CharacterType;
  };
}

const Character = ({ route }: { route: RouteParams }) => {
  const { character } = route.params;

  return (
    <Container>
      <CharacterImage source={{ uri: character.image }} />
      <CharacterName>{character.name}</CharacterName>
      <CharacterInfo>Status: {character.status}</CharacterInfo>
      <CharacterInfo>Species: {character.species}</CharacterInfo>
      <CharacterInfo>Gender: {character.gender}</CharacterInfo>
      <CharacterInfo>Origin: {character.origin.name}</CharacterInfo>
      <CharacterInfo>Location: {character.location.name}</CharacterInfo>
    </Container>
  );
};

export default Character;
