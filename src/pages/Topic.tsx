import React, { ReactElement, useEffect, useState } from "react";
import { CommentRecord } from "../types/app";
import NavigationButton from "../components/buttons/NavigationButton";
import Header from "../components/Header";
import Card from "../components/Card";
import axios, { AxiosResponse } from "axios";
import serialize from "serialize-javascript";
import uuid from "uuid";

export const Topic = (): ReactElement<any> => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get("/comments").then((result: AxiosResponse) => {
      if (result.data) {
        setComments(result.data);
      }
    });
  }, []);
  console.log(serialize(comments));
  return (
    <Card>
      <Header>Topic</Header>
      {comments.map((comment: CommentRecord) => {
        return (
          <div
            key={uuid.v1()}
            dangerouslySetInnerHTML={{ __html: comment.content }}
          />
        );
      })}
      <NavigationButton to="/landing">Go Back</NavigationButton>
    </Card>
  );
};
