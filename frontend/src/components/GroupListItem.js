import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const GroupListItem = ({ group }) => {
  return <Item>{group.groupName}</Item>;
};

export default GroupListItem;
