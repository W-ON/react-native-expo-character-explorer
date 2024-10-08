import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View((props: { theme: DefaultTheme }) => ({
  flex: 1,
  padding: 16,
  backgroundColor: props.theme.colors.background,
}));

export const SearchInput = styled.TextInput(
  (props: { theme: DefaultTheme }) => ({
    height: 50,
    borderWidth: 1,
    borderColor: props.theme.colors.accent,
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    color: props.theme.colors.text,
    backgroundColor: props.theme.colors.card,
  }),
);

export const CharacterCard = styled.TouchableOpacity(
  (props: { theme: DefaultTheme }) => ({
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    backgroundColor: props.theme.colors.card,
    borderRadius: 8,
    overflow: "hidden",
  }),
);

export const CharacterImage = styled.Image({
  width: 80,
  height: 80,
});

export const CharacterInfo = styled.View({
  flex: 1,
  padding: 10,
});

export const CharacterName = styled.Text((props: { theme: DefaultTheme }) => ({
  fontSize: 18,
  fontFamily: props.theme.fonts.bold,
  color: props.theme.colors.primary,
}));
export const CharacterStatus = styled.Text(
  (props: { theme: DefaultTheme }) => ({
    fontSize: 14,
    color: props.theme.colors.text,
  }),
);

export const MessageText = styled.Text((props: { theme: DefaultTheme }) => ({
  color: props.theme.colors.text,
  textAlign: "center",
  marginTop: 20,
  fontSize: 16,
}));
