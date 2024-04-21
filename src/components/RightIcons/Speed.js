import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Grid, Typography } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import { VolumeUp } from '@mui/icons-material';

const marks = [
  {
    value: 0,
    label: '0 X',
  },
  {
    value: 0.25,
    
  },
  {
    value: 0.50,
    label: '0.50X',
  },
  {
    value: 0.75,
   
  },
  {
    value: 1.0,
    label: '1X',
  },
  {
    value: 1.5,
    label: '1.5X',
  },
  {
    value: 1.75,
    
  },
  {
    value: 2.0,
    label: '2X',
  },
];

function valuetext(value) {
  return `${value}X`;
}

export default function Speed() {
  return (
    <Box sx={{ width: 250 }}>
      
      <Typography id="input-slider" gutterBottom>
       Speed
      </Typography>
       <Grid container spacing={2} alignItems="center">
      <Grid item>
          <SpeedIcon/>
        </Grid>
        <Grid item xs>
        <Slider
        aria-label="Custom marks"
        defaultValue={1}
        getAriaValueText={valuetext}
        step={0.25}
        valueLabelDisplay="auto"
        marks={marks}
        max={2}
      />
        </Grid>
        </Grid>
    </Box>
  );
}