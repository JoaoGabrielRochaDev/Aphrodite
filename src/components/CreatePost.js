import React, { useEffect, useState } from "react";
import TextFieldInput from "./form/TextFieldInput";
import Container from "@mui/material/Container";
import useYupForm from "../contexts/useYupForm";
import * as yup from "yup";
import DropdownFieldInput from "./form/DropdownFieldInput";
import Paper from "@mui/material/Paper";
import { FormProvider } from "react-hook-form";
import FileFieldInput from "./FileFieldInput";
import useAuthSWR from "../contexts/useAuthSWR";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import subjectsApi from "../api/subjects.api";

const createPostSchema = yup.object({
  content: yup.string(),
  imageUrl: yup.string(),
  subjects: yup.array().of(yup.string()),
});
export default function CreatePost() {
  const createPostMethods = useYupForm(createPostSchema);
  const [subjects, setSubjects] = useState();
  useEffect(() => {
    const response = async () => await subjectsApi.getSubjects();
    console.log(response);
    return setSubjects(response);
  }, []);
  console.log(subjects);
  return (
    <Container
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <FormProvider {...createPostMethods}>
        <Paper
          style={{
            height: "50%",
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <TextFieldInput name="content" variant="outlined" label="Descrição" />
          <FileFieldInput name="imageUrl" />
          <Autocomplete
            name="subjects"
            multiple
            options={subjects ?? []}
            getOptionLabel={(option) => option?.name}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField {...params} label="As suntos" />
            )}
          />
          <h1>Lista de Assuntos</h1>
          {/*  <ul>
            {subjects?.map((subject) => (
              <li key={subject.id}>{subject.name}</li>
            ))}
          </ul> */}
        </Paper>
      </FormProvider>
    </Container>
  );
}
