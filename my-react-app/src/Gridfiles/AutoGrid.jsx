import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FirstGrid from './FirstGrid';
import SecondGrid from './SecondGrid';
import ThirdGrid from './ThirdGrid';

function AutoGrid() {
  return (
    <div className='gridContainer'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs>
            <FirstGrid />
          </Grid>
          <Grid item xs={6}>
            <SecondGrid />
          </Grid>
          <Grid item xs>
            <ThirdGrid />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default AutoGrid;
