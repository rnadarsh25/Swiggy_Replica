import React, { useState, useEffect } from 'react';
import {
  Grid,
  Paper,
  makeStyles,
  Typography,
  IconButton,
  OutlinedInput,
  Button,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchMenuWithID } from '../../redux/actions/actionCreator';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(() => ({
  root: {
    background: '#282c3f',
    padding: '2em 0em 2em 2em',
    color: '#fff',
  },
  btnSpan: {
    borderRight: '1px groove #fff',
    marginRight: '1em',
    color: '#fff',
  },
  offerBtn: {
    color: 'white',
    border: '1px groove #fff',
    padding: '1em',
  },
  offerIcon: {
    color: '#fff',
  },
  tagBtn: {
    padding: '5px',
    marginRight: '1em',
    background: '#fff',
    color: '#000',
  },
  searchInput: {
    height: '40px',
    background: '#fff',
    color: '#000',
    width: '230px',
  },
  searchTag: {
    position: 'relative',
    top: '3em',
  },
}));

const MainInfo: React.FC<any> = (props) => {
  const { theRestaurant } = props;
  // useEffect(() => {
  //   props.getRestaurantWithId(props.id);
  // }, [props.id]);

  // const { theRestaurant } = props;

  // const [resta, setResta] = useState();

  // useEffect(() => {
  //   // let id = setInterval(() => {
  //   //   props.getRestaurantWithId(props.id);
  //   //   setResta(props.theRestaurant);
  //   // }, 1000);
  //   // return () => clearInterval(id);
  //   props.getRestaurantWithId(props.id);
  //   setResta(props.theRestaurant);
  // }, []);

  // console.log(resta);

  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={3}>
        <img
          src={theRestaurant ? theRestaurant.image : null}
          width="80%"
          height="150"
        />
      </Grid>
      <Grid item xs={5} container justifyContent="flex-start" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h2">
            {theRestaurant ? theRestaurant.name : null}
          </Typography>
          <Typography variant="body2" component="p">
            {theRestaurant ? theRestaurant.variety : null}
          </Typography>
        </Grid>
        <Grid item xs={12} container>
          <Grid item xs={4}>
            <div className={classes.btnSpan}>
              <Typography variant="h6" component="h2">
                * {theRestaurant ? theRestaurant.ratings : null}
              </Typography>
              <Typography variant="body2" component="p">
                100+ ratings
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.btnSpan}>
              <Typography variant="h6" component="h2">
                {theRestaurant ? theRestaurant.timeReach : null}
              </Typography>
              <Typography variant="body2" component="p">
                Delivery time
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <Typography variant="h6" component="h2">
                Rs.500
              </Typography>
              <Typography variant="body2" component="p">
                cost for Two
              </Typography>
            </div>
          </Grid>
        </Grid>

        <Grid item xs={12} container className={classes.searchTag}>
          <Grid item xs={6} container justifyContent="flex-start">
            <OutlinedInput
              fullWidth
              startAdornment={<SearchIcon />}
              className={classes.searchInput}
            />
          </Grid>
          <Grid item xs={6} container justifyContent="center">
            <Button variant="contained" size="small" className={classes.tagBtn}>
              {' '}
              pure veg
            </Button>
            <Button variant="contained" className={classes.tagBtn}>
              {' '}
              favourite
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} container alignItems="center">
        <div className={classes.offerBtn}>
          <Typography>
            <IconButton className={classes.offerIcon}>
              <LocalOfferIcon />
            </IconButton>
            15% off | Use code UNLIMITED
          </Typography>
          <Typography>
            <IconButton className={classes.offerIcon}>
              <LocalOfferIcon />
            </IconButton>
            30% off up to ???75 | Use code TRYNEW
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

// const mapStateToProps = (state: any) => ({
//   theRestaurant: state.data.theRestaurant,
// });

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     getRestaurantWithId: (id: number) =>
//       dispatch({ type: 'GET_RESTAURANT', theID: id }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(MainInfo);

export default MainInfo;
