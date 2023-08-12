import Box from "@mui/material/Box";

const Sidebar = () => {
  return (
    <Box
      bgcolor="lightblue"
      flex={1}
      padding={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Sidebar
    </Box>
  );
};

export default Sidebar;
