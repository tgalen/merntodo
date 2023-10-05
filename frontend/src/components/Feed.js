import { useState } from "react";
import Box from "@mui/material/Box";
import CreateGroupTip from "./CreateGroupTip";
import IndividualTodo from "./IndividualTodo";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Feed = ({ userGroups, loggedInVigorUser }) => {
  const [groupFilter, setGroupFilter] = useState("All");
  const NO_USER_GROUPS = userGroups && userGroups.length === 0;

  const groupFilterOnChange = (e) => {
    setGroupFilter(e.target.value);
  };

  const groupsFilteredByGroup =
    userGroups &&
    userGroups.filter((group) => {
      if (groupFilter === "All") {
        return group;
      } else {
        return group.groupName === groupFilter;
      }
    });

  const todos =
    userGroups &&
    groupsFilteredByGroup
      .map((group) => {
        return group.todos.map((todo) => {
          return { ...todo, groupName: group.groupName };
        });
      })
      .flat();

  console.log(todos);

  return (
    <Box
      bgcolor="pink"
      padding={2}
      height="74vh"
      id="todo-feed"
      overflow="auto"
    >
      {NO_USER_GROUPS && (
        <CreateGroupTip loggedInVigorUser={loggedInVigorUser} />
      )}
      {!NO_USER_GROUPS && (
        <FormControl fullWidth sx={{ marginBottom: 1 }}>
          <InputLabel id="group-select">Group</InputLabel>
          <Select
            value={groupFilter}
            label="Filter Group"
            onChange={groupFilterOnChange}
          >
            <MenuItem value="All">Show All</MenuItem>
            {userGroups &&
              userGroups.map((g) => (
                <MenuItem value={g.groupName}>{g.groupName}</MenuItem>
              ))}
          </Select>
        </FormControl>
      )}
      {todos &&
        todos.map((todo) => {
          return <IndividualTodo todo={todo} />;
        })}
    </Box>
  );
};

export default Feed;
