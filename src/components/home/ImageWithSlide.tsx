import React from 'react';
import { Grid, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    background: '#282c3f',
    padding: '2em 0em 2em 2em',
  },
}));

interface ImageWithRoute {
  src: string;
  route: string;
}

const allImages: ImageWithRoute[] = [
  {
    src: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ztpd5q9awnmmnefczn5x',
    route: 'a',
  },
  {
    src: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/smpawuf5uiliyjxzeybh',
    route: 'b',
  },
  {
    src: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ilgfglhbtgofet1rgyck',
    route: 'c',
  },
  {
    src: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/cwbqaumccjyifi90c9e1',
    route: 'd',
  },
];

const ImageWithSlide: React.FC = () => {
  const classes = useStyles();
  return (
    <Paper square variant="outlined" className={classes.root}>
      <Grid container>
        {allImages.map((image, index) => (
          <Grid item xs={3} key={index}>
            <img src={image.src} width="250" height="250" />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default ImageWithSlide;
