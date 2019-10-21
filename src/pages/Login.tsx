import React, { ReactElement, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import Card from "../components/Card";
import Button from "../components/buttons/Button";
import Header from "../components/Header";
import createAuth0Client from "@auth0/auth0-spa-js";
import Auth0Client from "@auth0/auth0-spa-js/dist/typings/Auth0Client";
import { LocalStorageKeys, GenericObject, AppState } from "../types/app";
import AppContext from "../config/appContext";

export const Login = (): ReactElement<any> => {
  const [authClient, setAuthClient] = useState();
  const context: AppState = useContext(AppContext);
  const history = useHistory();

  const setToken = (token: string): void => {
    localStorage.setItem(LocalStorageKeys.USER_TOKEN, JSON.stringify(token));
  };

  const handleUserChange = (user: GenericObject) => {
    axios
      .get("/profile", {
        params: {
          email: user.email
        }
      })
      .then((response: AxiosResponse) => {
        if (response.data) {
          const user: GenericObject = response.data[0];
          context.onUserChange({
            name: user.family_name + " " + user.given_name,
            address: user.address,
            country: user.country,
            creditCard: user.credit_card_id,
            email: user.email,
            password: user.password
          });
          history.push("/landing");
        }
      });
  };

  const handleLoginClick = () => {
    createAuth0Client({
      domain: process.env.DOMAIN || "",
      client_id: process.env.CLIENT_ID || "",
      redirect_uri: `http://${process.env.AUTH_REDIRECT_URL}` || ""
    }).then((authClient: Auth0Client) => {
      if (!authClient) {
        return;
      }
      setAuthClient(authClient);

      authClient.getTokenSilently().then((token: string) => {
        if (!token) {
          return;
        }
        setToken(token);
        authClient.getUser().then((user: GenericObject) => {
          if (!user) {
            return;
          }

          handleUserChange(user);
        });
      });
    });
  };

  return (
    <Card>
      <Header>Login</Header>
      <Button onClick={handleLoginClick}>Login</Button>
    </Card>
  );
};
