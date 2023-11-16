import Tooltip from "@mui/material/Tooltip";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import PriorityRadioButtons from "./PriorityRadioButtons";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { GROUPS_API } from "../constants/constants";
import axios from "axios";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "90%",
  marginLeft: "auto",
  marginRight: "auto",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
});

const AddTodo = ({ loggedInVigorUser, userGroups, setUserGroups }) => {
  const [addTodoOpen, setAddTodoOpen] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState("low");
  const [selectedGroup, setSelectedGroup] = useState(false);
  const [formData, setFormData] = useState({
    todoTitle: "",
    priority: selectedPriority,
    todoDescription: "",
    addTodo: true,
    completed: false,
    group: selectedGroup,
  });

  const { todoTitle, todoDescription, priority } = formData;

  const config = {
    headers: {
      Authorization: `Bearer ${loggedInVigorUser.token}`,
    },
  };

  const handleFormOnChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      priority: selectedPriority,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGroupChange = (e) => {
    setSelectedGroup(e.target.value);
  };
  // console.log(selectedGroup);

  const addTodoToGroupLocally = () => {
    const updatedUSerGroups =
      userGroups &&
      userGroups.map((g) => {
        if (g.groupName === selectedGroup) {
          g.todos.unshift(formData);
          return g;
        }
        return g;
      });

    setUserGroups([...updatedUSerGroups]);
  };
  const addTodoToGroup = async () => {
    // need to add todo locally
    const todoToEdit =
      userGroups &&
      userGroups.filter((group) => group.groupName === selectedGroup);
    const todoID = todoToEdit[0]._id;
    const response = await axios.put(
      `${GROUPS_API}/${todoID}`,
      formData,
      config
    );
    if (response) {
      console.log(response);
      // addTodoToGroupLocally();
      setFormData({
        todoTitle: "",
        priority: selectedPriority,
        todoDescription: "",
        addTodo: true,
        completed: false,
        group: selectedGroup,
      });

      setAddTodoOpen(false);
    } else {
      console.log("failed");
    }
  };
  console.log(selectedPriority);
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
        <Fab
          color="primary"
          aria-label="add"
          disabled={userGroups === null || userGroups.length === 0}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={addTodoOpen}
        onClose={(e) => setAddTodoOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={400} bgcolor="white" p={3} borderRadius={3}>
          <Typography variant="h6" color="gray" textAlign="center">
            Add Todo
          </Typography>
          <Box>
            <UserBox>
              <Typography variant="span" fontWeight={500}>
                {loggedInVigorUser.userName}
              </Typography>
            </UserBox>
            <Box component="form" margin={1}>
              <FormControl
                sx={{ width: "100%", marginBottom: 2, marginTop: 1 }}
              >
                <InputLabel id="group-label">Group</InputLabel>
                <Select
                  value={selectedGroup}
                  label="Group"
                  onChange={handleGroupChange}
                >
                  {userGroups &&
                    userGroups.map((group) => (
                      <MenuItem key={group.groupName} value={group.groupName}>
                        {group.groupName}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              <TextField
                sx={{ width: "100%", marginBottom: "15px" }}
                label="Todo Title"
                variant="standard"
                name="todoTitle"
                value={todoTitle}
                onChange={handleFormOnChange}
                inputProps={{ maxLength: 30 }}
              />
              <TextField
                sx={{ width: "100%", marginBottom: "15px" }}
                label="Decription"
                variant="standard"
                name="todoDescription"
                value={todoDescription}
                onChange={handleFormOnChange}
                inputProps={{ maxLength: 30 }}
              />

              <PriorityRadioButtons
                selectedPriority={selectedPriority}
                setSelectedPriority={setSelectedPriority}
              />
            </Box>
            <Box sx={{ width: "100%", textAlign: "right", marginTop: 3 }}>
              <Fab
                variant="extended"
                color="primary"
                onClick={() => addTodoToGroup()}
              >
                Submit
              </Fab>
            </Box>
          </Box>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddTodo;
