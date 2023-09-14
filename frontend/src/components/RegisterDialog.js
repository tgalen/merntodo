import { useState } from "react";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { REGISTER_API } from "../constants/constants";

const RegisterDialog = ({
  registerOpen,
  setRegisterOpen,
  loggedInTasqUser,
  setLoggedInTasqUser,
  handleRegisterClose,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    userName: "",
  });

  const { email, password, confirmPassword, userName } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const response = axios.post(REGISTER_API, formData);
    if (response.data) {
      localStorage.setItem("tasqUser", JSON.stringify(response.data));
      setLoggedInTasqUser(response.data);
      setRegisterOpen(false);
    } else {
      console.log("failed register");
    }

    return response.data;
  };

  return (
    <Dialog open={registerOpen} onClose={handleRegisterClose}>
      <DialogTitle>Register</DialogTitle>
      <DialogContent>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          name="email"
          value={email}
          onChange={onChange}
          label="Email Address"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="userName"
          name="userName"
          value={userName}
          onChange={onChange}
          label="Username"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          name="password"
          value={password}
          onChange={onChange}
          label="Password"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChange}
          label="Confirm Password"
          autoFocus
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Register
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterDialog;
