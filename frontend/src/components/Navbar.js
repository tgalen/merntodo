import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import Box from "@mui/material/Box";

const Navbar = () => {
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
    backgroundColor: "white",
  }));

  return (
    <AppBar position="stick">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          tasq
        </Typography>
        <FactCheckIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>search</Search>
        <Icons>icons</Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
