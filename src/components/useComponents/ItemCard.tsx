import React, { useState } from 'react';
import {
  Grid,
  Paper,
  makeStyles,
  Tabs,
  Typography,
  Button,
  Tab,
} from '@material-ui/core';
import StarRateIcon from '@material-ui/icons/StarRate';

const useStyles = makeStyles(() => ({
  tabSection: {
    // float: 'right',
  },
  cardRoot: {
    borderBottom: '1px solid rgba(0,0,0,.12)',
    marginTop: '1em',
    padding: '7px',
  },
  infoGrid: {
    height: 'min-content',
  },
  itemBtn: {
    padding: '5px',
    fontSize: '20px',
    textTransform: 'capitalize',
    background: 'transparent',
    '&:hover': {
      background: 'transparent',
    },
  },
  addBtnGrid: {
    position: 'relative',
    top: '-1.5em',
  },
  addBtn: {
    background: '',
  },
  rateBtn: {
    background: 'transparent',
    color: 'orange',
    fontWeight: 400,
    fontsize: '10px !important',
    textDecoration: 'capitalize',
    '&:hover': {
      background: 'transparent',
    },
  },
}));

function ItemCard() {
  const [value, setValue] = useState(0);
  const handleValueChange = (e: any, newValue: number) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return (
    <Grid container className={classes.cardRoot}>
      <Grid item xs={9} container className={classes.infoGrid}>
        <Grid item xs={12}>
          <Button
            disableRipple
            size="small"
            startIcon={<StarRateIcon />}
            className={classes.rateBtn}
          >
            Must try
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button disableRipple size="large" className={classes.itemBtn}>
            Chana Masala
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button disableRipple size="small">
            Rs. 500
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={3} container>
        <Grid item xs={12}>
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/nszdiddxplz2awump76c"
            width="100%"
            height="120"
          />
        </Grid>
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          className={classes.addBtnGrid}
        >
          <Button variant="contained" color="secondary">
            Add
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ItemCard;
