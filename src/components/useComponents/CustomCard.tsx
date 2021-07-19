import React from 'react';
import {
  Grid,
  Paper,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  CardActions,
  makeStyles,
  Typography,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import StarRateIcon from '@material-ui/icons/StarRate';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { Props } from '../../types.d';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
    padding: '.7em',
    border: 'none',
    '&:hover': {
      border: '1px solid rgba(0, 0, 0, 0.12)',
    },
  },
  btn: {
    padding: '1px',
    '&:hover': {
      background: 'transparent',
    },
  },
  restaTypo: {
    fontSize: '16px',
  },
  link: {
    textDecoration: 'none',
  },
}));

interface GetProps {
  data: Props;
}

const CustomCard: React.FC<GetProps> = (props) => {
  const { id, name, variety, image, ratings, timeReach } = props.data;
  const classes = useStyles();
  return (
    <Link to={`/restaurants/${id}`} className={classes.link}>
      <Card className={classes.root} variant="outlined">
        <CardMedia
          component="img"
          image={image}
          height="170"
          alt={name}
          title={name}
        />
        <CardContent>
          <Typography className={classes.restaTypo}>{name}</Typography>
          <Typography variant="body2" component="p" color="textSecondary">
            {variety.map((vr, index) => (
              <span key={index}>{vr} </span>
            ))}
          </Typography>
        </CardContent>
        <CardActions>
          <Grid container spacing={2}>
            <Grid item xs={3} container justifyContent="flex-start">
              <Button
                variant="contained"
                color="secondary"
                className={classes.btn}
                startIcon={<StarRateIcon />}
              >
                {ratings}
              </Button>
            </Grid>
            <Grid item xs={4} container justifyContent="center">
              <Button className={classes.btn} size="small">
                {timeReach}
              </Button>
            </Grid>
            <Grid item xs={5} container justifyContent="flex-end">
              <Button className={classes.btn} size="small">
                300 for two
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Link>
  );
};

export default CustomCard;
