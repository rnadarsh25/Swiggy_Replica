import React, { useState } from 'react';
import {
  Grid,
  Paper,
  makeStyles,
  Typography,
  Tabs,
  Tab,
} from '@material-ui/core';
import ShowTabOneContent from './ShowTabOneContent';
import ShowTabTwoContent from './ShowTabTwoContent';

const useStyles = makeStyles(() => ({
  root: {
    height: '500px',
    margin: '2em 0em 0em 0em',
  },
  headingTypo: {
    fontsize: '20px',
  },
  contentGrid: {
    borderTop: '1px solid rgba(0, 0, 0, 0.12)',
  },
}));

const Content: React.FC = () => {
  const [value, setValue] = useState(0);
  const handleTabChange = (event: any, newValue: number) => {
    setValue(newValue);
    console.log(value);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={4}>
          <Typography variant="h4" className={classes.headingTypo}>
            411 restaurants{' '}
          </Typography>
        </Grid>
        <Grid item xs={8} container justifyContent="flex-end">
          <Tabs value={value} onChange={handleTabChange}>
            <Tab label="Relevance" />
            <Tab label="Cost For Two" />
            <Tab label="Delivery Time" />
            <Tab label="Rating" />
          </Tabs>
        </Grid>
        <Grid item xs={12} className={classes.contentGrid}>
          {value === 0 ? (
            <ShowTabOneContent />
          ) : value === 1 ? (
            <ShowTabTwoContent />
          ) : value === 2 ? (
            'three'
          ) : (
            'four'
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Content;
