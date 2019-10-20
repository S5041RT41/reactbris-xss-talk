import React, { ReactElement, useContext, useState } from "react";
import NavigationButton from "../components/buttons/NavigationButton";
import Card from "../components/Card";
import Form from "../components/Form";
import TextInput from "../components/TextInput";
import TextFieldsWrapper from "../components/TextFieldsWrapper";
import Header from "../components/Header";
import AppContext from "../config/appContext";
import { AppState } from "../types/app";

export const Profile = (): ReactElement<any> => {
  const context: AppState = useContext(AppContext);
  const [userName, setUserName] = useState(context.userName);
  const [gitHubUrl, setGitHubUrl] = useState(context.gitHubUrl);

  // ChangeEvent doesn't have value prop. Hence, use any.
  const handleUserNameChange = (event: any) => {
    if (context.onUserNameChange) {
      context.onUserNameChange(event.target.value);
    }
    setUserName(event.target.value);
  };
  const handleGitHubUrlChange = (event: any) => {
    if (context.onGitHubUrlChange) {
      context.onGitHubUrlChange(event.target.value);
    }
    setGitHubUrl(event.target.value);
  };
  return (
    <Card>
      <Header>Profile</Header>
      <Form>
        <TextFieldsWrapper>
          <label>
            User Name:
            <TextInput
              type="text"
              name="name"
              value={userName}
              onChange={handleUserNameChange}
            />
          </label>
          <label>
            GitHub Url:
            <TextInput
              type="text"
              name="gitHubUrl"
              value={gitHubUrl}
              onChange={handleGitHubUrlChange}
            />
          </label>
        </TextFieldsWrapper>
        <NavigationButton to="/">Save</NavigationButton>
      </Form>
    </Card>
  );
};
