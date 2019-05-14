import React from 'react';
import  OperateButton from '../components/OperateButton.js';
import  PaperOfButton from '../components/PaperOfButton.js';

const Channel = (props) => {
    return (
      <div className="Channel">
        <PaperOfButton postWork={(work) => {props.postWork(work)}}/>
      </div>
    );
}

export default Channel;
