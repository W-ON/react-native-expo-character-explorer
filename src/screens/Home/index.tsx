import React, { useState, useEffect } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import { useSearchCharactersQuery } from "../../services/api/rickAndMortyApi";
import { useDebounce } from "../../hooks";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import {
  CharacterCard,
  CharacterImage,
  CharacterInfo,
  CharacterName,
  CharacterStatus,
  Container,
  MessageText,
  SearchInput,
} from "./styles";
import { CharacterType } from "../../types";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedTerm = useDebounce(searchTerm, 500);
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const theme = useTheme();
  const navigation = useNavigation();

  const { data, error, isLoading, isFetching } = useSearchCharactersQuery(
    { name: debouncedTerm, page },
    {
      skip: debouncedTerm.length === 0,
    },
  );

  useEffect(() => {
    if (debouncedTerm.length === 0) {
      setCharacters([]);
      setPage(1);
    }
  }, [debouncedTerm]);

  useEffect(() => {
    if (data && page === 1) {
      setCharacters(data.results);
    } else if (data && page > 1) {
      setCharacters((prev) => [...prev, ...data.results]);
    }
  }, [data]);

  const loadMore = () => {
    if (data?.info?.next && !isFetching) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const renderItem = ({ item }: { item: CharacterType }) => (
    <CharacterCard
      onPress={() => navigation.navigate("Character", { character: item })}
    >
      <CharacterImage source={{ uri: item.image }} />
      <CharacterInfo>
        <CharacterName>{item.name}</CharacterName>
        <CharacterStatus>
          {item.status} - {item.species}
        </CharacterStatus>
      </CharacterInfo>
    </CharacterCard>
  );

  return (
    <Container>
      <SearchInput
        placeholder="Search Characters"
        placeholderTextColor={theme.colors.text}
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      {isLoading && page === 1 && (
        <ActivityIndicator size="large" color={theme.colors.primary} />
      )}
      {error && "status" in error && (
        <MessageText>
          {error.status === 404
            ? "No characters found."
            : "An error occurred. Please try again."}
        </MessageText>
      )}
      {!isLoading && characters.length === 0 && debouncedTerm.length > 0 && (
        <MessageText>No characters found.</MessageText>
      )}
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetching && page > 1 ? (
            <ActivityIndicator size="small" color={theme.colors.primary} />
          ) : null
        }
      />
    </Container>
  );
};

export default Home;
