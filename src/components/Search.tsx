import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, IconButton, makeStyles, OutlinedInput } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';
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

const Search: React.FC<any> = (props) => {
  const { searchRes, searchItems } = props;
  const [value, setValue] = useState('');

  const handleInputChange = (e: any) => {
    setValue(e.target.value);
    searchItems(value);
  };

  console.log(searchRes);

  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <OutlinedInput
          value={value}
          onChange={handleInputChange}
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
};

const mapStateToProps = (state: any) => ({
  searchRes: state.data.search,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    searchItems: (item: string) => dispatch({ type: 'SEARCH', search: item }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
