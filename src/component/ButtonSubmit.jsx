import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  "button": {
    width: 80,
    fontWeight: 700
  }
}));

const ButtonSubmit = (props) => {

  const classes = useStyles();

  return (
    <div className="button-wrapper">
      <Button className={classes.button} color="primary" variant="contained" onClick={props.selectDinner}>{props.buttonName}</Button>
    </div>
  );
}

export default ButtonSubmit