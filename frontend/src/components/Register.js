import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const Register = () => {
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

  const paperStyle = {
    padding: "30px 20px",
    width: "400px",
    margin: "30px auto",
    textAlign: "center",
  };
  return (
    <Box>
      <Paper elevation={20} style={paperStyle}>
        <Box>
          <PersonAddAlt1Icon />
          <h2>Register</h2>
          <Typography variant="caption">
            Please fill out this form to register an account.
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            label="Email"
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
            label="User Name"
            autoComplete="userName"
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
            autoComplete="password"
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
            autoComplete="confirmPassword"
            autoFocus
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default Register;
