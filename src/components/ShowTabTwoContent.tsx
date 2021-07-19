import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import CustomCard from './CustomCard';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '1em',
  },
}));

const ShowTabTwoContent: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={1} className={classes.root}>
      {[1, 2].map((m, i) => (
        <Grid item xs={3} key={i}>
          hello
        </Grid>
      ))}
    </Grid>
  );
};

export default ShowTabTwoContent;
