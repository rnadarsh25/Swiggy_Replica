import React from 'react';
import Header from './Header';
import Content from './Content';
import ImageWithSlide from './ImageWithSlide';
import { Grid, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    background: 'transparent',
    width: '70%',
    position: 'absolute',
    left: '17em',
  },
}));

function Main() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <ImageWithSlide />
      </Grid>
      <Grid item xs={12}>
        <Content />
      </Grid>
    </Grid>
  );
}
export default Main;
