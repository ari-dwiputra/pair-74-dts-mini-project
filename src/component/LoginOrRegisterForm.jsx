import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  auth,
  loginDenganEmailDanPassword,
  registerDenganEmailDanPassword,
} from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

  const LoginOrRegisterForm = ({ loginOrRegister }) => {
  const navigate = useNavigate();

  const [user, isLoading] = useAuthState(auth);

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const textFieldEmailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
    loginDenganEmailDanPassword(credential.email, credential.password);
  };

  const registerHandler = () => {
    registerDenganEmailDanPassword(credential.email, credential.password);
  };

  const buttonLoginOrRegisterOnClickHandler = () => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };
  useEffect(
    () => {
      if (isLoading) {
        return;
      }

      if (user) {
        navigate("/");
      }
    },
    [user, isLoading, navigate]
  );

  return (
    <Box>
      <Paper
        elevation={3}
        sx={{
          padding: "3em",
          width: "35em",
          margin: "auto",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            marginBottom: "1em",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          {loginOrRegister === "login" ? "Login" : "Register"}
        </Typography>

        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          value={credential.email}
          onChange={textFieldEmailOnChangeHandler}
        />
        <br />
        <br />
        <TextField
          label="Password"
          type="Password"
          variant="outlined"
          fullWidth
          value={credential.password}
          onChange={textFieldPasswordOnChangeHandler}
        />
        <br />
        <br />
        <Button
          color="error"
          variant="contained"
          fullWidth
          onClick={buttonLoginOrRegisterOnClickHandler}
        >
          {loginOrRegister === "login" ? "Login" : "Register"}
        </Button>
        <br />
        <br />
        {loginOrRegister === "login" ? (
          <Typography
            sx={{ fontSize: 14, marginTop: 2, marginBottom: 2 }}
            align="center"
            color="text.secondary"
            gutterBottom
          >
            Belum punya akun?{" "}
            <Link to="/register">
              <>Buat akun</>
            </Link>
          </Typography>
        ) : (
          <Typography
            mt={2}
            mb={2}
            fontSize={14}
            align="center"
            color="text.secondary"
            gutterBottom
          >
            Sudah punya akun?{" "}
            <Link to="/login">
              <>Masuk</>
            </Link>
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default LoginOrRegisterForm;
