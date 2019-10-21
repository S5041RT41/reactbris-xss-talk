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
  const [gitHubUrl, setGitHubUrl] = useState(context.gitHubUrl);

  // ChangeEvent doesn't have value prop. Hence, use any.
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
            GitHub Url:
            <TextInput
              type="text"
              name="gitHubUrl"
              value={gitHubUrl}
              onChange={handleGitHubUrlChange}
            />
          </label>
        </TextFieldsWrapper>
        <NavigationButton to="/landing">Save</NavigationButton>
      </Form>
    </Card>
  );
};
