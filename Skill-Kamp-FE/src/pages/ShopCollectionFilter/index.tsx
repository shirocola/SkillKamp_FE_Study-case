import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, FormControl, InputLabel, Select } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(2),
    minWidth: '100%',
  },
}));

interface ShopCollectionFilterProps {
  onFilterChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

const ShopCollectionFilter = ({ onFilterChange }: ShopCollectionFilterProps) => {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Filter By
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="category">Category</InputLabel>
        <Select native onChange={onFilterChange} inputProps={{ id: 'category' }}>
          <option value=""></option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Accessories">Accessories</option>
          <option value="Shoes">Shoes</option>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ShopCollectionFilter;
