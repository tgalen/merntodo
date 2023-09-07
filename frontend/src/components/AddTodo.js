import Tooltip from "@mui/material/Tooltip";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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
            <Typography variant="span" fontWeight={500}>
              {loggedInTasqUser.userName}
            </Typography>
          </Box>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddTodo;
