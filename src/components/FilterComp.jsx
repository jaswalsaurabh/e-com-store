import { Checkbox, FormControlLabel, FormGroup, Slider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleFilter } from "../store/ProductSlice";

const FilterComp = () => {
  const state = useSelector((state) => state.products);

  const dispatch = useDispatch();

  function valuetext(value) {
    return value;
  }

  function handleChange(e) {
    const { value, name, checked } = e.target;
    let obj = { kind: "", item: "" };
    if (checked) {
      obj = { kind: name, item: value };
    }
    dispatch(handleFilter(obj));
  }

  const { categories, prices } = state;
  const ratings = ["4 & above", "3 & above"];
  return (
    <div className="filter">
      <h3>Filters</h3>
      <Box width={200}>
        <Slider
          name="price"
          aria-label="Price"
          defaultValue={prices[0]}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          min={prices[0]}
          max={prices[prices.length - 1]}
        />
      </Box>
      <div>
        <h4>Select Category</h4>
        {categories?.map((item, index) => (
          <FormGroup key={index} onChange={handleChange}>
            <FormControlLabel
              name="category"
              value={item}
              control={<Checkbox />}
              label={item}
            />
          </FormGroup>
        ))}
      </div>
      <div>
        <h4>Select Ratings</h4>
        {ratings.map((item, index) => (
          <FormGroup key={index}>
            <FormControlLabel name="rate" control={<Checkbox />} label={item} />
          </FormGroup>
        ))}
      </div>
    </div>
  );
};

export default FilterComp;
