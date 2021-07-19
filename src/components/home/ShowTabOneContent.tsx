import React, { useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import CustomCard from '../useComponents/CustomCard';
import { connect } from 'react-redux';
import { getData } from '../../redux/actions/actionCreator';
import { Props } from '../../types.d';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '1em',
  },
}));

interface GetProps {
  restaurantDetails: any;
  getData: any;
}

const ShowTabOneContent: React.FC<GetProps> = (props) => {
  const { restaurantDetails, getData } = props;
  const classes = useStyles();

  useEffect(() => {
    getData();
  }, []);

  return (
    <Grid container spacing={1} className={classes.root}>
      {restaurantDetails.map((detail: Props, index: number) => (
        <Grid item xs={3} key={index}>
          <CustomCard data={detail} />
        </Grid>
      ))}
    </Grid>
  );
};

const mapStateToProps = (state: any) => ({
  restaurantDetails: state.data.allData,
});

export default connect(mapStateToProps, { getData })(ShowTabOneContent);
