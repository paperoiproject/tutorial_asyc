import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
  },
});

const OperateButton = (props) => {
  const { classes } = props;
  return(
    <Button variant="outlined" color="primary" className={classes.button} onClick = {e => props.postWork()}>
      {props.Buttontext}
    </Button>
  )
}

export default withStyles(styles)(OperateButton);

