import styled, { DefaultTheme } from "styled-components/native";

export const CharacterImage = styled.Image`
  width: 200px;
  height: 200px;
  align-self: center;
  border-radius: 100px;
  margin-bottom: 16px;
`;

export const Container = styled.ScrollView(
  (props: { theme: DefaultTheme }) => ({
    flex: 1,
    padding: "16px",
    backgroundColor: props.theme.colors.background,
  }),
);

export const CharacterName = styled.Text((props: { theme: DefaultTheme }) => ({
  fontSize: 24,
  fontFamily: props.theme.fonts.bold,
  color: props.theme.colors.primary,
  textAlign: "center",
  marginBottom: 8,
}));

export const CharacterInfo = styled.Text((props: { theme: DefaultTheme }) => ({
  fontSize: "16px",
  color: props.theme.colors.text,
  marginBottom: "4px",
}));
