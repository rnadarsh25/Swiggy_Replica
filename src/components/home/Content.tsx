import React, { useState } from 'react';
import { connect } from 'react-redux';
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
import { useEffect } from 'react';

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

const Content: React.FC<any> = (props) => {
  const { restaurantDetails, getData } = props;

  useEffect(() => {
    getData();
  }, []);

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
            {restaurantDetails.length} restaurants{' '}
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
            <ShowTabOneContent restaurantDetails={restaurantDetails} />
          ) : value === 1 ? (
            <ShowTabOneContent restaurantDetails={restaurantDetails} />
          ) : value === 2 ? (
            <ShowTabOneContent restaurantDetails={restaurantDetails} />
          ) : (
            <ShowTabOneContent restaurantDetails={restaurantDetails} />
          )}
        </Grid>
      </Grid>
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  restaurantDetails: state.data.allData,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    getData: () => dispatch({ type: 'GET_DATA' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
