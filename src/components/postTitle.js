import React from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

export default function postTitle({ name, description }) {
  return (
    <Stack style={{ display: "flex", justifyContent: "space-around" }}>
      <Typography>{name}</Typography>
      <Typography>{description}</Typography>
    </Stack>
  );
}
