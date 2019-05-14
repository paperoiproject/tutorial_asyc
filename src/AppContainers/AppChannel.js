import React, { Component } from 'react';

import Channel from '../ViewContainers/Channel.js';

class AppChannel extends Component {
  constructor(props) {
    super(props);
  }
  async testPost(work){
    try{
      let obj = {work: work}
      console.log(JSON.stringify(obj))
      let data = await fetch("http://127.0.0.1:5000/",{
        method: 'POST',
        mode: "cors",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(obj)
      }).then(response => response.json());
    }
    catch(e){
     console.log("dataエラー")
     console.log(e)
    }
  }
  render() {
    return (
      <div className="App">
        <Channel postWork={(work) => this.testPost(work)}/>
      </div>
    );
  }
}

export default AppChannel;
