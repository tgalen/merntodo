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

const Navbar = ({ loggedInTasqUser }) => {
  const [open, setOpen] = useState(false);

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
    <AppBar position="stick">
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
              onClick={(e) => setOpen(true)}
              sx={{ width: 25, height: 25 }}
            />
          </Icons>
        ) : (
          <Icons component="a" href="#" color="white">
            <Person2Icon />
            Login
          </Icons>
        )}
        {loggedInTasqUser ? (
          <UserBox onClick={(e) => setOpen(true)}>
            <Avatar sx={{ width: 25, height: 25 }} />
            <Typography variant="span">John</Typography>
          </UserBox>
        ) : (
          <UserBox component="a" href="#" color="white">
            <Person2Icon />
            Login
          </UserBox>
        )}
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
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
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
