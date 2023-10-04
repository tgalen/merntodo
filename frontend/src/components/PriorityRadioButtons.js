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
          value="low"
          control={<Radio color="lowPriority" />}
          label="Low"
        />
        <FormControlLabel
          value="medium"
          control={<Radio color="mediumPriority" />}
          label="Medium"
        />
        <FormControlLabel
          value="high"
          control={<Radio color="highPriority" />}
          label="High"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default PriorityRadioButtons;
