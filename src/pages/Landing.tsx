import React, { ReactElement, useContext } from "react";
import AppContext from "../config/appContext";
import { AppState, LocalStorageKeys } from "../types/app";
import NavigationButton from "../components/buttons/NavigationButton";
import LinkButton from "../components/buttons/LinkButton";
import Header from "../components/Header";
import Card from "../components/Card";
import TextFieldsWrapper from "../components/TextFieldsWrapper";
import Button from "../components/buttons/Button";
import { useHistory } from "react-router-dom";

export const Landing = (): ReactElement<any> => {
  const history = useHistory();
  const context: AppState = useContext(AppContext);
  const handleLogOut = (): void => {
    context.onUserChange({});
    localStorage.removeItem(LocalStorageKeys.USER_TOKEN);
    history.push("/");
  };
  return (
    <Card>
      <Header>XSS playground</Header>
      <TextFieldsWrapper>
        <div>{context.user ? `Name: ${context.user.name}` : null}</div>
        <div>{context.user ? `Email: ${context.user.email}` : null}</div>
      </TextFieldsWrapper>
      <LinkButton href={context.gitHubUrl}>GitHub Link</LinkButton>
      <NavigationButton to="/profile">Profile</NavigationButton>
      <NavigationButton to="/topic">Topic</NavigationButton>
      <Button onClick={handleLogOut}>Log Out</Button>
    </Card>
  );
};
