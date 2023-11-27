import React from "react";
import { Grid, Paper, Box, Button, Typography, Link } from "@mui/material";

import TextFieldInput from "./form/TextFieldInput";
import * as yup from "yup";
import useYupForm from "../contexts/useYupForm";

import AuthService, { useAuth } from "../api/AuthContext";
import { FormProvider } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import DatePickers from "./form/DatePickers";

const registerSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
  dateOfBirth: yup.date().required(),
  firstName: yup.string().min(2).notRequired(),
  lastName: yup.string().min(2).notRequired(),
});
export default function Register() {
  const { register } = useAuth();
  const registerMethods = useYupForm(registerSchema);

  const navigate = useNavigate();
  const handleRegister = async ({
    email,
    password,
    dateOfBirth,
    firstName,
    lastName,
  }) => {
    try {
      const userData = {
        email,
        password,
        dateOfBirth,
        firstName,
        lastName,
      };
      console.log(userData);

      const response = register(
        userData.email,
        userData.password,
        userData.dateOfBirth,
        userData.firstName,
        userData.lastName
      );

      console.log("Cadastrado com sucesso:", response);
      navigate("");
    } catch (error) {
      console.error("Erro durante o cadastrado:", error);
    }
  };

  return (
    <Grid xs={12} container style={{ minHeight: "100vh", width: "100%" }}>
      <FormProvider {...registerMethods}>
        <Grid
          item
          style={{
            display: "flex",
            width: "100%",
            justifyContent: " center",
            alignItems: "center",
          }}
        >
          <Paper
            style={{
              display: "flex",
              width: "50%",
              borderRadius: "20px",
              height: "50%",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <TextFieldInput variant="outlined" name="email" label="Email" />
            <TextFieldInput
              variant="outlined"
              name="password"
              label="Password"
            />
            <TextFieldInput variant="outlined" name="firstName" label="Nome" />

            <TextFieldInput
              variant="outlined"
              name="lastName"
              label="Sobrenome"
            />
            <DatePickers name="dateOfBirth" label="Nascimento" />
            <Button
              variant="contained"
              onClick={registerMethods.handleSubmit(handleRegister)}
            >
              Registrar
            </Button>
            <Box style={{ display: "flex", justifyContent: "flex-end" }}>
              <Typography>
                Ainda não tem usuário?{" "}
                <Link color="primary" onClick={() => navigate("/register")}>
                  Cadastre-se
                </Link>
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </FormProvider>
    </Grid>
  );
}
