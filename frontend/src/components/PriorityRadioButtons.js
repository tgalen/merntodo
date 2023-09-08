import Radio from "@mui/material/Radio";
import { useState } from "react";
import { theme } from "../Theme/theme";

const PriorityRadioButtons = ({ selectedPriority, setSelectedPriority }) => {
  const handleChange = (e) => {
    setSelectedPriority(e.target.value);
  };

  //   const controlProps = (item) => ({
  //     checked: selectedValue === item,
  //     onChange: handleChange,
  //     value: item,
  //     name: "color-radio-button-demo",
  //     inputProps: { "aria-label": item },
  //   });

  return (
    <div>
      <Radio
        label="Low"
        checked={selectedPriority === "Low" ? true : false}
        value="Low"
        onChange={handleChange}
        color="lowPriority"
      />
      <Radio
        label="Medium"
        checked={selectedPriority === "Medium" ? true : false}
        value="Medium"
        onChange={handleChange}
        color="mediumPriority"
      />
      <Radio
        label="High"
        checked={selectedPriority === "High" ? true : false}
        value="High"
        onChange={handleChange}
        color="highPriority"
      />
    </div>
  );
};

export default PriorityRadioButtons;
