import { Checkbox, FormControlLabel, FormGroup, Slider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";

const FilterComp = () => {
  const state = useSelector((state) => state.products);
  function valuetext(value) {
    return value;
  }

  const { categories, prices } = state;
  const ratings = ["4 & above", "3 & above"];
  return (
    <div className="filter">
      FilterComp
      <Box width={200}>
        <Slider
          aria-label="Price"
          defaultValue={prices[0]}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          min={prices[0]}
          max={prices[prices.length - 1]}
        />
      </Box>
      {/* <input type={"range"} min={prices[0]} max={prices[prices.length - 1]} /> */}
      <div>
        <label>Select Category</label>
        {categories?.map((item, index) => (
          <FormGroup key={index}>
            <FormControlLabel control={<Checkbox />} label={item} />
          </FormGroup>
        ))}
      </div>
      <div>
        <label>Select Ratings</label>
        {ratings.map((item, index) => (
          <FormGroup key={index}>
            <FormControlLabel control={<Checkbox />} label={item} />
          </FormGroup>
        ))}
      </div>
    </div>
  );
};

export default FilterComp;
