import { Checkbox, FormControlLabel, FormGroup, Slider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleFilter } from "../store/ProductSlice";
import StarRateIcon from "@mui/icons-material/StarRate";

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
  const ratings = [
    { value: 4, label: "4 & above" },
    { value: 3, label: "3 & above" },
  ];
  return (
    <div className="filter">
      <h3>Filters</h3>
      <h4>Price</h4>
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
          <FormGroup key={index} onChange={handleChange}>
            <FormControlLabel
              name="rate"
              value={item.value}
              control={<Checkbox />}
              label={item.label}
            />
          </FormGroup>
        ))}
      </div>
    </div>
  );
};

export default FilterComp;
