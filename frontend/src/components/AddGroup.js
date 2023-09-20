import { useState } from "react";
import Fab from "@mui/material/Fab";
import GroupsIcon from "@mui/icons-material/Groups";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { GROUPS_API } from "../constants/constants";
import axios from "axios";

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

const AddGroup = ({ loggedInVigorUser }) => {
  const [addGroupOpen, setAddGroupOpen] = useState(false);
  const [formData, setFormData] = useState({
    groupName: "",
    description: "",
  });

  const { groupName, description } = formData;

  const config = {
    headers: {
      Authorization: `Bearer ${loggedInVigorUser.token}`,
    },
  };

  const addGroup = async () => {
    const response = await axios.post(GROUPS_API, formData, config);

    if (response.data) {
      console.log(response);
    } else {
      console.log("failed");
    }
  };

  const handleAddClick = () => {
    setAddGroupOpen(true);
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(formData);

  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        variant="extended"
        onClick={handleAddClick}
      >
        <GroupsIcon style={{ marginRight: "5px" }} />
        Add Group
      </Fab>
      <StyledModal
        open={addGroupOpen}
        onClose={() => setAddGroupOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={350} bgcolor="white" p={3} borderRadius={3}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create Group
          </Typography>
          <Box>
            <UserBox>
              <Typography variant="span" fontWeight={500}>
                {loggedInVigorUser.userName}
              </Typography>
            </UserBox>
            <Box component="form" margin={1}>
              <TextField
                sx={{ width: "100%", marginBottom: "15px" }}
                label="Group Name"
                variant="standard"
                name="groupName"
                value={groupName}
                onChange={onChange}
              />
              <TextField
                sx={{ width: "100%", marginBottom: "15px" }}
                label="Decription"
                variant="standard"
                name="description"
                value={description}
                onChange={onChange}
              />
              <Box sx={{ width: "100%", textAlign: "right", marginTop: 3 }}>
                <Fab variant="extended" color="primary" onClick={addGroup}>
                  Submit
                </Fab>
              </Box>
            </Box>
          </Box>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddGroup;
