import Button from "@mui/material/Button";
import AssignmentIcon from "@mui/icons-material/Assignment";
import RegisterDialog from "./RegisterDialog";

const Landing = ({
  registerOpen,
  setRegisterOpen,
  loggedInTasqUser,
  setLoggedInTasqUser,
}) => {
  const handleRegisterOpen = () => {
    setRegisterOpen(true);
  };

  const handleRegisterClose = () => {
    setRegisterOpen(false);
  };
  return (
    <div>
      Landing
      <Button color="tertiary" variant="contained" onClick={handleRegisterOpen}>
        <AssignmentIcon />
        Register
      </Button>
      <RegisterDialog
        registerOpen={registerOpen}
        setRegisterOpen={setRegisterOpen}
        loggedInTasqUser={loggedInTasqUser}
        setLoggedInTasqUser={setLoggedInTasqUser}
        handleRegisterClose={handleRegisterClose}
      />
    </div>
  );
};

export default Landing;
