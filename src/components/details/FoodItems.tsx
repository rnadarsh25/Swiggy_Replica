import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import ShowFoodItemsWithTab from './ShowFoodItemsWithTab';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '3em',
  },
  cartGrid: {
    height: 'min-content',
    paddingLeft: '1em',
    // border: '1px solid rgba(0,0,0,.12)',
  },
  cartTextBtn: {
    textTransform: 'capitalize',
    marginRight: '1em',
    paddingLeft: '0px',
    '&:hover': {
      background: 'transparent',
    },
  },

  cartBtn: {
    textTransform: 'capitalize',
    marginRight: '1em',
  },
  checkoutBtn: {
    marginTop: '1em',
    width: '100%',
    background: 'green',
  },
}));

const FoodItems: React.FC<any> = (props) => {
  const { id } = props;
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={9}>
        <ShowFoodItemsWithTab />
      </Grid>
      <Grid item xs={3} container className={classes.cartGrid} spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h2">
            Cart
          </Typography>
          <Typography variant="body2" component="p" color="textSecondary">
            1 item
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button disableRipple className={classes.cartTextBtn}>
            Chana Masala
          </Button>
          <Button
            className={classes.cartBtn}
            variant="outlined"
            color="secondary"
            startIcon={'-'}
            endIcon={'+'}
          >
            1
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Link to="/checkout">
            <Button
              variant="contained"
              color="secondary"
              className={classes.checkoutBtn}
            >
              Checkout
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FoodItems;
