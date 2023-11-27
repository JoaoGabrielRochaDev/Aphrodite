import { createContext, useContext } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import { useState } from "react";
const SnackbarContext = createContext();

function SlideTransition(props) {
  return <Slide {...props} direction="down" />;
}

export default function SnackbarProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [openSuccess, setOpenSuccess] = useState(false);

  const defaultCodeMap = new Map([
    [400, "Algo deu errado!"],
    [401, "Não autenticado"],
    [403, "Não autorizado"],
    [404, "Item não encontrado"],
    [422, "Servidor rejeitou"],
  ]);

  async function handleRequest(fn, codeMap) {
    try {
      const res = await fn();
      setMessage("Sucesso!");
      setOpenSuccess(true);

      return res;
    } catch (error) {
      if (!error.response) throw error;

      const errorCode = error.code;
      const specificMessage = codeMap?.get(errorCode);
      const defaultMessage = defaultCodeMap?.get(errorCode);

      if (specificMessage) setMessage(specificMessage);
      else if (defaultMessage) setMessage(defaultMessage);
      else setMessage("Erro Inesperado!");

      setOpen(true);
      return null;
    }
  }
  return (
    <SnackbarContext.Provider value={handleRequest}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        TransitionComponent={SlideTransition}
      >
        <Alert variant="filled" severity="error">
          {message}
        </Alert>
      </Snackbar>
      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={() => setOpenSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        TransitionComponent={SlideTransition}
      >
        <Alert variant="filled" severity="success">
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
}

export function useSnackbar() {
  return useContext(SnackbarContext);
}
