import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import ItemCard from '../useComponents/ItemCard';

interface ItemProps {
  menu: string;
}

function ShowItems({ menu }: ItemProps) {
  return (
    <Grid item xs={8} container>
      <Grid item xs={12}>
        <Typography variant="h4" component="h4">
          {menu}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          17 items
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <ItemCard key={index} />
        ))}
      </Grid>
    </Grid>
  );
}

export default ShowItems;
