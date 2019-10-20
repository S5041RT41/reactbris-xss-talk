import React, { ReactElement } from "react";
import AppContext from "../config/appContext";
import { AppState } from "../types/app";
import NavigationButton from "../components/buttons/NavigationButton";
import LinkButton from "../components/buttons/LinkButton";
import ButtonWrapper from "../components/buttons/ButtonWrapper";
import Header from "../components/Header";
import Card from "../components/Card";

export const Landing = (): ReactElement<any> => {
  return (
    <AppContext.Consumer>
      {(context: AppState) => (
        <Card>
          <Header>XSS playground</Header>
          <ButtonWrapper>
            <NavigationButton to="/profile">Profile</NavigationButton>
            <LinkButton href={context.gitHubUrl}>GitHub Link</LinkButton>
          </ButtonWrapper>
        </Card>
      )}
    </AppContext.Consumer>
  );
};
