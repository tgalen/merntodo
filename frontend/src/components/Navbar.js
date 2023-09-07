import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import Mail from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Person2Icon from "@mui/icons-material/Person2";
import Button from "@mui/material/Button";
import LoginDialog from "./LoginDialog";

const Navbar = ({ loggedInTasqUser, setLoggedInTasqUser }) => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const handleLoginClickOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("tasqUser");
    setLoggedInTasqUser(null);
    setNavMenuOpen(false);
  };

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "15px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          tasq
        </Typography>
        <FactCheckIcon sx={{ display: { xs: "block", sm: "none" } }} />
        {loggedInTasqUser && (
          <Search>
            <InputBase placeholder="search..." />
          </Search>
        )}
        {loggedInTasqUser ? (
          <Icons>
            <Badge badgeContent={4} color="error">
              <Mail color="white" />
            </Badge>
            <Badge badgeContent={4} color="error">
              <Notifications color="white" />
            </Badge>
            <Avatar
              onClick={(e) => setNavMenuOpen(true)}
              sx={{ width: 25, height: 25 }}
            />
          </Icons>
        ) : (
          <Icons>
            <Button
              color="tertiary"
              variant="contained"
              onClick={handleLoginClickOpen}
            >
              <Person2Icon />
              Login
            </Button>
            <LoginDialog
              loginOpen={loginOpen}
              setLoginOpen={setLoginOpen}
              handleLoginClose={handleLoginClose}
              loggedInTasqUser={loggedInTasqUser}
              setLoggedInTasqUser={setLoggedInTasqUser}
            />
          </Icons>
        )}
        {loggedInTasqUser ? (
          <UserBox onClick={(e) => setNavMenuOpen(true)}>
            <Avatar sx={{ width: 25, height: 25 }} />
            <Typography variant="span">{loggedInTasqUser.userName}</Typography>
          </UserBox>
        ) : (
          <UserBox>
            <Button
              variant="contained"
              color="tertiary"
              onClick={handleLoginClickOpen}
            >
              <Person2Icon />
              Login
            </Button>
            <LoginDialog
              loginOpen={loginOpen}
              setLoginOpen={setLoginOpen}
              handleLoginClose={handleLoginClose}
              loggedInTasqUser={loggedInTasqUser}
              setLoggedInTasqUser={setLoggedInTasqUser}
            />
          </UserBox>
        )}
      </StyledToolbar>
      <Menu
        id="positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={navMenuOpen}
        onClose={(e) => setNavMenuOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
