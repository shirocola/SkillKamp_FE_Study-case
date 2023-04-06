import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

type FilterProps = {
  onFilterChange: (filters: Filters) => void;
};

type Filters = {
  price: number;
  color: string;
  size: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    button: {
      margin: theme.spacing(1),
    },
  })
);

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const classes = useStyles();
  const [filters, setFilters] = useState<Filters>({
    price: 0,
    color: '',
    size: '',
  });

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const price = parseFloat(event.target.value);
    setFilters({
      ...filters,
      price: isNaN(price) ? 0 : price,
    });
  };

  const handleColorChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFilters({
      ...filters,
      color: event.target.value as string,
    });
  };

  const handleSizeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFilters({
      ...filters,
      size: event.target.value as string,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onFilterChange(filters);
  };

  return (
    <form className="filter-form" onSubmit={handleSubmit}>
      <TextField
        className="filter-input"
        label="Price"
        type="number"
        value={filters.price}
        onChange={handlePriceChange}
        InputProps={{
          inputProps: { min: 0 },
        }}
        variant="outlined"
      />
      <FormControl variant="outlined" className="filter-input">
        <InputLabel id="color-label">Color</InputLabel>
        <Select
          labelId="color-label"
          id="color-select"
          value={filters.color}
          onChange={handleColorChange}
          label="Color"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="red">Red</MenuItem>
          <MenuItem value="green">Green</MenuItem>
          <MenuItem value="blue">Blue</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className="filter-input">
        <InputLabel id="size-label">Size</InputLabel>
        <Select
          labelId="size-label"
          id="size-select"
          value={filters.size}
          onChange={handleSizeChange}
          label="Size"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="small">Small</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="large">Large</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary" className="filter-button">
        Apply Filters
      </Button>
    </form>
  );
};

export default Filter;
