import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";

const FilterComp = () => {
  const filters = ["men's clothing", "jewelery", "electronics"];
  return (
    <div className="filter">
      FilterComp
      <input type={"range"} />
      <div>
        <label>Select Category</label>
        {filters.map((item, index) => (
          <FormGroup key={index}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={item}
            />
          </FormGroup>
        ))}
      </div>
    </div>
  );
};

export default FilterComp;
