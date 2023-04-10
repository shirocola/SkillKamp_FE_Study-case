import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material';
import { blue, cream, green, pink, peach, terracotta, white } from './colors'; // import the color options

interface ColorFilterProps {
  selectedColors: string[];
  onSelectedColorsChange: (selectedColors: string[]) => void;
}

const ColorFilter = (props: ColorFilterProps) => {
  const { selectedColors, onSelectedColorsChange } = props;

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const color = event.target.name;
    const newSelectedColors = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color];
    onSelectedColorsChange(newSelectedColors);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Color</FormLabel>
      <FormGroup>
        {[
          { name: 'blue', color: blue },
          { name: 'cream', color: cream },
          { name: 'green', color: green },
          { name: 'pink', color: pink },
          { name: 'peach', color: peach },
          { name: 'terracotta', color: terracotta },
          { name: 'white', color: white },
        ].map((option) => (
          <FormControlLabel
            key={option.name}
            control={<Checkbox checked={selectedColors.includes(option.name)} onChange={handleColorChange} name={option.name} />}
            label={<span style={{ color: option.color }}>{option.name}</span>}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default ColorFilter;
