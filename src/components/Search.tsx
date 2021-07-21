import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, IconButton, makeStyles, OutlinedInput } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
const useStyles = makeStyles(() => ({
  root: {
    height: '400px',
    background: '#e9ecee',
    padding: '2em 3em 2em 3em',
    textAlign: 'center',
  },
  input: {
    width: '80%',
    padding: '.5em 1em .5em 1em',
    fontSize: '18px',
  },
  link: {
    textDecoration: 'none',
  },
}));

function Search() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <OutlinedInput
          className={classes.input}
          fullWidth
          startAdornment={
            <IconButton>
              <SearchIcon />
            </IconButton>
          }
          endAdornment={
            <Link to="/">
              <IconButton>
                <CloseIcon />
              </IconButton>
            </Link>
          }
          placeholder="Search for Restaurants or Dishes..."
        />
      </Grid>
    </Grid>
  );
}

export default Search;
