import React, { ReactElement } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

export const NotFound = (): ReactElement<any> => {
  return (
    <Card>
      <Header>Not Found</Header>
    </Card>
  );
};
