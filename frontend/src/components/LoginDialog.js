import { useState } from "react";
import axios from "axios";
import { LOGIN_API } from "../constants/constants";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const LoginDialog = ({
  loginOpen,
  setLoginOpen,
  handleLoginClose,
  setLoggedInVigorUser,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegisterClick = () => {
    setLoginOpen(false);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(LOGIN_API, formData);

    if (response.data) {
      localStorage.setItem("vigorUser", JSON.stringify(response.data));
      setLoggedInVigorUser(response.data);
      setLoginOpen(false);
      console.log(response.data);
    } else {
      console.log("failed");
    }

    return response.data;
  };

  return (
    <Dialog
      open={loginOpen}
      onClose={handleLoginClose}
      component="form"
      onSubmit={handleLoginSubmit}
    >
      <DialogTitle>Sign In</DialogTitle>
      <DialogContent>
        <TextField
          margin="normal"
          required
          fullWidth
          id="loginDialogEmail"
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
          name="password"
          label="Password"
          type="password"
          id="loginDialogPassword"
          autoComplete="current-password"
          value={password}
          onChange={onChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Button onClick={handleRegisterClick}>Register</Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
