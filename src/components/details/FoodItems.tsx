import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ShowFoodItemsWithTab from './ShowFoodItemsWithTab';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '3em',
  },
}));

function FoodItems() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={9}>
        <ShowFoodItemsWithTab />
      </Grid>
      <Grid item xs={3}>
        cart
      </Grid>
    </Grid>
  );
}

export default FoodItems;
