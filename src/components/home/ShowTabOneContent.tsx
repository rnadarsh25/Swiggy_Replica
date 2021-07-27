import React, { useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import CustomCard from '../useComponents/CustomCard';
import { connect } from 'react-redux';
// import { getData, fetchDataSaga } from '../../redux/actions/actionCreator';
import { Props } from '../../types.d';
import { useState } from 'react';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '1em',
  },
}));

interface GetProps {
  restaurantDetails: any;
  getData: any;
}

const ShowTabOneContent: React.FC<any> = (props) => {
  const { restaurantDetails } = props;
  const classes = useStyles();
  // const [showData, setShowData] = useState([]);

  // useEffect(() => {
  //   let id = setInterval(() => {
  //     props.getData();
  //     setShowData(restaurantDetails);
  //   }, 1000);
  //   return () => clearInterval(id);
  //   // props.getData();
  //   // setShowData(restaurantDetails);
  // });

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

// const mapStateToProps = (state: any) => ({
//   restaurantDetails: state.data.allData,
// });

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     // dispatching plain actions
//     getData: () => dispatch({ type: 'GET_DATA' }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ShowTabOneContent);

export default ShowTabOneContent;
