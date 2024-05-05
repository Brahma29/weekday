import {
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
} from "@mui/material";
import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const MultiSelectInput = ({
  title,
  values,
  selectedValues,
  setSelectedValues,
}) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 200 }}>
      <InputLabel>{title}</InputLabel>
      <Select
        multiple
        IconComponent={KeyboardArrowDownIcon}
        value={selectedValues}
        onChange={(e) => setSelectedValues(e.target.value)}
        input={<OutlinedInput label={title} />}
        renderValue={(selected) => (
          <Stack gap={1} direction="row" flexWrap="wrap">
            {selectedValues.map((value) => (
              <Chip
                sx={{ fontSize: "0.75rem", height: 20 }}
                key={value}
                label={value}
                onDelete={() =>
                  setSelectedValues((prev) => prev.filter((v) => v !== value))
                }
                deleteIcon={
                  <CancelIcon
                    sx={{ width: 15 }}
                    onMouseDown={(e) => e.stopPropagation()}
                  />
                }
              />
            ))}
          </Stack>
        )}
      >
        {values.map((value) => (
          <MenuItem key={value} value={value.toLowerCase()}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultiSelectInput;
