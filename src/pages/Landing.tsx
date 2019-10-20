import React, { ReactElement, useContext } from "react";
import AppContext from "../config/appContext";
import { AppState } from "../types/app";
import NavigationButton from "../components/buttons/NavigationButton";
import LinkButton from "../components/buttons/LinkButton";
import Header from "../components/Header";
import Card from "../components/Card";
import TextFieldsWrapper from "../components/TextFieldsWrapper";

export const Landing = (): ReactElement<any> => {
  const context: AppState = useContext(AppContext);
  return (
    <Card>
      <Header>XSS playground</Header>
      <TextFieldsWrapper>
        <div>{context.userName ? `Name: ${context.userName}` : null}</div>
      </TextFieldsWrapper>
      <LinkButton href={context.gitHubUrl}>GitHub Link</LinkButton>
      <NavigationButton to="/profile">Profile</NavigationButton>
    </Card>
  );
};
