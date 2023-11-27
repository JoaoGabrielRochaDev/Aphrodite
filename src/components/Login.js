import React from "react";

import { Box, Button, Grid, Paper, Typography, Link } from "@mui/material";
import TextFieldInput from "./form/TextFieldInput";
import * as yup from "yup";
import useYupForm from "../contexts/useYupForm";

import AuthService, { useAuth } from "../api/AuthContext";
import { FormProvider } from "react-hook-form";

import { useNavigate } from "react-router-dom";

const loginSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});
export default function Login() {
  const loginMethods = useYupForm(loginSchema);
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleLogin = async (data) => {
    try {
      const response = await login(data);

      console.log("Login bem-sucedido:", response);
      navigate("/feed");
    } catch (error) {
      console.error("Erro durante o login:", error);
    }
  };

  return (
    <Grid xs={12} container style={{ minHeight: "100vh", width: "100%" }}>
      <FormProvider {...loginMethods}>
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
            <TextFieldInput name="email" label="Email" />
            <TextFieldInput name="password" label="Password" />
            <Button
              variant="contained"
              onClick={loginMethods.handleSubmit(handleLogin)}
            >
              Entrar
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
