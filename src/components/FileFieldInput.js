import React from "react";
import { useSnackbar } from "notistack";
import { useDropzone } from "react-dropzone";
import Paper from "@mui/material/Paper";
import axios from "axios";
import api from "../api/api";
function FileFieldInput(props) {
  const { enqueueSnackbar } = useSnackbar();

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];

    handleFileChange(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxFiles: 1,
  });

  const handleFileChange = async (file) => {
    try {
      const response = await enviarArquivo(file);

      enqueueSnackbar("Arquivo enviado com sucesso", { variant: "success" });
    } catch (error) {
      console.error("Erro ao enviar o arquivo:", error);

      enqueueSnackbar("Erro ao enviar o arquivo", { variant: "error" });
    }
  };

  const enviarArquivo = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      console.log("Enviando arquivo...");

      const response = await api.post("/files/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Resposta do servidor:", response);

      return response.data;
    } catch (error) {
      console.error("Erro ao enviar o arquivo:", error);
      throw error;
    }
  };

  return (
    <Paper
      style={{ display: "flex", justifyContent: "center", width: "80%", p: 5 }}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <p>Arraste e solte um arquivo aqui ou clique para selecionar</p>
    </Paper>
  );
}

export default FileFieldInput;
