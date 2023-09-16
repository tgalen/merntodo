import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { REGISTER_API } from "../constants/constants";

const Register = ({ setLoggedInVigorUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    userName: "",
  });

  const { email, password, confirmPassword, userName } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(REGISTER_API, formData);

    if (response.data) {
      localStorage.setItem("vigorUser", JSON.stringify(response.data));
      setLoggedInVigorUser(response.data);
      console.log(response.data);
      navigate("/");
    } else {
      console.log("Failed to Register");
    }
  };

  const paperStyle = {
    padding: "30px 20px",
    width: "400px",
    margin: "30px auto",
    textAlign: "center",
    maxWidth: "80%",
  };
  return (
    <Box>
      <Paper elevation={20} style={paperStyle}>
        <Box component="form" onSubmit={handleRegisterSubmit}>
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
            type="password"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={onChange}
            autoComplete="confirmPassword"
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
        </Box>
      </Paper>
    </Box>
  );
};

export default Register;
