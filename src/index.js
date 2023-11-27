import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import PageRoutes from "./routes/PageRoutes";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import theme from "./theme";
import SnackbarProvider from "./contexts/useSnackbar";
import { AuthProvider } from "./api/AuthContext";
import { SnackbarProvider as NotistackSnackbarProvider } from "notistack";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ThemeProvider theme={theme}>
            <SnackbarProvider>
              <NotistackSnackbarProvider
                anchorOrigin={{
                  horizontal: "right",
                  vertical: "bottom",
                }}
                autoHideDuration={2500}
                style={{
                  fontSize: "16px",
                  fontFamily: "Roboto",
                }}
              >
                <PageRoutes />
              </NotistackSnackbarProvider>
            </SnackbarProvider>
          </ThemeProvider>
        </LocalizationProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
