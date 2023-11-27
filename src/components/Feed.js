import React from "react";
import { Container, Paper } from "@mui/material";
import useAuthSWR from "../contexts/useAuthSWR";
export default function Feed() {
  const { data: content } = useAuthSWR("/posts");

  console.log(content);
  return (
    <Container>
      <Paper
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
        spacing={1}
      >
        {content.map((post) => (
          <Paper></Paper>
        ))}
      </Paper>
    </Container>
  );
}
