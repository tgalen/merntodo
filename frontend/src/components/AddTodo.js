import Tooltip from "@mui/material/Tooltip";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
});

const AddTodo = ({ loggedInTasqUser }) => {
  const [addTodoOpen, setAddTodoOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setAddTodoOpen(true)}
        title="Add Todo"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={addTodoOpen}
        onClose={(e) => setAddTodoOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor="white" p={3} borderRadius={3}>
          <Typography variant="h6" color="gray" textAlign="center">
            Add Todo
          </Typography>
          <Box>
            <UserBox>
              <Typography variant="span" fontWeight={500}>
                {loggedInTasqUser.userName}
              </Typography>
            </UserBox>
            <Box component="form" margin={1}>
              <TextField
                sx={{ width: "100%", marginBottom: "15px" }}
                label="Todo Title"
                variant="standard"
              />
              <TextField
                sx={{ width: "100%", marginBottom: "15px" }}
                label="Decription"
                variant="standard"
              />
            </Box>
          </Box>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddTodo;
