import Radio from "@mui/material/Radio";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
} from "@mui/material";

const PriorityRadioButtons = ({ setSelectedPriority }) => {
  const handleChange = (e) => {
    setSelectedPriority(e.target.value);
  };

  return (
    <FormControl>
      <FormLabel sx={{ color: "gray" }}>Priority</FormLabel>
      <RadioGroup row onChange={handleChange}>
        <FormControlLabel
          value="Low"
          control={<Radio color="lowPriority" />}
          label="Low"
        />
        <FormControlLabel
          value="Medium"
          control={<Radio color="mediumPriority" />}
          label="Medium"
        />
        <FormControlLabel
          value="High"
          control={<Radio color="highPriority" />}
          label="High"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default PriorityRadioButtons;
