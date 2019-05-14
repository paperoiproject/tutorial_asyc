import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

import OperateButton from './OperateButton.js';

const styles = theme => ({
  root: {
    width: "50vw",
    height: "10vh",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
});

const PaperOfButton = (props) => {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <OperateButton Buttontext = "こんにちは" postWork = {() => {props.postWork("hello")}}/>
        <OperateButton Buttontext = "ありがとう" postWork = {() => {props.postWork("thank")}}/>
        <OperateButton Buttontext = "ごめんね" postWork = {() => {props.postWork("sorry")}}/>
        <OperateButton Buttontext = "さよなら" postWork = {() => {props.postWork("bye")}}/>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(PaperOfButton);
