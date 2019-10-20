import React, { ReactElement } from "react";
import styled from "styled-components";
import SaveButton from "../components/buttons/SaveButton";
import NavigationButton from "../components/buttons/NavigationButton";
import ButtonWrapper from "../components/buttons/ButtonWrapper";
import Card from "../components/Card";
import Form from "../components/Form";
import TextInput from "../components/TextInput";
import AppContext from "../config/appContext";
import { AppState } from "../types/app";

const FormFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > label {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
  }
`;

export const Profile = (): ReactElement<any> => {
  return (
    <AppContext.Consumer>
      {(context: AppState) => (
        <Card>
          <Form>
            <FormFieldsWrapper>
              <label>
                User Name:
                <TextInput
                  type="text"
                  name="name"
                  onChange={context.onUserNameChange.bind(this)}
                />
              </label>
              <label>
                GitHub Url:
                <TextInput
                  type="text"
                  name="gitHubUrl"
                  onChange={context.onGitHubUrlChange.bind(this)}
                />
              </label>
            </FormFieldsWrapper>
            <ButtonWrapper>
              <SaveButton type="submit" value="Save" />
              <NavigationButton to="/">Go Back</NavigationButton>
            </ButtonWrapper>
          </Form>
        </Card>
      )}
    </AppContext.Consumer>
  );
};
